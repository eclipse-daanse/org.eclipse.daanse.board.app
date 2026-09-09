(function(){var i="ui.vue.widget.map",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.pin{&[data-v-dc572ab0]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-dc572ab0]{border-radius:50%}&.solid{.inner[data-v-dc572ab0]{background:transparent}}&.contain{&[data-v-dc572ab0]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-dc572ab0]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.observation-slot[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:0;left:0}&.marker{&[data-v-dc572ab0]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-dc572ab0]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.image-marker[data-v-dc572ab0]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.text-container[data-v-0a207de4]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.pin{&[data-v-0a207de4]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}&.round[data-v-0a207de4]{border-radius:50%}&.contain{&[data-v-0a207de4]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-0a207de4]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-0a207de4]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}&.marker{&[data-v-0a207de4]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-0a207de4]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.component[data-v-0a207de4]{overflow:hidden}.cmap_container[data-v-0a207de4]{width:100%;height:100%;position:relative}.image-marker[data-v-0a207de4]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.conditions[data-v-79b9b15a]{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.conditions td[data-v-79b9b15a],.conditions th[data-v-79b9b15a]{padding:3px 6px;text-align:left;vertical-align:middle}.conditions__head[data-v-79b9b15a]{font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.conditions__head--end[data-v-79b9b15a],.conditions__end[data-v-79b9b15a]{width:1%;text-align:right;white-space:nowrap}.conditions__new td[data-v-79b9b15a]{border-bottom:1px solid var(--color-divider);padding-bottom:7px}.conditions tbody tr[data-v-79b9b15a]:hover{background:var(--color-raised)}.conditions__empty[data-v-79b9b15a]{padding:10px 6px;color:var(--color-dim)}.cell__text[data-v-79b9b15a]{display:inline-block;min-width:40px;padding:2px 4px;border:1px solid transparent;border-radius:var(--radius-sm, 3px);cursor:text}.cell__text[data-v-79b9b15a]:hover{border-color:var(--color-divider)}.cell__input[data-v-79b9b15a]{width:100%;padding:2px 4px;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 3px);background:var(--color-pane);color:var(--color-fg);font:inherit}.cell__input[data-v-79b9b15a]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.pmap_container[data-v-c72cb17a]{width:100%;min-height:250px}.pin{&[data-v-e554de3e]{width:45px;height:45px;border-radius:50% 50% 50% 0;background:var(--v4eedf852);transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-e554de3e]{border-radius:50%}&.solid{.inner[data-v-e554de3e]{background:transparent}}&.contain{&[data-v-e554de3e]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-e554de3e]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}&.marker{&[data-v-e554de3e]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;background:var(--v4eedf852);transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-e554de3e]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.flex[data-v-e554de3e]{display:flex}.image-marker[data-v-e554de3e]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.placeholder[data-v-e554de3e]{background:#ccc;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1px dashed #999}.pmap_container[data-v-77cbf15c]{width:100%;height:250px}.settings-container[data-v-b31840f8]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-b31840f8]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-b31840f8]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-b31840f8]:hover{transform:scale(1.1)}.active-icon[data-v-b31840f8]{border:2px solid rgb(0,121,0)}.slider[data-v-b31840f8]{padding:0 10px}.auto-update-settings[data-v-c7aa1779]{padding:1rem;display:flex;flex-direction:column;gap:1.5rem}.auto-update-settings h3[data-v-c7aa1779]{margin:0;color:var(--color-fg);font-size:1.1rem;font-weight:600}.refresh-setting[data-v-c7aa1779]{display:flex;flex-direction:column;gap:1rem}.refresh-setting label[data-v-c7aa1779]{font-weight:500;color:var(--color-fg);font-size:.9rem}.refresh-slider[data-v-c7aa1779]{margin:.5rem 0}.slider-labels[data-v-c7aa1779]{display:flex;justify-content:space-between;font-size:.8rem;color:var(--color-dim);margin-top:.5rem}.refresh-info[data-v-c7aa1779]{background:var(--color-raised);border:1px solid var(--color-divider);border-radius:6px;padding:1rem;display:flex;flex-direction:column;gap:.5rem}.info-item[data-v-c7aa1779]{display:flex;justify-content:space-between;align-items:center}.info-item .label[data-v-c7aa1779]{font-weight:500;color:var(--color-dim);font-size:.9rem}.info-item .value[data-v-c7aa1779]{font-weight:600;color:var(--color-fg);font-size:.9rem}.full[data-v-ec924328]{position:relative}.tree_detail[data-v-ec924328]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;gap:5px}.tree[data-v-ec924328]{width:300px;max-height:500px;overflow-y:auto}.detail[data-v-ec924328]{border-left:1px solid var(--color-divider)}.marked[data-v-ec924328]{position:relative;display:inline-flex}.marked__tag[data-v-ec924328]{position:absolute;top:-6px;right:-10px;padding:0 3px;border-radius:7px;background:var(--color-raised);color:var(--color-dim);font-family:var(--font-sans);font-size:9px;line-height:14px}.item__input[data-v-ec924328]{width:100%;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 3px);background:var(--color-pane);color:var(--color-fg);font:inherit;padding:1px 4px}.prose[data-v-ec924328]{padding:4px 2px;color:var(--color-fg);line-height:1.5}.choices[data-v-ec924328]{display:flex;flex-direction:column;gap:8px;margin-top:12px}.choice[data-v-ec924328]{justify-content:flex-start;height:auto;padding:8px 10px}.choice__text[data-v-ec924328]{display:flex;flex-direction:column;gap:2px;text-align:left}.choice__name[data-v-ec924328]{font-weight:600}.choice__what[data-v-ec924328]{font-size:var(--text-xs);opacity:.75}.empty__icon[data-v-ec924328]{font-size:74px}.menuitem{&[data-v-ec924328]{display:grid;grid-template-columns:25px 35px 1fr min-content;align-items:center;padding-top:2px;padding-bottom:2px;padding-left:5px;cursor:pointer}.checked[data-v-ec924328]{margin-top:-5px}&.active[data-v-ec924328]{background-color:var(--color-raised)}.options[data-v-ec924328]{display:flex;flex-direction:row}}.childs[data-v-ec924328]{grid-column:span 4;padding-left:15px}.content{&[data-v-ec924328]{width:846px;height:500px;padding:0 0 0 15px}.scroller[data-v-ec924328]{min-height:100%;max-height:100%;overflow-y:auto}&.center[data-v-ec924328]{display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center;color:var(--color-dim)}}.underline[data-v-ec924328]{cursor:pointer}.blue[data-v-ec924328]{color:var(--color-accent)}.rowlayout[data-v-ec924328]{display:grid;flex-direction:row;flex-wrap:nowrap;width:100%;grid-template-columns:66% 1fr;gap:15px}.settings-container[data-v-ef38e5fc]{display:flex;flex-direction:column;gap:1rem;padding:15px}.hint-text[data-v-ef38e5fc]{font-size:12px;color:var(--va-text-secondary);margin:-8px 0 0;padding-left:4px}.section__head[data-v-ef38e5fc]{display:flex;align-items:center;gap:7px;margin-bottom:8px;color:var(--color-fg)}.section__title[data-v-ef38e5fc]{flex:1 1 auto;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600}.note[data-v-ef38e5fc]{margin:8px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.note--body[data-v-ef38e5fc]{font-size:var(--text-sm);color:var(--color-fg)}.dialog__title[data-v-ef38e5fc]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.failed[data-v-ef38e5fc]{margin-left:8px;font-size:.85em;color:var(--color-err)}.slider__track[data-v-ef38e5fc]{min-width:150px}.tree[data-v-ef38e5fc]{margin:0;padding:0;list-style:none}.tree__row[data-v-ef38e5fc]{display:flex;align-items:center;gap:6px}.tree__layers[data-v-ef38e5fc]{margin:0;padding-left:18px;list-style:none}.tree__add[data-v-ef38e5fc]{display:flex;align-items:center;gap:6px;cursor:pointer}.list-group-item{&[data-v-ef38e5fc]{display:flex;flex-direction:column;align-items:flex-start;cursor:move;padding:var(--va-tree-node-padding);list-style:none}.row[data-v-ef38e5fc]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:6px;align-items:center}&[data-v-ef38e5fc]:hover{background-color:#d6dde3;border-radius:var(--va-tree-node-border-radius)}}.empty[data-v-ef38e5fc]{display:block;width:100%;vertical-align:middle;text-align:center;font-variant:small-caps;font-style:italic;color:#5d5d5d}.bottomframe[data-v-ef38e5fc]{border-bottom:1px solid var(--va-background-border)}#header-va-4[data-v-ef38e5fc]{padding:6px 12px}.options[data-v-ef38e5fc]{padding-top:6px;padding-left:12px;border-top:1px dotted #00000047}.row.nhidden[data-v-ef38e5fc]{display:none}.dragIcon[data-v-ef38e5fc]{cursor:n-resize}.button{margin-top:35px}.flip-list-move{transition:transform .5s}.no-move{transition:transform 0s}.ghost{opacity:.5;background:#c8ebfb}.list-group{min-height:20px}.list-group-item{cursor:move}.list-group-item i{cursor:pointer}.nhidden,.row.nhidden{display:none}.va-tree-node-root{&:hover{cursor:pointer;.nhidden{display:inline}.nsee{display:none}}}.list-group-item{&:hover{cursor:pointer;.nhidden{display:flex}}}.sliderPopOver{padding:2px 7px;.va-slider__handler{left:51%;background-color:#fff!important;border-color:#99a9c8!important;border-radius:6px!important;border-width:1px!important;width:11px;height:20px;.va-slider__handler__dot--focus{margin-top:4px}}}.mt4{margin-top:4px}.datapoint-wrapper[data-v-2eb55b7f]{position:relative;display:inline-block}.tlc[data-v-2eb55b7f]{position:absolute;border:4px solid #f8f6f6;background:#6a6a6a;padding:3px;border-radius:12px;text-wrap:nowrap;top:100%;left:50%;transform:translate(-50%) rotate(-90deg);margin-top:5px;box-shadow:-3px 5px 6px #1919192b;font-size:12px;white-space:nowrap}.settings-container[data-v-ca2b9f21]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-ca2b9f21]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-ca2b9f21]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-ca2b9f21]:hover{transform:scale(1.1)}.active-icon[data-v-ca2b9f21]{border:2px solid rgb(0,121,0)}.slider[data-v-ca2b9f21]{padding:0 10px}.datapoint-wrapper[data-v-a78b518d]{position:relative;display:inline-block}.datapoint[data-v-a78b518d]{display:inline-block;text-wrap:nowrap;position:absolute;border:1px solid #ccc;background:#fff;padding:4px;top:100%;left:50%;transform:translate(-50%);margin-top:5px;border-radius:21px;white-space:nowrap}.settings-container[data-v-98e6b38b]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-98e6b38b]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-98e6b38b]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-98e6b38b]:hover{transform:scale(1.1)}.active-icon[data-v-98e6b38b]{border:2px solid rgb(0,121,0)}.slider[data-v-98e6b38b]{padding:0 10px}\n";})();
import { PayloadImpl as Sl, WidgetActionInterfaceImpl as PE, EVENT_ACTIONS_REGISTRY as xE, EVENT_REGISTRY_ID as FE, EVENT_ACTIONS_REGISTRY_ID as ME } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as BE, deactivate as GE, component as kE, inject as zf, initTsmRuntime as UE } from "@eclipse-daanse/tsm";
import { defineComponent as nt, h as Ds, ref as ge, reactive as Mo, provide as qr, computed as dn, onMounted as Ht, markRaw as Rn, nextTick as Jt, onBeforeUnmount as Al, inject as Tt, watch as ki, onUnmounted as Cl, render as zE, createElementBlock as X, openBlock as V, Fragment as De, renderList as Gt, createBlock as ht, createCommentVNode as Fe, unref as z, renderSlot as nl, normalizeClass as xo, normalizeStyle as ga, createElementVNode as ne, toDisplayString as wt, withCtx as Ye, createVNode as he, createTextVNode as er, resolveDynamicComponent as Rh, mergeModels as zh, toRefs as Ol, useModel as mr, toRaw as tl, resolveComponent as VE, TransitionGroup as WE, useId as Vf, withDirectives as Wu, vModelText as Zu, withKeys as Hu, useCssVars as ZE, mergeProps as Np, isRef as Dp, shallowRef as Wf, watchEffect as HE, getCurrentInstance as YE, withModifiers as Zf } from "vue";
import { FILTER as la, UPDATE_MQTT_SUBSCRIPTIONS as Hf, MQTT_UNSUBSCRIBE_ALL as Yf } from "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
import { VariableWrapper as gh, useDatasourceRepository as qE, plainSettings as qf } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Ls } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { IconWidget as Pp, IconWidgetSettings as KE } from "org.eclipse.daanse.board.app.ui.vue.widget.icon";
import { BasicEObject as vr, createBasicEList as Yu, createContainmentEList as as, BasicEFactory as $E, BasicEPackage as JE, EPackageRegistry as xp, BasicEClass as Zn, BasicEAttribute as fe, BasicEReference as Xn, getEcorePackage as pe } from "@emfts/core";
import { loggerFactory as jE } from "org.eclipse.daanse.board.app.lib.logger";
import { useRoute as XE } from "vue-router";
import { DSelect as qu, DButton as Hn, DIcon as Zt, DRadioGroup as Vh, DInput as ls, DDivider as Fp, DColorInput as Ku, DCheckbox as $u, DSlider as Ju, DModal as ul, DTabs as QE } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as e1 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Rp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function t1(o, i) {
  for (var n = 0; n < i.length; n++) {
    const u = i[n];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const d in u)
        if (d !== "default" && !(d in o)) {
          const p = Object.getOwnPropertyDescriptor(u, d);
          p && Object.defineProperty(o, d, p.get ? p : {
            enumerable: !0,
            get: () => u[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
const n1 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M60%2020C45.088%2020%2033%2031.588%2033%2045.88C33%2065.16%2060%20100%2060%20100C60%20100%2087%2065.16%2087%2045.88C87%2031.588%2074.912%2020%2060%2020ZM60%2056.2C54.036%2056.2%2049.2%2051.484%2049.2%2045.68C49.2%2039.876%2054.036%2035.16%2060%2035.16C65.964%2035.16%2070.8%2039.876%2070.8%2045.68C70.8%2051.484%2065.964%2056.2%2060%2056.2Z'%20fill='%23606060'/%3e%3c/svg%3e", Kf = (o, i) => {
  for (const n of Object.keys(i))
    o.on(n, i[n]);
}, Mp = (o) => {
  for (const i of Object.keys(o)) {
    const n = o[i];
    n && js(n.cancel) && n.cancel();
  }
}, i1 = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), js = (o) => typeof o == "function", wn = (o, i, n) => {
  for (const u in n) {
    const d = "set" + i1(u);
    o[d] ? ki(
      () => n[u],
      (p, g) => {
        o[d](p, g);
      }
    ) : i[d] && ki(
      () => n[u],
      (p) => {
        i[d](p);
      }
    );
  }
}, fn = (o, i, n = {}) => {
  const u = { ...n };
  for (const d in o) {
    const p = i[d], g = o[d];
    p && (p && p.custom === !0 || g !== void 0 && (u[d] = g));
  }
  return u;
}, hi = (o) => {
  const i = {}, n = {};
  for (const u in o)
    if (u.startsWith("on") && !u.startsWith("onUpdate") && u !== "onReady") {
      const d = u.slice(2).toLocaleLowerCase();
      i[d] = o[u];
    } else
      n[u] = o[u];
  return { listeners: i, attrs: n };
}, r1 = async (o) => {
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
}, bu = (o) => {
  const i = ge(
    (...u) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), n = (...u) => i.value(...u);
  return n.wrapped = i, qr(o, n), n;
}, Lu = (o, i) => o.wrapped.value = i, rn = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, Ft = (o) => {
  const i = Tt(o);
  if (i === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return i;
}, Sn = Symbol(
  "useGlobalLeaflet"
), Ci = Symbol("addLayer"), oc = Symbol("removeLayer"), bl = Symbol(
  "registerControl"
), Bp = Symbol(
  "registerLayerControl"
), Gp = Symbol(
  "canSetParentHtml"
), kp = Symbol("setParentHtml"), Up = Symbol("setIcon"), zp = Symbol("bindPopup"), Vp = Symbol("bindTooltip"), Wp = Symbol("unbindPopup"), Zp = Symbol("unbindTooltip"), Ll = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, Il = (o) => ({ options: o.options, methods: {} }), ya = {
  ...Ll,
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
}, Nl = (o, i, n) => {
  const u = Ft(Ci), d = Ft(oc), { options: p, methods: g } = Il(o), v = fn(
    o,
    ya,
    p
  ), m = () => u({ leafletObject: i.value }), E = () => d({ leafletObject: i.value }), A = {
    ...g,
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
      if (!i.value || !js(i.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      i.value.bindPopup(w);
    },
    bindTooltip(w) {
      if (!i.value || !js(i.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      i.value.bindTooltip(w);
    },
    unbindTooltip() {
      i.value && (js(i.value.closeTooltip) && i.value.closeTooltip(), js(i.value.unbindTooltip) && i.value.unbindTooltip());
    },
    unbindPopup() {
      i.value && (js(i.value.closePopup) && i.value.closePopup(), js(i.value.unbindPopup) && i.value.unbindPopup());
    },
    updateVisibleProp(w) {
      n.emit("update:visible", w);
    }
  };
  return qr(zp, A.bindPopup), qr(Vp, A.bindTooltip), qr(Wp, A.unbindPopup), qr(Zp, A.unbindTooltip), Cl(() => {
    A.unbindPopup(), A.unbindTooltip(), E();
  }), { options: v, methods: A };
}, hs = (o, i) => {
  if (o && i.default)
    return Ds("div", { style: { display: "none" } }, i.default());
}, Hp = {
  ...ya,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, s1 = (o, i, n) => {
  const { options: u, methods: d } = Nl(
    o,
    i,
    n
  );
  return { options: fn(
    o,
    Hp,
    u
  ), methods: d };
}, Wh = {
  ...Hp,
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
}, Yp = (o, i, n) => {
  const { options: u, methods: d } = s1(o, i, n), p = fn(
    o,
    Wh,
    u
  ), g = Ft(oc), v = {
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
  return Al(() => {
    g({ leafletObject: i.value });
  }), { options: p, methods: v };
}, Zh = {
  ...Wh,
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
}, qp = (o, i, n) => {
  const { options: u, methods: d } = Yp(
    o,
    i,
    n
  ), p = fn(
    o,
    Zh,
    u
  ), g = {
    ...d,
    setRadius(v) {
      i.value.setRadius(v);
    },
    setLatLng(v) {
      i.value.setLatLng(v);
    }
  };
  return { options: p, methods: g };
}, Kp = {
  ...Zh,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, o1 = (o, i, n) => {
  const { options: u, methods: d } = qp(o, i, n), p = fn(
    o,
    Kp,
    u
  ), g = {
    ...d
  };
  return { options: p, methods: g };
};
nt({
  name: "LCircle",
  props: Kp,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = o1(o, n, i);
    return Ht(async () => {
      const { circle: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLng, g));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
const a1 = nt({
  name: "LCircleMarker",
  props: Zh,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = qp(
      o,
      n,
      i
    );
    return Ht(async () => {
      const { circleMarker: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLng, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
}), Ea = {
  ...Ll,
  position: {
    type: String
  }
}, Dl = (o, i) => {
  const { options: n, methods: u } = Il(o), d = fn(
    o,
    Ea,
    n
  ), p = {
    ...u,
    setPosition(g) {
      i.value && i.value.setPosition(g);
    }
  };
  return Cl(() => {
    i.value && i.value.remove();
  }), { options: d, methods: p };
}, l1 = (o) => o.default ? Ds("div", { ref: "root" }, o.default()) : null;
nt({
  name: "LControl",
  props: {
    ...Ea,
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
    const n = ge(), u = ge(), d = Tt(Sn), p = Ft(bl), { options: g, methods: v } = Dl(o, n);
    return Ht(async () => {
      const { Control: m, DomEvent: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = m.extend({
        onAdd() {
          return u.value;
        }
      });
      n.value = Rn(new A(g)), wn(v, n.value, o), p({ leafletObject: n.value }), o.disableClickPropagation && u.value && E.disableClickPropagation(u.value), o.disableScrollPropagation && u.value && E.disableScrollPropagation(u.value), Jt(() => i.emit("ready", n.value));
    }), { root: u, leafletObject: n };
  },
  render() {
    return l1(this.$slots);
  }
});
const $p = {
  ...Ea,
  prefix: {
    type: String
  }
}, u1 = (o, i) => {
  const { options: n, methods: u } = Dl(
    o,
    i
  ), d = fn(
    o,
    $p,
    n
  ), p = {
    ...u,
    setPrefix(g) {
      i.value.setPrefix(g);
    }
  };
  return { options: d, methods: p };
};
nt({
  name: "LControlAttribution",
  props: $p,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(bl), { options: p, methods: g } = u1(o, n);
    return Ht(async () => {
      const { control: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.attribution(p)
      ), wn(g, n.value, o), d({ leafletObject: n.value }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Jp = {
  ...Ea,
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
}, c1 = (o, i) => {
  const { options: n } = Dl(o, i);
  return { options: fn(
    o,
    Jp,
    n
  ), methods: {
    addLayer(u) {
      u.layerType === "base" ? i.value.addBaseLayer(u.leafletObject, u.name) : u.layerType === "overlay" && i.value.addOverlay(u.leafletObject, u.name);
    },
    removeLayer(u) {
      i.value.removeLayer(u.leafletObject);
    }
  } };
};
nt({
  name: "LControlLayers",
  props: Jp,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(Bp), { options: p, methods: g } = c1(o, n);
    return Ht(async () => {
      const { control: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.layers(void 0, void 0, p)
      ), wn(g, n.value, o), d({
        ...o,
        ...g,
        leafletObject: n.value
      }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const jp = {
  ...Ea,
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
}, h1 = (o, i) => {
  const { options: n, methods: u } = Dl(
    o,
    i
  );
  return { options: fn(
    o,
    jp,
    n
  ), methods: u };
};
nt({
  name: "LControlScale",
  props: jp,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(bl), { options: p, methods: g } = h1(o, n);
    return Ht(async () => {
      const { control: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.scale(p)), wn(g, n.value, o), d({ leafletObject: n.value }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Xp = {
  ...Ea,
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
}, d1 = (o, i) => {
  const { options: n, methods: u } = Dl(
    o,
    i
  );
  return { options: fn(
    o,
    Xp,
    n
  ), methods: u };
};
nt({
  name: "LControlZoom",
  props: Xp,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(bl), { options: p, methods: g } = d1(o, n);
    return Ht(async () => {
      const { control: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.zoom(p)), wn(g, n.value, o), d({ leafletObject: n.value }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const ac = {
  ...ya
}, Hh = (o, i, n) => {
  const { options: u, methods: d } = Nl(
    o,
    i,
    n
  ), p = fn(
    o,
    ac,
    u
  ), g = {
    ...d,
    addLayer(v) {
      i.value.addLayer(v.leafletObject);
    },
    removeLayer(v) {
      i.value.removeLayer(v.leafletObject);
    }
  };
  return qr(Ci, g.addLayer), qr(oc, g.removeLayer), { options: p, methods: g };
}, Qp = {
  ...ac
}, f1 = (o, i, n) => {
  const { options: u, methods: d } = Hh(
    o,
    i,
    n
  ), p = fn(
    o,
    Qp,
    u
  ), g = {
    ...d
  };
  return { options: p, methods: g };
};
nt({
  props: Qp,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { methods: g, options: v } = f1(
      o,
      n,
      i
    );
    return Ht(async () => {
      const { featureGroup: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(void 0, v)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
const eg = {
  ...ac,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, p1 = (o, i, n) => {
  const { options: u, methods: d } = Hh(
    o,
    i,
    n
  ), p = fn(
    o,
    eg,
    u
  );
  Object.prototype.hasOwnProperty.call(o, "optionsStyle") && (p.style = o.optionsStyle);
  const g = {
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
  return { options: p, methods: g };
}, Bo = nt({
  props: eg,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { methods: g, options: v } = p1(o, n, i);
    return Ht(async () => {
      const { geoJSON: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.geojson, v));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
}), Yh = {
  ...ya,
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
}, tg = (o, i, n) => {
  const { options: u, methods: d } = Nl(
    o,
    i,
    n
  ), p = fn(
    o,
    Yh,
    u
  ), g = {
    ...d,
    setTileComponent() {
      var v;
      (v = i.value) == null || v.redraw();
    }
  };
  return Cl(() => {
    i.value.off();
  }), { options: p, methods: g };
}, g1 = (o, i, n, u) => o.extend({
  initialize(d) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), n.setOptions(this, d);
  },
  createTile(d) {
    const p = this._tileCoordsToKey(d);
    this.tileComponents[p] = i.create("div");
    const g = Ds({ setup: u, props: ["coords"] }, { coords: d });
    return zE(g, this.tileComponents[p]), this.tileComponents[p];
  },
  _unloadTile(d) {
    const p = this._tileCoordsToKey(d.coords);
    this.tileComponents[p] && (this.tileComponents[p].innerHTML = "", this.tileComponents[p] = void 0);
  }
});
nt({
  props: {
    ...Yh,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, i) {
    const n = ge(), u = ge(null), d = ge(!1), p = Tt(Sn), g = Ft(Ci), { options: v, methods: m } = tg(o, n, i);
    return Ht(async () => {
      const { GridLayer: E, DomUtil: A, Util: w } = p ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), b = g1(
        E,
        A,
        w,
        o.childRender
      );
      n.value = Rn(new b(v));
      const { listeners: N } = hi(i.attrs);
      n.value.on(N), wn(m, n.value, o), g({
        ...o,
        ...m,
        leafletObject: n.value
      }), d.value = !0, Jt(() => i.emit("ready", n.value));
    }), { root: u, ready: d, leafletObject: n };
  },
  render() {
    return this.ready ? Ds("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const $f = {
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
}, vl = nt({
  name: "LIcon",
  props: {
    ...$f,
    ...Ll
  },
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(Gp), p = Ft(kp), g = Ft(Up);
    let v, m, E, A, w;
    const b = (ee, Z, W) => {
      const K = ee && ee.innerHTML;
      if (!Z) {
        W && w && d() && p(K);
        return;
      }
      const { listeners: R } = hi(i.attrs);
      w && m(w, R);
      const { options: U } = Il(o), ue = fn(
        o,
        $f,
        U
      );
      K && (ue.html = K), w = ue.html ? E(ue) : A(ue), v(w, R), g(w);
    }, N = () => {
      Jt(() => b(n.value, !0, !1));
    }, M = () => {
      Jt(() => b(n.value, !1, !0));
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
    return Ht(async () => {
      const {
        DomEvent: ee,
        divIcon: Z,
        icon: W
      } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      v = ee.on, m = ee.off, E = Z, A = W, wn(G, {}, o), new MutationObserver(M).observe(n.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), N();
    }), { root: n };
  },
  render() {
    const o = this.$slots.default ? this.$slots.default() : void 0;
    return Ds("div", { ref: "root" }, o);
  }
}), ng = {
  ...ya,
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
}, _1 = (o, i, n) => {
  const { options: u, methods: d } = Nl(
    o,
    i,
    n
  ), p = fn(
    o,
    ng,
    u
  ), g = {
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
  return { options: p, methods: g };
};
nt({
  name: "LImageOverlay",
  props: ng,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = _1(
      o,
      n,
      i
    );
    return Ht(async () => {
      const { imageOverlay: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.url, o.bounds, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
nt({
  props: ac,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { methods: g } = Hh(o, n, i);
    return Ht(async () => {
      const { layerGroup: v } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v(void 0, o.options)
      );
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
function ig(o, i, n) {
  var u, d, p;
  i === void 0 && (i = 50), n === void 0 && (n = {});
  var g = (u = n.isImmediate) != null && u, v = (d = n.callback) != null && d, m = n.maxWait, E = Date.now(), A = [];
  function w() {
    if (m !== void 0) {
      var N = Date.now() - E;
      if (N + i >= m)
        return m - N;
    }
    return i;
  }
  var b = function() {
    var N = [].slice.call(arguments), M = this;
    return new Promise(function(G, ee) {
      var Z = g && p === void 0;
      if (p !== void 0 && clearTimeout(p), p = setTimeout(function() {
        if (p = void 0, E = Date.now(), !g) {
          var K = o.apply(M, N);
          v && v(K), A.forEach(function(R) {
            return (0, R.resolve)(K);
          }), A = [];
        }
      }, w()), Z) {
        var W = o.apply(M, N);
        return v && v(W), G(W);
      }
      A.push({ resolve: G, reject: ee });
    });
  };
  return b.cancel = function(N) {
    p !== void 0 && clearTimeout(p), A.forEach(function(M) {
      return (0, M.reject)(N);
    }), A = [];
  }, b;
}
const Jf = {
  ...Ll,
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
}, qh = nt({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Jf,
  setup(o, i) {
    const n = ge(), u = Mo({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: d } = Il(o), p = fn(
      o,
      Jf,
      d
    ), { listeners: g, attrs: v } = hi(i.attrs), m = bu(Ci), E = bu(oc), A = bu(bl), w = bu(
      Bp
    );
    qr(Sn, o.useGlobalLeaflet);
    const b = dn(() => {
      const Z = {};
      return o.noBlockingAnimations && (Z.animate = !1), Z;
    }), N = dn(() => {
      const Z = b.value;
      return o.padding && (Z.padding = o.padding), o.paddingTopLeft && (Z.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (Z.paddingBottomRight = o.paddingBottomRight), Z;
    }), M = {
      moveend: ig((Z) => {
        u.leafletRef && (i.emit("update:zoom", u.leafletRef.getZoom()), i.emit("update:center", u.leafletRef.getCenter()), i.emit("update:bounds", u.leafletRef.getBounds()));
      }),
      overlayadd(Z) {
        const W = u.layersInControl.find((K) => K.name === Z.name);
        W && W.updateVisibleProp(!0);
      },
      overlayremove(Z) {
        const W = u.layersInControl.find((K) => K.name === Z.name);
        W && W.updateVisibleProp(!1);
      }
    };
    Ht(async () => {
      o.useGlobalLeaflet && (rn.L = rn.L || await Promise.resolve().then(() => M1));
      const { map: Z, CRS: W, Icon: K, latLngBounds: R, latLng: U, stamp: ue } = o.useGlobalLeaflet ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        p.beforeMapMount && await p.beforeMapMount();
      } catch (ce) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${ce.message}`
        );
      }
      await r1(K);
      const _e = typeof p.crs == "string" ? W[p.crs] : p.crs;
      p.crs = _e || W.EPSG3857;
      const be = {
        addLayer(ce) {
          ce.layerType !== void 0 && (u.layerControl === void 0 ? u.layersToAdd.push(ce) : u.layersInControl.find(
            (se) => ue(se.leafletObject) === ue(ce.leafletObject)
          ) || (u.layerControl.addLayer(ce), u.layersInControl.push(ce))), ce.visible !== !1 && u.leafletRef.addLayer(ce.leafletObject);
        },
        removeLayer(ce) {
          ce.layerType !== void 0 && (u.layerControl === void 0 ? u.layersToAdd = u.layersToAdd.filter(
            (se) => se.name !== ce.name
          ) : (u.layerControl.removeLayer(ce.leafletObject), u.layersInControl = u.layersInControl.filter(
            (se) => ue(se.leafletObject) !== ue(ce.leafletObject)
          ))), u.leafletRef.removeLayer(ce.leafletObject);
        },
        registerLayerControl(ce) {
          u.layerControl = ce, u.layersToAdd.forEach((se) => {
            u.layerControl.addLayer(se);
          }), u.layersToAdd = [], A(ce);
        },
        registerControl(ce) {
          u.leafletRef.addControl(ce.leafletObject);
        },
        setZoom(ce) {
          const se = u.leafletRef.getZoom();
          ce !== se && u.leafletRef.setZoom(ce, b.value);
        },
        setCrs(ce) {
          const se = u.leafletRef.getBounds();
          u.leafletRef.options.crs = ce, u.leafletRef.fitBounds(se, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(ce) {
          u.leafletRef.fitBounds(ce, N.value);
        },
        setBounds(ce) {
          if (!ce)
            return;
          const se = R(ce);
          se.isValid() && !(u.lastSetBounds || u.leafletRef.getBounds()).equals(se, 0) && (u.lastSetBounds = se, u.leafletRef.fitBounds(se));
        },
        setCenter(ce) {
          if (ce == null)
            return;
          const se = U(ce), $ = u.lastSetCenter || u.leafletRef.getCenter();
          ($.lat !== se.lat || $.lng !== se.lng) && (u.lastSetCenter = se, u.leafletRef.panTo(se, b.value));
        }
      };
      Lu(m, be.addLayer), Lu(E, be.removeLayer), Lu(A, be.registerControl), Lu(w, be.registerLayerControl), u.leafletRef = Rn(Z(n.value, p)), wn(be, u.leafletRef, o), Kf(u.leafletRef, M), Kf(u.leafletRef, g), u.ready = !0, Jt(() => i.emit("ready", u.leafletRef));
    }), Al(() => {
      Mp(M), u.leafletRef && (u.leafletRef.off(), u.leafletRef.remove());
    });
    const G = dn(() => u.leafletRef), ee = dn(() => u.ready);
    return { root: n, ready: ee, leafletObject: G, attrs: v };
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
}), m1 = ["Symbol(Comment)", "Symbol(Text)"], v1 = ["LTooltip", "LPopup"], rg = {
  ...ya,
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
}, y1 = (o, i, n) => {
  const { options: u, methods: d } = Nl(
    o,
    i,
    n
  ), p = fn(
    o,
    rg,
    u
  ), g = {
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
  return { options: p, methods: g };
}, E1 = (o, i) => {
  const n = i.slots.default && i.slots.default();
  return n && n.length && n.some(T1);
};
function T1(o) {
  return !(m1.includes(o.type.toString()) || v1.includes(o.type.name));
}
const yl = nt({
  name: "LMarker",
  props: rg,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci);
    qr(
      Gp,
      () => {
        var E;
        return !!((E = n.value) != null && E.getElement());
      }
    ), qr(kp, (E) => {
      var A, w;
      const b = js((A = n.value) == null ? void 0 : A.getElement) && ((w = n.value) == null ? void 0 : w.getElement());
      b && (b.innerHTML = E);
    }), qr(
      Up,
      (E) => {
        var A;
        return ((A = n.value) == null ? void 0 : A.setIcon) && n.value.setIcon(E);
      }
    );
    const { options: g, methods: v } = y1(o, n, i), m = {
      moveHandler: ig(v.latLngSync)
    };
    return Ht(async () => {
      const { marker: E, divIcon: A } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      E1(g, i) && (g.icon = A({ className: "" })), n.value = Rn(E(o.latLng, g));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), n.value.on("move", m.moveHandler), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), Al(() => Mp(m)), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
}), Kh = {
  ...Wh,
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
}, sg = (o, i, n) => {
  const { options: u, methods: d } = Yp(
    o,
    i,
    n
  ), p = fn(
    o,
    Kh,
    u
  ), g = {
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
  return { options: p, methods: g };
}, ju = {
  ...Kh
}, og = (o, i, n) => {
  const { options: u, methods: d } = sg(
    o,
    i,
    n
  ), p = fn(
    o,
    ju,
    u
  ), g = {
    ...d,
    toGeoJSON(v) {
      return i.value.toGeoJSON(v);
    }
  };
  return { options: p, methods: g };
};
nt({
  name: "LPolygon",
  props: ju,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = og(o, n, i);
    return Ht(async () => {
      const { polygon: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLngs, g));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
nt({
  name: "LPolyline",
  props: Kh,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = sg(o, n, i);
    return Ht(async () => {
      const { polyline: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLngs, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
const ag = {
  ...Ll,
  content: {
    type: String,
    default: null
  }
}, lg = (o, i) => {
  const { options: n, methods: u } = Il(o), d = {
    ...u,
    setContent(p) {
      i.value && p !== null && p !== void 0 && i.value.setContent(p);
    }
  };
  return { options: n, methods: d };
}, ug = (o) => o.default ? Ds("div", { ref: "root" }, o.default()) : null, w1 = {
  ...ag,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, S1 = (o, i) => {
  const { options: n, methods: u } = lg(o, i);
  return { options: n, methods: u };
};
nt({
  name: "LPopup",
  props: w1,
  setup(o, i) {
    const n = ge(), u = ge(null), d = Tt(Sn), p = Ft(zp), g = Ft(Wp), { options: v, methods: m } = S1(o, n);
    return Ht(async () => {
      const { popup: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(E(v)), o.latLng !== void 0 && n.value.setLatLng(o.latLng), wn(m, n.value, o);
      const { listeners: A } = hi(i.attrs);
      n.value.on(A), n.value.setContent(o.content || u.value || ""), p(n.value), Jt(() => i.emit("ready", n.value));
    }), Al(() => {
      g();
    }), { root: u, leafletObject: n };
  },
  render() {
    return ug(this.$slots);
  }
});
const cg = {
  ...ju,
  latLngs: {
    ...ju.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, A1 = (o, i, n) => {
  const { options: u, methods: d } = og(
    o,
    i,
    n
  ), p = fn(
    o,
    cg,
    u
  ), g = {
    ...d,
    setBounds(v) {
      i.value.setBounds(v);
    },
    setLatLngs(v) {
      i.value.setBounds(v);
    }
  };
  return { options: p, methods: g };
};
nt({
  name: "LRectangle",
  props: cg,
  setup(o, i) {
    const n = ge(), u = ge(!1), d = Tt(Sn), p = Ft(Ci), { options: g, methods: v } = A1(o, n, i);
    return Ht(async () => {
      const { rectangle: m, latLngBounds: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = o.bounds ? E(o.bounds) : E(o.latLngs || []);
      n.value = Rn(m(A, g));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), u.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: u, leafletObject: n };
  },
  render() {
    return hs(this.ready, this.$slots);
  }
});
const $h = {
  ...Yh,
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
}, hg = (o, i, n) => {
  const { options: u, methods: d } = tg(o, i, n), p = fn(
    o,
    $h,
    u
  ), g = {
    ...d
  };
  return { options: p, methods: g };
}, Jh = nt({
  props: $h,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(Ci), { options: p, methods: g } = hg(o, n, i);
    return Ht(async () => {
      const { tileLayer: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v(o.url, p));
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(g, n.value, o), d({
        ...o,
        ...g,
        leafletObject: n.value
      }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
}), C1 = {
  ...ag
}, O1 = (o, i) => {
  const { options: n, methods: u } = lg(o, i), d = Ft(Zp);
  return Al(() => {
    d();
  }), { options: n, methods: u };
}, jf = nt({
  name: "LTooltip",
  props: C1,
  setup(o, i) {
    const n = ge(), u = ge(null), d = Tt(Sn), p = Ft(Vp), { options: g, methods: v } = O1(o, n);
    return Ht(async () => {
      const { tooltip: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(g)), wn(v, n.value, o);
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), n.value.setContent(o.content || u.value || ""), p(n.value), Jt(() => i.emit("ready", n.value));
    }), { root: u, leafletObject: n };
  },
  render() {
    return ug(this.$slots);
  }
}), dg = {
  ...$h,
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
}, b1 = (o, i, n) => {
  const { options: u, methods: d } = hg(o, i, n);
  return {
    options: fn(
      o,
      dg,
      u
    ),
    methods: {
      ...d
    }
  };
}, L1 = nt({
  props: dg,
  setup(o, i) {
    const n = ge(), u = Tt(Sn), d = Ft(Ci), { options: p, methods: g } = b1(
      o,
      n,
      i
    );
    return Ht(async () => {
      const { tileLayer: v } = u ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.wms(o.url, p)
      );
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(g, n.value, o), d({
        ...o,
        ...g,
        leafletObject: n.value
      }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
var Iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fg(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var il = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var I1 = il.exports, Xf;
function N1() {
  return Xf || (Xf = 1, (function(o, i) {
    (function() {
      var n, u = "4.17.21", d = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", v = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", E = 500, A = "__lodash_placeholder__", w = 1, b = 2, N = 4, M = 1, G = 2, ee = 1, Z = 2, W = 4, K = 8, R = 16, U = 32, ue = 64, _e = 128, be = 256, ce = 512, se = 30, $ = "...", k = 800, ie = 16, Y = 1, de = 2, le = 3, Oe = 1 / 0, Ee = 9007199254740991, Pt = 17976931348623157e292, Le = NaN, Ue = 4294967295, kt = Ue - 1, Yt = Ue >>> 1, Lt = [
        ["ary", _e],
        ["bind", ee],
        ["bindKey", Z],
        ["curry", K],
        ["curryRight", R],
        ["flip", ce],
        ["partial", U],
        ["partialRight", ue],
        ["rearg", be]
      ], je = "[object Arguments]", Me = "[object Array]", sn = "[object AsyncFunction]", pn = "[object Boolean]", Pn = "[object Date]", on = "[object DOMException]", qn = "[object Error]", Un = "[object Function]", Ui = "[object GeneratorFunction]", gn = "[object Map]", Ut = "[object Number]", zi = "[object Null]", an = "[object Object]", ln = "[object Promise]", yr = "[object Proxy]", Kn = "[object RegExp]", jt = "[object Set]", Qn = "[object String]", xn = "[object Symbol]", Vi = "[object Undefined]", zn = "[object WeakMap]", nr = "[object WeakSet]", _n = "[object ArrayBuffer]", ei = "[object DataView]", Oi = "[object Float32Array]", bi = "[object Float64Array]", di = "[object Int8Array]", Fn = "[object Int16Array]", Wi = "[object Int32Array]", fi = "[object Uint8Array]", ti = "[object Uint8ClampedArray]", An = "[object Uint16Array]", ni = "[object Uint32Array]", Li = /\b__p \+= '';/g, Ii = /\b(__p \+=) '' \+/g, ii = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ir = /&(?:amp|lt|gt|quot|#39);/g, Zi = /[&<>"']/g, x = RegExp(ir.source), ae = RegExp(Zi.source), J = /<%-([\s\S]+?)%>/g, ve = /<%([\s\S]+?)%>/g, xe = /<%=([\s\S]+?)%>/g, Re = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xe = /^\w*$/, ft = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, It = /[\\^$.*+?()[\]{}|]/g, Mt = RegExp(It.source), Xt = /^\s+/, gt = /\s/, me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ri = /\{\n\/\* \[wrapped with (.+)\] \*/, Hi = /,? & /, pi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Er = /[()=,{}\[\]\/\s]/, Nt = /\\(\\)?/g, Cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ot = /\w*$/, zt = /^[-+]0x[0-9a-f]+$/i, On = /^0b[01]+$/i, si = /^\[object .+?Constructor\]$/, mn = /^0o[0-7]+$/i, bn = /^(?:0|[1-9]\d*)$/, oi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, un = /($^)/, qt = /['\n\r\u2028\u2029\\]/g, $n = "\\ud800-\\udfff", xr = "\\u0300-\\u036f", ds = "\\ufe20-\\ufe2f", fs = "\\u20d0-\\u20ff", gi = xr + ds + fs, Tr = "\\u2700-\\u27bf", Yi = "a-z\\xdf-\\xf6\\xf8-\\xff", Kr = "\\xac\\xb1\\xd7\\xf7", $r = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rr = "\\u2000-\\u206f", Qe = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ct = "A-Z\\xc0-\\xd6\\xd8-\\xde", sr = "\\ufe0e\\ufe0f", Mn = Kr + $r + rr + Qe, _i = "['’]", Fr = "[" + $n + "]", ze = "[" + Mn + "]", Ot = "[" + gi + "]", Go = "\\d+", ko = "[" + Tr + "]", Ni = "[" + Yi + "]", Ml = "[^" + $n + Mn + Go + Tr + Yi + Ct + "]", xs = "\\ud83c[\\udffb-\\udfff]", ps = "(?:" + Ot + "|" + xs + ")", cn = "[^" + $n + "]", Mr = "(?:\\ud83c[\\udde6-\\uddff]){2}", gs = "[\\ud800-\\udbff][\\udc00-\\udfff]", wr = "[" + Ct + "]", Uo = "\\u200d", Fs = "(?:" + Ni + "|" + Ml + ")", Ta = "(?:" + wr + "|" + Ml + ")", zo = "(?:" + _i + "(?:d|ll|m|re|s|t|ve))?", ro = "(?:" + _i + "(?:D|LL|M|RE|S|T|VE))?", Vo = ps + "?", Wo = "[" + sr + "]?", Zo = "(?:" + Uo + "(?:" + [cn, Mr, gs].join("|") + ")" + Wo + Vo + ")*", Bl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", wa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gl = Wo + Vo + Zo, $e = "(?:" + [ko, Mr, gs].join("|") + ")" + Gl, Sr = "(?:" + [cn + Ot + "?", Ot, Mr, gs, Fr].join("|") + ")", xt = RegExp(_i, "g"), kl = RegExp(Ot, "g"), so = RegExp(xs + "(?=" + xs + ")|" + Sr + Gl, "g"), Sa = RegExp([
        wr + "?" + Ni + "+" + zo + "(?=" + [ze, wr, "$"].join("|") + ")",
        Ta + "+" + ro + "(?=" + [ze, wr + Fs, "$"].join("|") + ")",
        wr + "?" + Fs + "+" + zo,
        wr + "+" + ro,
        wa,
        Bl,
        Go,
        $e
      ].join("|"), "g"), Aa = RegExp("[" + Uo + $n + gi + sr + "]"), _s = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ca = [
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
      ], oo = -1, et = {};
      et[Oi] = et[bi] = et[di] = et[Fn] = et[Wi] = et[fi] = et[ti] = et[An] = et[ni] = !0, et[je] = et[Me] = et[_n] = et[pn] = et[ei] = et[Pn] = et[qn] = et[Un] = et[gn] = et[Ut] = et[an] = et[Kn] = et[jt] = et[Qn] = et[zn] = !1;
      var vt = {};
      vt[je] = vt[Me] = vt[_n] = vt[ei] = vt[pn] = vt[Pn] = vt[Oi] = vt[bi] = vt[di] = vt[Fn] = vt[Wi] = vt[gn] = vt[Ut] = vt[an] = vt[Kn] = vt[jt] = vt[Qn] = vt[xn] = vt[fi] = vt[ti] = vt[An] = vt[ni] = !0, vt[qn] = vt[Un] = vt[zn] = !1;
      var Ul = {
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
      }, zl = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, uc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Vl = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Oa = parseFloat, cc = parseInt, ba = typeof Iu == "object" && Iu && Iu.Object === Object && Iu, pt = typeof self == "object" && self && self.Object === Object && self, Vn = ba || pt || Function("return this")(), Di = i && !i.nodeType && i, or = Di && !0 && o && !o.nodeType && o, La = or && or.exports === Di, Ia = La && ba.process, mi = (function() {
        try {
          var P = or && or.require && or.require("util").types;
          return P || Ia && Ia.binding && Ia.binding("util");
        } catch {
        }
      })(), Wl = mi && mi.isArrayBuffer, Na = mi && mi.isDate, Zl = mi && mi.isMap, Hl = mi && mi.isRegExp, Ho = mi && mi.isSet, Yl = mi && mi.isTypedArray;
      function Qt(P, j, q) {
        switch (q.length) {
          case 0:
            return P.call(j);
          case 1:
            return P.call(j, q[0]);
          case 2:
            return P.call(j, q[0], q[1]);
          case 3:
            return P.call(j, q[0], q[1], q[2]);
        }
        return P.apply(j, q);
      }
      function hc(P, j, q, Ae) {
        for (var qe = -1, yt = P == null ? 0 : P.length; ++qe < yt; ) {
          var Ln = P[qe];
          j(Ae, Ln, q(Ln), P);
        }
        return Ae;
      }
      function Ri(P, j) {
        for (var q = -1, Ae = P == null ? 0 : P.length; ++q < Ae && j(P[q], q, P) !== !1; )
          ;
        return P;
      }
      function Jr(P, j) {
        for (var q = P == null ? 0 : P.length; q-- && j(P[q], q, P) !== !1; )
          ;
        return P;
      }
      function Da(P, j) {
        for (var q = -1, Ae = P == null ? 0 : P.length; ++q < Ae; )
          if (!j(P[q], q, P))
            return !1;
        return !0;
      }
      function Br(P, j) {
        for (var q = -1, Ae = P == null ? 0 : P.length, qe = 0, yt = []; ++q < Ae; ) {
          var Ln = P[q];
          j(Ln, q, P) && (yt[qe++] = Ln);
        }
        return yt;
      }
      function Ms(P, j) {
        var q = P == null ? 0 : P.length;
        return !!q && Bs(P, j, 0) > -1;
      }
      function Ra(P, j, q) {
        for (var Ae = -1, qe = P == null ? 0 : P.length; ++Ae < qe; )
          if (q(j, P[Ae]))
            return !0;
        return !1;
      }
      function Bt(P, j) {
        for (var q = -1, Ae = P == null ? 0 : P.length, qe = Array(Ae); ++q < Ae; )
          qe[q] = j(P[q], q, P);
        return qe;
      }
      function Gr(P, j) {
        for (var q = -1, Ae = j.length, qe = P.length; ++q < Ae; )
          P[qe + q] = j[q];
        return P;
      }
      function Pa(P, j, q, Ae) {
        var qe = -1, yt = P == null ? 0 : P.length;
        for (Ae && yt && (q = P[++qe]); ++qe < yt; )
          q = j(q, P[qe], qe, P);
        return q;
      }
      function dc(P, j, q, Ae) {
        var qe = P == null ? 0 : P.length;
        for (Ae && qe && (q = P[--qe]); qe--; )
          q = j(q, P[qe], qe, P);
        return q;
      }
      function ao(P, j) {
        for (var q = -1, Ae = P == null ? 0 : P.length; ++q < Ae; )
          if (j(P[q], q, P))
            return !0;
        return !1;
      }
      var fc = Yo("length");
      function ql(P) {
        return P.split("");
      }
      function Kl(P) {
        return P.match(pi) || [];
      }
      function lo(P, j, q) {
        var Ae;
        return q(P, function(qe, yt, Ln) {
          if (j(qe, yt, Ln))
            return Ae = yt, !1;
        }), Ae;
      }
      function Ar(P, j, q, Ae) {
        for (var qe = P.length, yt = q + (Ae ? 1 : -1); Ae ? yt-- : ++yt < qe; )
          if (j(P[yt], yt, P))
            return yt;
        return -1;
      }
      function Bs(P, j, q) {
        return j === j ? Us(P, j, q) : Ar(P, Pi, q);
      }
      function uo(P, j, q, Ae) {
        for (var qe = q - 1, yt = P.length; ++qe < yt; )
          if (Ae(P[qe], j))
            return qe;
        return -1;
      }
      function Pi(P) {
        return P !== P;
      }
      function xa(P, j) {
        var q = P == null ? 0 : P.length;
        return q ? Ba(P, j) / q : Le;
      }
      function Yo(P) {
        return function(j) {
          return j == null ? n : j[P];
        };
      }
      function Fa(P) {
        return function(j) {
          return P == null ? n : P[j];
        };
      }
      function qo(P, j, q, Ae, qe) {
        return qe(P, function(yt, Ln, Dt) {
          q = Ae ? (Ae = !1, yt) : j(q, yt, Ln, Dt);
        }), q;
      }
      function Ma(P, j) {
        var q = P.length;
        for (P.sort(j); q--; )
          P[q] = P[q].value;
        return P;
      }
      function Ba(P, j) {
        for (var q, Ae = -1, qe = P.length; ++Ae < qe; ) {
          var yt = j(P[Ae]);
          yt !== n && (q = q === n ? yt : q + yt);
        }
        return q;
      }
      function Ga(P, j) {
        for (var q = -1, Ae = Array(P); ++q < P; )
          Ae[q] = j(q);
        return Ae;
      }
      function $l(P, j) {
        return Bt(j, function(q) {
          return [q, P[q]];
        });
      }
      function Jl(P) {
        return P && P.slice(0, Ua(P) + 1).replace(Xt, "");
      }
      function Kt(P) {
        return function(j) {
          return P(j);
        };
      }
      function jr(P, j) {
        return Bt(j, function(q) {
          return P[q];
        });
      }
      function co(P, j) {
        return P.has(j);
      }
      function Cr(P, j) {
        for (var q = -1, Ae = P.length; ++q < Ae && Bs(j, P[q], 0) > -1; )
          ;
        return q;
      }
      function jl(P, j) {
        for (var q = P.length; q-- && Bs(j, P[q], 0) > -1; )
          ;
        return q;
      }
      function Gs(P, j) {
        for (var q = P.length, Ae = 0; q--; )
          P[q] === j && ++Ae;
        return Ae;
      }
      var pc = Fa(Ul), ho = Fa(zl);
      function Xl(P) {
        return "\\" + Vl[P];
      }
      function Ko(P, j) {
        return P == null ? n : P[j];
      }
      function ks(P) {
        return Aa.test(P);
      }
      function Xr(P) {
        return _s.test(P);
      }
      function $o(P) {
        for (var j, q = []; !(j = P.next()).done; )
          q.push(j.value);
        return q;
      }
      function ka(P) {
        var j = -1, q = Array(P.size);
        return P.forEach(function(Ae, qe) {
          q[++j] = [qe, Ae];
        }), q;
      }
      function Jo(P, j) {
        return function(q) {
          return P(j(q));
        };
      }
      function Qr(P, j) {
        for (var q = -1, Ae = P.length, qe = 0, yt = []; ++q < Ae; ) {
          var Ln = P[q];
          (Ln === j || Ln === A) && (P[q] = A, yt[qe++] = q);
        }
        return yt;
      }
      function qi(P) {
        var j = -1, q = Array(P.size);
        return P.forEach(function(Ae) {
          q[++j] = Ae;
        }), q;
      }
      function gc(P) {
        var j = -1, q = Array(P.size);
        return P.forEach(function(Ae) {
          q[++j] = [Ae, Ae];
        }), q;
      }
      function Us(P, j, q) {
        for (var Ae = q - 1, qe = P.length; ++Ae < qe; )
          if (P[Ae] === j)
            return Ae;
        return -1;
      }
      function _c(P, j, q) {
        for (var Ae = q + 1; Ae--; )
          if (P[Ae] === j)
            return Ae;
        return Ae;
      }
      function vi(P) {
        return ks(P) ? jo(P) : fc(P);
      }
      function yi(P) {
        return ks(P) ? Va(P) : ql(P);
      }
      function Ua(P) {
        for (var j = P.length; j-- && gt.test(P.charAt(j)); )
          ;
        return j;
      }
      var za = Fa(uc);
      function jo(P) {
        for (var j = so.lastIndex = 0; so.test(P); )
          ++j;
        return j;
      }
      function Va(P) {
        return P.match(so) || [];
      }
      function Xo(P) {
        return P.match(Sa) || [];
      }
      var zs = (function P(j) {
        j = j == null ? Vn : kr.defaults(Vn.Object(), j, kr.pick(Vn, Ca));
        var q = j.Array, Ae = j.Date, qe = j.Error, yt = j.Function, Ln = j.Math, Dt = j.Object, Wa = j.RegExp, Or = j.String, ai = j.TypeError, Qo = q.prototype, ea = yt.prototype, Vs = Dt.prototype, fo = j["__core-js_shared__"], ta = ea.toString, _t = Vs.hasOwnProperty, mc = 0, ms = (function() {
          var t = /[^.]+$/.exec(fo && fo.keys && fo.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), po = Vs.toString, Ql = ta.call(Dt), vc = Vn._, Ur = Wa(
          "^" + ta.call(_t).replace(It, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), go = La ? j.Buffer : n, zr = j.Symbol, es = j.Uint8Array, eu = go ? go.allocUnsafe : n, vs = Jo(Dt.getPrototypeOf, Dt), Ws = Dt.create, Za = Vs.propertyIsEnumerable, _o = Qo.splice, tu = zr ? zr.isConcatSpreadable : n, Zs = zr ? zr.iterator : n, ts = zr ? zr.toStringTag : n, mo = (function() {
          try {
            var t = Oo(Dt, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), nu = j.clearTimeout !== Vn.clearTimeout && j.clearTimeout, iu = Ae && Ae.now !== Vn.Date.now && Ae.now, yc = j.setTimeout !== Vn.setTimeout && j.setTimeout, vo = Ln.ceil, yo = Ln.floor, Ha = Dt.getOwnPropertySymbols, e = go ? go.isBuffer : n, r = j.isFinite, a = Qo.join, c = Jo(Dt.keys, Dt), f = Ln.max, y = Ln.min, I = Ae.now, B = j.parseInt, H = Ln.random, re = Qo.reverse, Se = Oo(j, "DataView"), Pe = Oo(j, "Map"), it = Oo(j, "Promise"), vn = Oo(j, "Set"), en = Oo(j, "WeakMap"), Jn = Oo(Dt, "create"), Wn = en && new en(), ar = {}, Ec = bo(Se), Tc = bo(Pe), wc = bo(it), ru = bo(vn), Sc = bo(en), Eo = zr ? zr.prototype : n, Vt = Eo ? Eo.valueOf : n, To = Eo ? Eo.toString : n;
        function T(t) {
          if (yn(t) && !tt(t) && !(t instanceof ut)) {
            if (t instanceof Ei)
              return t;
            if (_t.call(t, "__wrapped__"))
              return of(t);
          }
          return new Ei(t);
        }
        var Hs = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(s) {
            if (!hn(s))
              return {};
            if (Ws)
              return Ws(s);
            t.prototype = s;
            var l = new t();
            return t.prototype = n, l;
          };
        })();
        function na() {
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
          escape: J,
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
          interpolate: xe,
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
        }, T.prototype = na.prototype, T.prototype.constructor = T, Ei.prototype = Hs(na.prototype), Ei.prototype.constructor = Ei;
        function ut(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ue, this.__views__ = [];
        }
        function Ac() {
          var t = new ut(this.__wrapped__);
          return t.__actions__ = Ki(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ki(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ki(this.__views__), t;
        }
        function qg() {
          if (this.__filtered__) {
            var t = new ut(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Kg() {
          var t = this.__wrapped__.value(), s = this.__dir__, l = tt(t), h = s < 0, _ = l ? t.length : 0, S = om(0, _, this.__views__), O = S.start, D = S.end, F = D - O, Q = h ? D : O - 1, te = this.__iteratees__, oe = te.length, Te = 0, Ne = y(F, this.__takeCount__);
          if (!l || !h && _ == F && Ne == F)
            return Ld(t, this.__actions__);
          var Ge = [];
          e:
            for (; F-- && Te < Ne; ) {
              Q += s;
              for (var at = -1, ke = t[Q]; ++at < oe; ) {
                var dt = te[at], mt = dt.iteratee, cr = dt.type, Mi = mt(ke);
                if (cr == de)
                  ke = Mi;
                else if (!Mi) {
                  if (cr == Y)
                    continue e;
                  break e;
                }
              }
              Ge[Te++] = ke;
            }
          return Ge;
        }
        ut.prototype = Hs(na.prototype), ut.prototype.constructor = ut;
        function wo(t) {
          var s = -1, l = t == null ? 0 : t.length;
          for (this.clear(); ++s < l; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function $g() {
          this.__data__ = Jn ? Jn(null) : {}, this.size = 0;
        }
        function Jg(t) {
          var s = this.has(t) && delete this.__data__[t];
          return this.size -= s ? 1 : 0, s;
        }
        function jg(t) {
          var s = this.__data__;
          if (Jn) {
            var l = s[t];
            return l === m ? n : l;
          }
          return _t.call(s, t) ? s[t] : n;
        }
        function Xg(t) {
          var s = this.__data__;
          return Jn ? s[t] !== n : _t.call(s, t);
        }
        function Qg(t, s) {
          var l = this.__data__;
          return this.size += this.has(t) ? 0 : 1, l[t] = Jn && s === n ? m : s, this;
        }
        wo.prototype.clear = $g, wo.prototype.delete = Jg, wo.prototype.get = jg, wo.prototype.has = Xg, wo.prototype.set = Qg;
        function ys(t) {
          var s = -1, l = t == null ? 0 : t.length;
          for (this.clear(); ++s < l; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function e_() {
          this.__data__ = [], this.size = 0;
        }
        function t_(t) {
          var s = this.__data__, l = su(s, t);
          if (l < 0)
            return !1;
          var h = s.length - 1;
          return l == h ? s.pop() : _o.call(s, l, 1), --this.size, !0;
        }
        function n_(t) {
          var s = this.__data__, l = su(s, t);
          return l < 0 ? n : s[l][1];
        }
        function i_(t) {
          return su(this.__data__, t) > -1;
        }
        function r_(t, s) {
          var l = this.__data__, h = su(l, t);
          return h < 0 ? (++this.size, l.push([t, s])) : l[h][1] = s, this;
        }
        ys.prototype.clear = e_, ys.prototype.delete = t_, ys.prototype.get = n_, ys.prototype.has = i_, ys.prototype.set = r_;
        function Es(t) {
          var s = -1, l = t == null ? 0 : t.length;
          for (this.clear(); ++s < l; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function s_() {
          this.size = 0, this.__data__ = {
            hash: new wo(),
            map: new (Pe || ys)(),
            string: new wo()
          };
        }
        function o_(t) {
          var s = mu(this, t).delete(t);
          return this.size -= s ? 1 : 0, s;
        }
        function a_(t) {
          return mu(this, t).get(t);
        }
        function l_(t) {
          return mu(this, t).has(t);
        }
        function u_(t, s) {
          var l = mu(this, t), h = l.size;
          return l.set(t, s), this.size += l.size == h ? 0 : 1, this;
        }
        Es.prototype.clear = s_, Es.prototype.delete = o_, Es.prototype.get = a_, Es.prototype.has = l_, Es.prototype.set = u_;
        function So(t) {
          var s = -1, l = t == null ? 0 : t.length;
          for (this.__data__ = new Es(); ++s < l; )
            this.add(t[s]);
        }
        function c_(t) {
          return this.__data__.set(t, m), this;
        }
        function h_(t) {
          return this.__data__.has(t);
        }
        So.prototype.add = So.prototype.push = c_, So.prototype.has = h_;
        function Vr(t) {
          var s = this.__data__ = new ys(t);
          this.size = s.size;
        }
        function d_() {
          this.__data__ = new ys(), this.size = 0;
        }
        function f_(t) {
          var s = this.__data__, l = s.delete(t);
          return this.size = s.size, l;
        }
        function p_(t) {
          return this.__data__.get(t);
        }
        function g_(t) {
          return this.__data__.has(t);
        }
        function __(t, s) {
          var l = this.__data__;
          if (l instanceof ys) {
            var h = l.__data__;
            if (!Pe || h.length < d - 1)
              return h.push([t, s]), this.size = ++l.size, this;
            l = this.__data__ = new Es(h);
          }
          return l.set(t, s), this.size = l.size, this;
        }
        Vr.prototype.clear = d_, Vr.prototype.delete = f_, Vr.prototype.get = p_, Vr.prototype.has = g_, Vr.prototype.set = __;
        function sd(t, s) {
          var l = tt(t), h = !l && Lo(t), _ = !l && !h && Js(t), S = !l && !h && !_ && oa(t), O = l || h || _ || S, D = O ? Ga(t.length, Or) : [], F = D.length;
          for (var Q in t)
            (s || _t.call(t, Q)) && !(O && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            _ && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            S && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
            As(Q, F))) && D.push(Q);
          return D;
        }
        function od(t) {
          var s = t.length;
          return s ? t[Fc(0, s - 1)] : n;
        }
        function m_(t, s) {
          return vu(Ki(t), Ao(s, 0, t.length));
        }
        function v_(t) {
          return vu(Ki(t));
        }
        function Cc(t, s, l) {
          (l !== n && !Wr(t[s], l) || l === n && !(s in t)) && Ts(t, s, l);
        }
        function Ya(t, s, l) {
          var h = t[s];
          (!(_t.call(t, s) && Wr(h, l)) || l === n && !(s in t)) && Ts(t, s, l);
        }
        function su(t, s) {
          for (var l = t.length; l--; )
            if (Wr(t[l][0], s))
              return l;
          return -1;
        }
        function y_(t, s, l, h) {
          return Ys(t, function(_, S, O) {
            s(h, _, l(_), O);
          }), h;
        }
        function ad(t, s) {
          return t && is(s, jn(s), t);
        }
        function E_(t, s) {
          return t && is(s, Ji(s), t);
        }
        function Ts(t, s, l) {
          s == "__proto__" && mo ? mo(t, s, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : t[s] = l;
        }
        function Oc(t, s) {
          for (var l = -1, h = s.length, _ = q(h), S = t == null; ++l < h; )
            _[l] = S ? n : oh(t, s[l]);
          return _;
        }
        function Ao(t, s, l) {
          return t === t && (l !== n && (t = t <= l ? t : l), s !== n && (t = t >= s ? t : s)), t;
        }
        function br(t, s, l, h, _, S) {
          var O, D = s & w, F = s & b, Q = s & N;
          if (l && (O = _ ? l(t, h, _, S) : l(t)), O !== n)
            return O;
          if (!hn(t))
            return t;
          var te = tt(t);
          if (te) {
            if (O = lm(t), !D)
              return Ki(t, O);
          } else {
            var oe = Ti(t), Te = oe == Un || oe == Ui;
            if (Js(t))
              return Dd(t, D);
            if (oe == an || oe == je || Te && !_) {
              if (O = F || Te ? {} : Jd(t), !D)
                return F ? j_(t, E_(O, t)) : J_(t, ad(O, t));
            } else {
              if (!vt[oe])
                return _ ? t : {};
              O = um(t, oe, D);
            }
          }
          S || (S = new Vr());
          var Ne = S.get(t);
          if (Ne)
            return Ne;
          S.set(t, O), Of(t) ? t.forEach(function(ke) {
            O.add(br(ke, s, l, ke, t, S));
          }) : Af(t) && t.forEach(function(ke, dt) {
            O.set(dt, br(ke, s, l, dt, t, S));
          });
          var Ge = Q ? F ? Yc : Hc : F ? Ji : jn, at = te ? n : Ge(t);
          return Ri(at || t, function(ke, dt) {
            at && (dt = ke, ke = t[dt]), Ya(O, dt, br(ke, s, l, dt, t, S));
          }), O;
        }
        function T_(t) {
          var s = jn(t);
          return function(l) {
            return ld(l, t, s);
          };
        }
        function ld(t, s, l) {
          var h = l.length;
          if (t == null)
            return !h;
          for (t = Dt(t); h--; ) {
            var _ = l[h], S = s[_], O = t[_];
            if (O === n && !(_ in t) || !S(O))
              return !1;
          }
          return !0;
        }
        function ud(t, s, l) {
          if (typeof t != "function")
            throw new ai(g);
          return Qa(function() {
            t.apply(n, l);
          }, s);
        }
        function qa(t, s, l, h) {
          var _ = -1, S = Ms, O = !0, D = t.length, F = [], Q = s.length;
          if (!D)
            return F;
          l && (s = Bt(s, Kt(l))), h ? (S = Ra, O = !1) : s.length >= d && (S = co, O = !1, s = new So(s));
          e:
            for (; ++_ < D; ) {
              var te = t[_], oe = l == null ? te : l(te);
              if (te = h || te !== 0 ? te : 0, O && oe === oe) {
                for (var Te = Q; Te--; )
                  if (s[Te] === oe)
                    continue e;
                F.push(te);
              } else S(s, oe, h) || F.push(te);
            }
          return F;
        }
        var Ys = Md(ns), cd = Md(Lc, !0);
        function w_(t, s) {
          var l = !0;
          return Ys(t, function(h, _, S) {
            return l = !!s(h, _, S), l;
          }), l;
        }
        function ou(t, s, l) {
          for (var h = -1, _ = t.length; ++h < _; ) {
            var S = t[h], O = s(S);
            if (O != null && (D === n ? O === O && !ur(O) : l(O, D)))
              var D = O, F = S;
          }
          return F;
        }
        function S_(t, s, l, h) {
          var _ = t.length;
          for (l = st(l), l < 0 && (l = -l > _ ? 0 : _ + l), h = h === n || h > _ ? _ : st(h), h < 0 && (h += _), h = l > h ? 0 : Lf(h); l < h; )
            t[l++] = s;
          return t;
        }
        function hd(t, s) {
          var l = [];
          return Ys(t, function(h, _, S) {
            s(h, _, S) && l.push(h);
          }), l;
        }
        function li(t, s, l, h, _) {
          var S = -1, O = t.length;
          for (l || (l = hm), _ || (_ = []); ++S < O; ) {
            var D = t[S];
            s > 0 && l(D) ? s > 1 ? li(D, s - 1, l, h, _) : Gr(_, D) : h || (_[_.length] = D);
          }
          return _;
        }
        var bc = Bd(), dd = Bd(!0);
        function ns(t, s) {
          return t && bc(t, s, jn);
        }
        function Lc(t, s) {
          return t && dd(t, s, jn);
        }
        function au(t, s) {
          return Br(s, function(l) {
            return Cs(t[l]);
          });
        }
        function Co(t, s) {
          s = Ks(s, t);
          for (var l = 0, h = s.length; t != null && l < h; )
            t = t[rs(s[l++])];
          return l && l == h ? t : n;
        }
        function fd(t, s, l) {
          var h = s(t);
          return tt(t) ? h : Gr(h, l(t));
        }
        function xi(t) {
          return t == null ? t === n ? Vi : zi : ts && ts in Dt(t) ? sm(t) : vm(t);
        }
        function Ic(t, s) {
          return t > s;
        }
        function A_(t, s) {
          return t != null && _t.call(t, s);
        }
        function C_(t, s) {
          return t != null && s in Dt(t);
        }
        function O_(t, s, l) {
          return t >= y(s, l) && t < f(s, l);
        }
        function Nc(t, s, l) {
          for (var h = l ? Ra : Ms, _ = t[0].length, S = t.length, O = S, D = q(S), F = 1 / 0, Q = []; O--; ) {
            var te = t[O];
            O && s && (te = Bt(te, Kt(s))), F = y(te.length, F), D[O] = !l && (s || _ >= 120 && te.length >= 120) ? new So(O && te) : n;
          }
          te = t[0];
          var oe = -1, Te = D[0];
          e:
            for (; ++oe < _ && Q.length < F; ) {
              var Ne = te[oe], Ge = s ? s(Ne) : Ne;
              if (Ne = l || Ne !== 0 ? Ne : 0, !(Te ? co(Te, Ge) : h(Q, Ge, l))) {
                for (O = S; --O; ) {
                  var at = D[O];
                  if (!(at ? co(at, Ge) : h(t[O], Ge, l)))
                    continue e;
                }
                Te && Te.push(Ge), Q.push(Ne);
              }
            }
          return Q;
        }
        function b_(t, s, l, h) {
          return ns(t, function(_, S, O) {
            s(h, l(_), S, O);
          }), h;
        }
        function Ka(t, s, l) {
          s = Ks(s, t), t = ef(t, s);
          var h = t == null ? t : t[rs(Ir(s))];
          return h == null ? n : Qt(h, t, l);
        }
        function pd(t) {
          return yn(t) && xi(t) == je;
        }
        function L_(t) {
          return yn(t) && xi(t) == _n;
        }
        function I_(t) {
          return yn(t) && xi(t) == Pn;
        }
        function $a(t, s, l, h, _) {
          return t === s ? !0 : t == null || s == null || !yn(t) && !yn(s) ? t !== t && s !== s : N_(t, s, l, h, $a, _);
        }
        function N_(t, s, l, h, _, S) {
          var O = tt(t), D = tt(s), F = O ? Me : Ti(t), Q = D ? Me : Ti(s);
          F = F == je ? an : F, Q = Q == je ? an : Q;
          var te = F == an, oe = Q == an, Te = F == Q;
          if (Te && Js(t)) {
            if (!Js(s))
              return !1;
            O = !0, te = !1;
          }
          if (Te && !te)
            return S || (S = new Vr()), O || oa(t) ? qd(t, s, l, h, _, S) : im(t, s, F, l, h, _, S);
          if (!(l & M)) {
            var Ne = te && _t.call(t, "__wrapped__"), Ge = oe && _t.call(s, "__wrapped__");
            if (Ne || Ge) {
              var at = Ne ? t.value() : t, ke = Ge ? s.value() : s;
              return S || (S = new Vr()), _(at, ke, l, h, S);
            }
          }
          return Te ? (S || (S = new Vr()), rm(t, s, l, h, _, S)) : !1;
        }
        function D_(t) {
          return yn(t) && Ti(t) == gn;
        }
        function Dc(t, s, l, h) {
          var _ = l.length, S = _, O = !h;
          if (t == null)
            return !S;
          for (t = Dt(t); _--; ) {
            var D = l[_];
            if (O && D[2] ? D[1] !== t[D[0]] : !(D[0] in t))
              return !1;
          }
          for (; ++_ < S; ) {
            D = l[_];
            var F = D[0], Q = t[F], te = D[1];
            if (O && D[2]) {
              if (Q === n && !(F in t))
                return !1;
            } else {
              var oe = new Vr();
              if (h)
                var Te = h(Q, te, F, t, s, oe);
              if (!(Te === n ? $a(te, Q, M | G, h, oe) : Te))
                return !1;
            }
          }
          return !0;
        }
        function gd(t) {
          if (!hn(t) || fm(t))
            return !1;
          var s = Cs(t) ? Ur : si;
          return s.test(bo(t));
        }
        function R_(t) {
          return yn(t) && xi(t) == Kn;
        }
        function P_(t) {
          return yn(t) && Ti(t) == jt;
        }
        function x_(t) {
          return yn(t) && Au(t.length) && !!et[xi(t)];
        }
        function _d(t) {
          return typeof t == "function" ? t : t == null ? ji : typeof t == "object" ? tt(t) ? yd(t[0], t[1]) : vd(t) : kf(t);
        }
        function Rc(t) {
          if (!Xa(t))
            return c(t);
          var s = [];
          for (var l in Dt(t))
            _t.call(t, l) && l != "constructor" && s.push(l);
          return s;
        }
        function F_(t) {
          if (!hn(t))
            return mm(t);
          var s = Xa(t), l = [];
          for (var h in t)
            h == "constructor" && (s || !_t.call(t, h)) || l.push(h);
          return l;
        }
        function Pc(t, s) {
          return t < s;
        }
        function md(t, s) {
          var l = -1, h = $i(t) ? q(t.length) : [];
          return Ys(t, function(_, S, O) {
            h[++l] = s(_, S, O);
          }), h;
        }
        function vd(t) {
          var s = Kc(t);
          return s.length == 1 && s[0][2] ? Xd(s[0][0], s[0][1]) : function(l) {
            return l === t || Dc(l, t, s);
          };
        }
        function yd(t, s) {
          return Jc(t) && jd(s) ? Xd(rs(t), s) : function(l) {
            var h = oh(l, t);
            return h === n && h === s ? ah(l, t) : $a(s, h, M | G);
          };
        }
        function lu(t, s, l, h, _) {
          t !== s && bc(s, function(S, O) {
            if (_ || (_ = new Vr()), hn(S))
              M_(t, s, O, l, lu, h, _);
            else {
              var D = h ? h(Xc(t, O), S, O + "", t, s, _) : n;
              D === n && (D = S), Cc(t, O, D);
            }
          }, Ji);
        }
        function M_(t, s, l, h, _, S, O) {
          var D = Xc(t, l), F = Xc(s, l), Q = O.get(F);
          if (Q) {
            Cc(t, l, Q);
            return;
          }
          var te = S ? S(D, F, l + "", t, s, O) : n, oe = te === n;
          if (oe) {
            var Te = tt(F), Ne = !Te && Js(F), Ge = !Te && !Ne && oa(F);
            te = F, Te || Ne || Ge ? tt(D) ? te = D : In(D) ? te = Ki(D) : Ne ? (oe = !1, te = Dd(F, !0)) : Ge ? (oe = !1, te = Rd(F, !0)) : te = [] : el(F) || Lo(F) ? (te = D, Lo(D) ? te = If(D) : (!hn(D) || Cs(D)) && (te = Jd(F))) : oe = !1;
          }
          oe && (O.set(F, te), _(te, F, h, S, O), O.delete(F)), Cc(t, l, te);
        }
        function Ed(t, s) {
          var l = t.length;
          if (l)
            return s += s < 0 ? l : 0, As(s, l) ? t[s] : n;
        }
        function Td(t, s, l) {
          s.length ? s = Bt(s, function(S) {
            return tt(S) ? function(O) {
              return Co(O, S.length === 1 ? S[0] : S);
            } : S;
          }) : s = [ji];
          var h = -1;
          s = Bt(s, Kt(Be()));
          var _ = md(t, function(S, O, D) {
            var F = Bt(s, function(Q) {
              return Q(S);
            });
            return { criteria: F, index: ++h, value: S };
          });
          return Ma(_, function(S, O) {
            return $_(S, O, l);
          });
        }
        function B_(t, s) {
          return wd(t, s, function(l, h) {
            return ah(t, h);
          });
        }
        function wd(t, s, l) {
          for (var h = -1, _ = s.length, S = {}; ++h < _; ) {
            var O = s[h], D = Co(t, O);
            l(D, O) && Ja(S, Ks(O, t), D);
          }
          return S;
        }
        function G_(t) {
          return function(s) {
            return Co(s, t);
          };
        }
        function xc(t, s, l, h) {
          var _ = h ? uo : Bs, S = -1, O = s.length, D = t;
          for (t === s && (s = Ki(s)), l && (D = Bt(t, Kt(l))); ++S < O; )
            for (var F = 0, Q = s[S], te = l ? l(Q) : Q; (F = _(D, te, F, h)) > -1; )
              D !== t && _o.call(D, F, 1), _o.call(t, F, 1);
          return t;
        }
        function Sd(t, s) {
          for (var l = t ? s.length : 0, h = l - 1; l--; ) {
            var _ = s[l];
            if (l == h || _ !== S) {
              var S = _;
              As(_) ? _o.call(t, _, 1) : Gc(t, _);
            }
          }
          return t;
        }
        function Fc(t, s) {
          return t + yo(H() * (s - t + 1));
        }
        function k_(t, s, l, h) {
          for (var _ = -1, S = f(vo((s - t) / (l || 1)), 0), O = q(S); S--; )
            O[h ? S : ++_] = t, t += l;
          return O;
        }
        function Mc(t, s) {
          var l = "";
          if (!t || s < 1 || s > Ee)
            return l;
          do
            s % 2 && (l += t), s = yo(s / 2), s && (t += t);
          while (s);
          return l;
        }
        function ct(t, s) {
          return Qc(Qd(t, s, ji), t + "");
        }
        function U_(t) {
          return od(aa(t));
        }
        function z_(t, s) {
          var l = aa(t);
          return vu(l, Ao(s, 0, l.length));
        }
        function Ja(t, s, l, h) {
          if (!hn(t))
            return t;
          s = Ks(s, t);
          for (var _ = -1, S = s.length, O = S - 1, D = t; D != null && ++_ < S; ) {
            var F = rs(s[_]), Q = l;
            if (F === "__proto__" || F === "constructor" || F === "prototype")
              return t;
            if (_ != O) {
              var te = D[F];
              Q = h ? h(te, F, D) : n, Q === n && (Q = hn(te) ? te : As(s[_ + 1]) ? [] : {});
            }
            Ya(D, F, Q), D = D[F];
          }
          return t;
        }
        var Ad = Wn ? function(t, s) {
          return Wn.set(t, s), t;
        } : ji, V_ = mo ? function(t, s) {
          return mo(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: uh(s),
            writable: !0
          });
        } : ji;
        function W_(t) {
          return vu(aa(t));
        }
        function Lr(t, s, l) {
          var h = -1, _ = t.length;
          s < 0 && (s = -s > _ ? 0 : _ + s), l = l > _ ? _ : l, l < 0 && (l += _), _ = s > l ? 0 : l - s >>> 0, s >>>= 0;
          for (var S = q(_); ++h < _; )
            S[h] = t[h + s];
          return S;
        }
        function Z_(t, s) {
          var l;
          return Ys(t, function(h, _, S) {
            return l = s(h, _, S), !l;
          }), !!l;
        }
        function uu(t, s, l) {
          var h = 0, _ = t == null ? h : t.length;
          if (typeof s == "number" && s === s && _ <= Yt) {
            for (; h < _; ) {
              var S = h + _ >>> 1, O = t[S];
              O !== null && !ur(O) && (l ? O <= s : O < s) ? h = S + 1 : _ = S;
            }
            return _;
          }
          return Bc(t, s, ji, l);
        }
        function Bc(t, s, l, h) {
          var _ = 0, S = t == null ? 0 : t.length;
          if (S === 0)
            return 0;
          s = l(s);
          for (var O = s !== s, D = s === null, F = ur(s), Q = s === n; _ < S; ) {
            var te = yo((_ + S) / 2), oe = l(t[te]), Te = oe !== n, Ne = oe === null, Ge = oe === oe, at = ur(oe);
            if (O)
              var ke = h || Ge;
            else Q ? ke = Ge && (h || Te) : D ? ke = Ge && Te && (h || !Ne) : F ? ke = Ge && Te && !Ne && (h || !at) : Ne || at ? ke = !1 : ke = h ? oe <= s : oe < s;
            ke ? _ = te + 1 : S = te;
          }
          return y(S, kt);
        }
        function Cd(t, s) {
          for (var l = -1, h = t.length, _ = 0, S = []; ++l < h; ) {
            var O = t[l], D = s ? s(O) : O;
            if (!l || !Wr(D, F)) {
              var F = D;
              S[_++] = O === 0 ? 0 : O;
            }
          }
          return S;
        }
        function Od(t) {
          return typeof t == "number" ? t : ur(t) ? Le : +t;
        }
        function lr(t) {
          if (typeof t == "string")
            return t;
          if (tt(t))
            return Bt(t, lr) + "";
          if (ur(t))
            return To ? To.call(t) : "";
          var s = t + "";
          return s == "0" && 1 / t == -Oe ? "-0" : s;
        }
        function qs(t, s, l) {
          var h = -1, _ = Ms, S = t.length, O = !0, D = [], F = D;
          if (l)
            O = !1, _ = Ra;
          else if (S >= d) {
            var Q = s ? null : tm(t);
            if (Q)
              return qi(Q);
            O = !1, _ = co, F = new So();
          } else
            F = s ? [] : D;
          e:
            for (; ++h < S; ) {
              var te = t[h], oe = s ? s(te) : te;
              if (te = l || te !== 0 ? te : 0, O && oe === oe) {
                for (var Te = F.length; Te--; )
                  if (F[Te] === oe)
                    continue e;
                s && F.push(oe), D.push(te);
              } else _(F, oe, l) || (F !== D && F.push(oe), D.push(te));
            }
          return D;
        }
        function Gc(t, s) {
          return s = Ks(s, t), t = ef(t, s), t == null || delete t[rs(Ir(s))];
        }
        function bd(t, s, l, h) {
          return Ja(t, s, l(Co(t, s)), h);
        }
        function cu(t, s, l, h) {
          for (var _ = t.length, S = h ? _ : -1; (h ? S-- : ++S < _) && s(t[S], S, t); )
            ;
          return l ? Lr(t, h ? 0 : S, h ? S + 1 : _) : Lr(t, h ? S + 1 : 0, h ? _ : S);
        }
        function Ld(t, s) {
          var l = t;
          return l instanceof ut && (l = l.value()), Pa(s, function(h, _) {
            return _.func.apply(_.thisArg, Gr([h], _.args));
          }, l);
        }
        function kc(t, s, l) {
          var h = t.length;
          if (h < 2)
            return h ? qs(t[0]) : [];
          for (var _ = -1, S = q(h); ++_ < h; )
            for (var O = t[_], D = -1; ++D < h; )
              D != _ && (S[_] = qa(S[_] || O, t[D], s, l));
          return qs(li(S, 1), s, l);
        }
        function Id(t, s, l) {
          for (var h = -1, _ = t.length, S = s.length, O = {}; ++h < _; ) {
            var D = h < S ? s[h] : n;
            l(O, t[h], D);
          }
          return O;
        }
        function Uc(t) {
          return In(t) ? t : [];
        }
        function zc(t) {
          return typeof t == "function" ? t : ji;
        }
        function Ks(t, s) {
          return tt(t) ? t : Jc(t, s) ? [t] : sf(Rt(t));
        }
        var H_ = ct;
        function $s(t, s, l) {
          var h = t.length;
          return l = l === n ? h : l, !s && l >= h ? t : Lr(t, s, l);
        }
        var Nd = nu || function(t) {
          return Vn.clearTimeout(t);
        };
        function Dd(t, s) {
          if (s)
            return t.slice();
          var l = t.length, h = eu ? eu(l) : new t.constructor(l);
          return t.copy(h), h;
        }
        function Vc(t) {
          var s = new t.constructor(t.byteLength);
          return new es(s).set(new es(t)), s;
        }
        function Y_(t, s) {
          var l = s ? Vc(t.buffer) : t.buffer;
          return new t.constructor(l, t.byteOffset, t.byteLength);
        }
        function q_(t) {
          var s = new t.constructor(t.source, ot.exec(t));
          return s.lastIndex = t.lastIndex, s;
        }
        function K_(t) {
          return Vt ? Dt(Vt.call(t)) : {};
        }
        function Rd(t, s) {
          var l = s ? Vc(t.buffer) : t.buffer;
          return new t.constructor(l, t.byteOffset, t.length);
        }
        function Pd(t, s) {
          if (t !== s) {
            var l = t !== n, h = t === null, _ = t === t, S = ur(t), O = s !== n, D = s === null, F = s === s, Q = ur(s);
            if (!D && !Q && !S && t > s || S && O && F && !D && !Q || h && O && F || !l && F || !_)
              return 1;
            if (!h && !S && !Q && t < s || Q && l && _ && !h && !S || D && l && _ || !O && _ || !F)
              return -1;
          }
          return 0;
        }
        function $_(t, s, l) {
          for (var h = -1, _ = t.criteria, S = s.criteria, O = _.length, D = l.length; ++h < O; ) {
            var F = Pd(_[h], S[h]);
            if (F) {
              if (h >= D)
                return F;
              var Q = l[h];
              return F * (Q == "desc" ? -1 : 1);
            }
          }
          return t.index - s.index;
        }
        function xd(t, s, l, h) {
          for (var _ = -1, S = t.length, O = l.length, D = -1, F = s.length, Q = f(S - O, 0), te = q(F + Q), oe = !h; ++D < F; )
            te[D] = s[D];
          for (; ++_ < O; )
            (oe || _ < S) && (te[l[_]] = t[_]);
          for (; Q--; )
            te[D++] = t[_++];
          return te;
        }
        function Fd(t, s, l, h) {
          for (var _ = -1, S = t.length, O = -1, D = l.length, F = -1, Q = s.length, te = f(S - D, 0), oe = q(te + Q), Te = !h; ++_ < te; )
            oe[_] = t[_];
          for (var Ne = _; ++F < Q; )
            oe[Ne + F] = s[F];
          for (; ++O < D; )
            (Te || _ < S) && (oe[Ne + l[O]] = t[_++]);
          return oe;
        }
        function Ki(t, s) {
          var l = -1, h = t.length;
          for (s || (s = q(h)); ++l < h; )
            s[l] = t[l];
          return s;
        }
        function is(t, s, l, h) {
          var _ = !l;
          l || (l = {});
          for (var S = -1, O = s.length; ++S < O; ) {
            var D = s[S], F = h ? h(l[D], t[D], D, l, t) : n;
            F === n && (F = t[D]), _ ? Ts(l, D, F) : Ya(l, D, F);
          }
          return l;
        }
        function J_(t, s) {
          return is(t, $c(t), s);
        }
        function j_(t, s) {
          return is(t, Kd(t), s);
        }
        function hu(t, s) {
          return function(l, h) {
            var _ = tt(l) ? hc : y_, S = s ? s() : {};
            return _(l, t, Be(h, 2), S);
          };
        }
        function ia(t) {
          return ct(function(s, l) {
            var h = -1, _ = l.length, S = _ > 1 ? l[_ - 1] : n, O = _ > 2 ? l[2] : n;
            for (S = t.length > 3 && typeof S == "function" ? (_--, S) : n, O && Fi(l[0], l[1], O) && (S = _ < 3 ? n : S, _ = 1), s = Dt(s); ++h < _; ) {
              var D = l[h];
              D && t(s, D, h, S);
            }
            return s;
          });
        }
        function Md(t, s) {
          return function(l, h) {
            if (l == null)
              return l;
            if (!$i(l))
              return t(l, h);
            for (var _ = l.length, S = s ? _ : -1, O = Dt(l); (s ? S-- : ++S < _) && h(O[S], S, O) !== !1; )
              ;
            return l;
          };
        }
        function Bd(t) {
          return function(s, l, h) {
            for (var _ = -1, S = Dt(s), O = h(s), D = O.length; D--; ) {
              var F = O[t ? D : ++_];
              if (l(S[F], F, S) === !1)
                break;
            }
            return s;
          };
        }
        function X_(t, s, l) {
          var h = s & ee, _ = ja(t);
          function S() {
            var O = this && this !== Vn && this instanceof S ? _ : t;
            return O.apply(h ? l : this, arguments);
          }
          return S;
        }
        function Gd(t) {
          return function(s) {
            s = Rt(s);
            var l = ks(s) ? yi(s) : n, h = l ? l[0] : s.charAt(0), _ = l ? $s(l, 1).join("") : s.slice(1);
            return h[t]() + _;
          };
        }
        function ra(t) {
          return function(s) {
            return Pa(Bf(Mf(s).replace(xt, "")), t, "");
          };
        }
        function ja(t) {
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
            var l = Hs(t.prototype), h = t.apply(l, s);
            return hn(h) ? h : l;
          };
        }
        function Q_(t, s, l) {
          var h = ja(t);
          function _() {
            for (var S = arguments.length, O = q(S), D = S, F = sa(_); D--; )
              O[D] = arguments[D];
            var Q = S < 3 && O[0] !== F && O[S - 1] !== F ? [] : Qr(O, F);
            if (S -= Q.length, S < l)
              return Wd(
                t,
                s,
                du,
                _.placeholder,
                n,
                O,
                Q,
                n,
                n,
                l - S
              );
            var te = this && this !== Vn && this instanceof _ ? h : t;
            return Qt(te, this, O);
          }
          return _;
        }
        function kd(t) {
          return function(s, l, h) {
            var _ = Dt(s);
            if (!$i(s)) {
              var S = Be(l, 3);
              s = jn(s), l = function(D) {
                return S(_[D], D, _);
              };
            }
            var O = t(s, l, h);
            return O > -1 ? _[S ? s[O] : O] : n;
          };
        }
        function Ud(t) {
          return Ss(function(s) {
            var l = s.length, h = l, _ = Ei.prototype.thru;
            for (t && s.reverse(); h--; ) {
              var S = s[h];
              if (typeof S != "function")
                throw new ai(g);
              if (_ && !O && _u(S) == "wrapper")
                var O = new Ei([], !0);
            }
            for (h = O ? h : l; ++h < l; ) {
              S = s[h];
              var D = _u(S), F = D == "wrapper" ? qc(S) : n;
              F && jc(F[0]) && F[1] == (_e | K | U | be) && !F[4].length && F[9] == 1 ? O = O[_u(F[0])].apply(O, F[3]) : O = S.length == 1 && jc(S) ? O[D]() : O.thru(S);
            }
            return function() {
              var Q = arguments, te = Q[0];
              if (O && Q.length == 1 && tt(te))
                return O.plant(te).value();
              for (var oe = 0, Te = l ? s[oe].apply(this, Q) : te; ++oe < l; )
                Te = s[oe].call(this, Te);
              return Te;
            };
          });
        }
        function du(t, s, l, h, _, S, O, D, F, Q) {
          var te = s & _e, oe = s & ee, Te = s & Z, Ne = s & (K | R), Ge = s & ce, at = Te ? n : ja(t);
          function ke() {
            for (var dt = arguments.length, mt = q(dt), cr = dt; cr--; )
              mt[cr] = arguments[cr];
            if (Ne)
              var Mi = sa(ke), hr = Gs(mt, Mi);
            if (h && (mt = xd(mt, h, _, Ne)), S && (mt = Fd(mt, S, O, Ne)), dt -= hr, Ne && dt < Q) {
              var Nn = Qr(mt, Mi);
              return Wd(
                t,
                s,
                du,
                ke.placeholder,
                l,
                mt,
                Nn,
                D,
                F,
                Q - dt
              );
            }
            var Zr = oe ? l : this, bs = Te ? Zr[t] : t;
            return dt = mt.length, D ? mt = ym(mt, D) : Ge && dt > 1 && mt.reverse(), te && F < dt && (mt.length = F), this && this !== Vn && this instanceof ke && (bs = at || ja(bs)), bs.apply(Zr, mt);
          }
          return ke;
        }
        function zd(t, s) {
          return function(l, h) {
            return b_(l, t, s(h), {});
          };
        }
        function fu(t, s) {
          return function(l, h) {
            var _;
            if (l === n && h === n)
              return s;
            if (l !== n && (_ = l), h !== n) {
              if (_ === n)
                return h;
              typeof l == "string" || typeof h == "string" ? (l = lr(l), h = lr(h)) : (l = Od(l), h = Od(h)), _ = t(l, h);
            }
            return _;
          };
        }
        function Wc(t) {
          return Ss(function(s) {
            return s = Bt(s, Kt(Be())), ct(function(l) {
              var h = this;
              return t(s, function(_) {
                return Qt(_, h, l);
              });
            });
          });
        }
        function pu(t, s) {
          s = s === n ? " " : lr(s);
          var l = s.length;
          if (l < 2)
            return l ? Mc(s, t) : s;
          var h = Mc(s, vo(t / vi(s)));
          return ks(s) ? $s(yi(h), 0, t).join("") : h.slice(0, t);
        }
        function em(t, s, l, h) {
          var _ = s & ee, S = ja(t);
          function O() {
            for (var D = -1, F = arguments.length, Q = -1, te = h.length, oe = q(te + F), Te = this && this !== Vn && this instanceof O ? S : t; ++Q < te; )
              oe[Q] = h[Q];
            for (; F--; )
              oe[Q++] = arguments[++D];
            return Qt(Te, _ ? l : this, oe);
          }
          return O;
        }
        function Vd(t) {
          return function(s, l, h) {
            return h && typeof h != "number" && Fi(s, l, h) && (l = h = n), s = Os(s), l === n ? (l = s, s = 0) : l = Os(l), h = h === n ? s < l ? 1 : -1 : Os(h), k_(s, l, h, t);
          };
        }
        function gu(t) {
          return function(s, l) {
            return typeof s == "string" && typeof l == "string" || (s = Nr(s), l = Nr(l)), t(s, l);
          };
        }
        function Wd(t, s, l, h, _, S, O, D, F, Q) {
          var te = s & K, oe = te ? O : n, Te = te ? n : O, Ne = te ? S : n, Ge = te ? n : S;
          s |= te ? U : ue, s &= ~(te ? ue : U), s & W || (s &= -4);
          var at = [
            t,
            s,
            _,
            Ne,
            oe,
            Ge,
            Te,
            D,
            F,
            Q
          ], ke = l.apply(n, at);
          return jc(t) && tf(ke, at), ke.placeholder = h, nf(ke, t, s);
        }
        function Zc(t) {
          var s = Ln[t];
          return function(l, h) {
            if (l = Nr(l), h = h == null ? 0 : y(st(h), 292), h && r(l)) {
              var _ = (Rt(l) + "e").split("e"), S = s(_[0] + "e" + (+_[1] + h));
              return _ = (Rt(S) + "e").split("e"), +(_[0] + "e" + (+_[1] - h));
            }
            return s(l);
          };
        }
        var tm = vn && 1 / qi(new vn([, -0]))[1] == Oe ? function(t) {
          return new vn(t);
        } : dh;
        function Zd(t) {
          return function(s) {
            var l = Ti(s);
            return l == gn ? ka(s) : l == jt ? gc(s) : $l(s, t(s));
          };
        }
        function ws(t, s, l, h, _, S, O, D) {
          var F = s & Z;
          if (!F && typeof t != "function")
            throw new ai(g);
          var Q = h ? h.length : 0;
          if (Q || (s &= -97, h = _ = n), O = O === n ? O : f(st(O), 0), D = D === n ? D : st(D), Q -= _ ? _.length : 0, s & ue) {
            var te = h, oe = _;
            h = _ = n;
          }
          var Te = F ? n : qc(t), Ne = [
            t,
            s,
            l,
            h,
            _,
            te,
            oe,
            S,
            O,
            D
          ];
          if (Te && _m(Ne, Te), t = Ne[0], s = Ne[1], l = Ne[2], h = Ne[3], _ = Ne[4], D = Ne[9] = Ne[9] === n ? F ? 0 : t.length : f(Ne[9] - Q, 0), !D && s & (K | R) && (s &= -25), !s || s == ee)
            var Ge = X_(t, s, l);
          else s == K || s == R ? Ge = Q_(t, s, D) : (s == U || s == (ee | U)) && !_.length ? Ge = em(t, s, l, h) : Ge = du.apply(n, Ne);
          var at = Te ? Ad : tf;
          return nf(at(Ge, Ne), t, s);
        }
        function Hd(t, s, l, h) {
          return t === n || Wr(t, Vs[l]) && !_t.call(h, l) ? s : t;
        }
        function Yd(t, s, l, h, _, S) {
          return hn(t) && hn(s) && (S.set(s, t), lu(t, s, n, Yd, S), S.delete(s)), t;
        }
        function nm(t) {
          return el(t) ? n : t;
        }
        function qd(t, s, l, h, _, S) {
          var O = l & M, D = t.length, F = s.length;
          if (D != F && !(O && F > D))
            return !1;
          var Q = S.get(t), te = S.get(s);
          if (Q && te)
            return Q == s && te == t;
          var oe = -1, Te = !0, Ne = l & G ? new So() : n;
          for (S.set(t, s), S.set(s, t); ++oe < D; ) {
            var Ge = t[oe], at = s[oe];
            if (h)
              var ke = O ? h(at, Ge, oe, s, t, S) : h(Ge, at, oe, t, s, S);
            if (ke !== n) {
              if (ke)
                continue;
              Te = !1;
              break;
            }
            if (Ne) {
              if (!ao(s, function(dt, mt) {
                if (!co(Ne, mt) && (Ge === dt || _(Ge, dt, l, h, S)))
                  return Ne.push(mt);
              })) {
                Te = !1;
                break;
              }
            } else if (!(Ge === at || _(Ge, at, l, h, S))) {
              Te = !1;
              break;
            }
          }
          return S.delete(t), S.delete(s), Te;
        }
        function im(t, s, l, h, _, S, O) {
          switch (l) {
            case ei:
              if (t.byteLength != s.byteLength || t.byteOffset != s.byteOffset)
                return !1;
              t = t.buffer, s = s.buffer;
            case _n:
              return !(t.byteLength != s.byteLength || !S(new es(t), new es(s)));
            case pn:
            case Pn:
            case Ut:
              return Wr(+t, +s);
            case qn:
              return t.name == s.name && t.message == s.message;
            case Kn:
            case Qn:
              return t == s + "";
            case gn:
              var D = ka;
            case jt:
              var F = h & M;
              if (D || (D = qi), t.size != s.size && !F)
                return !1;
              var Q = O.get(t);
              if (Q)
                return Q == s;
              h |= G, O.set(t, s);
              var te = qd(D(t), D(s), h, _, S, O);
              return O.delete(t), te;
            case xn:
              if (Vt)
                return Vt.call(t) == Vt.call(s);
          }
          return !1;
        }
        function rm(t, s, l, h, _, S) {
          var O = l & M, D = Hc(t), F = D.length, Q = Hc(s), te = Q.length;
          if (F != te && !O)
            return !1;
          for (var oe = F; oe--; ) {
            var Te = D[oe];
            if (!(O ? Te in s : _t.call(s, Te)))
              return !1;
          }
          var Ne = S.get(t), Ge = S.get(s);
          if (Ne && Ge)
            return Ne == s && Ge == t;
          var at = !0;
          S.set(t, s), S.set(s, t);
          for (var ke = O; ++oe < F; ) {
            Te = D[oe];
            var dt = t[Te], mt = s[Te];
            if (h)
              var cr = O ? h(mt, dt, Te, s, t, S) : h(dt, mt, Te, t, s, S);
            if (!(cr === n ? dt === mt || _(dt, mt, l, h, S) : cr)) {
              at = !1;
              break;
            }
            ke || (ke = Te == "constructor");
          }
          if (at && !ke) {
            var Mi = t.constructor, hr = s.constructor;
            Mi != hr && "constructor" in t && "constructor" in s && !(typeof Mi == "function" && Mi instanceof Mi && typeof hr == "function" && hr instanceof hr) && (at = !1);
          }
          return S.delete(t), S.delete(s), at;
        }
        function Ss(t) {
          return Qc(Qd(t, n, uf), t + "");
        }
        function Hc(t) {
          return fd(t, jn, $c);
        }
        function Yc(t) {
          return fd(t, Ji, Kd);
        }
        var qc = Wn ? function(t) {
          return Wn.get(t);
        } : dh;
        function _u(t) {
          for (var s = t.name + "", l = ar[s], h = _t.call(ar, s) ? l.length : 0; h--; ) {
            var _ = l[h], S = _.func;
            if (S == null || S == t)
              return _.name;
          }
          return s;
        }
        function sa(t) {
          var s = _t.call(T, "placeholder") ? T : t;
          return s.placeholder;
        }
        function Be() {
          var t = T.iteratee || ch;
          return t = t === ch ? _d : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function mu(t, s) {
          var l = t.__data__;
          return dm(s) ? l[typeof s == "string" ? "string" : "hash"] : l.map;
        }
        function Kc(t) {
          for (var s = jn(t), l = s.length; l--; ) {
            var h = s[l], _ = t[h];
            s[l] = [h, _, jd(_)];
          }
          return s;
        }
        function Oo(t, s) {
          var l = Ko(t, s);
          return gd(l) ? l : n;
        }
        function sm(t) {
          var s = _t.call(t, ts), l = t[ts];
          try {
            t[ts] = n;
            var h = !0;
          } catch {
          }
          var _ = po.call(t);
          return h && (s ? t[ts] = l : delete t[ts]), _;
        }
        var $c = Ha ? function(t) {
          return t == null ? [] : (t = Dt(t), Br(Ha(t), function(s) {
            return Za.call(t, s);
          }));
        } : fh, Kd = Ha ? function(t) {
          for (var s = []; t; )
            Gr(s, $c(t)), t = vs(t);
          return s;
        } : fh, Ti = xi;
        (Se && Ti(new Se(new ArrayBuffer(1))) != ei || Pe && Ti(new Pe()) != gn || it && Ti(it.resolve()) != ln || vn && Ti(new vn()) != jt || en && Ti(new en()) != zn) && (Ti = function(t) {
          var s = xi(t), l = s == an ? t.constructor : n, h = l ? bo(l) : "";
          if (h)
            switch (h) {
              case Ec:
                return ei;
              case Tc:
                return gn;
              case wc:
                return ln;
              case ru:
                return jt;
              case Sc:
                return zn;
            }
          return s;
        });
        function om(t, s, l) {
          for (var h = -1, _ = l.length; ++h < _; ) {
            var S = l[h], O = S.size;
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
        function am(t) {
          var s = t.match(ri);
          return s ? s[1].split(Hi) : [];
        }
        function $d(t, s, l) {
          s = Ks(s, t);
          for (var h = -1, _ = s.length, S = !1; ++h < _; ) {
            var O = rs(s[h]);
            if (!(S = t != null && l(t, O)))
              break;
            t = t[O];
          }
          return S || ++h != _ ? S : (_ = t == null ? 0 : t.length, !!_ && Au(_) && As(O, _) && (tt(t) || Lo(t)));
        }
        function lm(t) {
          var s = t.length, l = new t.constructor(s);
          return s && typeof t[0] == "string" && _t.call(t, "index") && (l.index = t.index, l.input = t.input), l;
        }
        function Jd(t) {
          return typeof t.constructor == "function" && !Xa(t) ? Hs(vs(t)) : {};
        }
        function um(t, s, l) {
          var h = t.constructor;
          switch (s) {
            case _n:
              return Vc(t);
            case pn:
            case Pn:
              return new h(+t);
            case ei:
              return Y_(t, l);
            case Oi:
            case bi:
            case di:
            case Fn:
            case Wi:
            case fi:
            case ti:
            case An:
            case ni:
              return Rd(t, l);
            case gn:
              return new h();
            case Ut:
            case Qn:
              return new h(t);
            case Kn:
              return q_(t);
            case jt:
              return new h();
            case xn:
              return K_(t);
          }
        }
        function cm(t, s) {
          var l = s.length;
          if (!l)
            return t;
          var h = l - 1;
          return s[h] = (l > 1 ? "& " : "") + s[h], s = s.join(l > 2 ? ", " : " "), t.replace(me, `{
/* [wrapped with ` + s + `] */
`);
        }
        function hm(t) {
          return tt(t) || Lo(t) || !!(tu && t && t[tu]);
        }
        function As(t, s) {
          var l = typeof t;
          return s = s ?? Ee, !!s && (l == "number" || l != "symbol" && bn.test(t)) && t > -1 && t % 1 == 0 && t < s;
        }
        function Fi(t, s, l) {
          if (!hn(l))
            return !1;
          var h = typeof s;
          return (h == "number" ? $i(l) && As(s, l.length) : h == "string" && s in l) ? Wr(l[s], t) : !1;
        }
        function Jc(t, s) {
          if (tt(t))
            return !1;
          var l = typeof t;
          return l == "number" || l == "symbol" || l == "boolean" || t == null || ur(t) ? !0 : Xe.test(t) || !Re.test(t) || s != null && t in Dt(s);
        }
        function dm(t) {
          var s = typeof t;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? t !== "__proto__" : t === null;
        }
        function jc(t) {
          var s = _u(t), l = T[s];
          if (typeof l != "function" || !(s in ut.prototype))
            return !1;
          if (t === l)
            return !0;
          var h = qc(l);
          return !!h && t === h[0];
        }
        function fm(t) {
          return !!ms && ms in t;
        }
        var pm = fo ? Cs : ph;
        function Xa(t) {
          var s = t && t.constructor, l = typeof s == "function" && s.prototype || Vs;
          return t === l;
        }
        function jd(t) {
          return t === t && !hn(t);
        }
        function Xd(t, s) {
          return function(l) {
            return l == null ? !1 : l[t] === s && (s !== n || t in Dt(l));
          };
        }
        function gm(t) {
          var s = wu(t, function(h) {
            return l.size === E && l.clear(), h;
          }), l = s.cache;
          return s;
        }
        function _m(t, s) {
          var l = t[1], h = s[1], _ = l | h, S = _ < (ee | Z | _e), O = h == _e && l == K || h == _e && l == be && t[7].length <= s[8] || h == (_e | be) && s[7].length <= s[8] && l == K;
          if (!(S || O))
            return t;
          h & ee && (t[2] = s[2], _ |= l & ee ? 0 : W);
          var D = s[3];
          if (D) {
            var F = t[3];
            t[3] = F ? xd(F, D, s[4]) : D, t[4] = F ? Qr(t[3], A) : s[4];
          }
          return D = s[5], D && (F = t[5], t[5] = F ? Fd(F, D, s[6]) : D, t[6] = F ? Qr(t[5], A) : s[6]), D = s[7], D && (t[7] = D), h & _e && (t[8] = t[8] == null ? s[8] : y(t[8], s[8])), t[9] == null && (t[9] = s[9]), t[0] = s[0], t[1] = _, t;
        }
        function mm(t) {
          var s = [];
          if (t != null)
            for (var l in Dt(t))
              s.push(l);
          return s;
        }
        function vm(t) {
          return po.call(t);
        }
        function Qd(t, s, l) {
          return s = f(s === n ? t.length - 1 : s, 0), function() {
            for (var h = arguments, _ = -1, S = f(h.length - s, 0), O = q(S); ++_ < S; )
              O[_] = h[s + _];
            _ = -1;
            for (var D = q(s + 1); ++_ < s; )
              D[_] = h[_];
            return D[s] = l(O), Qt(t, this, D);
          };
        }
        function ef(t, s) {
          return s.length < 2 ? t : Co(t, Lr(s, 0, -1));
        }
        function ym(t, s) {
          for (var l = t.length, h = y(s.length, l), _ = Ki(t); h--; ) {
            var S = s[h];
            t[h] = As(S, l) ? _[S] : n;
          }
          return t;
        }
        function Xc(t, s) {
          if (!(s === "constructor" && typeof t[s] == "function") && s != "__proto__")
            return t[s];
        }
        var tf = rf(Ad), Qa = yc || function(t, s) {
          return Vn.setTimeout(t, s);
        }, Qc = rf(V_);
        function nf(t, s, l) {
          var h = s + "";
          return Qc(t, cm(h, Em(am(h), l)));
        }
        function rf(t) {
          var s = 0, l = 0;
          return function() {
            var h = I(), _ = ie - (h - l);
            if (l = h, _ > 0) {
              if (++s >= k)
                return arguments[0];
            } else
              s = 0;
            return t.apply(n, arguments);
          };
        }
        function vu(t, s) {
          var l = -1, h = t.length, _ = h - 1;
          for (s = s === n ? h : s; ++l < s; ) {
            var S = Fc(l, _), O = t[S];
            t[S] = t[l], t[l] = O;
          }
          return t.length = s, t;
        }
        var sf = gm(function(t) {
          var s = [];
          return t.charCodeAt(0) === 46 && s.push(""), t.replace(ft, function(l, h, _, S) {
            s.push(_ ? S.replace(Nt, "$1") : h || l);
          }), s;
        });
        function rs(t) {
          if (typeof t == "string" || ur(t))
            return t;
          var s = t + "";
          return s == "0" && 1 / t == -Oe ? "-0" : s;
        }
        function bo(t) {
          if (t != null) {
            try {
              return ta.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function Em(t, s) {
          return Ri(Lt, function(l) {
            var h = "_." + l[0];
            s & l[1] && !Ms(t, h) && t.push(h);
          }), t.sort();
        }
        function of(t) {
          if (t instanceof ut)
            return t.clone();
          var s = new Ei(t.__wrapped__, t.__chain__);
          return s.__actions__ = Ki(t.__actions__), s.__index__ = t.__index__, s.__values__ = t.__values__, s;
        }
        function Tm(t, s, l) {
          (l ? Fi(t, s, l) : s === n) ? s = 1 : s = f(st(s), 0);
          var h = t == null ? 0 : t.length;
          if (!h || s < 1)
            return [];
          for (var _ = 0, S = 0, O = q(vo(h / s)); _ < h; )
            O[S++] = Lr(t, _, _ += s);
          return O;
        }
        function wm(t) {
          for (var s = -1, l = t == null ? 0 : t.length, h = 0, _ = []; ++s < l; ) {
            var S = t[s];
            S && (_[h++] = S);
          }
          return _;
        }
        function Sm() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var s = q(t - 1), l = arguments[0], h = t; h--; )
            s[h - 1] = arguments[h];
          return Gr(tt(l) ? Ki(l) : [l], li(s, 1));
        }
        var Am = ct(function(t, s) {
          return In(t) ? qa(t, li(s, 1, In, !0)) : [];
        }), Cm = ct(function(t, s) {
          var l = Ir(s);
          return In(l) && (l = n), In(t) ? qa(t, li(s, 1, In, !0), Be(l, 2)) : [];
        }), Om = ct(function(t, s) {
          var l = Ir(s);
          return In(l) && (l = n), In(t) ? qa(t, li(s, 1, In, !0), n, l) : [];
        });
        function bm(t, s, l) {
          var h = t == null ? 0 : t.length;
          return h ? (s = l || s === n ? 1 : st(s), Lr(t, s < 0 ? 0 : s, h)) : [];
        }
        function Lm(t, s, l) {
          var h = t == null ? 0 : t.length;
          return h ? (s = l || s === n ? 1 : st(s), s = h - s, Lr(t, 0, s < 0 ? 0 : s)) : [];
        }
        function Im(t, s) {
          return t && t.length ? cu(t, Be(s, 3), !0, !0) : [];
        }
        function Nm(t, s) {
          return t && t.length ? cu(t, Be(s, 3), !0) : [];
        }
        function Dm(t, s, l, h) {
          var _ = t == null ? 0 : t.length;
          return _ ? (l && typeof l != "number" && Fi(t, s, l) && (l = 0, h = _), S_(t, s, l, h)) : [];
        }
        function af(t, s, l) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = l == null ? 0 : st(l);
          return _ < 0 && (_ = f(h + _, 0)), Ar(t, Be(s, 3), _);
        }
        function lf(t, s, l) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = h - 1;
          return l !== n && (_ = st(l), _ = l < 0 ? f(h + _, 0) : y(_, h - 1)), Ar(t, Be(s, 3), _, !0);
        }
        function uf(t) {
          var s = t == null ? 0 : t.length;
          return s ? li(t, 1) : [];
        }
        function Rm(t) {
          var s = t == null ? 0 : t.length;
          return s ? li(t, Oe) : [];
        }
        function Pm(t, s) {
          var l = t == null ? 0 : t.length;
          return l ? (s = s === n ? 1 : st(s), li(t, s)) : [];
        }
        function xm(t) {
          for (var s = -1, l = t == null ? 0 : t.length, h = {}; ++s < l; ) {
            var _ = t[s];
            h[_[0]] = _[1];
          }
          return h;
        }
        function cf(t) {
          return t && t.length ? t[0] : n;
        }
        function Fm(t, s, l) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = l == null ? 0 : st(l);
          return _ < 0 && (_ = f(h + _, 0)), Bs(t, s, _);
        }
        function Mm(t) {
          var s = t == null ? 0 : t.length;
          return s ? Lr(t, 0, -1) : [];
        }
        var Bm = ct(function(t) {
          var s = Bt(t, Uc);
          return s.length && s[0] === t[0] ? Nc(s) : [];
        }), Gm = ct(function(t) {
          var s = Ir(t), l = Bt(t, Uc);
          return s === Ir(l) ? s = n : l.pop(), l.length && l[0] === t[0] ? Nc(l, Be(s, 2)) : [];
        }), km = ct(function(t) {
          var s = Ir(t), l = Bt(t, Uc);
          return s = typeof s == "function" ? s : n, s && l.pop(), l.length && l[0] === t[0] ? Nc(l, n, s) : [];
        });
        function Um(t, s) {
          return t == null ? "" : a.call(t, s);
        }
        function Ir(t) {
          var s = t == null ? 0 : t.length;
          return s ? t[s - 1] : n;
        }
        function zm(t, s, l) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = h;
          return l !== n && (_ = st(l), _ = _ < 0 ? f(h + _, 0) : y(_, h - 1)), s === s ? _c(t, s, _) : Ar(t, Pi, _, !0);
        }
        function Vm(t, s) {
          return t && t.length ? Ed(t, st(s)) : n;
        }
        var Wm = ct(hf);
        function hf(t, s) {
          return t && t.length && s && s.length ? xc(t, s) : t;
        }
        function Zm(t, s, l) {
          return t && t.length && s && s.length ? xc(t, s, Be(l, 2)) : t;
        }
        function Hm(t, s, l) {
          return t && t.length && s && s.length ? xc(t, s, n, l) : t;
        }
        var Ym = Ss(function(t, s) {
          var l = t == null ? 0 : t.length, h = Oc(t, s);
          return Sd(t, Bt(s, function(_) {
            return As(_, l) ? +_ : _;
          }).sort(Pd)), h;
        });
        function qm(t, s) {
          var l = [];
          if (!(t && t.length))
            return l;
          var h = -1, _ = [], S = t.length;
          for (s = Be(s, 3); ++h < S; ) {
            var O = t[h];
            s(O, h, t) && (l.push(O), _.push(h));
          }
          return Sd(t, _), l;
        }
        function eh(t) {
          return t == null ? t : re.call(t);
        }
        function Km(t, s, l) {
          var h = t == null ? 0 : t.length;
          return h ? (l && typeof l != "number" && Fi(t, s, l) ? (s = 0, l = h) : (s = s == null ? 0 : st(s), l = l === n ? h : st(l)), Lr(t, s, l)) : [];
        }
        function $m(t, s) {
          return uu(t, s);
        }
        function Jm(t, s, l) {
          return Bc(t, s, Be(l, 2));
        }
        function jm(t, s) {
          var l = t == null ? 0 : t.length;
          if (l) {
            var h = uu(t, s);
            if (h < l && Wr(t[h], s))
              return h;
          }
          return -1;
        }
        function Xm(t, s) {
          return uu(t, s, !0);
        }
        function Qm(t, s, l) {
          return Bc(t, s, Be(l, 2), !0);
        }
        function ev(t, s) {
          var l = t == null ? 0 : t.length;
          if (l) {
            var h = uu(t, s, !0) - 1;
            if (Wr(t[h], s))
              return h;
          }
          return -1;
        }
        function tv(t) {
          return t && t.length ? Cd(t) : [];
        }
        function nv(t, s) {
          return t && t.length ? Cd(t, Be(s, 2)) : [];
        }
        function iv(t) {
          var s = t == null ? 0 : t.length;
          return s ? Lr(t, 1, s) : [];
        }
        function rv(t, s, l) {
          return t && t.length ? (s = l || s === n ? 1 : st(s), Lr(t, 0, s < 0 ? 0 : s)) : [];
        }
        function sv(t, s, l) {
          var h = t == null ? 0 : t.length;
          return h ? (s = l || s === n ? 1 : st(s), s = h - s, Lr(t, s < 0 ? 0 : s, h)) : [];
        }
        function ov(t, s) {
          return t && t.length ? cu(t, Be(s, 3), !1, !0) : [];
        }
        function av(t, s) {
          return t && t.length ? cu(t, Be(s, 3)) : [];
        }
        var lv = ct(function(t) {
          return qs(li(t, 1, In, !0));
        }), uv = ct(function(t) {
          var s = Ir(t);
          return In(s) && (s = n), qs(li(t, 1, In, !0), Be(s, 2));
        }), cv = ct(function(t) {
          var s = Ir(t);
          return s = typeof s == "function" ? s : n, qs(li(t, 1, In, !0), n, s);
        });
        function hv(t) {
          return t && t.length ? qs(t) : [];
        }
        function dv(t, s) {
          return t && t.length ? qs(t, Be(s, 2)) : [];
        }
        function fv(t, s) {
          return s = typeof s == "function" ? s : n, t && t.length ? qs(t, n, s) : [];
        }
        function th(t) {
          if (!(t && t.length))
            return [];
          var s = 0;
          return t = Br(t, function(l) {
            if (In(l))
              return s = f(l.length, s), !0;
          }), Ga(s, function(l) {
            return Bt(t, Yo(l));
          });
        }
        function df(t, s) {
          if (!(t && t.length))
            return [];
          var l = th(t);
          return s == null ? l : Bt(l, function(h) {
            return Qt(s, n, h);
          });
        }
        var pv = ct(function(t, s) {
          return In(t) ? qa(t, s) : [];
        }), gv = ct(function(t) {
          return kc(Br(t, In));
        }), _v = ct(function(t) {
          var s = Ir(t);
          return In(s) && (s = n), kc(Br(t, In), Be(s, 2));
        }), mv = ct(function(t) {
          var s = Ir(t);
          return s = typeof s == "function" ? s : n, kc(Br(t, In), n, s);
        }), vv = ct(th);
        function yv(t, s) {
          return Id(t || [], s || [], Ya);
        }
        function Ev(t, s) {
          return Id(t || [], s || [], Ja);
        }
        var Tv = ct(function(t) {
          var s = t.length, l = s > 1 ? t[s - 1] : n;
          return l = typeof l == "function" ? (t.pop(), l) : n, df(t, l);
        });
        function ff(t) {
          var s = T(t);
          return s.__chain__ = !0, s;
        }
        function wv(t, s) {
          return s(t), t;
        }
        function yu(t, s) {
          return s(t);
        }
        var Sv = Ss(function(t) {
          var s = t.length, l = s ? t[0] : 0, h = this.__wrapped__, _ = function(S) {
            return Oc(S, t);
          };
          return s > 1 || this.__actions__.length || !(h instanceof ut) || !As(l) ? this.thru(_) : (h = h.slice(l, +l + (s ? 1 : 0)), h.__actions__.push({
            func: yu,
            args: [_],
            thisArg: n
          }), new Ei(h, this.__chain__).thru(function(S) {
            return s && !S.length && S.push(n), S;
          }));
        });
        function Av() {
          return ff(this);
        }
        function Cv() {
          return new Ei(this.value(), this.__chain__);
        }
        function Ov() {
          this.__values__ === n && (this.__values__ = bf(this.value()));
          var t = this.__index__ >= this.__values__.length, s = t ? n : this.__values__[this.__index__++];
          return { done: t, value: s };
        }
        function bv() {
          return this;
        }
        function Lv(t) {
          for (var s, l = this; l instanceof na; ) {
            var h = of(l);
            h.__index__ = 0, h.__values__ = n, s ? _.__wrapped__ = h : s = h;
            var _ = h;
            l = l.__wrapped__;
          }
          return _.__wrapped__ = t, s;
        }
        function Iv() {
          var t = this.__wrapped__;
          if (t instanceof ut) {
            var s = t;
            return this.__actions__.length && (s = new ut(this)), s = s.reverse(), s.__actions__.push({
              func: yu,
              args: [eh],
              thisArg: n
            }), new Ei(s, this.__chain__);
          }
          return this.thru(eh);
        }
        function Nv() {
          return Ld(this.__wrapped__, this.__actions__);
        }
        var Dv = hu(function(t, s, l) {
          _t.call(t, l) ? ++t[l] : Ts(t, l, 1);
        });
        function Rv(t, s, l) {
          var h = tt(t) ? Da : w_;
          return l && Fi(t, s, l) && (s = n), h(t, Be(s, 3));
        }
        function Pv(t, s) {
          var l = tt(t) ? Br : hd;
          return l(t, Be(s, 3));
        }
        var xv = kd(af), Fv = kd(lf);
        function Mv(t, s) {
          return li(Eu(t, s), 1);
        }
        function Bv(t, s) {
          return li(Eu(t, s), Oe);
        }
        function Gv(t, s, l) {
          return l = l === n ? 1 : st(l), li(Eu(t, s), l);
        }
        function pf(t, s) {
          var l = tt(t) ? Ri : Ys;
          return l(t, Be(s, 3));
        }
        function gf(t, s) {
          var l = tt(t) ? Jr : cd;
          return l(t, Be(s, 3));
        }
        var kv = hu(function(t, s, l) {
          _t.call(t, l) ? t[l].push(s) : Ts(t, l, [s]);
        });
        function Uv(t, s, l, h) {
          t = $i(t) ? t : aa(t), l = l && !h ? st(l) : 0;
          var _ = t.length;
          return l < 0 && (l = f(_ + l, 0)), Cu(t) ? l <= _ && t.indexOf(s, l) > -1 : !!_ && Bs(t, s, l) > -1;
        }
        var zv = ct(function(t, s, l) {
          var h = -1, _ = typeof s == "function", S = $i(t) ? q(t.length) : [];
          return Ys(t, function(O) {
            S[++h] = _ ? Qt(s, O, l) : Ka(O, s, l);
          }), S;
        }), Vv = hu(function(t, s, l) {
          Ts(t, l, s);
        });
        function Eu(t, s) {
          var l = tt(t) ? Bt : md;
          return l(t, Be(s, 3));
        }
        function Wv(t, s, l, h) {
          return t == null ? [] : (tt(s) || (s = s == null ? [] : [s]), l = h ? n : l, tt(l) || (l = l == null ? [] : [l]), Td(t, s, l));
        }
        var Zv = hu(function(t, s, l) {
          t[l ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function Hv(t, s, l) {
          var h = tt(t) ? Pa : qo, _ = arguments.length < 3;
          return h(t, Be(s, 4), l, _, Ys);
        }
        function Yv(t, s, l) {
          var h = tt(t) ? dc : qo, _ = arguments.length < 3;
          return h(t, Be(s, 4), l, _, cd);
        }
        function qv(t, s) {
          var l = tt(t) ? Br : hd;
          return l(t, Su(Be(s, 3)));
        }
        function Kv(t) {
          var s = tt(t) ? od : U_;
          return s(t);
        }
        function $v(t, s, l) {
          (l ? Fi(t, s, l) : s === n) ? s = 1 : s = st(s);
          var h = tt(t) ? m_ : z_;
          return h(t, s);
        }
        function Jv(t) {
          var s = tt(t) ? v_ : W_;
          return s(t);
        }
        function jv(t) {
          if (t == null)
            return 0;
          if ($i(t))
            return Cu(t) ? vi(t) : t.length;
          var s = Ti(t);
          return s == gn || s == jt ? t.size : Rc(t).length;
        }
        function Xv(t, s, l) {
          var h = tt(t) ? ao : Z_;
          return l && Fi(t, s, l) && (s = n), h(t, Be(s, 3));
        }
        var Qv = ct(function(t, s) {
          if (t == null)
            return [];
          var l = s.length;
          return l > 1 && Fi(t, s[0], s[1]) ? s = [] : l > 2 && Fi(s[0], s[1], s[2]) && (s = [s[0]]), Td(t, li(s, 1), []);
        }), Tu = iu || function() {
          return Vn.Date.now();
        };
        function e0(t, s) {
          if (typeof s != "function")
            throw new ai(g);
          return t = st(t), function() {
            if (--t < 1)
              return s.apply(this, arguments);
          };
        }
        function _f(t, s, l) {
          return s = l ? n : s, s = t && s == null ? t.length : s, ws(t, _e, n, n, n, n, s);
        }
        function mf(t, s) {
          var l;
          if (typeof s != "function")
            throw new ai(g);
          return t = st(t), function() {
            return --t > 0 && (l = s.apply(this, arguments)), t <= 1 && (s = n), l;
          };
        }
        var nh = ct(function(t, s, l) {
          var h = ee;
          if (l.length) {
            var _ = Qr(l, sa(nh));
            h |= U;
          }
          return ws(t, h, s, l, _);
        }), vf = ct(function(t, s, l) {
          var h = ee | Z;
          if (l.length) {
            var _ = Qr(l, sa(vf));
            h |= U;
          }
          return ws(s, h, t, l, _);
        });
        function yf(t, s, l) {
          s = l ? n : s;
          var h = ws(t, K, n, n, n, n, n, s);
          return h.placeholder = yf.placeholder, h;
        }
        function Ef(t, s, l) {
          s = l ? n : s;
          var h = ws(t, R, n, n, n, n, n, s);
          return h.placeholder = Ef.placeholder, h;
        }
        function Tf(t, s, l) {
          var h, _, S, O, D, F, Q = 0, te = !1, oe = !1, Te = !0;
          if (typeof t != "function")
            throw new ai(g);
          s = Nr(s) || 0, hn(l) && (te = !!l.leading, oe = "maxWait" in l, S = oe ? f(Nr(l.maxWait) || 0, s) : S, Te = "trailing" in l ? !!l.trailing : Te);
          function Ne(Nn) {
            var Zr = h, bs = _;
            return h = _ = n, Q = Nn, O = t.apply(bs, Zr), O;
          }
          function Ge(Nn) {
            return Q = Nn, D = Qa(dt, s), te ? Ne(Nn) : O;
          }
          function at(Nn) {
            var Zr = Nn - F, bs = Nn - Q, Uf = s - Zr;
            return oe ? y(Uf, S - bs) : Uf;
          }
          function ke(Nn) {
            var Zr = Nn - F, bs = Nn - Q;
            return F === n || Zr >= s || Zr < 0 || oe && bs >= S;
          }
          function dt() {
            var Nn = Tu();
            if (ke(Nn))
              return mt(Nn);
            D = Qa(dt, at(Nn));
          }
          function mt(Nn) {
            return D = n, Te && h ? Ne(Nn) : (h = _ = n, O);
          }
          function cr() {
            D !== n && Nd(D), Q = 0, h = F = _ = D = n;
          }
          function Mi() {
            return D === n ? O : mt(Tu());
          }
          function hr() {
            var Nn = Tu(), Zr = ke(Nn);
            if (h = arguments, _ = this, F = Nn, Zr) {
              if (D === n)
                return Ge(F);
              if (oe)
                return Nd(D), D = Qa(dt, s), Ne(F);
            }
            return D === n && (D = Qa(dt, s)), O;
          }
          return hr.cancel = cr, hr.flush = Mi, hr;
        }
        var t0 = ct(function(t, s) {
          return ud(t, 1, s);
        }), n0 = ct(function(t, s, l) {
          return ud(t, Nr(s) || 0, l);
        });
        function i0(t) {
          return ws(t, ce);
        }
        function wu(t, s) {
          if (typeof t != "function" || s != null && typeof s != "function")
            throw new ai(g);
          var l = function() {
            var h = arguments, _ = s ? s.apply(this, h) : h[0], S = l.cache;
            if (S.has(_))
              return S.get(_);
            var O = t.apply(this, h);
            return l.cache = S.set(_, O) || S, O;
          };
          return l.cache = new (wu.Cache || Es)(), l;
        }
        wu.Cache = Es;
        function Su(t) {
          if (typeof t != "function")
            throw new ai(g);
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
        function r0(t) {
          return mf(2, t);
        }
        var s0 = H_(function(t, s) {
          s = s.length == 1 && tt(s[0]) ? Bt(s[0], Kt(Be())) : Bt(li(s, 1), Kt(Be()));
          var l = s.length;
          return ct(function(h) {
            for (var _ = -1, S = y(h.length, l); ++_ < S; )
              h[_] = s[_].call(this, h[_]);
            return Qt(t, this, h);
          });
        }), ih = ct(function(t, s) {
          var l = Qr(s, sa(ih));
          return ws(t, U, n, s, l);
        }), wf = ct(function(t, s) {
          var l = Qr(s, sa(wf));
          return ws(t, ue, n, s, l);
        }), o0 = Ss(function(t, s) {
          return ws(t, be, n, n, n, s);
        });
        function a0(t, s) {
          if (typeof t != "function")
            throw new ai(g);
          return s = s === n ? s : st(s), ct(t, s);
        }
        function l0(t, s) {
          if (typeof t != "function")
            throw new ai(g);
          return s = s == null ? 0 : f(st(s), 0), ct(function(l) {
            var h = l[s], _ = $s(l, 0, s);
            return h && Gr(_, h), Qt(t, this, _);
          });
        }
        function u0(t, s, l) {
          var h = !0, _ = !0;
          if (typeof t != "function")
            throw new ai(g);
          return hn(l) && (h = "leading" in l ? !!l.leading : h, _ = "trailing" in l ? !!l.trailing : _), Tf(t, s, {
            leading: h,
            maxWait: s,
            trailing: _
          });
        }
        function c0(t) {
          return _f(t, 1);
        }
        function h0(t, s) {
          return ih(zc(s), t);
        }
        function d0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return tt(t) ? t : [t];
        }
        function f0(t) {
          return br(t, N);
        }
        function p0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, N, s);
        }
        function g0(t) {
          return br(t, w | N);
        }
        function _0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, w | N, s);
        }
        function m0(t, s) {
          return s == null || ld(t, s, jn(s));
        }
        function Wr(t, s) {
          return t === s || t !== t && s !== s;
        }
        var v0 = gu(Ic), y0 = gu(function(t, s) {
          return t >= s;
        }), Lo = pd(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? pd : function(t) {
          return yn(t) && _t.call(t, "callee") && !Za.call(t, "callee");
        }, tt = q.isArray, E0 = Wl ? Kt(Wl) : L_;
        function $i(t) {
          return t != null && Au(t.length) && !Cs(t);
        }
        function In(t) {
          return yn(t) && $i(t);
        }
        function T0(t) {
          return t === !0 || t === !1 || yn(t) && xi(t) == pn;
        }
        var Js = e || ph, w0 = Na ? Kt(Na) : I_;
        function S0(t) {
          return yn(t) && t.nodeType === 1 && !el(t);
        }
        function A0(t) {
          if (t == null)
            return !0;
          if ($i(t) && (tt(t) || typeof t == "string" || typeof t.splice == "function" || Js(t) || oa(t) || Lo(t)))
            return !t.length;
          var s = Ti(t);
          if (s == gn || s == jt)
            return !t.size;
          if (Xa(t))
            return !Rc(t).length;
          for (var l in t)
            if (_t.call(t, l))
              return !1;
          return !0;
        }
        function C0(t, s) {
          return $a(t, s);
        }
        function O0(t, s, l) {
          l = typeof l == "function" ? l : n;
          var h = l ? l(t, s) : n;
          return h === n ? $a(t, s, n, l) : !!h;
        }
        function rh(t) {
          if (!yn(t))
            return !1;
          var s = xi(t);
          return s == qn || s == on || typeof t.message == "string" && typeof t.name == "string" && !el(t);
        }
        function b0(t) {
          return typeof t == "number" && r(t);
        }
        function Cs(t) {
          if (!hn(t))
            return !1;
          var s = xi(t);
          return s == Un || s == Ui || s == sn || s == yr;
        }
        function Sf(t) {
          return typeof t == "number" && t == st(t);
        }
        function Au(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ee;
        }
        function hn(t) {
          var s = typeof t;
          return t != null && (s == "object" || s == "function");
        }
        function yn(t) {
          return t != null && typeof t == "object";
        }
        var Af = Zl ? Kt(Zl) : D_;
        function L0(t, s) {
          return t === s || Dc(t, s, Kc(s));
        }
        function I0(t, s, l) {
          return l = typeof l == "function" ? l : n, Dc(t, s, Kc(s), l);
        }
        function N0(t) {
          return Cf(t) && t != +t;
        }
        function D0(t) {
          if (pm(t))
            throw new qe(p);
          return gd(t);
        }
        function R0(t) {
          return t === null;
        }
        function P0(t) {
          return t == null;
        }
        function Cf(t) {
          return typeof t == "number" || yn(t) && xi(t) == Ut;
        }
        function el(t) {
          if (!yn(t) || xi(t) != an)
            return !1;
          var s = vs(t);
          if (s === null)
            return !0;
          var l = _t.call(s, "constructor") && s.constructor;
          return typeof l == "function" && l instanceof l && ta.call(l) == Ql;
        }
        var sh = Hl ? Kt(Hl) : R_;
        function x0(t) {
          return Sf(t) && t >= -Ee && t <= Ee;
        }
        var Of = Ho ? Kt(Ho) : P_;
        function Cu(t) {
          return typeof t == "string" || !tt(t) && yn(t) && xi(t) == Qn;
        }
        function ur(t) {
          return typeof t == "symbol" || yn(t) && xi(t) == xn;
        }
        var oa = Yl ? Kt(Yl) : x_;
        function F0(t) {
          return t === n;
        }
        function M0(t) {
          return yn(t) && Ti(t) == zn;
        }
        function B0(t) {
          return yn(t) && xi(t) == nr;
        }
        var G0 = gu(Pc), k0 = gu(function(t, s) {
          return t <= s;
        });
        function bf(t) {
          if (!t)
            return [];
          if ($i(t))
            return Cu(t) ? yi(t) : Ki(t);
          if (Zs && t[Zs])
            return $o(t[Zs]());
          var s = Ti(t), l = s == gn ? ka : s == jt ? qi : aa;
          return l(t);
        }
        function Os(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Nr(t), t === Oe || t === -Oe) {
            var s = t < 0 ? -1 : 1;
            return s * Pt;
          }
          return t === t ? t : 0;
        }
        function st(t) {
          var s = Os(t), l = s % 1;
          return s === s ? l ? s - l : s : 0;
        }
        function Lf(t) {
          return t ? Ao(st(t), 0, Ue) : 0;
        }
        function Nr(t) {
          if (typeof t == "number")
            return t;
          if (ur(t))
            return Le;
          if (hn(t)) {
            var s = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = hn(s) ? s + "" : s;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Jl(t);
          var l = On.test(t);
          return l || mn.test(t) ? cc(t.slice(2), l ? 2 : 8) : zt.test(t) ? Le : +t;
        }
        function If(t) {
          return is(t, Ji(t));
        }
        function U0(t) {
          return t ? Ao(st(t), -Ee, Ee) : t === 0 ? t : 0;
        }
        function Rt(t) {
          return t == null ? "" : lr(t);
        }
        var z0 = ia(function(t, s) {
          if (Xa(s) || $i(s)) {
            is(s, jn(s), t);
            return;
          }
          for (var l in s)
            _t.call(s, l) && Ya(t, l, s[l]);
        }), Nf = ia(function(t, s) {
          is(s, Ji(s), t);
        }), Ou = ia(function(t, s, l, h) {
          is(s, Ji(s), t, h);
        }), V0 = ia(function(t, s, l, h) {
          is(s, jn(s), t, h);
        }), W0 = Ss(Oc);
        function Z0(t, s) {
          var l = Hs(t);
          return s == null ? l : ad(l, s);
        }
        var H0 = ct(function(t, s) {
          t = Dt(t);
          var l = -1, h = s.length, _ = h > 2 ? s[2] : n;
          for (_ && Fi(s[0], s[1], _) && (h = 1); ++l < h; )
            for (var S = s[l], O = Ji(S), D = -1, F = O.length; ++D < F; ) {
              var Q = O[D], te = t[Q];
              (te === n || Wr(te, Vs[Q]) && !_t.call(t, Q)) && (t[Q] = S[Q]);
            }
          return t;
        }), Y0 = ct(function(t) {
          return t.push(n, Yd), Qt(Df, n, t);
        });
        function q0(t, s) {
          return lo(t, Be(s, 3), ns);
        }
        function K0(t, s) {
          return lo(t, Be(s, 3), Lc);
        }
        function $0(t, s) {
          return t == null ? t : bc(t, Be(s, 3), Ji);
        }
        function J0(t, s) {
          return t == null ? t : dd(t, Be(s, 3), Ji);
        }
        function j0(t, s) {
          return t && ns(t, Be(s, 3));
        }
        function X0(t, s) {
          return t && Lc(t, Be(s, 3));
        }
        function Q0(t) {
          return t == null ? [] : au(t, jn(t));
        }
        function ey(t) {
          return t == null ? [] : au(t, Ji(t));
        }
        function oh(t, s, l) {
          var h = t == null ? n : Co(t, s);
          return h === n ? l : h;
        }
        function ty(t, s) {
          return t != null && $d(t, s, A_);
        }
        function ah(t, s) {
          return t != null && $d(t, s, C_);
        }
        var ny = zd(function(t, s, l) {
          s != null && typeof s.toString != "function" && (s = po.call(s)), t[s] = l;
        }, uh(ji)), iy = zd(function(t, s, l) {
          s != null && typeof s.toString != "function" && (s = po.call(s)), _t.call(t, s) ? t[s].push(l) : t[s] = [l];
        }, Be), ry = ct(Ka);
        function jn(t) {
          return $i(t) ? sd(t) : Rc(t);
        }
        function Ji(t) {
          return $i(t) ? sd(t, !0) : F_(t);
        }
        function sy(t, s) {
          var l = {};
          return s = Be(s, 3), ns(t, function(h, _, S) {
            Ts(l, s(h, _, S), h);
          }), l;
        }
        function oy(t, s) {
          var l = {};
          return s = Be(s, 3), ns(t, function(h, _, S) {
            Ts(l, _, s(h, _, S));
          }), l;
        }
        var ay = ia(function(t, s, l) {
          lu(t, s, l);
        }), Df = ia(function(t, s, l, h) {
          lu(t, s, l, h);
        }), ly = Ss(function(t, s) {
          var l = {};
          if (t == null)
            return l;
          var h = !1;
          s = Bt(s, function(S) {
            return S = Ks(S, t), h || (h = S.length > 1), S;
          }), is(t, Yc(t), l), h && (l = br(l, w | b | N, nm));
          for (var _ = s.length; _--; )
            Gc(l, s[_]);
          return l;
        });
        function uy(t, s) {
          return Rf(t, Su(Be(s)));
        }
        var cy = Ss(function(t, s) {
          return t == null ? {} : B_(t, s);
        });
        function Rf(t, s) {
          if (t == null)
            return {};
          var l = Bt(Yc(t), function(h) {
            return [h];
          });
          return s = Be(s), wd(t, l, function(h, _) {
            return s(h, _[0]);
          });
        }
        function hy(t, s, l) {
          s = Ks(s, t);
          var h = -1, _ = s.length;
          for (_ || (_ = 1, t = n); ++h < _; ) {
            var S = t == null ? n : t[rs(s[h])];
            S === n && (h = _, S = l), t = Cs(S) ? S.call(t) : S;
          }
          return t;
        }
        function dy(t, s, l) {
          return t == null ? t : Ja(t, s, l);
        }
        function fy(t, s, l, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : Ja(t, s, l, h);
        }
        var Pf = Zd(jn), xf = Zd(Ji);
        function py(t, s, l) {
          var h = tt(t), _ = h || Js(t) || oa(t);
          if (s = Be(s, 4), l == null) {
            var S = t && t.constructor;
            _ ? l = h ? new S() : [] : hn(t) ? l = Cs(S) ? Hs(vs(t)) : {} : l = {};
          }
          return (_ ? Ri : ns)(t, function(O, D, F) {
            return s(l, O, D, F);
          }), l;
        }
        function gy(t, s) {
          return t == null ? !0 : Gc(t, s);
        }
        function _y(t, s, l) {
          return t == null ? t : bd(t, s, zc(l));
        }
        function my(t, s, l, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : bd(t, s, zc(l), h);
        }
        function aa(t) {
          return t == null ? [] : jr(t, jn(t));
        }
        function vy(t) {
          return t == null ? [] : jr(t, Ji(t));
        }
        function yy(t, s, l) {
          return l === n && (l = s, s = n), l !== n && (l = Nr(l), l = l === l ? l : 0), s !== n && (s = Nr(s), s = s === s ? s : 0), Ao(Nr(t), s, l);
        }
        function Ey(t, s, l) {
          return s = Os(s), l === n ? (l = s, s = 0) : l = Os(l), t = Nr(t), O_(t, s, l);
        }
        function Ty(t, s, l) {
          if (l && typeof l != "boolean" && Fi(t, s, l) && (s = l = n), l === n && (typeof s == "boolean" ? (l = s, s = n) : typeof t == "boolean" && (l = t, t = n)), t === n && s === n ? (t = 0, s = 1) : (t = Os(t), s === n ? (s = t, t = 0) : s = Os(s)), t > s) {
            var h = t;
            t = s, s = h;
          }
          if (l || t % 1 || s % 1) {
            var _ = H();
            return y(t + _ * (s - t + Oa("1e-" + ((_ + "").length - 1))), s);
          }
          return Fc(t, s);
        }
        var wy = ra(function(t, s, l) {
          return s = s.toLowerCase(), t + (l ? Ff(s) : s);
        });
        function Ff(t) {
          return lh(Rt(t).toLowerCase());
        }
        function Mf(t) {
          return t = Rt(t), t && t.replace(oi, pc).replace(kl, "");
        }
        function Sy(t, s, l) {
          t = Rt(t), s = lr(s);
          var h = t.length;
          l = l === n ? h : Ao(st(l), 0, h);
          var _ = l;
          return l -= s.length, l >= 0 && t.slice(l, _) == s;
        }
        function Ay(t) {
          return t = Rt(t), t && ae.test(t) ? t.replace(Zi, ho) : t;
        }
        function Cy(t) {
          return t = Rt(t), t && Mt.test(t) ? t.replace(It, "\\$&") : t;
        }
        var Oy = ra(function(t, s, l) {
          return t + (l ? "-" : "") + s.toLowerCase();
        }), by = ra(function(t, s, l) {
          return t + (l ? " " : "") + s.toLowerCase();
        }), Ly = Gd("toLowerCase");
        function Iy(t, s, l) {
          t = Rt(t), s = st(s);
          var h = s ? vi(t) : 0;
          if (!s || h >= s)
            return t;
          var _ = (s - h) / 2;
          return pu(yo(_), l) + t + pu(vo(_), l);
        }
        function Ny(t, s, l) {
          t = Rt(t), s = st(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? t + pu(s - h, l) : t;
        }
        function Dy(t, s, l) {
          t = Rt(t), s = st(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? pu(s - h, l) + t : t;
        }
        function Ry(t, s, l) {
          return l || s == null ? s = 0 : s && (s = +s), B(Rt(t).replace(Xt, ""), s || 0);
        }
        function Py(t, s, l) {
          return (l ? Fi(t, s, l) : s === n) ? s = 1 : s = st(s), Mc(Rt(t), s);
        }
        function xy() {
          var t = arguments, s = Rt(t[0]);
          return t.length < 3 ? s : s.replace(t[1], t[2]);
        }
        var Fy = ra(function(t, s, l) {
          return t + (l ? "_" : "") + s.toLowerCase();
        });
        function My(t, s, l) {
          return l && typeof l != "number" && Fi(t, s, l) && (s = l = n), l = l === n ? Ue : l >>> 0, l ? (t = Rt(t), t && (typeof s == "string" || s != null && !sh(s)) && (s = lr(s), !s && ks(t)) ? $s(yi(t), 0, l) : t.split(s, l)) : [];
        }
        var By = ra(function(t, s, l) {
          return t + (l ? " " : "") + lh(s);
        });
        function Gy(t, s, l) {
          return t = Rt(t), l = l == null ? 0 : Ao(st(l), 0, t.length), s = lr(s), t.slice(l, l + s.length) == s;
        }
        function ky(t, s, l) {
          var h = T.templateSettings;
          l && Fi(t, s, l) && (s = n), t = Rt(t), s = Ou({}, s, h, Hd);
          var _ = Ou({}, s.imports, h.imports, Hd), S = jn(_), O = jr(_, S), D, F, Q = 0, te = s.interpolate || un, oe = "__p += '", Te = Wa(
            (s.escape || un).source + "|" + te.source + "|" + (te === xe ? Cn : un).source + "|" + (s.evaluate || un).source + "|$",
            "g"
          ), Ne = "//# sourceURL=" + (_t.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++oo + "]") + `
`;
          t.replace(Te, function(ke, dt, mt, cr, Mi, hr) {
            return mt || (mt = cr), oe += t.slice(Q, hr).replace(qt, Xl), dt && (D = !0, oe += `' +
__e(` + dt + `) +
'`), Mi && (F = !0, oe += `';
` + Mi + `;
__p += '`), mt && (oe += `' +
((__t = (` + mt + `)) == null ? '' : __t) +
'`), Q = hr + ke.length, ke;
          }), oe += `';
`;
          var Ge = _t.call(s, "variable") && s.variable;
          if (!Ge)
            oe = `with (obj) {
` + oe + `
}
`;
          else if (Er.test(Ge))
            throw new qe(v);
          oe = (F ? oe.replace(Li, "") : oe).replace(Ii, "$1").replace(ii, "$1;"), oe = "function(" + (Ge || "obj") + `) {
` + (Ge ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
          var at = Gf(function() {
            return yt(S, Ne + "return " + oe).apply(n, O);
          });
          if (at.source = oe, rh(at))
            throw at;
          return at;
        }
        function Uy(t) {
          return Rt(t).toLowerCase();
        }
        function zy(t) {
          return Rt(t).toUpperCase();
        }
        function Vy(t, s, l) {
          if (t = Rt(t), t && (l || s === n))
            return Jl(t);
          if (!t || !(s = lr(s)))
            return t;
          var h = yi(t), _ = yi(s), S = Cr(h, _), O = jl(h, _) + 1;
          return $s(h, S, O).join("");
        }
        function Wy(t, s, l) {
          if (t = Rt(t), t && (l || s === n))
            return t.slice(0, Ua(t) + 1);
          if (!t || !(s = lr(s)))
            return t;
          var h = yi(t), _ = jl(h, yi(s)) + 1;
          return $s(h, 0, _).join("");
        }
        function Zy(t, s, l) {
          if (t = Rt(t), t && (l || s === n))
            return t.replace(Xt, "");
          if (!t || !(s = lr(s)))
            return t;
          var h = yi(t), _ = Cr(h, yi(s));
          return $s(h, _).join("");
        }
        function Hy(t, s) {
          var l = se, h = $;
          if (hn(s)) {
            var _ = "separator" in s ? s.separator : _;
            l = "length" in s ? st(s.length) : l, h = "omission" in s ? lr(s.omission) : h;
          }
          t = Rt(t);
          var S = t.length;
          if (ks(t)) {
            var O = yi(t);
            S = O.length;
          }
          if (l >= S)
            return t;
          var D = l - vi(h);
          if (D < 1)
            return h;
          var F = O ? $s(O, 0, D).join("") : t.slice(0, D);
          if (_ === n)
            return F + h;
          if (O && (D += F.length - D), sh(_)) {
            if (t.slice(D).search(_)) {
              var Q, te = F;
              for (_.global || (_ = Wa(_.source, Rt(ot.exec(_)) + "g")), _.lastIndex = 0; Q = _.exec(te); )
                var oe = Q.index;
              F = F.slice(0, oe === n ? D : oe);
            }
          } else if (t.indexOf(lr(_), D) != D) {
            var Te = F.lastIndexOf(_);
            Te > -1 && (F = F.slice(0, Te));
          }
          return F + h;
        }
        function Yy(t) {
          return t = Rt(t), t && x.test(t) ? t.replace(ir, za) : t;
        }
        var qy = ra(function(t, s, l) {
          return t + (l ? " " : "") + s.toUpperCase();
        }), lh = Gd("toUpperCase");
        function Bf(t, s, l) {
          return t = Rt(t), s = l ? n : s, s === n ? Xr(t) ? Xo(t) : Kl(t) : t.match(s) || [];
        }
        var Gf = ct(function(t, s) {
          try {
            return Qt(t, n, s);
          } catch (l) {
            return rh(l) ? l : new qe(l);
          }
        }), Ky = Ss(function(t, s) {
          return Ri(s, function(l) {
            l = rs(l), Ts(t, l, nh(t[l], t));
          }), t;
        });
        function $y(t) {
          var s = t == null ? 0 : t.length, l = Be();
          return t = s ? Bt(t, function(h) {
            if (typeof h[1] != "function")
              throw new ai(g);
            return [l(h[0]), h[1]];
          }) : [], ct(function(h) {
            for (var _ = -1; ++_ < s; ) {
              var S = t[_];
              if (Qt(S[0], this, h))
                return Qt(S[1], this, h);
            }
          });
        }
        function Jy(t) {
          return T_(br(t, w));
        }
        function uh(t) {
          return function() {
            return t;
          };
        }
        function jy(t, s) {
          return t == null || t !== t ? s : t;
        }
        var Xy = Ud(), Qy = Ud(!0);
        function ji(t) {
          return t;
        }
        function ch(t) {
          return _d(typeof t == "function" ? t : br(t, w));
        }
        function eE(t) {
          return vd(br(t, w));
        }
        function tE(t, s) {
          return yd(t, br(s, w));
        }
        var nE = ct(function(t, s) {
          return function(l) {
            return Ka(l, t, s);
          };
        }), iE = ct(function(t, s) {
          return function(l) {
            return Ka(t, l, s);
          };
        });
        function hh(t, s, l) {
          var h = jn(s), _ = au(s, h);
          l == null && !(hn(s) && (_.length || !h.length)) && (l = s, s = t, t = this, _ = au(s, jn(s)));
          var S = !(hn(l) && "chain" in l) || !!l.chain, O = Cs(t);
          return Ri(_, function(D) {
            var F = s[D];
            t[D] = F, O && (t.prototype[D] = function() {
              var Q = this.__chain__;
              if (S || Q) {
                var te = t(this.__wrapped__), oe = te.__actions__ = Ki(this.__actions__);
                return oe.push({ func: F, args: arguments, thisArg: t }), te.__chain__ = Q, te;
              }
              return F.apply(t, Gr([this.value()], arguments));
            });
          }), t;
        }
        function rE() {
          return Vn._ === this && (Vn._ = vc), this;
        }
        function dh() {
        }
        function sE(t) {
          return t = st(t), ct(function(s) {
            return Ed(s, t);
          });
        }
        var oE = Wc(Bt), aE = Wc(Da), lE = Wc(ao);
        function kf(t) {
          return Jc(t) ? Yo(rs(t)) : G_(t);
        }
        function uE(t) {
          return function(s) {
            return t == null ? n : Co(t, s);
          };
        }
        var cE = Vd(), hE = Vd(!0);
        function fh() {
          return [];
        }
        function ph() {
          return !1;
        }
        function dE() {
          return {};
        }
        function fE() {
          return "";
        }
        function pE() {
          return !0;
        }
        function gE(t, s) {
          if (t = st(t), t < 1 || t > Ee)
            return [];
          var l = Ue, h = y(t, Ue);
          s = Be(s), t -= Ue;
          for (var _ = Ga(h, s); ++l < t; )
            s(l);
          return _;
        }
        function _E(t) {
          return tt(t) ? Bt(t, rs) : ur(t) ? [t] : Ki(sf(Rt(t)));
        }
        function mE(t) {
          var s = ++mc;
          return Rt(t) + s;
        }
        var vE = fu(function(t, s) {
          return t + s;
        }, 0), yE = Zc("ceil"), EE = fu(function(t, s) {
          return t / s;
        }, 1), TE = Zc("floor");
        function wE(t) {
          return t && t.length ? ou(t, ji, Ic) : n;
        }
        function SE(t, s) {
          return t && t.length ? ou(t, Be(s, 2), Ic) : n;
        }
        function AE(t) {
          return xa(t, ji);
        }
        function CE(t, s) {
          return xa(t, Be(s, 2));
        }
        function OE(t) {
          return t && t.length ? ou(t, ji, Pc) : n;
        }
        function bE(t, s) {
          return t && t.length ? ou(t, Be(s, 2), Pc) : n;
        }
        var LE = fu(function(t, s) {
          return t * s;
        }, 1), IE = Zc("round"), NE = fu(function(t, s) {
          return t - s;
        }, 0);
        function DE(t) {
          return t && t.length ? Ba(t, ji) : 0;
        }
        function RE(t, s) {
          return t && t.length ? Ba(t, Be(s, 2)) : 0;
        }
        return T.after = e0, T.ary = _f, T.assign = z0, T.assignIn = Nf, T.assignInWith = Ou, T.assignWith = V0, T.at = W0, T.before = mf, T.bind = nh, T.bindAll = Ky, T.bindKey = vf, T.castArray = d0, T.chain = ff, T.chunk = Tm, T.compact = wm, T.concat = Sm, T.cond = $y, T.conforms = Jy, T.constant = uh, T.countBy = Dv, T.create = Z0, T.curry = yf, T.curryRight = Ef, T.debounce = Tf, T.defaults = H0, T.defaultsDeep = Y0, T.defer = t0, T.delay = n0, T.difference = Am, T.differenceBy = Cm, T.differenceWith = Om, T.drop = bm, T.dropRight = Lm, T.dropRightWhile = Im, T.dropWhile = Nm, T.fill = Dm, T.filter = Pv, T.flatMap = Mv, T.flatMapDeep = Bv, T.flatMapDepth = Gv, T.flatten = uf, T.flattenDeep = Rm, T.flattenDepth = Pm, T.flip = i0, T.flow = Xy, T.flowRight = Qy, T.fromPairs = xm, T.functions = Q0, T.functionsIn = ey, T.groupBy = kv, T.initial = Mm, T.intersection = Bm, T.intersectionBy = Gm, T.intersectionWith = km, T.invert = ny, T.invertBy = iy, T.invokeMap = zv, T.iteratee = ch, T.keyBy = Vv, T.keys = jn, T.keysIn = Ji, T.map = Eu, T.mapKeys = sy, T.mapValues = oy, T.matches = eE, T.matchesProperty = tE, T.memoize = wu, T.merge = ay, T.mergeWith = Df, T.method = nE, T.methodOf = iE, T.mixin = hh, T.negate = Su, T.nthArg = sE, T.omit = ly, T.omitBy = uy, T.once = r0, T.orderBy = Wv, T.over = oE, T.overArgs = s0, T.overEvery = aE, T.overSome = lE, T.partial = ih, T.partialRight = wf, T.partition = Zv, T.pick = cy, T.pickBy = Rf, T.property = kf, T.propertyOf = uE, T.pull = Wm, T.pullAll = hf, T.pullAllBy = Zm, T.pullAllWith = Hm, T.pullAt = Ym, T.range = cE, T.rangeRight = hE, T.rearg = o0, T.reject = qv, T.remove = qm, T.rest = a0, T.reverse = eh, T.sampleSize = $v, T.set = dy, T.setWith = fy, T.shuffle = Jv, T.slice = Km, T.sortBy = Qv, T.sortedUniq = tv, T.sortedUniqBy = nv, T.split = My, T.spread = l0, T.tail = iv, T.take = rv, T.takeRight = sv, T.takeRightWhile = ov, T.takeWhile = av, T.tap = wv, T.throttle = u0, T.thru = yu, T.toArray = bf, T.toPairs = Pf, T.toPairsIn = xf, T.toPath = _E, T.toPlainObject = If, T.transform = py, T.unary = c0, T.union = lv, T.unionBy = uv, T.unionWith = cv, T.uniq = hv, T.uniqBy = dv, T.uniqWith = fv, T.unset = gy, T.unzip = th, T.unzipWith = df, T.update = _y, T.updateWith = my, T.values = aa, T.valuesIn = vy, T.without = pv, T.words = Bf, T.wrap = h0, T.xor = gv, T.xorBy = _v, T.xorWith = mv, T.zip = vv, T.zipObject = yv, T.zipObjectDeep = Ev, T.zipWith = Tv, T.entries = Pf, T.entriesIn = xf, T.extend = Nf, T.extendWith = Ou, hh(T, T), T.add = vE, T.attempt = Gf, T.camelCase = wy, T.capitalize = Ff, T.ceil = yE, T.clamp = yy, T.clone = f0, T.cloneDeep = g0, T.cloneDeepWith = _0, T.cloneWith = p0, T.conformsTo = m0, T.deburr = Mf, T.defaultTo = jy, T.divide = EE, T.endsWith = Sy, T.eq = Wr, T.escape = Ay, T.escapeRegExp = Cy, T.every = Rv, T.find = xv, T.findIndex = af, T.findKey = q0, T.findLast = Fv, T.findLastIndex = lf, T.findLastKey = K0, T.floor = TE, T.forEach = pf, T.forEachRight = gf, T.forIn = $0, T.forInRight = J0, T.forOwn = j0, T.forOwnRight = X0, T.get = oh, T.gt = v0, T.gte = y0, T.has = ty, T.hasIn = ah, T.head = cf, T.identity = ji, T.includes = Uv, T.indexOf = Fm, T.inRange = Ey, T.invoke = ry, T.isArguments = Lo, T.isArray = tt, T.isArrayBuffer = E0, T.isArrayLike = $i, T.isArrayLikeObject = In, T.isBoolean = T0, T.isBuffer = Js, T.isDate = w0, T.isElement = S0, T.isEmpty = A0, T.isEqual = C0, T.isEqualWith = O0, T.isError = rh, T.isFinite = b0, T.isFunction = Cs, T.isInteger = Sf, T.isLength = Au, T.isMap = Af, T.isMatch = L0, T.isMatchWith = I0, T.isNaN = N0, T.isNative = D0, T.isNil = P0, T.isNull = R0, T.isNumber = Cf, T.isObject = hn, T.isObjectLike = yn, T.isPlainObject = el, T.isRegExp = sh, T.isSafeInteger = x0, T.isSet = Of, T.isString = Cu, T.isSymbol = ur, T.isTypedArray = oa, T.isUndefined = F0, T.isWeakMap = M0, T.isWeakSet = B0, T.join = Um, T.kebabCase = Oy, T.last = Ir, T.lastIndexOf = zm, T.lowerCase = by, T.lowerFirst = Ly, T.lt = G0, T.lte = k0, T.max = wE, T.maxBy = SE, T.mean = AE, T.meanBy = CE, T.min = OE, T.minBy = bE, T.stubArray = fh, T.stubFalse = ph, T.stubObject = dE, T.stubString = fE, T.stubTrue = pE, T.multiply = LE, T.nth = Vm, T.noConflict = rE, T.noop = dh, T.now = Tu, T.pad = Iy, T.padEnd = Ny, T.padStart = Dy, T.parseInt = Ry, T.random = Ty, T.reduce = Hv, T.reduceRight = Yv, T.repeat = Py, T.replace = xy, T.result = hy, T.round = IE, T.runInContext = P, T.sample = Kv, T.size = jv, T.snakeCase = Fy, T.some = Xv, T.sortedIndex = $m, T.sortedIndexBy = Jm, T.sortedIndexOf = jm, T.sortedLastIndex = Xm, T.sortedLastIndexBy = Qm, T.sortedLastIndexOf = ev, T.startCase = By, T.startsWith = Gy, T.subtract = NE, T.sum = DE, T.sumBy = RE, T.template = ky, T.times = gE, T.toFinite = Os, T.toInteger = st, T.toLength = Lf, T.toLower = Uy, T.toNumber = Nr, T.toSafeInteger = U0, T.toString = Rt, T.toUpper = zy, T.trim = Vy, T.trimEnd = Wy, T.trimStart = Zy, T.truncate = Hy, T.unescape = Yy, T.uniqueId = mE, T.upperCase = qy, T.upperFirst = lh, T.each = pf, T.eachRight = gf, T.first = cf, hh(T, (function() {
          var t = {};
          return ns(T, function(s, l) {
            _t.call(T.prototype, l) || (t[l] = s);
          }), t;
        })(), { chain: !1 }), T.VERSION = u, Ri(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          T[t].placeholder = T;
        }), Ri(["drop", "take"], function(t, s) {
          ut.prototype[t] = function(l) {
            l = l === n ? 1 : f(st(l), 0);
            var h = this.__filtered__ && !s ? new ut(this) : this.clone();
            return h.__filtered__ ? h.__takeCount__ = y(l, h.__takeCount__) : h.__views__.push({
              size: y(l, Ue),
              type: t + (h.__dir__ < 0 ? "Right" : "")
            }), h;
          }, ut.prototype[t + "Right"] = function(l) {
            return this.reverse()[t](l).reverse();
          };
        }), Ri(["filter", "map", "takeWhile"], function(t, s) {
          var l = s + 1, h = l == Y || l == le;
          ut.prototype[t] = function(_) {
            var S = this.clone();
            return S.__iteratees__.push({
              iteratee: Be(_, 3),
              type: l
            }), S.__filtered__ = S.__filtered__ || h, S;
          };
        }), Ri(["head", "last"], function(t, s) {
          var l = "take" + (s ? "Right" : "");
          ut.prototype[t] = function() {
            return this[l](1).value()[0];
          };
        }), Ri(["initial", "tail"], function(t, s) {
          var l = "drop" + (s ? "" : "Right");
          ut.prototype[t] = function() {
            return this.__filtered__ ? new ut(this) : this[l](1);
          };
        }), ut.prototype.compact = function() {
          return this.filter(ji);
        }, ut.prototype.find = function(t) {
          return this.filter(t).head();
        }, ut.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, ut.prototype.invokeMap = ct(function(t, s) {
          return typeof t == "function" ? new ut(this) : this.map(function(l) {
            return Ka(l, t, s);
          });
        }), ut.prototype.reject = function(t) {
          return this.filter(Su(Be(t)));
        }, ut.prototype.slice = function(t, s) {
          t = st(t);
          var l = this;
          return l.__filtered__ && (t > 0 || s < 0) ? new ut(l) : (t < 0 ? l = l.takeRight(-t) : t && (l = l.drop(t)), s !== n && (s = st(s), l = s < 0 ? l.dropRight(-s) : l.take(s - t)), l);
        }, ut.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, ut.prototype.toArray = function() {
          return this.take(Ue);
        }, ns(ut.prototype, function(t, s) {
          var l = /^(?:filter|find|map|reject)|While$/.test(s), h = /^(?:head|last)$/.test(s), _ = T[h ? "take" + (s == "last" ? "Right" : "") : s], S = h || /^find/.test(s);
          _ && (T.prototype[s] = function() {
            var O = this.__wrapped__, D = h ? [1] : arguments, F = O instanceof ut, Q = D[0], te = F || tt(O), oe = function(dt) {
              var mt = _.apply(T, Gr([dt], D));
              return h && Te ? mt[0] : mt;
            };
            te && l && typeof Q == "function" && Q.length != 1 && (F = te = !1);
            var Te = this.__chain__, Ne = !!this.__actions__.length, Ge = S && !Te, at = F && !Ne;
            if (!S && te) {
              O = at ? O : new ut(this);
              var ke = t.apply(O, D);
              return ke.__actions__.push({ func: yu, args: [oe], thisArg: n }), new Ei(ke, Te);
            }
            return Ge && at ? t.apply(this, D) : (ke = this.thru(oe), Ge ? h ? ke.value()[0] : ke.value() : ke);
          });
        }), Ri(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var s = Qo[t], l = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(t);
          T.prototype[t] = function() {
            var _ = arguments;
            if (h && !this.__chain__) {
              var S = this.value();
              return s.apply(tt(S) ? S : [], _);
            }
            return this[l](function(O) {
              return s.apply(tt(O) ? O : [], _);
            });
          };
        }), ns(ut.prototype, function(t, s) {
          var l = T[s];
          if (l) {
            var h = l.name + "";
            _t.call(ar, h) || (ar[h] = []), ar[h].push({ name: s, func: l });
          }
        }), ar[du(n, Z).name] = [{
          name: "wrapper",
          func: n
        }], ut.prototype.clone = Ac, ut.prototype.reverse = qg, ut.prototype.value = Kg, T.prototype.at = Sv, T.prototype.chain = Av, T.prototype.commit = Cv, T.prototype.next = Ov, T.prototype.plant = Lv, T.prototype.reverse = Iv, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = Nv, T.prototype.first = T.prototype.head, Zs && (T.prototype[Zs] = bv), T;
      }), kr = zs();
      or ? ((or.exports = kr)._ = kr, Di._ = kr) : Vn._ = kr;
    }).call(I1);
  })(il, il.exports)), il.exports;
}
var rl = N1();
function D1(o, ...i) {
  return [].slice.call(arguments, 1).reduce(function(n, u) {
    return n && n[u];
  }, o);
}
function _h(o, i) {
  const n = i.replace("\\.", "<|>");
  try {
    return n.split(".").reduce((u, d) => {
      const p = parseInt(d);
      return isFinite(p) && Array.isArray(u) ? u[p] : u[d.replace("<|>", ".")];
    }, o);
  } catch {
    return null;
  }
}
const ss = {
  eq: "eq",
  lt: "lt",
  gt: "gt",
  lte: "lte",
  gte: "gte",
  neq: "neq"
};
function R1() {
  const o = (p, g) => !g.thing || g.thing.length == 0 || !p ? !1 : g.thing.map(
    (m) => {
      if (m.value == "*")
        return !0;
      {
        const E = _h(p, m.prop ?? "");
        return !E || !m.comperator ? !1 : d(m.comperator, E, m.value);
      }
    }
  ).reduce(
    (m, E) => m && E,
    !0
  ), i = (p, g) => !g.datastream || g.datastream.length == 0 || !p ? !1 : g.datastream.map(
    (m) => {
      if (m.value == "*")
        return !0;
      {
        const E = _h(p, m.prop ?? "");
        return E == null ? m.comperator === ss.neq : m.comperator ? d(m.comperator, E, m.value) : !1;
      }
    }
  ).reduce(
    (m, E) => m && E,
    !0
  ), n = (p, g) => {
    if (!g.datastream || g.datastream.length == 0)
      return p;
    if (!p) return { type: "FeatureCollection", features: [] };
    const v = { ...p }, m = [];
    for (const E of p.features)
      for (const A of g.datastream)
        if (A.value == "*") {
          m.push(E);
          break;
        } else {
          const w = _h(E.properties, A.prop ?? "");
          if (!w)
            continue;
          if (A.comperator && d(A.comperator, w, A.value)) {
            m.push(E);
            break;
          }
        }
    return v.features = m, v;
  }, u = (p, g) => {
    const v = g.startsWith("*"), m = g.endsWith("*");
    if (v && m) {
      const E = g.slice(1, -1);
      return p.includes(E);
    } else if (v) {
      const E = g.slice(1);
      return p.endsWith(E);
    } else if (m) {
      const E = g.slice(0, -1);
      return p.startsWith(E);
    }
    return !1;
  }, d = (p, g, v) => {
    const m = String(g), E = String(v), A = E.includes("*");
    switch (p) {
      case ss.eq:
        return A ? u(m, E) : m === E;
      case ss.neq:
        return A ? !u(m, E) : m !== E;
      case ss.gt:
        return Number(g) > Number(v);
      case ss.gte:
        return Number(g) >= Number(v);
      case ss.lt:
        return Number(g) < Number(v);
      case ss.lte:
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
function P1() {
  return {
    isFeature: (d) => !(!d || !d.type || d.type !== "Feature"),
    isFeatureCollection: (d) => !(!d || !d.type || d.type !== "FeatureCollection"),
    isPoint: (d) => !(!d || !d.type || d.type !== "Point" || !d.coordinates || !rl.isArray(d.coordinates) || d.coordinates.length < 2),
    transformToGeoJson: (d) => d ? d.type == "Feature" || d.type == "FeatureCollection" ? d : ["Polygon", "MultiPolygon", "Line", "MultiLine", "Point", "MultiPoint"].includes(d.type) ? {
      type: "Feature",
      properties: {},
      geometry: d
    } : null : null
  };
}
var sl = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var x1 = sl.exports, Qf;
function F1() {
  return Qf || (Qf = 1, (function(o, i) {
    (function(n, u) {
      u(i);
    })(x1, (function(n) {
      var u = "1.9.4";
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
      function M(e) {
        return N(e).split(/\s+/);
      }
      function G(e, r) {
        Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? p(e.options) : {});
        for (var a in r)
          e.options[a] = r[a];
        return e.options;
      }
      function ee(e, r, a) {
        var c = [];
        for (var f in e)
          c.push(encodeURIComponent(a ? f.toUpperCase() : f) + "=" + encodeURIComponent(e[f]));
        return (!r || r.indexOf("?") === -1 ? "?" : "&") + c.join("&");
      }
      var Z = /\{ *([\w_ -]+) *\}/g;
      function W(e, r) {
        return e.replace(Z, function(a, c) {
          var f = r[c];
          if (f === void 0)
            throw new Error("No value provided for variable " + a);
          return typeof f == "function" && (f = f(r)), f;
        });
      }
      var K = Array.isArray || function(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      };
      function R(e, r) {
        for (var a = 0; a < e.length; a++)
          if (e[a] === r)
            return a;
        return -1;
      }
      var U = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function ue(e) {
        return window["webkit" + e] || window["moz" + e] || window["ms" + e];
      }
      var _e = 0;
      function be(e) {
        var r = +/* @__PURE__ */ new Date(), a = Math.max(0, 16 - (r - _e));
        return _e = r + a, window.setTimeout(e, a);
      }
      var ce = window.requestAnimationFrame || ue("RequestAnimationFrame") || be, se = window.cancelAnimationFrame || ue("CancelAnimationFrame") || ue("CancelRequestAnimationFrame") || function(e) {
        window.clearTimeout(e);
      };
      function $(e, r, a) {
        if (a && ce === be)
          e.call(r);
        else
          return ce.call(window, g(e, r));
      }
      function k(e) {
        e && se.call(window, e);
      }
      var ie = {
        __proto__: null,
        extend: d,
        create: p,
        bind: g,
        get lastId() {
          return v;
        },
        stamp: m,
        throttle: E,
        wrapNum: A,
        falseFn: w,
        formatNum: b,
        trim: N,
        splitWords: M,
        setOptions: G,
        getParamString: ee,
        template: W,
        isArray: K,
        indexOf: R,
        emptyImageUrl: U,
        requestFn: ce,
        cancelFn: se,
        requestAnimFrame: $,
        cancelAnimFrame: k
      };
      function Y() {
      }
      Y.extend = function(e) {
        var r = function() {
          G(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, a = r.__super__ = this.prototype, c = p(a);
        c.constructor = r, r.prototype = c;
        for (var f in this)
          Object.prototype.hasOwnProperty.call(this, f) && f !== "prototype" && f !== "__super__" && (r[f] = this[f]);
        return e.statics && d(r, e.statics), e.includes && (de(e.includes), d.apply(null, [c].concat(e.includes))), d(c, e), delete c.statics, delete c.includes, c.options && (c.options = a.options ? p(a.options) : {}, d(c.options, e.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var y = 0, I = c._initHooks.length; y < I; y++)
              c._initHooks[y].call(this);
          }
        }, r;
      }, Y.include = function(e) {
        var r = this.prototype.options;
        return d(this.prototype, e), e.options && (this.prototype.options = r, this.mergeOptions(e.options)), this;
      }, Y.mergeOptions = function(e) {
        return d(this.prototype.options, e), this;
      }, Y.addInitHook = function(e) {
        var r = Array.prototype.slice.call(arguments, 1), a = typeof e == "function" ? e : function() {
          this[e].apply(this, r);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(a), this;
      };
      function de(e) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          e = K(e) ? e : [e];
          for (var r = 0; r < e.length; r++)
            e[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var le = {
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
            e = M(e);
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
            e = M(e);
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
                var B = f[y], H = B.fn;
                B.once && this.off(e, H, B.ctx), H.call(B.ctx || this, c);
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
            e = M(e);
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
      le.addEventListener = le.on, le.removeEventListener = le.clearAllEventListeners = le.off, le.addOneTimeEventListener = le.once, le.fireEvent = le.fire, le.hasEventListeners = le.listens;
      var Oe = Y.extend(le);
      function Ee(e, r, a) {
        this.x = a ? Math.round(e) : e, this.y = a ? Math.round(r) : r;
      }
      var Pt = Math.trunc || function(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      };
      Ee.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new Ee(this.x, this.y);
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
          return new Ee(this.x * e.x, this.y * e.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(e) {
          return new Ee(this.x / e.x, this.y / e.y);
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
          return this.x = Pt(this.x), this.y = Pt(this.y), this;
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
          return "Point(" + b(this.x) + ", " + b(this.y) + ")";
        }
      };
      function Le(e, r, a) {
        return e instanceof Ee ? e : K(e) ? new Ee(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new Ee(e.x, e.y) : new Ee(e, r, a);
      }
      function Ue(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      Ue.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r, a;
          if (!e)
            return this;
          if (e instanceof Ee || typeof e[0] == "number" || "x" in e)
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
          return typeof e[0] == "number" || e instanceof Ee ? e = Le(e) : e = kt(e), e instanceof Ue ? (r = e.min, a = e.max) : r = a = e, r.x >= this.min.x && a.x <= this.max.x && r.y >= this.min.y && a.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(e) {
          e = kt(e);
          var r = this.min, a = this.max, c = e.min, f = e.max, y = f.x >= r.x && c.x <= a.x, I = f.y >= r.y && c.y <= a.y;
          return y && I;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(e) {
          e = kt(e);
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
          return kt(
            Le(r.x - c, r.y - f),
            Le(a.x + c, a.y + f)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(e) {
          return e ? (e = kt(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
        }
      };
      function kt(e, r) {
        return !e || e instanceof Ue ? e : new Ue(e, r);
      }
      function Yt(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      Yt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r = this._southWest, a = this._northEast, c, f;
          if (e instanceof je)
            c = e, f = e;
          else if (e instanceof Yt) {
            if (c = e._southWest, f = e._northEast, !c || !f)
              return this;
          } else
            return e ? this.extend(Me(e) || Lt(e)) : this;
          return !r && !a ? (this._southWest = new je(c.lat, c.lng), this._northEast = new je(f.lat, f.lng)) : (r.lat = Math.min(c.lat, r.lat), r.lng = Math.min(c.lng, r.lng), a.lat = Math.max(f.lat, a.lat), a.lng = Math.max(f.lng, a.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var r = this._southWest, a = this._northEast, c = Math.abs(r.lat - a.lat) * e, f = Math.abs(r.lng - a.lng) * e;
          return new Yt(
            new je(r.lat - c, r.lng - f),
            new je(a.lat + c, a.lng + f)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new je(
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
          return new je(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new je(this.getSouth(), this.getEast());
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
          typeof e[0] == "number" || e instanceof je || "lat" in e ? e = Me(e) : e = Lt(e);
          var r = this._southWest, a = this._northEast, c, f;
          return e instanceof Yt ? (c = e.getSouthWest(), f = e.getNorthEast()) : c = f = e, c.lat >= r.lat && f.lat <= a.lat && c.lng >= r.lng && f.lng <= a.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(e) {
          e = Lt(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), f = e.getNorthEast(), y = f.lat >= r.lat && c.lat <= a.lat, I = f.lng >= r.lng && c.lng <= a.lng;
          return y && I;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(e) {
          e = Lt(e);
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
          return e ? (e = Lt(e), this._southWest.equals(e.getSouthWest(), r) && this._northEast.equals(e.getNorthEast(), r)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function Lt(e, r) {
        return e instanceof Yt ? e : new Yt(e, r);
      }
      function je(e, r, a) {
        if (isNaN(e) || isNaN(r))
          throw new Error("Invalid LatLng object: (" + e + ", " + r + ")");
        this.lat = +e, this.lng = +r, a !== void 0 && (this.alt = +a);
      }
      je.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          if (!e)
            return !1;
          e = Me(e);
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
          return pn.distance(this, Me(e));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return pn.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(e) {
          var r = 180 * e / 40075017, a = r / Math.cos(Math.PI / 180 * this.lat);
          return Lt(
            [this.lat - r, this.lng - a],
            [this.lat + r, this.lng + a]
          );
        },
        clone: function() {
          return new je(this.lat, this.lng, this.alt);
        }
      };
      function Me(e, r, a) {
        return e instanceof je ? e : K(e) && typeof e[0] != "object" ? e.length === 3 ? new je(e[0], e[1], e[2]) : e.length === 2 ? new je(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new je(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : r === void 0 ? null : new je(e, r, a);
      }
      var sn = {
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
          return new Ue(c, f);
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
          return new je(a, r, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(e) {
          var r = e.getCenter(), a = this.wrapLatLng(r), c = r.lat - a.lat, f = r.lng - a.lng;
          if (c === 0 && f === 0)
            return e;
          var y = e.getSouthWest(), I = e.getNorthEast(), B = new je(y.lat - c, y.lng - f), H = new je(I.lat - c, I.lng - f);
          return new Yt(B, H);
        }
      }, pn = d({}, sn, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(e, r) {
          var a = Math.PI / 180, c = e.lat * a, f = r.lat * a, y = Math.sin((r.lat - e.lat) * a / 2), I = Math.sin((r.lng - e.lng) * a / 2), B = y * y + Math.cos(c) * Math.cos(f) * I * I, H = 2 * Math.atan2(Math.sqrt(B), Math.sqrt(1 - B));
          return this.R * H;
        }
      }), Pn = 6378137, on = {
        R: Pn,
        MAX_LATITUDE: 85.0511287798,
        project: function(e) {
          var r = Math.PI / 180, a = this.MAX_LATITUDE, c = Math.max(Math.min(a, e.lat), -a), f = Math.sin(c * r);
          return new Ee(
            this.R * e.lng * r,
            this.R * Math.log((1 + f) / (1 - f)) / 2
          );
        },
        unproject: function(e) {
          var r = 180 / Math.PI;
          return new je(
            (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * r,
            e.x * r / this.R
          );
        },
        bounds: (function() {
          var e = Pn * Math.PI;
          return new Ue([-e, -e], [e, e]);
        })()
      };
      function qn(e, r, a, c) {
        if (K(e)) {
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
          return r = r || 1, new Ee(
            (e.x / r - this._b) / this._a,
            (e.y / r - this._d) / this._c
          );
        }
      };
      function Un(e, r, a, c) {
        return new qn(e, r, a, c);
      }
      var Ui = d({}, pn, {
        code: "EPSG:3857",
        projection: on,
        transformation: (function() {
          var e = 0.5 / (Math.PI * on.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), gn = d({}, Ui, {
        code: "EPSG:900913"
      });
      function Ut(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function zi(e, r) {
        var a = "", c, f, y, I, B, H;
        for (c = 0, y = e.length; c < y; c++) {
          for (B = e[c], f = 0, I = B.length; f < I; f++)
            H = B[f], a += (f ? "L" : "M") + H.x + " " + H.y;
          a += r ? me.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var an = document.documentElement.style, ln = "ActiveXObject" in window, yr = ln && !document.addEventListener, Kn = "msLaunchUri" in navigator && !("documentMode" in document), jt = gt("webkit"), Qn = gt("android"), xn = gt("android 2") || gt("android 3"), Vi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), zn = Qn && gt("Google") && Vi < 537 && !("AudioNode" in window), nr = !!window.opera, _n = !Kn && gt("chrome"), ei = gt("gecko") && !jt && !nr && !ln, Oi = !_n && gt("safari"), bi = gt("phantom"), di = "OTransition" in an, Fn = navigator.platform.indexOf("Win") === 0, Wi = ln && "transition" in an, fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !xn, ti = "MozPerspective" in an, An = !window.L_DISABLE_3D && (Wi || fi || ti) && !di && !bi, ni = typeof orientation < "u" || gt("mobile"), Li = ni && jt, Ii = ni && fi, ii = !window.PointerEvent && window.MSPointerEvent, ir = !!(window.PointerEvent || ii), Zi = "ontouchstart" in window || !!window.TouchEvent, x = !window.L_NO_TOUCH && (Zi || ir), ae = ni && nr, J = ni && ei, ve = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, xe = (function() {
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
      })(), Re = (function() {
        return !!document.createElement("canvas").getContext;
      })(), Xe = !!(document.createElementNS && Ut("svg").createSVGRect), ft = !!Xe && (function() {
        var e = document.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), It = !Xe && (function() {
        try {
          var e = document.createElement("div");
          e.innerHTML = '<v:shape adj="1"/>';
          var r = e.firstChild;
          return r.style.behavior = "url(#default#VML)", r && typeof r.adj == "object";
        } catch {
          return !1;
        }
      })(), Mt = navigator.platform.indexOf("Mac") === 0, Xt = navigator.platform.indexOf("Linux") === 0;
      function gt(e) {
        return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
      }
      var me = {
        ie: ln,
        ielt9: yr,
        edge: Kn,
        webkit: jt,
        android: Qn,
        android23: xn,
        androidStock: zn,
        opera: nr,
        chrome: _n,
        gecko: ei,
        safari: Oi,
        phantom: bi,
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
        pointer: ir,
        touch: x,
        touchNative: Zi,
        mobileOpera: ae,
        mobileGecko: J,
        retina: ve,
        passiveEvents: xe,
        canvas: Re,
        svg: Xe,
        vml: It,
        inlineSvg: ft,
        mac: Mt,
        linux: Xt
      }, ri = me.msPointer ? "MSPointerDown" : "pointerdown", Hi = me.msPointer ? "MSPointerMove" : "pointermove", pi = me.msPointer ? "MSPointerUp" : "pointerup", Er = me.msPointer ? "MSPointerCancel" : "pointercancel", Nt = {
        touchstart: ri,
        touchmove: Hi,
        touchend: pi,
        touchcancel: Er
      }, Cn = {
        touchstart: $n,
        touchmove: qt,
        touchend: qt,
        touchcancel: qt
      }, ot = {}, zt = !1;
      function On(e, r, a) {
        return r === "touchstart" && un(), Cn[r] ? (a = Cn[r].bind(this, a), e.addEventListener(Nt[r], a, !1), a) : (console.warn("wrong event specified:", r), w);
      }
      function si(e, r, a) {
        if (!Nt[r]) {
          console.warn("wrong event specified:", r);
          return;
        }
        e.removeEventListener(Nt[r], a, !1);
      }
      function mn(e) {
        ot[e.pointerId] = e;
      }
      function bn(e) {
        ot[e.pointerId] && (ot[e.pointerId] = e);
      }
      function oi(e) {
        delete ot[e.pointerId];
      }
      function un() {
        zt || (document.addEventListener(ri, mn, !0), document.addEventListener(Hi, bn, !0), document.addEventListener(pi, oi, !0), document.addEventListener(Er, oi, !0), zt = !0);
      }
      function qt(e, r) {
        if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
          r.touches = [];
          for (var a in ot)
            r.touches.push(ot[a]);
          r.changedTouches = [r], e(r);
        }
      }
      function $n(e, r) {
        r.MSPOINTER_TYPE_TOUCH && r.pointerType === r.MSPOINTER_TYPE_TOUCH && et(r), qt(e, r);
      }
      function xr(e) {
        var r = {}, a, c;
        for (c in e)
          a = e[c], r[c] = a && a.bind ? a.bind(e) : a;
        return e = r, r.type = "dblclick", r.detail = 2, r.isTrusted = !1, r._simulated = !0, r;
      }
      var ds = 200;
      function fs(e, r) {
        e.addEventListener("dblclick", r);
        var a = 0, c;
        function f(y) {
          if (y.detail !== 1) {
            c = y.detail;
            return;
          }
          if (!(y.pointerType === "mouse" || y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)) {
            var I = Ul(y);
            if (!(I.some(function(H) {
              return H instanceof HTMLLabelElement && H.attributes.for;
            }) && !I.some(function(H) {
              return H instanceof HTMLInputElement || H instanceof HTMLSelectElement;
            }))) {
              var B = Date.now();
              B - a <= ds ? (c++, c === 2 && r(xr(y))) : c = 1, a = B;
            }
          }
        }
        return e.addEventListener("click", f), {
          dblclick: r,
          simDblclick: f
        };
      }
      function gi(e, r) {
        e.removeEventListener("dblclick", r.dblclick), e.removeEventListener("click", r.simDblclick);
      }
      var Tr = xs(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Yi = xs(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Kr = Yi === "webkitTransition" || Yi === "OTransition" ? Yi + "End" : "transitionend";
      function $r(e) {
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
      function Qe(e, r, a) {
        var c = document.createElement(e);
        return c.className = r || "", a && a.appendChild(c), c;
      }
      function Ct(e) {
        var r = e.parentNode;
        r && r.removeChild(e);
      }
      function sr(e) {
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
      }
      function Mn(e) {
        var r = e.parentNode;
        r && r.lastChild !== e && r.appendChild(e);
      }
      function _i(e) {
        var r = e.parentNode;
        r && r.firstChild !== e && r.insertBefore(e, r.firstChild);
      }
      function Fr(e, r) {
        if (e.classList !== void 0)
          return e.classList.contains(r);
        var a = ko(e);
        return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
      }
      function ze(e, r) {
        if (e.classList !== void 0)
          for (var a = M(r), c = 0, f = a.length; c < f; c++)
            e.classList.add(a[c]);
        else if (!Fr(e, r)) {
          var y = ko(e);
          Go(e, (y ? y + " " : "") + r);
        }
      }
      function Ot(e, r) {
        e.classList !== void 0 ? e.classList.remove(r) : Go(e, N((" " + ko(e) + " ").replace(" " + r + " ", " ")));
      }
      function Go(e, r) {
        e.className.baseVal === void 0 ? e.className = r : e.className.baseVal = r;
      }
      function ko(e) {
        return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
      }
      function Ni(e, r) {
        "opacity" in e.style ? e.style.opacity = r : "filter" in e.style && Ml(e, r);
      }
      function Ml(e, r) {
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
        var c = r || new Ee(0, 0);
        e.style[Tr] = (me.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (a ? " scale(" + a + ")" : "");
      }
      function cn(e, r) {
        e._leaflet_pos = r, me.any3d ? ps(e, r) : (e.style.left = r.x + "px", e.style.top = r.y + "px");
      }
      function Mr(e) {
        return e._leaflet_pos || new Ee(0, 0);
      }
      var gs, wr, Uo;
      if ("onselectstart" in document)
        gs = function() {
          $e(window, "selectstart", et);
        }, wr = function() {
          xt(window, "selectstart", et);
        };
      else {
        var Fs = xs(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        gs = function() {
          if (Fs) {
            var e = document.documentElement.style;
            Uo = e[Fs], e[Fs] = "none";
          }
        }, wr = function() {
          Fs && (document.documentElement.style[Fs] = Uo, Uo = void 0);
        };
      }
      function Ta() {
        $e(window, "dragstart", et);
      }
      function zo() {
        xt(window, "dragstart", et);
      }
      var ro, Vo;
      function Wo(e) {
        for (; e.tabIndex === -1; )
          e = e.parentNode;
        e.style && (Zo(), ro = e, Vo = e.style.outlineStyle, e.style.outlineStyle = "none", $e(window, "keydown", Zo));
      }
      function Zo() {
        ro && (ro.style.outlineStyle = Vo, ro = void 0, Vo = void 0, xt(window, "keydown", Zo));
      }
      function Bl(e) {
        do
          e = e.parentNode;
        while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
        return e;
      }
      function wa(e) {
        var r = e.getBoundingClientRect();
        return {
          x: r.width / e.offsetWidth || 1,
          y: r.height / e.offsetHeight || 1,
          boundingClientRect: r
        };
      }
      var Gl = {
        __proto__: null,
        TRANSFORM: Tr,
        TRANSITION: Yi,
        TRANSITION_END: Kr,
        get: $r,
        getStyle: rr,
        create: Qe,
        remove: Ct,
        empty: sr,
        toFront: Mn,
        toBack: _i,
        hasClass: Fr,
        addClass: ze,
        removeClass: Ot,
        setClass: Go,
        getClass: ko,
        setOpacity: Ni,
        testProp: xs,
        setTransform: ps,
        setPosition: cn,
        getPosition: Mr,
        get disableTextSelection() {
          return gs;
        },
        get enableTextSelection() {
          return wr;
        },
        disableImageDrag: Ta,
        enableImageDrag: zo,
        preventOutline: Wo,
        restoreOutline: Zo,
        getSizedParentNode: Bl,
        getScale: wa
      };
      function $e(e, r, a, c) {
        if (r && typeof r == "object")
          for (var f in r)
            Sa(e, f, r[f], a);
        else {
          r = M(r);
          for (var y = 0, I = r.length; y < I; y++)
            Sa(e, r[y], a, c);
        }
        return this;
      }
      var Sr = "_leaflet_events";
      function xt(e, r, a, c) {
        if (arguments.length === 1)
          kl(e), delete e[Sr];
        else if (r && typeof r == "object")
          for (var f in r)
            Aa(e, f, r[f], a);
        else if (r = M(r), arguments.length === 2)
          kl(e, function(B) {
            return R(r, B) !== -1;
          });
        else
          for (var y = 0, I = r.length; y < I; y++)
            Aa(e, r[y], a, c);
        return this;
      }
      function kl(e, r) {
        for (var a in e[Sr]) {
          var c = a.split(/\d/)[0];
          (!r || r(c)) && Aa(e, c, null, null, a);
        }
      }
      var so = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Sa(e, r, a, c) {
        var f = r + m(a) + (c ? "_" + m(c) : "");
        if (e[Sr] && e[Sr][f])
          return this;
        var y = function(B) {
          return a.call(c || e, B || window.event);
        }, I = y;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? y = On(e, r, y) : me.touch && r === "dblclick" ? y = fs(e, y) : "addEventListener" in e ? r === "touchstart" || r === "touchmove" || r === "wheel" || r === "mousewheel" ? e.addEventListener(so[r] || r, y, me.passiveEvents ? { passive: !1 } : !1) : r === "mouseenter" || r === "mouseleave" ? (y = function(B) {
          B = B || window.event, Oa(e, B) && I(B);
        }, e.addEventListener(so[r], y, !1)) : e.addEventListener(r, I, !1) : e.attachEvent("on" + r, y), e[Sr] = e[Sr] || {}, e[Sr][f] = y;
      }
      function Aa(e, r, a, c, f) {
        f = f || r + m(a) + (c ? "_" + m(c) : "");
        var y = e[Sr] && e[Sr][f];
        if (!y)
          return this;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? si(e, r, y) : me.touch && r === "dblclick" ? gi(e, y) : "removeEventListener" in e ? e.removeEventListener(so[r] || r, y, !1) : e.detachEvent("on" + r, y), e[Sr][f] = null;
      }
      function _s(e) {
        return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
      }
      function Ca(e) {
        return Sa(e, "wheel", _s), this;
      }
      function oo(e) {
        return $e(e, "mousedown touchstart dblclick contextmenu", _s), e._leaflet_disable_click = !0, this;
      }
      function et(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
      }
      function vt(e) {
        return et(e), _s(e), this;
      }
      function Ul(e) {
        if (e.composedPath)
          return e.composedPath();
        for (var r = [], a = e.target; a; )
          r.push(a), a = a.parentNode;
        return r;
      }
      function zl(e, r) {
        if (!r)
          return new Ee(e.clientX, e.clientY);
        var a = wa(r), c = a.boundingClientRect;
        return new Ee(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (e.clientX - c.left) / a.x - r.clientLeft,
          (e.clientY - c.top) / a.y - r.clientTop
        );
      }
      var uc = me.linux && me.chrome ? window.devicePixelRatio : me.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Vl(e) {
        return me.edge ? e.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          e.deltaY && e.deltaMode === 0 ? -e.deltaY / uc : (
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
      var cc = {
        __proto__: null,
        on: $e,
        off: xt,
        stopPropagation: _s,
        disableScrollPropagation: Ca,
        disableClickPropagation: oo,
        preventDefault: et,
        stop: vt,
        getPropagationPath: Ul,
        getMousePosition: zl,
        getWheelDelta: Vl,
        isExternalTarget: Oa,
        addListener: $e,
        removeListener: xt
      }, ba = Oe.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(e, r, a, c) {
          this.stop(), this._el = e, this._inProgress = !0, this._duration = a || 0.25, this._easeOutPower = 1 / Math.max(c || 0.5, 0.2), this._startPos = Mr(e), this._offset = r.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = $(this._animate, this), this._step();
        },
        _step: function(e) {
          var r = +/* @__PURE__ */ new Date() - this._startTime, a = this._duration * 1e3;
          r < a ? this._runFrame(this._easeOut(r / a), e) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(e, r) {
          var a = this._startPos.add(this._offset.multiplyBy(e));
          r && a._round(), cn(this._el, a), this.fire("step");
        },
        _complete: function() {
          k(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(e) {
          return 1 - Math.pow(1 - e, this._easeOutPower);
        }
      }), pt = Oe.extend({
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
          r = G(this, r), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), r.maxBounds && this.setMaxBounds(r.maxBounds), r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)), r.center && r.zoom !== void 0 && this.setView(Me(r.center), r.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Yi && me.any3d && !me.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), $e(this._proxy, Kr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(e, r, a) {
          if (r = r === void 0 ? this._zoom : this._limitZoom(r), e = this._limitCenter(Me(e), r, this.options.maxBounds), a = a || {}, this._stop(), this._loaded && !a.reset && a !== !0) {
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
          var c = this.getZoomScale(r), f = this.getSize().divideBy(2), y = e instanceof Ee ? e : this.latLngToContainerPoint(e), I = y.subtract(f).multiplyBy(1 - 1 / c), B = this.containerPointToLatLng(f.add(I));
          return this.setView(B, r, { zoom: a });
        },
        _getBoundsCenterZoom: function(e, r) {
          r = r || {}, e = e.getBounds ? e.getBounds() : Lt(e);
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), f = this.getBoundsZoom(e, !1, a.add(c));
          if (f = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, f) : f, f === 1 / 0)
            return {
              center: e.getCenter(),
              zoom: f
            };
          var y = c.subtract(a).divideBy(2), I = this.project(e.getSouthWest(), f), B = this.project(e.getNorthEast(), f), H = this.unproject(I.add(B).divideBy(2).add(y), f);
          return {
            center: H,
            zoom: f
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(e, r) {
          if (e = Lt(e), !e.isValid())
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
          if (this._panAnim || (this._panAnim = new ba(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), r.noMoveStart || this.fire("movestart"), r.animate !== !1) {
            ze(this._mapPane, "leaflet-pan-anim");
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
          e = Me(e), r = r === void 0 ? I : r;
          var B = Math.max(y.x, y.y), H = B * this.getZoomScale(I, r), re = f.distanceTo(c) || 1, Se = 1.42, Pe = Se * Se;
          function it(Vt) {
            var To = Vt ? -1 : 1, T = Vt ? H : B, Hs = H * H - B * B + To * Pe * Pe * re * re, na = 2 * T * Pe * re, Ei = Hs / na, ut = Math.sqrt(Ei * Ei + 1) - Ei, Ac = ut < 1e-9 ? -18 : Math.log(ut);
            return Ac;
          }
          function vn(Vt) {
            return (Math.exp(Vt) - Math.exp(-Vt)) / 2;
          }
          function en(Vt) {
            return (Math.exp(Vt) + Math.exp(-Vt)) / 2;
          }
          function Jn(Vt) {
            return vn(Vt) / en(Vt);
          }
          var Wn = it(0);
          function ar(Vt) {
            return B * (en(Wn) / en(Wn + Se * Vt));
          }
          function Ec(Vt) {
            return B * (en(Wn) * Jn(Wn + Se * Vt) - vn(Wn)) / Pe;
          }
          function Tc(Vt) {
            return 1 - Math.pow(1 - Vt, 1.5);
          }
          var wc = Date.now(), ru = (it(1) - Wn) / Se, Sc = a.duration ? 1e3 * a.duration : 1e3 * ru * 0.8;
          function Eo() {
            var Vt = (Date.now() - wc) / Sc, To = Tc(Vt) * ru;
            Vt <= 1 ? (this._flyToFrame = $(Eo, this), this._move(
              this.unproject(c.add(f.subtract(c).multiplyBy(Ec(To) / re)), I),
              this.getScaleZoom(B / ar(To), I),
              { flyTo: !0 }
            )) : this._move(e, r)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), Eo.call(this), this;
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
          return e = Lt(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var a = this.getCenter(), c = this._limitCenter(a, this._zoom, Lt(e));
          return a.equals(c) || this.panTo(c, r), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(e, r) {
          r = r || {};
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), f = this.project(this.getCenter()), y = this.project(e), I = this.getPixelBounds(), B = kt([I.min.add(a), I.max.subtract(c)]), H = B.getSize();
          if (!B.contains(y)) {
            this._enforcingBounds = !0;
            var re = y.subtract(B.getCenter()), Se = B.extend(y).getSize().subtract(H);
            f.x += re.x < 0 ? -Se.x : Se.x, f.y += re.y < 0 ? -Se.y : Se.y, this.panTo(this.unproject(f), r), this._enforcingBounds = !1;
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
          return !y.x && !y.y ? this : (e.animate && e.pan ? this.panBy(y) : (e.pan && this._rawPanBy(y), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(g(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
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
            var r = e.coords.latitude, a = e.coords.longitude, c = new je(r, a), f = c.toBounds(e.coords.accuracy * 2), y = this._locateOptions;
            if (y.setView) {
              var I = this.getBoundsZoom(f);
              this.setView(c, y.maxZoom ? Math.min(I, y.maxZoom) : I);
            }
            var B = {
              latlng: c,
              bounds: f,
              timestamp: e.timestamp
            };
            for (var H in e.coords)
              typeof e.coords[H] == "number" && (B[H] = e.coords[H]);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Ct(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (k(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var e;
          for (e in this._layers)
            this._layers[e].remove();
          for (e in this._panes)
            Ct(this._panes[e]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(e, r) {
          var a = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), c = Qe("div", a, r || this._mapPane);
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
          return new Yt(r, a);
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
          e = Lt(e), a = Le(a || [0, 0]);
          var c = this.getZoom() || 0, f = this.getMinZoom(), y = this.getMaxZoom(), I = e.getNorthWest(), B = e.getSouthEast(), H = this.getSize().subtract(a), re = kt(this.project(B, c), this.project(I, c)).getSize(), Se = me.any3d ? this.options.zoomSnap : 1, Pe = H.x / re.x, it = H.y / re.y, vn = r ? Math.max(Pe, it) : Math.min(Pe, it);
          return c = this.getScaleZoom(vn, c), Se && (c = Math.round(c / (Se / 100)) * (Se / 100), c = r ? Math.ceil(c / Se) * Se : Math.floor(c / Se) * Se), Math.max(f, Math.min(y, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new Ee(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(e, r) {
          var a = this._getTopLeftPoint(e, r);
          return new Ue(a, a.add(this.getSize()));
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
          return r = r === void 0 ? this._zoom : r, this.options.crs.latLngToPoint(Me(e), r);
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
          var r = this.project(Me(e))._round();
          return r._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(e) {
          return this.options.crs.wrapLatLng(Me(e));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(e) {
          return this.options.crs.wrapLatLngBounds(Lt(e));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(e, r) {
          return this.options.crs.distance(Me(e), Me(r));
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
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Me(e)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
          return zl(e, this._container);
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
          var r = this._container = $r(e);
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          $e(r, "scroll", this._onScroll, this), this._containerId = m(r);
        },
        _initLayout: function() {
          var e = this._container;
          this._fadeAnimated = this.options.fadeAnimation && me.any3d, ze(e, "leaflet-container" + (me.touch ? " leaflet-touch" : "") + (me.retina ? " leaflet-retina" : "") + (me.ielt9 ? " leaflet-oldie" : "") + (me.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var r = rr(e, "position");
          r !== "absolute" && r !== "relative" && r !== "fixed" && r !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var e = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), cn(this._mapPane, new Ee(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ze(e.markerPane, "leaflet-zoom-hide"), ze(e.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(e, r, a) {
          cn(this._mapPane, new Ee(0, 0));
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
          return k(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(e) {
          cn(this._mapPane, this._getMapPanePos().subtract(e));
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
          var r = e ? xt : $e;
          r(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && r(window, "resize", this._onResize, this), me.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          k(this._resizeRequest), this._resizeRequest = $(
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
            if (c && c.listens(r, !0) && (f && !Oa(y, e) || (a.push(c), f)) || y === this._container)
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
            a === "mousedown" && Wo(r), this._fireDOMEvent(e, a);
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
            r === "contextmenu" && et(e);
            var B = f[0], H = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var re = B.getLatLng && (!B._radius || B._radius <= 10);
              H.containerPoint = re ? this.latLngToContainerPoint(B.getLatLng()) : this.mouseEventToContainerPoint(e), H.layerPoint = this.containerPointToLayerPoint(H.containerPoint), H.latlng = re ? B.getLatLng() : this.layerPointToLatLng(H.layerPoint);
            }
            for (I = 0; I < f.length; I++)
              if (f[I].fire(r, H, !0), H.originalEvent._stopped || f[I].options.bubblingMouseEvents === !1 && R(this._mouseEvents, r) !== -1)
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
          return Mr(this._mapPane) || new Ee(0, 0);
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
          var c = this.project(e, r), f = this.getSize().divideBy(2), y = new Ue(c.subtract(f), c.add(f)), I = this._getBoundsOffset(y, a, r);
          return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1 ? e : this.unproject(c.add(I), r);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(e, r) {
          if (!r)
            return e;
          var a = this.getPixelBounds(), c = new Ue(a.min.add(e), a.max.add(e));
          return e.add(this._getBoundsOffset(c, r));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(e, r, a) {
          var c = kt(
            this.project(r.getNorthEast(), a),
            this.project(r.getSouthWest(), a)
          ), f = c.min.subtract(e.min), y = c.max.subtract(e.max), I = this._rebound(f.x, -y.x), B = this._rebound(f.y, -y.y);
          return new Ee(I, B);
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
          Ot(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(e, r) {
          var a = this._getCenterOffset(e)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(a) ? !1 : (this.panBy(a, r), !0);
        },
        _createAnimProxy: function() {
          var e = this._proxy = Qe("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(e), this.on("zoomanim", function(r) {
            var a = Tr, c = this._proxy.style[a];
            ps(this._proxy, this.project(r.center, r.zoom), this.getZoomScale(r.zoom, 1)), c === this._proxy.style[a] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          Ct(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
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
          var c = this.getZoomScale(r), f = this._getCenterOffset(e)._divideBy(1 - 1 / c);
          return a.animate !== !0 && !this.getSize().contains(f) ? !1 : ($(function() {
            this._moveStart(!0, a.noMoveStart || !1)._animateZoom(e, r, !0);
          }, this), !0);
        },
        _animateZoom: function(e, r, a, c) {
          this._mapPane && (a && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = r, ze(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: e,
            zoom: r,
            noUpdate: c
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(g(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Ot(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function Vn(e, r) {
        return new pt(e, r);
      }
      var Di = Y.extend({
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
          return ze(r, "leaflet-control"), a.indexOf("bottom") !== -1 ? c.insertBefore(r, c.firstChild) : c.appendChild(r), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (Ct(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(e) {
          this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
        }
      }), or = function(e) {
        return new Di(e);
      };
      pt.include({
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
          var e = this._controlCorners = {}, r = "leaflet-", a = this._controlContainer = Qe("div", r + "control-container", this._container);
          function c(f, y) {
            var I = r + f + " " + r + y;
            e[f + y] = Qe("div", I, a);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var e in this._controlCorners)
            Ct(this._controlCorners[e]);
          Ct(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var La = Di.extend({
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
          ze(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var e = this._map.getSize().y - (this._container.offsetTop + 50);
          return e < this._section.clientHeight ? (ze(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : Ot(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Ot(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var e = "leaflet-control-layers", r = this._container = Qe("div", e), a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), oo(r), Ca(r);
          var c = this._section = Qe("section", e + "-list");
          a && (this._map.on("click", this.collapse, this), $e(r, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var f = this._layersLink = Qe("a", e + "-toggle", r);
          f.href = "#", f.title = "Layers", f.setAttribute("role", "button"), $e(f, {
            keydown: function(y) {
              y.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(y) {
              et(y), this._expandSafely();
            }
          }, this), a || this.expand(), this._baseLayersList = Qe("div", e + "-base", c), this._separator = Qe("div", e + "-separator", c), this._overlaysList = Qe("div", e + "-overlays", c), r.appendChild(c);
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
          }), this.options.sortLayers && this._layers.sort(g(function(c, f) {
            return this.options.sortFunction(c.layer, f.layer, c.name, f.name);
          }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          sr(this._baseLayersList), sr(this._overlaysList), this._layerControlInputs = [];
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
          e.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = a) : c = this._createRadioElement("leaflet-base-layers_" + m(this), a), this._layerControlInputs.push(c), c.layerId = m(e.layer), $e(c, "click", this._onInputClick, this);
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
          this._preventClick = !0, $e(e, "click", et), this.expand();
          var r = this;
          setTimeout(function() {
            xt(e, "click", et), r._preventClick = !1;
          });
        }
      }), Ia = function(e, r, a) {
        return new La(e, r, a);
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
          var r = "leaflet-control-zoom", a = Qe("div", r + " leaflet-bar"), c = this.options;
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
          var y = Qe("a", a, c);
          return y.innerHTML = e, y.href = "#", y.title = r, y.setAttribute("role", "button"), y.setAttribute("aria-label", r), oo(y), $e(y, "click", vt), $e(y, "click", f, this), $e(y, "click", this._refocusOnMap, this), y;
        },
        _updateDisabled: function() {
          var e = this._map, r = "leaflet-disabled";
          Ot(this._zoomInButton, r), Ot(this._zoomOutButton, r), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (ze(this._zoomOutButton, r), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (ze(this._zoomInButton, r), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      pt.mergeOptions({
        zoomControl: !0
      }), pt.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new mi(), this.addControl(this.zoomControl));
      });
      var Wl = function(e) {
        return new mi(e);
      }, Na = Di.extend({
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
          var r = "leaflet-control-scale", a = Qe("div", r), c = this.options;
          return this._addScales(c, r + "-line", a), e.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), a;
        },
        onRemove: function(e) {
          e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(e, r, a) {
          e.metric && (this._mScale = Qe("div", r, a)), e.imperial && (this._iScale = Qe("div", r, a));
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
      }), Zl = function(e) {
        return new Na(e);
      }, Hl = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Ho = Di.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (me.inlineSvg ? Hl + " " : "") + "Leaflet</a>"
        },
        initialize: function(e) {
          G(this, e), this._attributions = {};
        },
        onAdd: function(e) {
          e.attributionControl = this, this._container = Qe("div", "leaflet-control-attribution"), oo(this._container);
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
      pt.mergeOptions({
        attributionControl: !0
      }), pt.addInitHook(function() {
        this.options.attributionControl && new Ho().addTo(this);
      });
      var Yl = function(e) {
        return new Ho(e);
      };
      Di.Layers = La, Di.Zoom = mi, Di.Scale = Na, Di.Attribution = Ho, or.layers = Ia, or.zoom = Wl, or.scale = Zl, or.attribution = Yl;
      var Qt = Y.extend({
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
      Qt.addTo = function(e, r) {
        return e.addHandler(r, this), this;
      };
      var hc = { Events: le }, Ri = me.touch ? "touchstart mousedown" : "mousedown", Jr = Oe.extend({
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
          this._enabled || ($e(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Jr._dragging === this && this.finishDrag(!0), xt(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(e) {
          if (this._enabled && (this._moved = !1, !Fr(this._element, "leaflet-zoom-anim"))) {
            if (e.touches && e.touches.length !== 1) {
              Jr._dragging === this && this.finishDrag();
              return;
            }
            if (!(Jr._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (Jr._dragging = this, this._preventOutline && Wo(this._element), Ta(), gs(), !this._moving)) {
              this.fire("down");
              var r = e.touches ? e.touches[0] : e, a = Bl(this._element);
              this._startPoint = new Ee(r.clientX, r.clientY), this._startPos = Mr(this._element), this._parentScale = wa(a);
              var c = e.type === "mousedown";
              $e(document, c ? "mousemove" : "touchmove", this._onMove, this), $e(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(e) {
          if (this._enabled) {
            if (e.touches && e.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = e.touches && e.touches.length === 1 ? e.touches[0] : e, a = new Ee(r.clientX, r.clientY)._subtract(this._startPoint);
            !a.x && !a.y || Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (a.x /= this._parentScale.x, a.y /= this._parentScale.y, et(e), this._moved || (this.fire("dragstart"), this._moved = !0, ze(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ze(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, this._lastEvent = e, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var e = { originalEvent: this._lastEvent };
          this.fire("predrag", e), cn(this._element, this._newPos), this.fire("drag", e);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(e) {
          Ot(document.body, "leaflet-dragging"), this._lastTarget && (Ot(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), xt(document, "mousemove touchmove", this._onMove, this), xt(document, "mouseup touchend touchcancel", this._onUp, this), zo(), wr();
          var r = this._moved && this._moving;
          this._moving = !1, Jr._dragging = !1, r && this.fire("dragend", {
            noInertia: e,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Da(e, r, a) {
        var c, f = [1, 4, 2, 8], y, I, B, H, re, Se, Pe, it;
        for (y = 0, Se = e.length; y < Se; y++)
          e[y]._code = Ar(e[y], r);
        for (B = 0; B < 4; B++) {
          for (Pe = f[B], c = [], y = 0, Se = e.length, I = Se - 1; y < Se; I = y++)
            H = e[y], re = e[I], H._code & Pe ? re._code & Pe || (it = lo(re, H, Pe, r, a), it._code = Ar(it, r), c.push(it)) : (re._code & Pe && (it = lo(re, H, Pe, r, a), it._code = Ar(it, r), c.push(it)), c.push(H));
          e = c;
        }
        return e;
      }
      function Br(e, r) {
        var a, c, f, y, I, B, H, re, Se;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Pe = Me([0, 0]), it = Lt(e), vn = it.getNorthWest().distanceTo(it.getSouthWest()) * it.getNorthEast().distanceTo(it.getNorthWest());
        vn < 1700 && (Pe = Ms(e));
        var en = e.length, Jn = [];
        for (a = 0; a < en; a++) {
          var Wn = Me(e[a]);
          Jn.push(r.project(Me([Wn.lat - Pe.lat, Wn.lng - Pe.lng])));
        }
        for (B = H = re = 0, a = 0, c = en - 1; a < en; c = a++)
          f = Jn[a], y = Jn[c], I = f.y * y.x - y.y * f.x, H += (f.x + y.x) * I, re += (f.y + y.y) * I, B += I * 3;
        B === 0 ? Se = Jn[0] : Se = [H / B, re / B];
        var ar = r.unproject(Le(Se));
        return Me([ar.lat + Pe.lat, ar.lng + Pe.lng]);
      }
      function Ms(e) {
        for (var r = 0, a = 0, c = 0, f = 0; f < e.length; f++) {
          var y = Me(e[f]);
          r += y.lat, a += y.lng, c++;
        }
        return Me([r / c, a / c]);
      }
      var Ra = {
        __proto__: null,
        clipPolygon: Da,
        polygonCenter: Br,
        centroid: Ms
      };
      function Bt(e, r) {
        if (!r || !e.length)
          return e.slice();
        var a = r * r;
        return e = fc(e, a), e = dc(e, a), e;
      }
      function Gr(e, r, a) {
        return Math.sqrt(uo(e, r, a, !0));
      }
      function Pa(e, r, a) {
        return uo(e, r, a);
      }
      function dc(e, r) {
        var a = e.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, f = new c(a);
        f[0] = f[a - 1] = 1, ao(e, f, r, 0, a - 1);
        var y, I = [];
        for (y = 0; y < a; y++)
          f[y] && I.push(e[y]);
        return I;
      }
      function ao(e, r, a, c, f) {
        var y = 0, I, B, H;
        for (B = c + 1; B <= f - 1; B++)
          H = uo(e[B], e[c], e[f], !0), H > y && (I = B, y = H);
        y > a && (r[I] = 1, ao(e, r, a, c, I), ao(e, r, a, I, f));
      }
      function fc(e, r) {
        for (var a = [e[0]], c = 1, f = 0, y = e.length; c < y; c++)
          Bs(e[c], e[f]) > r && (a.push(e[c]), f = c);
        return f < y - 1 && a.push(e[y - 1]), a;
      }
      var ql;
      function Kl(e, r, a, c, f) {
        var y = c ? ql : Ar(e, a), I = Ar(r, a), B, H, re;
        for (ql = I; ; ) {
          if (!(y | I))
            return [e, r];
          if (y & I)
            return !1;
          B = y || I, H = lo(e, r, B, a, f), re = Ar(H, a), B === y ? (e = H, y = re) : (r = H, I = re);
        }
      }
      function lo(e, r, a, c, f) {
        var y = r.x - e.x, I = r.y - e.y, B = c.min, H = c.max, re, Se;
        return a & 8 ? (re = e.x + y * (H.y - e.y) / I, Se = H.y) : a & 4 ? (re = e.x + y * (B.y - e.y) / I, Se = B.y) : a & 2 ? (re = H.x, Se = e.y + I * (H.x - e.x) / y) : a & 1 && (re = B.x, Se = e.y + I * (B.x - e.x) / y), new Ee(re, Se, f);
      }
      function Ar(e, r) {
        var a = 0;
        return e.x < r.min.x ? a |= 1 : e.x > r.max.x && (a |= 2), e.y < r.min.y ? a |= 4 : e.y > r.max.y && (a |= 8), a;
      }
      function Bs(e, r) {
        var a = r.x - e.x, c = r.y - e.y;
        return a * a + c * c;
      }
      function uo(e, r, a, c) {
        var f = r.x, y = r.y, I = a.x - f, B = a.y - y, H = I * I + B * B, re;
        return H > 0 && (re = ((e.x - f) * I + (e.y - y) * B) / H, re > 1 ? (f = a.x, y = a.y) : re > 0 && (f += I * re, y += B * re)), I = e.x - f, B = e.y - y, c ? I * I + B * B : new Ee(f, y);
      }
      function Pi(e) {
        return !K(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
      }
      function xa(e) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Pi(e);
      }
      function Yo(e, r) {
        var a, c, f, y, I, B, H, re;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Se = Me([0, 0]), Pe = Lt(e), it = Pe.getNorthWest().distanceTo(Pe.getSouthWest()) * Pe.getNorthEast().distanceTo(Pe.getNorthWest());
        it < 1700 && (Se = Ms(e));
        var vn = e.length, en = [];
        for (a = 0; a < vn; a++) {
          var Jn = Me(e[a]);
          en.push(r.project(Me([Jn.lat - Se.lat, Jn.lng - Se.lng])));
        }
        for (a = 0, c = 0; a < vn - 1; a++)
          c += en[a].distanceTo(en[a + 1]) / 2;
        if (c === 0)
          re = en[0];
        else
          for (a = 0, y = 0; a < vn - 1; a++)
            if (I = en[a], B = en[a + 1], f = I.distanceTo(B), y += f, y > c) {
              H = (y - c) / f, re = [
                B.x - H * (B.x - I.x),
                B.y - H * (B.y - I.y)
              ];
              break;
            }
        var Wn = r.unproject(Le(re));
        return Me([Wn.lat + Se.lat, Wn.lng + Se.lng]);
      }
      var Fa = {
        __proto__: null,
        simplify: Bt,
        pointToSegmentDistance: Gr,
        closestPointOnSegment: Pa,
        clipSegment: Kl,
        _getEdgeIntersection: lo,
        _getBitCode: Ar,
        _sqClosestPointOnSegment: uo,
        isFlat: Pi,
        _flat: xa,
        polylineCenter: Yo
      }, qo = {
        project: function(e) {
          return new Ee(e.lng, e.lat);
        },
        unproject: function(e) {
          return new je(e.y, e.x);
        },
        bounds: new Ue([-180, -90], [180, 90])
      }, Ma = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Ue([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(e) {
          var r = Math.PI / 180, a = this.R, c = e.lat * r, f = this.R_MINOR / a, y = Math.sqrt(1 - f * f), I = y * Math.sin(c), B = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - I) / (1 + I), y / 2);
          return c = -a * Math.log(Math.max(B, 1e-10)), new Ee(e.lng * r * a, c);
        },
        unproject: function(e) {
          for (var r = 180 / Math.PI, a = this.R, c = this.R_MINOR / a, f = Math.sqrt(1 - c * c), y = Math.exp(-e.y / a), I = Math.PI / 2 - 2 * Math.atan(y), B = 0, H = 0.1, re; B < 15 && Math.abs(H) > 1e-7; B++)
            re = f * Math.sin(I), re = Math.pow((1 - re) / (1 + re), f / 2), H = Math.PI / 2 - 2 * Math.atan(y * re) - I, I += H;
          return new je(I * r, e.x * r / a);
        }
      }, Ba = {
        __proto__: null,
        LonLat: qo,
        Mercator: Ma,
        SphericalMercator: on
      }, Ga = d({}, pn, {
        code: "EPSG:3395",
        projection: Ma,
        transformation: (function() {
          var e = 0.5 / (Math.PI * Ma.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), $l = d({}, pn, {
        code: "EPSG:4326",
        projection: qo,
        transformation: Un(1 / 180, 1, -1 / 180, 0.5)
      }), Jl = d({}, sn, {
        projection: qo,
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
      sn.Earth = pn, sn.EPSG3395 = Ga, sn.EPSG3857 = Ui, sn.EPSG900913 = gn, sn.EPSG4326 = $l, sn.Simple = Jl;
      var Kt = Oe.extend({
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
      pt.include({
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
          e = e ? K(e) ? e : [e] : [];
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
      var jr = Kt.extend({
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
      }), co = function(e, r) {
        return new jr(e, r);
      }, Cr = jr.extend({
        addLayer: function(e) {
          return this.hasLayer(e) ? this : (e.addEventParent(this), jr.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
        },
        removeLayer: function(e) {
          return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), jr.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
          var e = new Yt();
          for (var r in this._layers) {
            var a = this._layers[r];
            e.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return e;
        }
      }), jl = function(e, r) {
        return new Cr(e, r);
      }, Gs = Y.extend({
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
          var f = Le(c), y = Le(r === "shadow" && a.shadowAnchor || a.iconAnchor || f && f.divideBy(2, !0));
          e.className = "leaflet-marker-" + r + " " + (a.className || ""), y && (e.style.marginLeft = -y.x + "px", e.style.marginTop = -y.y + "px"), f && (e.style.width = f.x + "px", e.style.height = f.y + "px");
        },
        _createImg: function(e, r) {
          return r = r || document.createElement("img"), r.src = e, r;
        },
        _getIconUrl: function(e) {
          return me.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
        }
      });
      function pc(e) {
        return new Gs(e);
      }
      var ho = Gs.extend({
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
          return typeof ho.imagePath != "string" && (ho.imagePath = this._detectIconPath()), (this.options.imagePath || ho.imagePath) + Gs.prototype._getIconUrl.call(this, e);
        },
        _stripUrl: function(e) {
          var r = function(a, c, f) {
            var y = c.exec(a);
            return y && y[f];
          };
          return e = r(e, /^url\((['"])?(.+)\1\)$/, 2), e && r(e, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var e = Qe("div", "leaflet-default-icon-path", document.body), r = rr(e, "background-image") || rr(e, "backgroundImage");
          if (document.body.removeChild(e), r = this._stripUrl(r), r)
            return r;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        }
      }), Xl = Qt.extend({
        initialize: function(e) {
          this._marker = e;
        },
        addHooks: function() {
          var e = this._marker._icon;
          this._draggable || (this._draggable = new Jr(e, e, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), ze(e, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Ot(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
          var r = this._marker, a = r._map, c = this._marker.options.autoPanSpeed, f = this._marker.options.autoPanPadding, y = Mr(r._icon), I = a.getPixelBounds(), B = a.getPixelOrigin(), H = kt(
            I.min._subtract(B).add(f),
            I.max._subtract(B).subtract(f)
          );
          if (!H.contains(y)) {
            var re = Le(
              (Math.max(H.max.x, y.x) - H.max.x) / (I.max.x - H.max.x) - (Math.min(H.min.x, y.x) - H.min.x) / (I.min.x - H.min.x),
              (Math.max(H.max.y, y.y) - H.max.y) / (I.max.y - H.max.y) - (Math.min(H.min.y, y.y) - H.min.y) / (I.min.y - H.min.y)
            ).multiplyBy(c);
            a.panBy(re, { animate: !1 }), this._draggable._newPos._add(re), this._draggable._startPos._add(re), cn(r._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = $(this._adjustPan.bind(this, e));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
          this._marker.options.autoPan && (k(this._panRequest), this._panRequest = $(this._adjustPan.bind(this, e)));
        },
        _onDrag: function(e) {
          var r = this._marker, a = r._shadow, c = Mr(r._icon), f = r._map.layerPointToLatLng(c);
          a && cn(a, c), r._latlng = f, e.latlng = f, e.oldLatLng = this._oldLatLng, r.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
          k(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
        }
      }), Ko = Kt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new ho(),
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
          G(this, r), this._latlng = Me(e);
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
          return this._latlng = Me(e), this.update(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          a !== this._icon && (this._icon && this._removeIcon(), c = !0, e.title && (a.title = e.title), a.tagName === "IMG" && (a.alt = e.alt || "")), ze(a, r), e.keyboard && (a.tabIndex = "0", a.setAttribute("role", "button")), this._icon = a, e.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && $e(a, "focus", this._panOnFocus, this);
          var f = e.icon.createShadow(this._shadow), y = !1;
          f !== this._shadow && (this._removeShadow(), y = !0), f && (ze(f, r), f.alt = ""), this._shadow = f, e.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), f && y && this.getPane(e.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && xt(this._icon, "focus", this._panOnFocus, this), Ct(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && Ct(this._shadow), this._shadow = null;
        },
        _setPos: function(e) {
          this._icon && cn(this._icon, e), this._shadow && cn(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(e) {
          this._icon && (this._icon.style.zIndex = this._zIndex + e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
          this._setPos(r);
        },
        _initInteraction: function() {
          if (this.options.interactive && (ze(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Xl)) {
            var e = this.options.draggable;
            this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Xl(this), e && this.dragging.enable();
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
      function ks(e, r) {
        return new Ko(e, r);
      }
      var Xr = Kt.extend({
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
      }), $o = Xr.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(e, r) {
          G(this, r), this._latlng = Me(e), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(e) {
          var r = this._latlng;
          return this._latlng = Me(e), this.redraw(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          return Xr.prototype.setStyle.call(this, e), this.setRadius(r), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var e = this._radius, r = this._radiusY || e, a = this._clickTolerance(), c = [e + a, r + a];
          this._pxBounds = new Ue(this._point.subtract(c), this._point.add(c));
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
      function ka(e, r) {
        return new $o(e, r);
      }
      var Jo = $o.extend({
        initialize: function(e, r, a) {
          if (typeof r == "number" && (r = d({}, a, { radius: r })), G(this, r), this._latlng = Me(e), isNaN(this.options.radius))
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
          return new Yt(
            this._map.layerPointToLatLng(this._point.subtract(e)),
            this._map.layerPointToLatLng(this._point.add(e))
          );
        },
        setStyle: Xr.prototype.setStyle,
        _project: function() {
          var e = this._latlng.lng, r = this._latlng.lat, a = this._map, c = a.options.crs;
          if (c.distance === pn.distance) {
            var f = Math.PI / 180, y = this._mRadius / pn.R / f, I = a.project([r + y, e]), B = a.project([r - y, e]), H = I.add(B).divideBy(2), re = a.unproject(H).lat, Se = Math.acos((Math.cos(y * f) - Math.sin(r * f) * Math.sin(re * f)) / (Math.cos(r * f) * Math.cos(re * f))) / f;
            (isNaN(Se) || Se === 0) && (Se = y / Math.cos(Math.PI / 180 * r)), this._point = H.subtract(a.getPixelOrigin()), this._radius = isNaN(Se) ? 0 : H.x - a.project([re, e - Se]).x, this._radiusY = H.y - I.y;
          } else {
            var Pe = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(Pe).x;
          }
          this._updateBounds();
        }
      });
      function Qr(e, r, a) {
        return new Jo(e, r, a);
      }
      var qi = Xr.extend({
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
          for (var r = 1 / 0, a = null, c = uo, f, y, I = 0, B = this._parts.length; I < B; I++)
            for (var H = this._parts[I], re = 1, Se = H.length; re < Se; re++) {
              f = H[re - 1], y = H[re];
              var Pe = c(e, f, y, !0);
              Pe < r && (r = Pe, a = c(e, f, y));
            }
          return a && (a.distance = Math.sqrt(r)), a;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Yo(this._defaultShape(), this._map.options.crs);
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
          return r = r || this._defaultShape(), e = Me(e), r.push(e), this._bounds.extend(e), this.redraw();
        },
        _setLatLngs: function(e) {
          this._bounds = new Yt(), this._latlngs = this._convertLatLngs(e);
        },
        _defaultShape: function() {
          return Pi(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(e) {
          for (var r = [], a = Pi(e), c = 0, f = e.length; c < f; c++)
            a ? (r[c] = Me(e[c]), this._bounds.extend(r[c])) : r[c] = this._convertLatLngs(e[c]);
          return r;
        },
        _project: function() {
          var e = new Ue();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
        },
        _updateBounds: function() {
          var e = this._clickTolerance(), r = new Ee(e, e);
          this._rawPxBounds && (this._pxBounds = new Ue([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(e, r, a) {
          var c = e[0] instanceof je, f = e.length, y, I;
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
            var r = this._parts, a, c, f, y, I, B, H;
            for (a = 0, f = 0, y = this._rings.length; a < y; a++)
              for (H = this._rings[a], c = 0, I = H.length; c < I - 1; c++)
                B = Kl(H[c], H[c + 1], e, c, !0), B && (r[f] = r[f] || [], r[f].push(B[0]), (B[1] !== H[c + 1] || c === I - 2) && (r[f].push(B[1]), f++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var e = this._parts, r = this.options.smoothFactor, a = 0, c = e.length; a < c; a++)
            e[a] = Bt(e[a], r);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e, r) {
          var a, c, f, y, I, B, H = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (a = 0, y = this._parts.length; a < y; a++)
            for (B = this._parts[a], c = 0, I = B.length, f = I - 1; c < I; f = c++)
              if (!(!r && c === 0) && Gr(e, B[f], B[c]) <= H)
                return !0;
          return !1;
        }
      });
      function gc(e, r) {
        return new qi(e, r);
      }
      qi._flat = xa;
      var Us = qi.extend({
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
          return Br(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(e) {
          var r = qi.prototype._convertLatLngs.call(this, e), a = r.length;
          return a >= 2 && r[0] instanceof je && r[0].equals(r[a - 1]) && r.pop(), r;
        },
        _setLatLngs: function(e) {
          qi.prototype._setLatLngs.call(this, e), Pi(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Pi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var e = this._renderer._bounds, r = this.options.weight, a = new Ee(r, r);
          if (e = new Ue(e.min.subtract(a), e.max.add(a)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, f = this._rings.length, y; c < f; c++)
              y = Da(this._rings[c], e, !0), y.length && this._parts.push(y);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          var r = !1, a, c, f, y, I, B, H, re;
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (y = 0, H = this._parts.length; y < H; y++)
            for (a = this._parts[y], I = 0, re = a.length, B = re - 1; I < re; B = I++)
              c = a[I], f = a[B], c.y > e.y != f.y > e.y && e.x < (f.x - c.x) * (e.y - c.y) / (f.y - c.y) + c.x && (r = !r);
          return r || qi.prototype._containsPoint.call(this, e, !0);
        }
      });
      function _c(e, r) {
        return new Us(e, r);
      }
      var vi = Cr.extend({
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
          var r = K(e) ? e : e.features, a, c, f;
          if (r) {
            for (a = 0, c = r.length; a < c; a++)
              f = r[a], (f.geometries || f.geometry || f.features || f.coordinates) && this.addData(f);
            return this;
          }
          var y = this.options;
          if (y.filter && !y.filter(e))
            return this;
          var I = yi(e, y);
          return I ? (I.feature = kr(e), I.defaultOptions = I.options, this.resetStyle(I), y.onEachFeature && y.onEachFeature(e, I), this.addLayer(I)) : this;
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
        var a = e.type === "Feature" ? e.geometry : e, c = a ? a.coordinates : null, f = [], y = r && r.pointToLayer, I = r && r.coordsToLatLng || za, B, H, re, Se;
        if (!c && !a)
          return null;
        switch (a.type) {
          case "Point":
            return B = I(c), Ua(y, e, B, r);
          case "MultiPoint":
            for (re = 0, Se = c.length; re < Se; re++)
              B = I(c[re]), f.push(Ua(y, e, B, r));
            return new Cr(f);
          case "LineString":
          case "MultiLineString":
            return H = jo(c, a.type === "LineString" ? 0 : 1, I), new qi(H, r);
          case "Polygon":
          case "MultiPolygon":
            return H = jo(c, a.type === "Polygon" ? 1 : 2, I), new Us(H, r);
          case "GeometryCollection":
            for (re = 0, Se = a.geometries.length; re < Se; re++) {
              var Pe = yi({
                geometry: a.geometries[re],
                type: "Feature",
                properties: e.properties
              }, r);
              Pe && f.push(Pe);
            }
            return new Cr(f);
          case "FeatureCollection":
            for (re = 0, Se = a.features.length; re < Se; re++) {
              var it = yi(a.features[re], r);
              it && f.push(it);
            }
            return new Cr(f);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Ua(e, r, a, c) {
        return e ? e(r, a) : new Ko(a, c && c.markersInheritOptions && c);
      }
      function za(e) {
        return new je(e[1], e[0], e[2]);
      }
      function jo(e, r, a) {
        for (var c = [], f = 0, y = e.length, I; f < y; f++)
          I = r ? jo(e[f], r - 1, a) : (a || za)(e[f]), c.push(I);
        return c;
      }
      function Va(e, r) {
        return e = Me(e), e.alt !== void 0 ? [b(e.lng, r), b(e.lat, r), b(e.alt, r)] : [b(e.lng, r), b(e.lat, r)];
      }
      function Xo(e, r, a, c) {
        for (var f = [], y = 0, I = e.length; y < I; y++)
          f.push(r ? Xo(e[y], Pi(e[y]) ? 0 : r - 1, a, c) : Va(e[y], c));
        return !r && a && f.length > 0 && f.push(f[0].slice()), f;
      }
      function zs(e, r) {
        return e.feature ? d({}, e.feature, { geometry: r }) : kr(r);
      }
      function kr(e) {
        return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
          type: "Feature",
          properties: {},
          geometry: e
        };
      }
      var P = {
        toGeoJSON: function(e) {
          return zs(this, {
            type: "Point",
            coordinates: Va(this.getLatLng(), e)
          });
        }
      };
      Ko.include(P), Jo.include(P), $o.include(P), qi.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = Xo(this._latlngs, r ? 1 : 0, !1, e);
          return zs(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a
          });
        }
      }), Us.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = r && !Pi(this._latlngs[0]), c = Xo(this._latlngs, a ? 2 : r ? 1 : 0, !0, e);
          return r || (c = [c]), zs(this, {
            type: (a ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), jr.include({
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
          return this.eachLayer(function(f) {
            if (f.toGeoJSON) {
              var y = f.toGeoJSON(e);
              if (a)
                c.push(y.geometry);
              else {
                var I = kr(y);
                I.type === "FeatureCollection" ? c.push.apply(c, I.features) : c.push(I);
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
      function j(e, r) {
        return new vi(e, r);
      }
      var q = j, Ae = Kt.extend({
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
          this._url = e, this._bounds = Lt(r), G(this, a);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ze(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          Ct(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && _i(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(e) {
          return this._url = e, this._image && (this._image.src = e), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(e) {
          return this._bounds = Lt(e), this._map && this._reset(), this;
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
          var e = this._url.tagName === "IMG", r = this._image = e ? this._url : Qe("img");
          if (ze(r, "leaflet-image-layer"), this._zoomAnimated && ze(r, "leaflet-zoom-animated"), this.options.className && ze(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onload = g(this.fire, this, "load"), r.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
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
          var e = this._image, r = new Ue(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), a = r.getSize();
          cn(e, r.min), e.style.width = a.x + "px", e.style.height = a.y + "px";
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
      }), qe = function(e, r, a) {
        return new Ae(e, r, a);
      }, yt = Ae.extend({
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
          var e = this._url.tagName === "VIDEO", r = this._image = e ? this._url : Qe("video");
          if (ze(r, "leaflet-image-layer"), this._zoomAnimated && ze(r, "leaflet-zoom-animated"), this.options.className && ze(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onloadeddata = g(this.fire, this, "load"), e) {
            for (var a = r.getElementsByTagName("source"), c = [], f = 0; f < a.length; f++)
              c.push(a[f].src);
            this._url = a.length > 0 ? c : [r.src];
            return;
          }
          K(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(r.style, "objectFit") && (r.style.objectFit = "fill"), r.autoplay = !!this.options.autoplay, r.loop = !!this.options.loop, r.muted = !!this.options.muted, r.playsInline = !!this.options.playsInline;
          for (var y = 0; y < this._url.length; y++) {
            var I = Qe("source");
            I.src = this._url[y], r.appendChild(I);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Ln(e, r, a) {
        return new yt(e, r, a);
      }
      var Dt = Ae.extend({
        _initImage: function() {
          var e = this._image = this._url;
          ze(e, "leaflet-image-layer"), this._zoomAnimated && ze(e, "leaflet-zoom-animated"), this.options.className && ze(e, this.options.className), e.onselectstart = w, e.onmousemove = w;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Wa(e, r, a) {
        return new Dt(e, r, a);
      }
      var Or = Kt.extend({
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
          e && (e instanceof je || K(e)) ? (this._latlng = Me(e), G(this, r)) : (G(this, e), this._source = r), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Ni(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Ni(this._container, 1), this.bringToFront(), this.options.interactive && (ze(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(e) {
          e._fadeAnimated ? (Ni(this._container, 0), this._removeTimeout = setTimeout(g(Ct, void 0, this._container), 200)) : Ct(this._container), this.options.interactive && (Ot(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = Me(e), this._map && (this._updatePosition(), this._adjustPan()), this;
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
          return this._map && _i(this._container), this;
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
            this._zoomAnimated ? cn(this._container, e.add(a)) : r = r.add(e).add(a);
            var c = this._containerBottom = -r.y, f = this._containerLeft = -Math.round(this._containerWidth / 2) + r.x;
            this._container.style.bottom = c + "px", this._container.style.left = f + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      pt.include({
        _initOverlay: function(e, r, a, c) {
          var f = r;
          return f instanceof e || (f = new e(c).setContent(r)), a && f.setLatLng(a), f;
        }
      }), Kt.include({
        _initOverlay: function(e, r, a, c) {
          var f = a;
          return f instanceof e ? (G(f, c), f._source = this) : (f = r && !c ? r : new e(c, this), f.setContent(a)), f;
        }
      });
      var ai = Or.extend({
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
          Or.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Xr || this._source.on("preclick", _s));
        },
        onRemove: function(e) {
          Or.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Xr || this._source.off("preclick", _s));
        },
        getEvents: function() {
          var e = Or.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
        },
        _initLayout: function() {
          var e = "leaflet-popup", r = this._container = Qe(
            "div",
            e + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), a = this._wrapper = Qe("div", e + "-content-wrapper", r);
          if (this._contentNode = Qe("div", e + "-content", a), oo(r), Ca(this._contentNode), $e(r, "contextmenu", _s), this._tipContainer = Qe("div", e + "-tip-container", r), this._tip = Qe("div", e + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = Qe("a", e + "-close-button", r);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', $e(c, "click", function(f) {
              et(f), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var e = this._contentNode, r = e.style;
          r.width = "", r.whiteSpace = "nowrap";
          var a = e.offsetWidth;
          a = Math.min(a, this.options.maxWidth), a = Math.max(a, this.options.minWidth), r.width = a + 1 + "px", r.whiteSpace = "", r.height = "";
          var c = e.offsetHeight, f = this.options.maxHeight, y = "leaflet-popup-scrolled";
          f && c > f ? (r.height = f + "px", ze(e, y)) : Ot(e, y), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), a = this._getAnchor();
          cn(this._container, r.add(a));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var e = this._map, r = parseInt(rr(this._container, "marginBottom"), 10) || 0, a = this._container.offsetHeight + r, c = this._containerWidth, f = new Ee(this._containerLeft, -a - this._containerBottom);
            f._add(Mr(this._container));
            var y = e.layerPointToContainerPoint(f), I = Le(this.options.autoPanPadding), B = Le(this.options.autoPanPaddingTopLeft || I), H = Le(this.options.autoPanPaddingBottomRight || I), re = e.getSize(), Se = 0, Pe = 0;
            y.x + c + H.x > re.x && (Se = y.x + c - re.x + H.x), y.x - Se - B.x < 0 && (Se = y.x - B.x), y.y + a + H.y > re.y && (Pe = y.y + a - re.y + H.y), y.y - Pe - B.y < 0 && (Pe = y.y - B.y), (Se || Pe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([Se, Pe]));
          }
        },
        _getAnchor: function() {
          return Le(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Qo = function(e, r) {
        return new ai(e, r);
      };
      pt.mergeOptions({
        closePopupOnClick: !0
      }), pt.include({
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
      }), Kt.include({
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
            vt(e);
            var r = e.layer || e.target;
            if (this._popup._source === r && !(r instanceof Xr)) {
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
      var ea = Or.extend({
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
          this._contentNode = this._container = Qe("div", r), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(e) {
          var r, a, c = this._map, f = this._container, y = c.latLngToContainerPoint(c.getCenter()), I = c.layerPointToContainerPoint(e), B = this.options.direction, H = f.offsetWidth, re = f.offsetHeight, Se = Le(this.options.offset), Pe = this._getAnchor();
          B === "top" ? (r = H / 2, a = re) : B === "bottom" ? (r = H / 2, a = 0) : B === "center" ? (r = H / 2, a = re / 2) : B === "right" ? (r = 0, a = re / 2) : B === "left" ? (r = H, a = re / 2) : I.x < y.x ? (B = "right", r = 0, a = re / 2) : (B = "left", r = H + (Se.x + Pe.x) * 2, a = re / 2), e = e.subtract(Le(r, a, !0)).add(Se).add(Pe), Ot(f, "leaflet-tooltip-right"), Ot(f, "leaflet-tooltip-left"), Ot(f, "leaflet-tooltip-top"), Ot(f, "leaflet-tooltip-bottom"), ze(f, "leaflet-tooltip-" + B), cn(f, e);
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
          return Le(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Vs = function(e, r) {
        return new ea(e, r);
      };
      pt.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(e, r, a) {
          return this._initOverlay(ea, e, r, a).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(e) {
          return e.close(), this;
        }
      }), Kt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(e, r) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ea, this._tooltip, e, r), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          r && ($e(r, "focus", function() {
            this._tooltip._source = e, this.openTooltip();
          }, this), $e(r, "blur", this.closeTooltip, this));
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
      var fo = Gs.extend({
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
      function ta(e) {
        return new fo(e);
      }
      Gs.Default = ho;
      var _t = Kt.extend({
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
          this._removeAllTiles(), Ct(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Mn(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (_i(this._container), this._setAutoZIndex(Math.min)), this;
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
          return e instanceof Ee ? e : new Ee(e, e);
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
            a && !this._noPrune && this._pruneTiles(), r && (k(this._fadeFrame), this._fadeFrame = $(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: w,
        _initContainer: function() {
          this._container || (this._container = Qe("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var e = this._tileZoom, r = this.options.maxZoom;
          if (e !== void 0) {
            for (var a in this._levels)
              a = Number(a), this._levels[a].el.children.length || a === e ? (this._levels[a].el.style.zIndex = r - Math.abs(e - a), this._onUpdateLevel(a)) : (Ct(this._levels[a].el), this._removeTilesAtZoom(a), this._onRemoveLevel(a), delete this._levels[a]);
            var c = this._levels[e], f = this._map;
            return c || (c = this._levels[e] = {}, c.el = Qe("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = r, c.origin = f.project(f.unproject(f.getPixelOrigin()), e).round(), c.zoom = e, this._setZoomTransform(c, f.getCenter(), f.getZoom()), w(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
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
            Ct(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(e, r, a, c) {
          var f = Math.floor(e / 2), y = Math.floor(r / 2), I = a - 1, B = new Ee(+f, +y);
          B.z = +I;
          var H = this._tileCoordsToKey(B), re = this._tiles[H];
          return re && re.active ? (re.retain = !0, !0) : (re && re.loaded && (re.retain = !0), I > c ? this._retainParent(f, y, I, c) : !1);
        },
        _retainChildren: function(e, r, a, c) {
          for (var f = 2 * e; f < 2 * e + 2; f++)
            for (var y = 2 * r; y < 2 * r + 2; y++) {
              var I = new Ee(f, y);
              I.z = a + 1;
              var B = this._tileCoordsToKey(I), H = this._tiles[B];
              if (H && H.active) {
                H.retain = !0;
                continue;
              } else H && H.loaded && (H.retain = !0);
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
          me.any3d ? ps(e.el, f, c) : cn(e.el, f);
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
          return new Ue(f.subtract(y), f.add(y));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(e) {
          var r = this._map;
          if (r) {
            var a = this._clampZoom(r.getZoom());
            if (e === void 0 && (e = r.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(e), f = this._pxBoundsToTileRange(c), y = f.getCenter(), I = [], B = this.options.keepBuffer, H = new Ue(
                f.getBottomLeft().subtract([B, -B]),
                f.getTopRight().add([B, -B])
              );
              if (!(isFinite(f.min.x) && isFinite(f.min.y) && isFinite(f.max.x) && isFinite(f.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var re in this._tiles) {
                var Se = this._tiles[re].coords;
                (Se.z !== this._tileZoom || !H.contains(new Ee(Se.x, Se.y))) && (this._tiles[re].current = !1);
              }
              if (Math.abs(a - this._tileZoom) > 1) {
                this._setView(e, a);
                return;
              }
              for (var Pe = f.min.y; Pe <= f.max.y; Pe++)
                for (var it = f.min.x; it <= f.max.x; it++) {
                  var vn = new Ee(it, Pe);
                  if (vn.z = this._tileZoom, !!this._isValidTile(vn)) {
                    var en = this._tiles[this._tileCoordsToKey(vn)];
                    en ? en.current = !0 : I.push(vn);
                  }
                }
              if (I.sort(function(Wn, ar) {
                return Wn.distanceTo(y) - ar.distanceTo(y);
              }), I.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Jn = document.createDocumentFragment();
                for (it = 0; it < I.length; it++)
                  this._addTile(I[it], Jn);
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
          return Lt(this.options.bounds).overlaps(c);
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
          var r = this._tileCoordsToNwSe(e), a = new Yt(r[0], r[1]);
          return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(e) {
          return e.x + ":" + e.y + ":" + e.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(e) {
          var r = e.split(":"), a = new Ee(+r[0], +r[1]);
          return a.z = +r[2], a;
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          r && (Ct(r.el), delete this._tiles[e], this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(e)
          }));
        },
        _initTile: function(e) {
          ze(e, "leaflet-tile");
          var r = this.getTileSize();
          e.style.width = r.x + "px", e.style.height = r.y + "px", e.onselectstart = w, e.onmousemove = w, me.ielt9 && this.options.opacity < 1 && Ni(e, this.options.opacity);
        },
        _addTile: function(e, r) {
          var a = this._getTilePos(e), c = this._tileCoordsToKey(e), f = this.createTile(this._wrapCoords(e), g(this._tileReady, this, e));
          this._initTile(f), this.createTile.length < 2 && $(g(this._tileReady, this, e, null, f)), cn(f, a), this._tiles[c] = {
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
          a = this._tiles[c], a && (a.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ni(a.el, 0), k(this._fadeFrame), this._fadeFrame = $(this._updateOpacity, this)) : (a.active = !0, this._pruneTiles()), r || (ze(a.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: a.el,
            coords: e
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), me.ielt9 || !this._map._fadeAnimated ? $(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(e) {
          return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(e) {
          var r = new Ee(
            this._wrapX ? A(e.x, this._wrapX) : e.x,
            this._wrapY ? A(e.y, this._wrapY) : e.y
          );
          return r.z = e.z, r;
        },
        _pxBoundsToTileRange: function(e) {
          var r = this.getTileSize();
          return new Ue(
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
      function mc(e) {
        return new _t(e);
      }
      var ms = _t.extend({
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
          return $e(a, "load", g(this._tileOnLoad, this, r, a)), $e(a, "error", g(this._tileOnError, this, r, a)), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (a.referrerPolicy = this.options.referrerPolicy), a.alt = "", a.src = this.getTileUrl(e), a;
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
          return W(this._url, d(r, this.options));
        },
        _tileOnLoad: function(e, r) {
          me.ielt9 ? setTimeout(g(e, this, null, r), 0) : e(null, r);
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
              r.src = U;
              var a = this._tiles[e].coords;
              Ct(r), delete this._tiles[e], this.fire("tileabort", {
                tile: r,
                coords: a
              });
            }
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          if (r)
            return r.el.setAttribute("src", U), _t.prototype._removeTile.call(this, e);
        },
        _tileReady: function(e, r, a) {
          if (!(!this._map || a && a.getAttribute("src") === U))
            return _t.prototype._tileReady.call(this, e, r, a);
        }
      });
      function po(e, r) {
        return new ms(e, r);
      }
      var Ql = ms.extend({
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
          this.wmsParams[r] = this._crs.code, ms.prototype.onAdd.call(this, e);
        },
        getTileUrl: function(e) {
          var r = this._tileCoordsToNwSe(e), a = this._crs, c = kt(a.project(r[0]), a.project(r[1])), f = c.min, y = c.max, I = (this._wmsVersion >= 1.3 && this._crs === $l ? [f.y, f.x, y.y, y.x] : [f.x, f.y, y.x, y.y]).join(","), B = ms.prototype.getTileUrl.call(this, e);
          return B + ee(this.wmsParams, B, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + I;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(e, r) {
          return d(this.wmsParams, e), r || this.redraw(), this;
        }
      });
      function vc(e, r) {
        return new Ql(e, r);
      }
      ms.WMS = Ql, po.wms = vc;
      var Ur = Kt.extend({
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
          this._container || (this._initContainer(), ze(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          me.any3d ? ps(this._container, y, a) : cn(this._container, y);
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
          this._bounds = new Ue(a, a.add(r.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), go = Ur.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var e = Ur.prototype.getEvents.call(this);
          return e.viewprereset = this._onViewPreReset, e;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Ur.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var e = this._container = document.createElement("canvas");
          $e(e, "mousemove", this._onMouseMove, this), $e(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), $e(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
        },
        _destroyContainer: function() {
          k(this._redrawRequest), delete this._ctx, Ct(this._container), xt(this._container), delete this._container;
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
            Ur.prototype._update.call(this);
            var e = this._bounds, r = this._container, a = e.getSize(), c = me.retina ? 2 : 1;
            cn(r, e.min), r.width = c * a.x, r.height = c * a.y, r.style.width = a.x + "px", r.style.height = a.y + "px", me.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Ur.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
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
          this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || $(this._redraw, this));
        },
        _extendRedrawBounds: function(e) {
          if (e._pxBounds) {
            var r = (e.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new Ue(), this._redrawBounds.extend(e._pxBounds.min.subtract([r, r])), this._redrawBounds.extend(e._pxBounds.max.add([r, r]));
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
            var a, c, f, y, I = e._parts, B = I.length, H = this._ctx;
            if (B) {
              for (H.beginPath(), a = 0; a < B; a++) {
                for (c = 0, f = I[a].length; c < f; c++)
                  y = I[a][c], H[c ? "lineTo" : "moveTo"](y.x, y.y);
                r && H.closePath();
              }
              this._fillStroke(H, e);
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
          r && (Ot(this._container, "leaflet-interactive"), this._fireEvent([r], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(e, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, c, f = this._drawFirst; f; f = f.next)
              a = f.layer, a.options.interactive && a._containsPoint(r) && (c = a);
            c !== this._hoveredLayer && (this._handleMouseOut(e), c && (ze(this._container, "leaflet-interactive"), this._fireEvent([c], e, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(g(function() {
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
      function zr(e) {
        return me.canvas ? new go(e) : null;
      }
      var es = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
            return document.createElement("<lvml:" + e + ' class="lvml">');
          };
        } catch {
        }
        return function(e) {
          return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), eu = {
        _initContainer: function() {
          this._container = Qe("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Ur.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(e) {
          var r = e._container = es("shape");
          ze(r, "leaflet-vml-shape " + (this.options.className || "")), r.coordsize = "1 1", e._path = es("path"), r.appendChild(e._path), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          var r = e._container;
          this._container.appendChild(r), e.options.interactive && e.addInteractiveTarget(r);
        },
        _removePath: function(e) {
          var r = e._container;
          Ct(r), e.removeInteractiveTarget(r), delete this._layers[m(e)];
        },
        _updateStyle: function(e) {
          var r = e._stroke, a = e._fill, c = e.options, f = e._container;
          f.stroked = !!c.stroke, f.filled = !!c.fill, c.stroke ? (r || (r = e._stroke = es("stroke")), f.appendChild(r), r.weight = c.weight + "px", r.color = c.color, r.opacity = c.opacity, c.dashArray ? r.dashStyle = K(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : r.dashStyle = "", r.endcap = c.lineCap.replace("butt", "flat"), r.joinstyle = c.lineJoin) : r && (f.removeChild(r), e._stroke = null), c.fill ? (a || (a = e._fill = es("fill")), f.appendChild(a), a.color = c.fillColor || c.color, a.opacity = c.fillOpacity) : a && (f.removeChild(a), e._fill = null);
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
          _i(e._container);
        }
      }, vs = me.vml ? es : Ut, Ws = Ur.extend({
        _initContainer: function() {
          this._container = vs("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = vs("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          Ct(this._container), xt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Ur.prototype._update.call(this);
            var e = this._bounds, r = e.getSize(), a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) && (this._svgSize = r, a.setAttribute("width", r.x), a.setAttribute("height", r.y)), cn(a, e.min), a.setAttribute("viewBox", [e.min.x, e.min.y, r.x, r.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(e) {
          var r = e._path = vs("path");
          e.options.className && ze(r, e.options.className), e.options.interactive && ze(r, "leaflet-interactive"), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
        },
        _removePath: function(e) {
          Ct(e._path), e.removeInteractiveTarget(e._path), delete this._layers[m(e)];
        },
        _updatePath: function(e) {
          e._project(), e._update();
        },
        _updateStyle: function(e) {
          var r = e._path, a = e.options;
          r && (a.stroke ? (r.setAttribute("stroke", a.color), r.setAttribute("stroke-opacity", a.opacity), r.setAttribute("stroke-width", a.weight), r.setAttribute("stroke-linecap", a.lineCap), r.setAttribute("stroke-linejoin", a.lineJoin), a.dashArray ? r.setAttribute("stroke-dasharray", a.dashArray) : r.removeAttribute("stroke-dasharray"), a.dashOffset ? r.setAttribute("stroke-dashoffset", a.dashOffset) : r.removeAttribute("stroke-dashoffset")) : r.setAttribute("stroke", "none"), a.fill ? (r.setAttribute("fill", a.fillColor || a.color), r.setAttribute("fill-opacity", a.fillOpacity), r.setAttribute("fill-rule", a.fillRule || "evenodd")) : r.setAttribute("fill", "none"));
        },
        _updatePoly: function(e, r) {
          this._setPath(e, zi(e._parts, r));
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
          _i(e._path);
        }
      });
      me.vml && Ws.include(eu);
      function Za(e) {
        return me.svg || me.vml ? new Ws(e) : null;
      }
      pt.include({
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
          return this.options.preferCanvas && zr(e) || Za(e);
        }
      });
      var _o = Us.extend({
        initialize: function(e, r) {
          Us.prototype.initialize.call(this, this._boundsToLatLngs(e), r);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(e) {
          return this.setLatLngs(this._boundsToLatLngs(e));
        },
        _boundsToLatLngs: function(e) {
          return e = Lt(e), [
            e.getSouthWest(),
            e.getNorthWest(),
            e.getNorthEast(),
            e.getSouthEast()
          ];
        }
      });
      function tu(e, r) {
        return new _o(e, r);
      }
      Ws.create = vs, Ws.pointsToPath = zi, vi.geometryToLayer = yi, vi.coordsToLatLng = za, vi.coordsToLatLngs = jo, vi.latLngToCoords = Va, vi.latLngsToCoords = Xo, vi.getFeature = zs, vi.asFeature = kr, pt.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Zs = Qt.extend({
        initialize: function(e) {
          this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
        },
        addHooks: function() {
          $e(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          xt(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          Ct(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), gs(), Ta(), this._startPoint = this._map.mouseEventToContainerPoint(e), $e(document, {
            contextmenu: vt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(e) {
          this._moved || (this._moved = !0, this._box = Qe("div", "leaflet-zoom-box", this._container), ze(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
          var r = new Ue(this._point, this._startPoint), a = r.getSize();
          cn(this._box, r.min), this._box.style.width = a.x + "px", this._box.style.height = a.y + "px";
        },
        _finish: function() {
          this._moved && (Ct(this._box), Ot(this._container, "leaflet-crosshair")), wr(), zo(), xt(document, {
            contextmenu: vt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(e) {
          if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
            var r = new Yt(
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
      pt.addInitHook("addHandler", "boxZoom", Zs), pt.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var ts = Qt.extend({
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
      pt.addInitHook("addHandler", "doubleClickZoom", ts), pt.mergeOptions({
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
      var mo = Qt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var e = this._map;
            this._draggable = new Jr(e._mapPane, e._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
          }
          ze(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Ot(this._map._container, "leaflet-grab"), Ot(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var r = Lt(this._map.options.maxBounds);
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
          var e = this._worldWidth, r = Math.round(e / 2), a = this._initialWorldOffset, c = this._draggable._newPos.x, f = (c - r + a) % e + r - a, y = (c + r + a) % e - r - a, I = Math.abs(f + a) < Math.abs(y + a) ? f : y;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = I;
        },
        _onDragEnd: function(e) {
          var r = this._map, a = r.options, c = !a.inertia || e.noInertia || this._times.length < 2;
          if (r.fire("dragend", e), c)
            r.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var f = this._lastPos.subtract(this._positions[0]), y = (this._lastTime - this._times[0]) / 1e3, I = a.easeLinearity, B = f.multiplyBy(I / y), H = B.distanceTo([0, 0]), re = Math.min(a.inertiaMaxSpeed, H), Se = B.multiplyBy(re / H), Pe = re / (a.inertiaDeceleration * I), it = Se.multiplyBy(-Pe / 2).round();
            !it.x && !it.y ? r.fire("moveend") : (it = r._limitOffset(it, r.options.maxBounds), $(function() {
              r.panBy(it, {
                duration: Pe,
                easeLinearity: I,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      pt.addInitHook("addHandler", "dragging", mo), pt.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var nu = Qt.extend({
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
          e.tabIndex <= 0 && (e.tabIndex = "0"), $e(e, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), xt(this._map._container, {
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
          $e(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          xt(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
          if (!(e.altKey || e.ctrlKey || e.metaKey)) {
            var r = e.keyCode, a = this._map, c;
            if (r in this._panKeys) {
              if (!a._panAnim || !a._panAnim._inProgress)
                if (c = this._panKeys[r], e.shiftKey && (c = Le(c).multiplyBy(3)), a.options.maxBounds && (c = a._limitOffset(Le(c), a.options.maxBounds)), a.options.worldCopyJump) {
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
            vt(e);
          }
        }
      });
      pt.addInitHook("addHandler", "keyboard", nu), pt.mergeOptions({
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
      var iu = Qt.extend({
        addHooks: function() {
          $e(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          xt(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
          var r = Vl(e), a = this._map.options.wheelDebounceTime;
          this._delta += r, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(a - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), c), vt(e);
        },
        _performZoom: function() {
          var e = this._map, r = e.getZoom(), a = this._map.options.zoomSnap || 0;
          e._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), f = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, y = a ? Math.ceil(f / a) * a : f, I = e._limitZoom(r + (this._delta > 0 ? y : -y)) - r;
          this._delta = 0, this._startTime = null, I && (e.options.scrollWheelZoom === "center" ? e.setZoom(r + I) : e.setZoomAround(this._lastMousePos, r + I));
        }
      });
      pt.addInitHook("addHandler", "scrollWheelZoom", iu);
      var yc = 600;
      pt.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: me.touchNative && me.safari && me.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var vo = Qt.extend({
        addHooks: function() {
          $e(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          xt(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
          if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
            var r = e.touches[0];
            this._startPos = this._newPos = new Ee(r.clientX, r.clientY), this._holdTimeout = setTimeout(g(function() {
              this._cancel(), this._isTapValid() && ($e(document, "touchend", et), $e(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", r));
            }, this), yc), $e(document, "touchend touchcancel contextmenu", this._cancel, this), $e(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function e() {
          xt(document, "touchend", et), xt(document, "touchend touchcancel", e);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), xt(document, "touchend touchcancel contextmenu", this._cancel, this), xt(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
          var r = e.touches[0];
          this._newPos = new Ee(r.clientX, r.clientY);
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
      pt.addInitHook("addHandler", "tapHold", vo), pt.mergeOptions({
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
      var yo = Qt.extend({
        addHooks: function() {
          ze(this._map._container, "leaflet-touch-zoom"), $e(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Ot(this._map._container, "leaflet-touch-zoom"), xt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
          var r = this._map;
          if (!(!e.touches || e.touches.length !== 2 || r._animatingZoom || this._zooming)) {
            var a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = r.getSize()._divideBy(2), this._startLatLng = r.containerPointToLatLng(this._centerPoint), r.options.touchZoom !== "center" && (this._pinchStartLatLng = r.containerPointToLatLng(a.add(c)._divideBy(2))), this._startDist = a.distanceTo(c), this._startZoom = r.getZoom(), this._moved = !1, this._zooming = !0, r._stop(), $e(document, "touchmove", this._onTouchMove, this), $e(document, "touchend touchcancel", this._onTouchEnd, this), et(e);
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
            this._moved || (r._moveStart(!0, !1), this._moved = !0), k(this._animRequest);
            var I = g(r._move, r, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = $(I, this, !0), et(e);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, k(this._animRequest), xt(document, "touchmove", this._onTouchMove, this), xt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      pt.addInitHook("addHandler", "touchZoom", yo), pt.BoxZoom = Zs, pt.DoubleClickZoom = ts, pt.Drag = mo, pt.Keyboard = nu, pt.ScrollWheelZoom = iu, pt.TapHold = vo, pt.TouchZoom = yo, n.Bounds = Ue, n.Browser = me, n.CRS = sn, n.Canvas = go, n.Circle = Jo, n.CircleMarker = $o, n.Class = Y, n.Control = Di, n.DivIcon = fo, n.DivOverlay = Or, n.DomEvent = cc, n.DomUtil = Gl, n.Draggable = Jr, n.Evented = Oe, n.FeatureGroup = Cr, n.GeoJSON = vi, n.GridLayer = _t, n.Handler = Qt, n.Icon = Gs, n.ImageOverlay = Ae, n.LatLng = je, n.LatLngBounds = Yt, n.Layer = Kt, n.LayerGroup = jr, n.LineUtil = Fa, n.Map = pt, n.Marker = Ko, n.Mixin = hc, n.Path = Xr, n.Point = Ee, n.PolyUtil = Ra, n.Polygon = Us, n.Polyline = qi, n.Popup = ai, n.PosAnimation = ba, n.Projection = Ba, n.Rectangle = _o, n.Renderer = Ur, n.SVG = Ws, n.SVGOverlay = Dt, n.TileLayer = ms, n.Tooltip = ea, n.Transformation = qn, n.Util = ie, n.VideoOverlay = yt, n.bind = g, n.bounds = kt, n.canvas = zr, n.circle = Qr, n.circleMarker = ka, n.control = or, n.divIcon = ta, n.extend = d, n.featureGroup = jl, n.geoJSON = j, n.geoJson = q, n.gridLayer = mc, n.icon = pc, n.imageOverlay = qe, n.latLng = Me, n.latLngBounds = Lt, n.layerGroup = co, n.map = Vn, n.marker = ks, n.point = Le, n.polygon = _c, n.polyline = gc, n.popup = Qo, n.rectangle = tu, n.setOptions = G, n.stamp = m, n.svg = Za, n.svgOverlay = Wa, n.tileLayer = po, n.tooltip = Vs, n.transformation = Un, n.version = u, n.videoOverlay = Ln;
      var Ha = window.L;
      n.noConflict = function() {
        return window.L = Ha, this;
      }, window.L = n;
    }));
  })(sl, sl.exports)), sl.exports;
}
var pg = F1();
const da = /* @__PURE__ */ fg(pg), M1 = /* @__PURE__ */ t1({
  __proto__: null,
  default: da
}, [pg]);
class B1 {
  constructor() {
    this.id = "";
  }
  invoke() {
  }
  run() {
  }
}
function G1() {
  const o = ge(/* @__PURE__ */ new Map());
  return {
    addTasksAndIvnoke: async (p) => {
      const g = new Set(p.map((E) => E.id));
      o.value.forEach((E, A) => {
        g.has(A) || (E.invoke(), o.value.delete(A));
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
      o.value.forEach((p, g) => {
        try {
          p.invoke();
        } catch (v) {
          console.warn("Error invoking task during clearAll:", g, v);
        }
      }), o.value.clear();
    }
  };
}
var dr = 63710088e-1, k1 = {
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
function jh(o, i, n = {}) {
  const u = { type: "Feature" };
  return (n.id === 0 || n.id) && (u.id = n.id), n.bbox && (u.bbox = n.bbox), u.properties = i || {}, u.geometry = o, u;
}
function cl(o, i, n = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!ep(o[0]) || !ep(o[1]))
    throw new Error("coordinates must contain numbers");
  return jh({
    type: "Point",
    coordinates: o
  }, i, n);
}
function Xu(o, i = {}) {
  const n = { type: "FeatureCollection" };
  return i.id && (n.id = i.id), i.bbox && (n.bbox = i.bbox), n.features = o, n;
}
function U1(o, i = "kilometers") {
  const n = k1[i];
  if (!n)
    throw new Error(i + " units is invalid");
  return o * n;
}
function Nu(o) {
  return o % 360 * Math.PI / 180;
}
function ep(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
function hl(o, i, n) {
  if (o !== null)
    for (var u, d, p, g, v, m, E, A = 0, w = 0, b, N = o.type, M = N === "FeatureCollection", G = N === "Feature", ee = M ? o.features.length : 1, Z = 0; Z < ee; Z++) {
      E = M ? o.features[Z].geometry : G ? o.geometry : o, b = E ? E.type === "GeometryCollection" : !1, v = b ? E.geometries.length : 1;
      for (var W = 0; W < v; W++) {
        var K = 0, R = 0;
        if (g = b ? E.geometries[W] : E, g !== null) {
          m = g.coordinates;
          var U = g.type;
          switch (A = 0, U) {
            case null:
              break;
            case "Point":
              if (i(
                m,
                w,
                Z,
                K,
                R
              ) === !1)
                return !1;
              w++, K++;
              break;
            case "LineString":
            case "MultiPoint":
              for (u = 0; u < m.length; u++) {
                if (i(
                  m[u],
                  w,
                  Z,
                  K,
                  R
                ) === !1)
                  return !1;
                w++, U === "MultiPoint" && K++;
              }
              U === "LineString" && K++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (u = 0; u < m.length; u++) {
                for (d = 0; d < m[u].length - A; d++) {
                  if (i(
                    m[u][d],
                    w,
                    Z,
                    K,
                    R
                  ) === !1)
                    return !1;
                  w++;
                }
                U === "MultiLineString" && K++, U === "Polygon" && R++;
              }
              U === "Polygon" && K++;
              break;
            case "MultiPolygon":
              for (u = 0; u < m.length; u++) {
                for (R = 0, d = 0; d < m[u].length; d++) {
                  for (p = 0; p < m[u][d].length - A; p++) {
                    if (i(
                      m[u][d][p],
                      w,
                      Z,
                      K,
                      R
                    ) === !1)
                      return !1;
                    w++;
                  }
                  R++;
                }
                K++;
              }
              break;
            case "GeometryCollection":
              for (u = 0; u < g.geometries.length; u++)
                if (hl(g.geometries[u], i) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function gg(o, i) {
  if (o.type === "Feature")
    i(o, 0);
  else if (o.type === "FeatureCollection")
    for (var n = 0; n < o.features.length && i(o.features[n], n) !== !1; n++)
      ;
}
function El(o, i = {}) {
  if (o.bbox != null && i.recompute !== !0)
    return o.bbox;
  const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return hl(o, (u) => {
    n[0] > u[0] && (n[0] = u[0]), n[1] > u[1] && (n[1] = u[1]), n[2] < u[0] && (n[2] = u[0]), n[3] < u[1] && (n[3] = u[1]);
  }), n;
}
const Is = 11102230246251565e-32, wi = 134217729, z1 = (3 + 8 * Is) * Is;
function mh(o, i, n, u, d) {
  let p, g, v, m, E = i[0], A = u[0], w = 0, b = 0;
  A > E == A > -E ? (p = E, E = i[++w]) : (p = A, A = u[++b]);
  let N = 0;
  if (w < o && b < n)
    for (A > E == A > -E ? (g = E + p, v = p - (g - E), E = i[++w]) : (g = A + p, v = p - (g - A), A = u[++b]), p = g, v !== 0 && (d[N++] = v); w < o && b < n; )
      A > E == A > -E ? (g = p + E, m = g - p, v = p - (g - m) + (E - m), E = i[++w]) : (g = p + A, m = g - p, v = p - (g - m) + (A - m), A = u[++b]), p = g, v !== 0 && (d[N++] = v);
  for (; w < o; )
    g = p + E, m = g - p, v = p - (g - m) + (E - m), E = i[++w], p = g, v !== 0 && (d[N++] = v);
  for (; b < n; )
    g = p + A, m = g - p, v = p - (g - m) + (A - m), A = u[++b], p = g, v !== 0 && (d[N++] = v);
  return (p !== 0 || N === 0) && (d[N++] = p), N;
}
function V1(o, i) {
  let n = i[0];
  for (let u = 1; u < o; u++) n += i[u];
  return n;
}
function Rl(o) {
  return new Float64Array(o);
}
const W1 = (3 + 16 * Is) * Is, Z1 = (2 + 12 * Is) * Is, H1 = (9 + 64 * Is) * Is * Is, ua = Rl(4), tp = Rl(8), np = Rl(12), ip = Rl(16), Bi = Rl(4);
function Y1(o, i, n, u, d, p, g) {
  let v, m, E, A, w, b, N, M, G, ee, Z, W, K, R, U, ue, _e, be;
  const ce = o - d, se = n - d, $ = i - p, k = u - p;
  R = ce * k, b = wi * ce, N = b - (b - ce), M = ce - N, b = wi * k, G = b - (b - k), ee = k - G, U = M * ee - (R - N * G - M * G - N * ee), ue = $ * se, b = wi * $, N = b - (b - $), M = $ - N, b = wi * se, G = b - (b - se), ee = se - G, _e = M * ee - (ue - N * G - M * G - N * ee), Z = U - _e, w = U - Z, ua[0] = U - (Z + w) + (w - _e), W = R + Z, w = W - R, K = R - (W - w) + (Z - w), Z = K - ue, w = K - Z, ua[1] = K - (Z + w) + (w - ue), be = W + Z, w = be - W, ua[2] = W - (be - w) + (Z - w), ua[3] = be;
  let ie = V1(4, ua), Y = Z1 * g;
  if (ie >= Y || -ie >= Y || (w = o - ce, v = o - (ce + w) + (w - d), w = n - se, E = n - (se + w) + (w - d), w = i - $, m = i - ($ + w) + (w - p), w = u - k, A = u - (k + w) + (w - p), v === 0 && m === 0 && E === 0 && A === 0) || (Y = H1 * g + z1 * Math.abs(ie), ie += ce * A + k * v - ($ * E + se * m), ie >= Y || -ie >= Y)) return ie;
  R = v * k, b = wi * v, N = b - (b - v), M = v - N, b = wi * k, G = b - (b - k), ee = k - G, U = M * ee - (R - N * G - M * G - N * ee), ue = m * se, b = wi * m, N = b - (b - m), M = m - N, b = wi * se, G = b - (b - se), ee = se - G, _e = M * ee - (ue - N * G - M * G - N * ee), Z = U - _e, w = U - Z, Bi[0] = U - (Z + w) + (w - _e), W = R + Z, w = W - R, K = R - (W - w) + (Z - w), Z = K - ue, w = K - Z, Bi[1] = K - (Z + w) + (w - ue), be = W + Z, w = be - W, Bi[2] = W - (be - w) + (Z - w), Bi[3] = be;
  const de = mh(4, ua, 4, Bi, tp);
  R = ce * A, b = wi * ce, N = b - (b - ce), M = ce - N, b = wi * A, G = b - (b - A), ee = A - G, U = M * ee - (R - N * G - M * G - N * ee), ue = $ * E, b = wi * $, N = b - (b - $), M = $ - N, b = wi * E, G = b - (b - E), ee = E - G, _e = M * ee - (ue - N * G - M * G - N * ee), Z = U - _e, w = U - Z, Bi[0] = U - (Z + w) + (w - _e), W = R + Z, w = W - R, K = R - (W - w) + (Z - w), Z = K - ue, w = K - Z, Bi[1] = K - (Z + w) + (w - ue), be = W + Z, w = be - W, Bi[2] = W - (be - w) + (Z - w), Bi[3] = be;
  const le = mh(de, tp, 4, Bi, np);
  R = v * A, b = wi * v, N = b - (b - v), M = v - N, b = wi * A, G = b - (b - A), ee = A - G, U = M * ee - (R - N * G - M * G - N * ee), ue = m * E, b = wi * m, N = b - (b - m), M = m - N, b = wi * E, G = b - (b - E), ee = E - G, _e = M * ee - (ue - N * G - M * G - N * ee), Z = U - _e, w = U - Z, Bi[0] = U - (Z + w) + (w - _e), W = R + Z, w = W - R, K = R - (W - w) + (Z - w), Z = K - ue, w = K - Z, Bi[1] = K - (Z + w) + (w - ue), be = W + Z, w = be - W, Bi[2] = W - (be - w) + (Z - w), Bi[3] = be;
  const Oe = mh(le, np, 4, Bi, ip);
  return ip[Oe - 1];
}
function q1(o, i, n, u, d, p) {
  const g = (i - p) * (n - d), v = (o - d) * (u - p), m = g - v, E = Math.abs(g + v);
  return Math.abs(m) >= W1 * E ? m : -Y1(o, i, n, u, d, p, E);
}
function K1(o, i) {
  var n, u, d = 0, p, g, v, m, E, A, w, b = o[0], N = o[1], M = i.length;
  for (n = 0; n < M; n++) {
    u = 0;
    var G = i[n], ee = G.length - 1;
    if (A = G[0], A[0] !== G[ee][0] && A[1] !== G[ee][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (g = A[0] - b, v = A[1] - N, u; u < ee; u++) {
      if (w = G[u + 1], m = w[0] - b, E = w[1] - N, v === 0 && E === 0) {
        if (m <= 0 && g >= 0 || g <= 0 && m >= 0)
          return 0;
      } else if (E >= 0 && v <= 0 || E <= 0 && v >= 0) {
        if (p = q1(g, m, v, E, 0, 0), p === 0)
          return 0;
        (p > 0 && E > 0 && v <= 0 || p < 0 && E <= 0 && v > 0) && d++;
      }
      A = w, v = E, g = m;
    }
  }
  return d % 2 !== 0;
}
function $1(o) {
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
function J1(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function Pl(o, i, n = {}) {
  if (!o)
    throw new Error("point is required");
  if (!i)
    throw new Error("polygon is required");
  const u = $1(o), d = J1(i), p = d.type, g = i.bbox;
  let v = d.coordinates;
  if (g && j1(u, g) === !1)
    return !1;
  p === "Polygon" && (v = [v]);
  let m = !1;
  for (var E = 0; E < v.length; ++E) {
    const A = K1(u, v[E]);
    if (A === 0) return !n.ignoreBoundary;
    A && (m = !0);
  }
  return m;
}
function j1(o, i) {
  return i[0] <= o[0] && i[1] <= o[1] && i[2] >= o[0] && i[3] >= o[1];
}
function Ph(o) {
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
function X1(o) {
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
function xh(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function Tl(o, i, n = {}) {
  const u = Ph(o), d = X1(i);
  for (let p = 0; p < d.length - 1; p++) {
    let g = !1;
    if (n.ignoreEndVertices && (p === 0 && (g = "start"), p === d.length - 2 && (g = "end"), p === 0 && p + 1 === d.length - 1 && (g = "both")), Q1(
      d[p],
      d[p + 1],
      u,
      g,
      typeof n.epsilon > "u" ? null : n.epsilon
    ))
      return !0;
  }
  return !1;
}
function Q1(o, i, n, u, d) {
  const p = n[0], g = n[1], v = o[0], m = o[1], E = i[0], A = i[1], w = n[0] - v, b = n[1] - m, N = E - v, M = A - m, G = w * M - b * N;
  if (d !== null) {
    if (Math.abs(G) > d)
      return !1;
  } else if (G !== 0)
    return !1;
  if (Math.abs(N) === Math.abs(M) && Math.abs(N) === 0)
    return u ? !1 : n[0] === o[0] && n[1] === o[1];
  if (u) {
    if (u === "start")
      return Math.abs(N) >= Math.abs(M) ? N > 0 ? v < p && p <= E : E <= p && p < v : M > 0 ? m < g && g <= A : A <= g && g < m;
    if (u === "end")
      return Math.abs(N) >= Math.abs(M) ? N > 0 ? v <= p && p < E : E < p && p <= v : M > 0 ? m <= g && g < A : A < g && g <= m;
    if (u === "both")
      return Math.abs(N) >= Math.abs(M) ? N > 0 ? v < p && p < E : E < p && p < v : M > 0 ? m < g && g < A : A < g && g < m;
  } else return Math.abs(N) >= Math.abs(M) ? N > 0 ? v <= p && p <= E : E <= p && p <= v : M > 0 ? m <= g && g <= A : A <= g && g <= m;
  return !1;
}
function eT(o, i) {
  const n = xh(o), u = xh(i), d = n.type, p = u.type, g = n.coordinates, v = u.coordinates;
  switch (d) {
    case "Point":
      switch (p) {
        case "Point":
          return Xh(g, v);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPoint":
      switch (p) {
        case "Point":
          return nT(n, u);
        case "MultiPoint":
          return iT(n, u);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "LineString":
      switch (p) {
        case "Point":
          return Tl(u, n, { ignoreEndVertices: !0 });
        case "LineString":
          return oT(n, u);
        case "MultiPoint":
          return rT(n, u);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "Polygon":
      switch (p) {
        case "Point":
          return Pl(u, n, { ignoreBoundary: !0 });
        case "LineString":
          return aT(n, u);
        case "Polygon":
          return _g(n, u);
        case "MultiPoint":
          return sT(n, u);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPolygon":
      switch (p) {
        case "Polygon":
          return tT(n, u);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    default:
      throw new Error("feature1 " + d + " geometry not supported");
  }
}
function tT(o, i) {
  return o.coordinates.some(
    (n) => _g({ type: "Polygon", coordinates: n }, i)
  );
}
function nT(o, i) {
  let n, u = !1;
  for (n = 0; n < o.coordinates.length; n++)
    if (Xh(o.coordinates[n], i.coordinates)) {
      u = !0;
      break;
    }
  return u;
}
function iT(o, i) {
  for (const n of i.coordinates) {
    let u = !1;
    for (const d of o.coordinates)
      if (Xh(n, d)) {
        u = !0;
        break;
      }
    if (!u)
      return !1;
  }
  return !0;
}
function rT(o, i) {
  let n = !1;
  for (const u of i.coordinates)
    if (Tl(u, o, { ignoreEndVertices: !0 }) && (n = !0), !Tl(u, o))
      return !1;
  return !!n;
}
function sT(o, i) {
  for (const n of i.coordinates)
    if (!Pl(n, o, { ignoreBoundary: !0 }))
      return !1;
  return !0;
}
function oT(o, i) {
  let n = !1;
  for (const u of i.coordinates)
    if (Tl({ type: "Point", coordinates: u }, o, {
      ignoreEndVertices: !0
    }) && (n = !0), !Tl({ type: "Point", coordinates: u }, o, {
      ignoreEndVertices: !1
    }))
      return !1;
  return n;
}
function aT(o, i) {
  let n = !1, u = 0;
  const d = El(o), p = El(i);
  if (!mg(d, p))
    return !1;
  for (u; u < i.coordinates.length - 1; u++) {
    const g = lT(
      i.coordinates[u],
      i.coordinates[u + 1]
    );
    if (Pl({ type: "Point", coordinates: g }, o, {
      ignoreBoundary: !0
    })) {
      n = !0;
      break;
    }
  }
  return n;
}
function _g(o, i) {
  if (o.type === "Feature" && o.geometry === null || i.type === "Feature" && i.geometry === null)
    return !1;
  const n = El(o), u = El(i);
  if (!mg(n, u))
    return !1;
  const d = xh(i).coordinates;
  for (const p of d)
    for (const g of p)
      if (!Pl(g, o))
        return !1;
  return !0;
}
function mg(o, i) {
  return !(o[0] > i[0] || o[2] < i[2] || o[1] > i[1] || o[3] < i[3]);
}
function Xh(o, i) {
  return o[0] === i[0] && o[1] === i[1];
}
function lT(o, i) {
  return [(o[0] + i[0]) / 2, (o[1] + i[1]) / 2];
}
var uT = eT;
function cT(o) {
  const i = [];
  return o.type === "FeatureCollection" ? gg(o, function(n) {
    hl(n, function(u) {
      i.push(cl(u, n.properties));
    });
  }) : o.type === "Feature" ? hl(o, function(n) {
    i.push(cl(n, o.properties));
  }) : hl(o, function(n) {
    i.push(cl(n));
  }), Xu(i);
}
function hT(o, i = {}) {
  const n = El(o), u = (n[0] + n[2]) / 2, d = (n[1] + n[3]) / 2;
  return cl([u, d], i.properties, i);
}
function dT(o) {
  if (!o)
    throw new Error("geojson is required");
  switch (o.type) {
    case "Feature":
      return vg(o);
    case "FeatureCollection":
      return fT(o);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Qh(o);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function vg(o) {
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
  }), i.properties = yg(o.properties), o.geometry == null ? i.geometry = null : i.geometry = Qh(o.geometry), i;
}
function yg(o) {
  const i = {};
  return o && Object.keys(o).forEach((n) => {
    const u = o[n];
    typeof u == "object" ? u === null ? i[n] = null : Array.isArray(u) ? i[n] = u.map((d) => d) : i[n] = yg(u) : i[n] = u;
  }), i;
}
function fT(o) {
  const i = { type: "FeatureCollection" };
  return Object.keys(o).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        i[n] = o[n];
    }
  }), i.features = o.features.map((n) => vg(n)), i;
}
function Qh(o) {
  const i = { type: o.type };
  return o.bbox && (i.bbox = o.bbox), o.type === "GeometryCollection" ? (i.geometries = o.geometries.map((n) => Qh(n)), i) : (i.coordinates = Eg(o.coordinates), i);
}
function Eg(o) {
  const i = o;
  return typeof i[0] != "object" ? i.slice() : i.map((n) => Eg(n));
}
function pT(o, i, n = {}) {
  var u = Ph(o), d = Ph(i), p = Nu(d[1] - u[1]), g = Nu(d[0] - u[0]), v = Nu(u[1]), m = Nu(d[1]), E = Math.pow(Math.sin(p / 2), 2) + Math.pow(Math.sin(g / 2), 2) * Math.cos(v) * Math.cos(m);
  return U1(
    2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E)),
    n.units
  );
}
var gT = Object.defineProperty, _T = Object.defineProperties, mT = Object.getOwnPropertyDescriptors, rp = Object.getOwnPropertySymbols, vT = Object.prototype.hasOwnProperty, yT = Object.prototype.propertyIsEnumerable, sp = (o, i, n) => i in o ? gT(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, op = (o, i) => {
  for (var n in i || (i = {}))
    vT.call(i, n) && sp(o, n, i[n]);
  if (rp)
    for (var n of rp(i))
      yT.call(i, n) && sp(o, n, i[n]);
  return o;
}, ap = (o, i) => _T(o, mT(i));
function ET(o, i, n = {}) {
  if (!o) throw new Error("targetPoint is required");
  if (!i) throw new Error("points is required");
  let u = 1 / 0, d = 0;
  gg(i, (g, v) => {
    const m = pT(o, g, n);
    m < u && (d = v, u = m);
  });
  const p = dT(i.features[d]);
  return ap(op({}, p), {
    properties: ap(op({}, p.properties), {
      featureIndex: d,
      distanceToPoint: u
    })
  });
}
function TT(o) {
  const i = wT(o), n = hT(i);
  let u = !1, d = 0;
  for (; !u && d < i.features.length; ) {
    const p = i.features[d].geometry;
    let g, v, m, E, A, w, b = !1;
    if (p.type === "Point")
      n.geometry.coordinates[0] === p.coordinates[0] && n.geometry.coordinates[1] === p.coordinates[1] && (u = !0);
    else if (p.type === "MultiPoint") {
      let N = !1, M = 0;
      for (; !N && M < p.coordinates.length; )
        n.geometry.coordinates[0] === p.coordinates[M][0] && n.geometry.coordinates[1] === p.coordinates[M][1] && (u = !0, N = !0), M++;
    } else if (p.type === "LineString") {
      let N = 0;
      for (; !b && N < p.coordinates.length - 1; )
        g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = p.coordinates[N][0], E = p.coordinates[N][1], A = p.coordinates[N + 1][0], w = p.coordinates[N + 1][1], lp(g, v, m, E, A, w) && (b = !0, u = !0), N++;
    } else if (p.type === "MultiLineString") {
      let N = 0;
      for (; N < p.coordinates.length; ) {
        b = !1;
        let M = 0;
        const G = p.coordinates[N];
        for (; !b && M < G.length - 1; )
          g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = G[M][0], E = G[M][1], A = G[M + 1][0], w = G[M + 1][1], lp(g, v, m, E, A, w) && (b = !0, u = !0), M++;
        N++;
      }
    } else (p.type === "Polygon" || p.type === "MultiPolygon") && Pl(n, p) && (u = !0);
    d++;
  }
  if (u)
    return n;
  {
    const p = Xu([]);
    for (let g = 0; g < i.features.length; g++)
      p.features = p.features.concat(
        cT(i.features[g]).features
      );
    return cl(ET(n, p).geometry.coordinates);
  }
}
function wT(o) {
  return o.type !== "FeatureCollection" ? o.type !== "Feature" ? Xu([jh(o)]) : Xu([o]) : o;
}
function lp(o, i, n, u, d, p) {
  const g = Math.sqrt((d - n) * (d - n) + (p - u) * (p - u)), v = Math.sqrt((o - n) * (o - n) + (i - u) * (i - u)), m = Math.sqrt((d - o) * (d - o) + (p - i) * (p - i));
  return g === v + m;
}
var up = TT;
const Du = /* @__PURE__ */ new Map();
function dl() {
  return {
    registerDataPointRenderer: (d) => {
      Du.set(d.namespace + d.qualifiedName, d);
    },
    unregisterDataPointrender: (d) => {
      Du.delete(d.namespace + d.qualifiedName);
    },
    getAll: () => Du,
    getById: (d) => Du.get(d)
  };
}
const ST = /* @__PURE__ */ nt({
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
    return (i, n) => (V(!0), X(De, null, Gt(o.styleIds, (u) => (V(), X(De, { key: u }, [
      o.isPoint(o.geoJson) ? Fe("", !0) : (V(), ht(z(Bo), {
        key: 0,
        ref_for: !0,
        ref: "thingsLayer",
        geojson: o.filterFeatureCollection(o.geoJson, o.getStyleById(u)),
        options: o.layerOptions,
        "options-style": () => o.getStyleById(u)?.renderer.area
      }, null, 8, ["geojson", "options", "options-style"]))
    ], 64))), 128));
  }
}), AT = { class: "inner" }, CT = { class: "observation-slot" }, OT = { class: "inner" }, bT = { class: "observation-slot" }, LT = ["src"], IT = /* @__PURE__ */ nt({
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
    return (i, n) => (V(), X(De, null, [
      o.renderAs === "icon" ? (V(), X("div", {
        key: 0,
        style: ga({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: xo(["pin", "icon", { round: o.isRound, solid: o.isSolid }])
      }, [
        ne("div", AT, [
          o.iconConfig ? (V(), ht(z(Pp), {
            key: 0,
            configv: o.iconConfig
          }, null, 8, ["configv"])) : Fe("", !0)
        ]),
        ne("div", CT, [
          nl(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Fe("", !0),
      o.renderAs === "prop" ? (V(), X("div", {
        key: 1,
        style: ga({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: xo(["pin", "contain", "marker", { round: o.isRound, solid: o.isSolid }])
      }, [
        ne("div", OT, wt(o.propertyValue), 1),
        ne("div", bT, [
          nl(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Fe("", !0),
      o.renderAs === "image" ? (V(), X(De, { key: 2 }, [
        ne("div", {
          class: "image-marker",
          style: ga({
            width: `${o.imageSize}px`,
            height: `${o.imageSize}px`,
            background: o.isSelected ? o.selectionColor : void 0,
            borderRadius: o.isSelected ? "50%" : void 0,
            padding: o.isSelected ? "4px" : void 0
          })
        }, [
          o.imageUrl ? (V(), X("img", {
            key: 0,
            src: o.imageUrl,
            style: { width: "100%", height: "100%", objectFit: "contain" }
          }, null, 8, LT)) : Fe("", !0)
        ], 4),
        nl(i.$slots, "observation", {}, void 0, !0)
      ], 64)) : Fe("", !0),
      o.renderAs === "none" ? nl(i.$slots, "observation", { key: 3 }, void 0, !0) : Fe("", !0)
    ], 64));
  }
}), tr = (o, i) => {
  const n = o.__vccOpts || o;
  for (const [u, d] of i)
    n[u] = d;
  return n;
}, wl = /* @__PURE__ */ tr(IT, [["__scopeId", "data-v-dc572ab0"]]), NT = /* @__PURE__ */ nt({
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
    return (i, n) => (V(!0), X(De, null, Gt(o.styleIds, (u) => (V(), X(De, { key: u }, [
      (V(!0), X(De, null, Gt(o.filterFeatureCollection(o.layerData, o.getStyleById(u)).features, (d) => (V(), X(De, {
        key: d.id
      }, [
        o.isPoint(d.geometry) ? Fe("", !0) : (V(), ht(z(Bo), {
          key: 0,
          ref_for: !0,
          ref: "geojsonLayer",
          geojson: d,
          options: o.layerOptions,
          "options-style": () => o.getStyleById(u)?.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])),
        o.getPoint(d.geometry) ? (V(), ht(z(yl), {
          key: 1,
          "lat-lng": o.getPoint(d.geometry),
          options: { pane: o.markerPane }
        }, {
          default: Ye(() => [
            he(z(vl), { "class-name": "someExtraClass" }, {
              default: Ye(() => [
                he(wl, {
                  "render-as": o.getStyleById(u)?.renderer.point_render_as,
                  "background-color": o.getStyleById(u)?.renderer.pointPin?.color,
                  "icon-config": o.getStyleById(u)?.renderer.point,
                  "property-value": d.properties?.[o.getStyleById(u)?.renderer.point_prop ?? ""],
                  "image-url": o.getStyleById(u)?.renderer.point_image_url,
                  "image-size": o.getStyleById(u)?.renderer.point_image_size || 32,
                  "is-solid": o.getStyleById(u)?.renderer.pointPin?.solid
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options"])) : Fe("", !0)
      ], 64))), 128))
    ], 64))), 128));
  }
}), DT = /* @__PURE__ */ nt({
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
    return (i, n) => (V(!0), X(De, null, Gt(o.styleIds, (u) => (V(), X(De, { key: u }, [
      o.layerData && o.layerData.features ? (V(), X(De, { key: 0 }, [
        (V(!0), X(De, null, Gt(o.filterFeatureCollection(o.layerData, o.getStyleById(u)).features, (d) => (V(), X(De, {
          key: "area-" + d.id
        }, [
          d.geometry && !o.isPoint(d.geometry) ? (V(), ht(z(Bo), {
            key: 0,
            ref_for: !0,
            ref: "restGeojsonLayer",
            geojson: d,
            options: o.layerOptions,
            "options-style": () => o.getStyleById(u)?.renderer.area
          }, null, 8, ["geojson", "options", "options-style"])) : Fe("", !0)
        ], 64))), 128)),
        (V(!0), X(De, null, Gt(o.filterFeatureCollection(o.layerData, o.getStyleById(u)).features, (d) => (V(), X(De, {
          key: "point-" + d.id
        }, [
          d.geometry && o.isPoint(d.geometry) && o.getPoint(d.geometry) ? (V(), ht(z(yl), {
            key: 0,
            "lat-lng": o.getPoint(d.geometry),
            options: { pane: o.markerPane }
          }, {
            default: Ye(() => [
              he(z(vl), { "class-name": "someExtraClass" }, {
                default: Ye(() => [
                  he(wl, {
                    "render-as": o.getStyleById(u)?.renderer.point_render_as,
                    "background-color": o.getStyleById(u)?.renderer.pointPin?.color,
                    "icon-config": o.getStyleById(u)?.renderer.point,
                    "property-value": d.properties?.[o.getStyleById(u)?.renderer.point_prop ?? ""],
                    "image-url": o.getStyleById(u)?.renderer.point_image_url,
                    "image-size": o.getStyleById(u)?.renderer.point_image_size || 32,
                    "is-solid": o.getStyleById(u)?.renderer.pointPin?.solid
                  }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["lat-lng", "options"])) : Fe("", !0)
        ], 64))), 128))
      ], 64)) : Fe("", !0)
    ], 64))), 128));
  }
});
var Fo = /* @__PURE__ */ ((o) => (o.Thing = "Thing", o.OberservedArea = "OberservedArea", o))(Fo || {}), Pr = /* @__PURE__ */ ((o) => (o.equals = "eq", o.lessThen = "lt", o.greaterThen = "gt", o.lessThenEquals = "lte", o.greaterThenEquals = "gte", o.notEQuals = "neq", o))(Pr || {});
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
    return this._datasourceIds || (this._datasourceIds = Yu(this, this.eClass().getEStructuralFeature("datasourceIds"))), this._datasourceIds;
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
    return this._center || (this._center = Yu(this, this.eClass().getEStructuralFeature("center"))), this._center;
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
    return this._layers || (this._layers = as(this, this.eClass().getEStructuralFeature("layers"))), this._layers;
  }
  get styles() {
    return this._styles || (this._styles = as(this, this.eClass().getEStructuralFeature("styles"))), this._styles;
  }
  get OGCSstyles() {
    return this._OGCSstyles || (this._OGCSstyles = as(this, this.eClass().getEStructuralFeature("OGCSstyles"))), this._OGCSstyles;
  }
  get services() {
    return this._services || (this._services = as(this, this.eClass().getEStructuralFeature("services"))), this._services;
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
    return this._styleIds || (this._styleIds = Yu(this, this.eClass().getEStructuralFeature("styleIds"))), this._styleIds;
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
class Wt extends vr {
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
      getFeature: () => this.eClass().getEStructuralFeature(Wt.TYPE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Wt.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Wt.URL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Wt.URL,
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
      getFeature: () => this.eClass().getEStructuralFeature(Wt.SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Wt.SERVICE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Wt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Wt.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Wt.TYPE:
        return this.type;
      case Wt.URL:
        return this.url;
      case Wt.SERVICE:
        return this.service;
      case Wt.ID:
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
      case Wt.TYPE:
        this.type = n, super.eSet(i, n);
        break;
      case Wt.URL:
        this.url = n, super.eSet(i, n);
        break;
      case Wt.SERVICE:
        this.service = n, super.eSet(i, n);
        break;
      case Wt.ID:
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
      case Wt.TYPE:
        return this._type !== void 0;
      case Wt.URL:
        return this._url !== void 0;
      case Wt.SERVICE:
        return this._service !== void 0;
      case Wt.ID:
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
      case Wt.TYPE:
        this._type = void 0;
        return;
      case Wt.URL:
        this._url = void 0;
        return;
      case Wt.SERVICE:
        this._service = void 0;
        return;
      case Wt.ID:
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
class He extends vr {
  constructor() {
    super(...arguments), this._iconColor = new gh();
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
      getFeature: () => this.eClass().getEStructuralFeature(He.CURRENT_ICON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.CURRENT_ICON,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.ICON_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.ICON_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.ICON_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.ICON_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.IS_ICON_FILLED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.IS_ICON_FILLED,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.STROKE_WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.STROKE_WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.OPTIC_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.OPTIC_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.GRADE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.GRADE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case He.CURRENT_ICON:
        return this.currentIcon;
      case He.ICON_COLOR:
        return this.iconColor;
      case He.ICON_SIZE:
        return this.iconSize;
      case He.IS_ICON_FILLED:
        return this.isIconFilled;
      case He.STROKE_WEIGHT:
        return this.strokeWeight;
      case He.OPTIC_SIZE:
        return this.opticSize;
      case He.GRADE:
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
      case He.CURRENT_ICON:
        this.currentIcon = n, super.eSet(i, n);
        break;
      case He.ICON_COLOR:
        this.iconColor = n, super.eSet(i, n);
        break;
      case He.ICON_SIZE:
        this.iconSize = n, super.eSet(i, n);
        break;
      case He.IS_ICON_FILLED:
        this.isIconFilled = n, super.eSet(i, n);
        break;
      case He.STROKE_WEIGHT:
        this.strokeWeight = n, super.eSet(i, n);
        break;
      case He.OPTIC_SIZE:
        this.opticSize = n, super.eSet(i, n);
        break;
      case He.GRADE:
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
      case He.CURRENT_ICON:
        return this._currentIcon !== void 0;
      case He.ICON_COLOR:
        return this._iconColor !== new gh();
      case He.ICON_SIZE:
        return this._iconSize !== void 0;
      case He.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case He.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case He.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case He.GRADE:
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
      case He.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      case He.ICON_COLOR:
        this._iconColor = new gh();
        return;
      case He.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case He.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case He.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case He.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case He.GRADE:
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
class Qi extends vr {
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
class Je extends vr {
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.SHOW__SUB_ELEMENTS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.SHOW__SUB_ELEMENTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.POINT_RENDER_AS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.POINT_RENDER_AS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.POINT_PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.POINT_PROP,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.POINT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.POINT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.POINT_PIN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.POINT_PIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.AREA),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.AREA,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.LABEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.LABEL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Je.SHOW__SUB_ELEMENTS:
        return this.show_SubElements;
      case Je.POINT_RENDER_AS:
        return this.point_render_as;
      case Je.POINT_PROP:
        return this.point_prop;
      case Je.POINT:
        return this.point;
      case Je.POINT_PIN:
        return this.pointPin;
      case Je.AREA:
        return this.area;
      case Je.LABEL:
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
      case Je.SHOW__SUB_ELEMENTS:
        this.show_SubElements = n, super.eSet(i, n);
        break;
      case Je.POINT_RENDER_AS:
        this.point_render_as = n, super.eSet(i, n);
        break;
      case Je.POINT_PROP:
        this.point_prop = n, super.eSet(i, n);
        break;
      case Je.POINT:
        this.point = n, super.eSet(i, n);
        break;
      case Je.POINT_PIN:
        this.pointPin = n, super.eSet(i, n);
        break;
      case Je.AREA:
        this.area = n, super.eSet(i, n);
        break;
      case Je.LABEL:
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
      case Je.SHOW__SUB_ELEMENTS:
        return this._show_SubElements !== void 0;
      case Je.POINT_RENDER_AS:
        return this._point_render_as !== void 0;
      case Je.POINT_PROP:
        return this._point_prop !== void 0;
      case Je.POINT:
        return this._point !== void 0;
      case Je.POINT_PIN:
        return this._pointPin !== void 0;
      case Je.AREA:
        return this._area !== void 0;
      case Je.LABEL:
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
      case Je.SHOW__SUB_ELEMENTS:
        this._show_SubElements = void 0;
        return;
      case Je.POINT_RENDER_AS:
        this._point_render_as = void 0;
        return;
      case Je.POINT_PROP:
        this._point_prop = void 0;
        return;
      case Je.POINT:
        this._point = void 0;
        return;
      case Je.POINT_PIN:
        this._pointPin = void 0;
        return;
      case Je.AREA:
        this._area = void 0;
        return;
      case Je.LABEL:
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
const _a = {
  Thing: "Thing"
};
class Et extends vr {
  constructor() {
    super(...arguments), this._placement = _a.Thing;
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
      getFeature: () => this.eClass().getEStructuralFeature(Et.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Et.NAME,
      merge: () => !1
    });
  }
  get datastream() {
    return this._datastream || (this._datastream = as(this, this.eClass().getEStructuralFeature("datastream"))), this._datastream;
  }
  get observations() {
    return this._observations || (this._observations = as(this, this.eClass().getEStructuralFeature("observations"))), this._observations;
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
      getFeature: () => this.eClass().getEStructuralFeature(Et.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Et.RENDERER,
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
      getFeature: () => this.eClass().getEStructuralFeature(Et.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Et.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Et.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Et.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Et.NAME:
        return this.name;
      case Et.DATASTREAM:
        return this.datastream;
      case Et.OBSERVATIONS:
        return this.observations;
      case Et.RENDERER:
        return this.renderer;
      case Et.ID:
        return this.id;
      case Et.PLACEMENT:
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
      case Et.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Et.DATASTREAM:
        this.datastream.clear(), this.datastream.addAll(n), super.eSet(i, n);
        break;
      case Et.OBSERVATIONS:
        this.observations.clear(), this.observations.addAll(n), super.eSet(i, n);
        break;
      case Et.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case Et.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Et.PLACEMENT:
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
      case Et.NAME:
        return this._name !== void 0;
      case Et.DATASTREAM:
        return this._datastream !== void 0 && !this._datastream.isEmpty();
      case Et.OBSERVATIONS:
        return this._observations !== void 0 && !this._observations.isEmpty();
      case Et.RENDERER:
        return this._renderer !== void 0;
      case Et.ID:
        return this._id !== void 0;
      case Et.PLACEMENT:
        return this._placement !== _a.Thing;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Et.NAME:
        this._name = void 0;
        return;
      case Et.DATASTREAM:
        this._datastream && this._datastream.clear();
        return;
      case Et.OBSERVATIONS:
        this._observations && this._observations.clear();
        return;
      case Et.RENDERER:
        this._renderer = void 0;
        return;
      case Et.ID:
        this._id = void 0;
        return;
      case Et.PLACEMENT:
        this._placement = _a.Thing;
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
    super(...arguments), this._placement = _a.Thing;
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
        return this._placement !== _a.Thing;
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
        this._placement = _a.Thing;
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
class tn extends vr {
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
      getFeature: () => this.eClass().getEStructuralFeature(tn.SETTING),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => tn.SETTING,
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
      getFeature: () => this.eClass().getEStructuralFeature(tn.COMPONENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => tn.COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(tn.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => tn.RENDERER,
      merge: () => !1
    });
  }
  get conditions() {
    return this._conditions || (this._conditions = as(this, this.eClass().getEStructuralFeature("conditions"))), this._conditions;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case tn.SETTING:
        return this.setting;
      case tn.COMPONENT:
        return this.component;
      case tn.RENDERER:
        return this.renderer;
      case tn.CONDITIONS:
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
      case tn.SETTING:
        this.setting = n, super.eSet(i, n);
        break;
      case tn.COMPONENT:
        this.component = n, super.eSet(i, n);
        break;
      case tn.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case tn.CONDITIONS:
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
      case tn.SETTING:
        return this._setting !== void 0;
      case tn.COMPONENT:
        return this._component !== void 0;
      case tn.RENDERER:
        return this._renderer !== void 0;
      case tn.CONDITIONS:
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
      case tn.SETTING:
        this._setting = void 0;
        return;
      case tn.COMPONENT:
        this._component = void 0;
        return;
      case tn.RENDERER:
        this._renderer = void 0;
        return;
      case tn.CONDITIONS:
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
class Bn extends vr {
  constructor() {
    super(...arguments), this._comperator = ss.eq;
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
        return this._comperator !== ss.eq;
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
        this._comperator = ss.eq;
        return;
      case Bn.VALUE:
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
class lt extends vr {
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.NAME,
      merge: () => !1
    });
  }
  get thing() {
    return this._thing || (this._thing = as(this, this.eClass().getEStructuralFeature("thing"))), this._thing;
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.RENDERER,
      merge: () => !1
    });
  }
  get ds_renderer() {
    return this._ds_renderer || (this._ds_renderer = as(this, this.eClass().getEStructuralFeature("ds_renderer"))), this._ds_renderer;
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.OBSERVATIONREFRESH_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.OBSERVATIONREFRESH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.LAST_UPDATE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.LAST_UPDATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(lt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => lt.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case lt.NAME:
        return this.name;
      case lt.THING:
        return this.thing;
      case lt.RENDERER:
        return this.renderer;
      case lt.DS_RENDERER:
        return this.ds_renderer;
      case lt.OBSERVATIONREFRESH_TIME:
        return this.ObservationrefreshTime;
      case lt.LAST_UPDATE:
        return this.lastUpdate;
      case lt.ID:
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
      case lt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case lt.THING:
        this.thing.clear(), this.thing.addAll(n), super.eSet(i, n);
        break;
      case lt.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case lt.DS_RENDERER:
        this.ds_renderer.clear(), this.ds_renderer.addAll(n), super.eSet(i, n);
        break;
      case lt.OBSERVATIONREFRESH_TIME:
        this.ObservationrefreshTime = n, super.eSet(i, n);
        break;
      case lt.LAST_UPDATE:
        this.lastUpdate = n, super.eSet(i, n);
        break;
      case lt.ID:
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
      case lt.NAME:
        return this._name !== void 0;
      case lt.THING:
        return this._thing !== void 0 && !this._thing.isEmpty();
      case lt.RENDERER:
        return this._renderer !== void 0;
      case lt.DS_RENDERER:
        return this._ds_renderer !== void 0 && !this._ds_renderer.isEmpty();
      case lt.OBSERVATIONREFRESH_TIME:
        return this._ObservationrefreshTime !== void 0;
      case lt.LAST_UPDATE:
        return this._lastUpdate !== void 0;
      case lt.ID:
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
      case lt.NAME:
        this._name = void 0;
        return;
      case lt.THING:
        this._thing && this._thing.clear();
        return;
      case lt.RENDERER:
        this._renderer = void 0;
        return;
      case lt.DS_RENDERER:
        this._ds_renderer && this._ds_renderer.clear();
        return;
      case lt.OBSERVATIONREFRESH_TIME:
        this._ObservationrefreshTime = void 0;
        return;
      case lt.LAST_UPDATE:
        this._lastUpdate = void 0;
        return;
      case lt.ID:
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
class Ie extends vr {
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
class Dn extends vr {
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
class Ve extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.THING_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.UNIT_OF_MEASUREMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.UNIT_OF_MEASUREMENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.OBSERVED_PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.LATEST_OBSERVATION_RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.LATEST_OBSERVATION_RESULT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ve.LATEST_OBSERVATION_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ve.LATEST_OBSERVATION_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ve.ID:
        return this.id;
      case Ve.NAME:
        return this.name;
      case Ve.THING_ID:
        return this.thingId;
      case Ve.UNIT_OF_MEASUREMENT:
        return this.unitOfMeasurement;
      case Ve.OBSERVED_PROPERTY:
        return this.observedProperty;
      case Ve.LATEST_OBSERVATION_RESULT:
        return this.latestObservationResult;
      case Ve.LATEST_OBSERVATION_TIME:
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
      case Ve.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Ve.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Ve.THING_ID:
        this.thingId = n, super.eSet(i, n);
        break;
      case Ve.UNIT_OF_MEASUREMENT:
        this.unitOfMeasurement = n, super.eSet(i, n);
        break;
      case Ve.OBSERVED_PROPERTY:
        this.observedProperty = n, super.eSet(i, n);
        break;
      case Ve.LATEST_OBSERVATION_RESULT:
        this.latestObservationResult = n, super.eSet(i, n);
        break;
      case Ve.LATEST_OBSERVATION_TIME:
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
      case Ve.ID:
        return this._id !== void 0;
      case Ve.NAME:
        return this._name !== void 0;
      case Ve.THING_ID:
        return this._thingId !== void 0;
      case Ve.UNIT_OF_MEASUREMENT:
        return this._unitOfMeasurement !== void 0;
      case Ve.OBSERVED_PROPERTY:
        return this._observedProperty !== void 0;
      case Ve.LATEST_OBSERVATION_RESULT:
        return this._latestObservationResult !== void 0;
      case Ve.LATEST_OBSERVATION_TIME:
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
      case Ve.ID:
        this._id = void 0;
        return;
      case Ve.NAME:
        this._name = void 0;
        return;
      case Ve.THING_ID:
        this._thingId = void 0;
        return;
      case Ve.UNIT_OF_MEASUREMENT:
        this._unitOfMeasurement = void 0;
        return;
      case Ve.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      case Ve.LATEST_OBSERVATION_RESULT:
        this._latestObservationResult = void 0;
        return;
      case Ve.LATEST_OBSERVATION_TIME:
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
class St extends Sl {
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
class Ai extends Sl {
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
class $t extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature($t.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $t.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature($t.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $t.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature($t.GEOMETRY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $t.GEOMETRY,
      merge: () => !1
    });
  }
  get thingIds() {
    return this._thingIds || (this._thingIds = Yu(this, this.eClass().getEStructuralFeature("thingIds"))), this._thingIds;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case $t.ID:
        return this.id;
      case $t.NAME:
        return this.name;
      case $t.GEOMETRY:
        return this.geometry;
      case $t.THING_IDS:
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
      case $t.ID:
        this.id = n, super.eSet(i, n);
        break;
      case $t.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case $t.GEOMETRY:
        this.geometry = n, super.eSet(i, n);
        break;
      case $t.THING_IDS:
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
      case $t.ID:
        return this._id !== void 0;
      case $t.NAME:
        return this._name !== void 0;
      case $t.GEOMETRY:
        return this._geometry !== void 0;
      case $t.THING_IDS:
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
      case $t.ID:
        this._id = void 0;
        return;
      case $t.NAME:
        this._name = void 0;
        return;
      case $t.GEOMETRY:
        this._geometry = void 0;
        return;
      case $t.THING_IDS:
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
class ed extends $E {
  static get eINSTANCE() {
    return this._instance || (this._instance = new ed()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
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
    return new Wt();
  }
  /**
   * Create a new IconSettings instance
   */
  createIconSettings() {
    return new He();
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
    return new Je();
  }
  /**
   * Create a new DSRenderer instance
   */
  createDSRenderer() {
    return new Et();
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
    return new tn();
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
    return new lt();
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
    return new Ke();
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
    return new Ve();
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
    return new Ai();
  }
  /**
   * Create a new LocationClickPayload instance
   */
  createLocationClickPayload() {
    return new $t();
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
function Io(o) {
  const i = xp.INSTANCE.getEPackage(o);
  if (!i)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing MapSettingsPackage.`);
  return i;
}
class C extends JE {
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
    xp.INSTANCE.set(C.eNS_URI, this), this.setEFactoryInstance(ed.eINSTANCE);
    const i = new Zn();
    i.setName("MapWidgetInterface"), i.setAbstract(!0), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), C.Literals.MAP_WIDGET_INTERFACE = i;
    const n = new Zn();
    n.setName("MapSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), C.Literals.MAP_SETTINGS = n;
    const u = new fe();
    u.setName("datasourceId"), u.setLowerBound(0), u.setUpperBound(1), n.getEStructuralFeatures().push(u), C.Literals.MAP_SETTINGS__DATASOURCE_ID = u;
    const d = new fe();
    d.setName("datasourceIds"), d.setLowerBound(0), d.setUpperBound(-1), n.getEStructuralFeatures().push(d), C.Literals.MAP_SETTINGS__DATASOURCE_IDS = d;
    const p = new fe();
    p.setName("baseMapUrl"), p.setLowerBound(0), p.setUpperBound(1), n.getEStructuralFeatures().push(p), C.Literals.MAP_SETTINGS__BASE_MAP_URL = p;
    const g = new fe();
    g.setName("zoom"), g.setLowerBound(0), g.setUpperBound(1), n.getEStructuralFeatures().push(g), C.Literals.MAP_SETTINGS__ZOOM = g;
    const v = new fe();
    v.setName("center"), v.setLowerBound(0), v.setUpperBound(-1), n.getEStructuralFeatures().push(v), C.Literals.MAP_SETTINGS__CENTER = v;
    const m = new fe();
    m.setName("attribution"), m.setLowerBound(0), m.setUpperBound(1), n.getEStructuralFeatures().push(m), C.Literals.MAP_SETTINGS__ATTRIBUTION = m;
    const E = new Xn();
    E.setContainment(!0), E.setName("layers"), E.setLowerBound(0), E.setUpperBound(-1), n.getEStructuralFeatures().push(E), C.Literals.MAP_SETTINGS__LAYERS = E;
    const A = new Xn();
    A.setContainment(!0), A.setName("styles"), A.setLowerBound(0), A.setUpperBound(-1), n.getEStructuralFeatures().push(A), C.Literals.MAP_SETTINGS__STYLES = A;
    const w = new Xn();
    w.setContainment(!0), w.setName("OGCSstyles"), w.setLowerBound(0), w.setUpperBound(-1), n.getEStructuralFeatures().push(w), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES = w;
    const b = new Xn();
    b.setContainment(!0), b.setName("services"), b.setLowerBound(0), b.setUpperBound(-1), n.getEStructuralFeatures().push(b), C.Literals.MAP_SETTINGS__SERVICES = b;
    const N = new fe();
    N.setName("fixed"), N.setLowerBound(0), N.setUpperBound(1), n.getEStructuralFeatures().push(N), C.Literals.MAP_SETTINGS__FIXED = N;
    const M = new fe();
    M.setName("enableClustering"), M.setLowerBound(0), M.setUpperBound(1), n.getEStructuralFeatures().push(M), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING = M;
    const G = new fe();
    G.setName("selectionHighlightColor"), G.setLowerBound(0), G.setUpperBound(1), n.getEStructuralFeatures().push(G), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR = G;
    const ee = new fe();
    ee.setName("selectedThingId"), ee.setLowerBound(0), ee.setUpperBound(1), n.getEStructuralFeatures().push(ee), C.Literals.MAP_SETTINGS__SELECTED_THING_ID = ee;
    const Z = new Zn();
    Z.setName("Layer"), Z.setAbstract(!1), Z.setInterface(!1), this.getEClassifiers().push(Z), Z.setEPackage(this), C.Literals.LAYER = Z;
    const W = new fe();
    W.setName("datasourceId"), W.setLowerBound(0), W.setUpperBound(1), Z.getEStructuralFeatures().push(W), C.Literals.LAYER__DATASOURCE_ID = W;
    const K = new fe();
    K.setName("service"), K.setLowerBound(0), K.setUpperBound(1), Z.getEStructuralFeatures().push(K), C.Literals.LAYER__SERVICE = K;
    const R = new fe();
    R.setName("type"), R.setLowerBound(0), R.setUpperBound(1), Z.getEStructuralFeatures().push(R), C.Literals.LAYER__TYPE = R;
    const U = new Xn();
    U.setContainment(!0), U.setName("childs"), U.setLowerBound(0), U.setUpperBound(1), Z.getEStructuralFeatures().push(U), C.Literals.LAYER__CHILDS = U;
    const ue = new fe();
    ue.setName("level"), ue.setLowerBound(0), ue.setUpperBound(1), Z.getEStructuralFeatures().push(ue), C.Literals.LAYER__LEVEL = ue;
    const _e = new fe();
    _e.setName("styleIds"), _e.setLowerBound(0), _e.setUpperBound(-1), Z.getEStructuralFeatures().push(_e), C.Literals.LAYER__STYLE_IDS = _e;
    const be = new fe();
    be.setName("name"), be.setLowerBound(0), be.setUpperBound(1), Z.getEStructuralFeatures().push(be), C.Literals.LAYER__NAME = be;
    const ce = new fe();
    ce.setName("title"), ce.setLowerBound(0), ce.setUpperBound(1), Z.getEStructuralFeatures().push(ce), C.Literals.LAYER__TITLE = ce;
    const se = new fe();
    se.setName("attribution"), se.setLowerBound(0), se.setUpperBound(1), Z.getEStructuralFeatures().push(se), C.Literals.LAYER__ATTRIBUTION = se;
    const $ = new fe();
    $.setName("geoJson"), $.setLowerBound(0), $.setUpperBound(1), Z.getEStructuralFeatures().push($), C.Literals.LAYER__GEO_JSON = $;
    const k = new fe();
    k.setName("wfs_service"), k.setLowerBound(0), k.setUpperBound(1), Z.getEStructuralFeatures().push(k), C.Literals.LAYER__WFS_SERVICE = k;
    const ie = new fe();
    ie.setName("opacity"), ie.setLowerBound(0), ie.setUpperBound(1), Z.getEStructuralFeatures().push(ie), C.Literals.LAYER__OPACITY = ie;
    const Y = new Zn();
    Y.setName("Service"), Y.setAbstract(!1), Y.setInterface(!1), this.getEClassifiers().push(Y), Y.setEPackage(this), C.Literals.SERVICE = Y;
    const de = new fe();
    de.setName("type"), de.setLowerBound(0), de.setUpperBound(1), Y.getEStructuralFeatures().push(de), C.Literals.SERVICE__TYPE = de;
    const le = new fe();
    le.setName("url"), le.setLowerBound(0), le.setUpperBound(1), Y.getEStructuralFeatures().push(le), C.Literals.SERVICE__URL = le;
    const Oe = new fe();
    Oe.setName("service"), Oe.setLowerBound(0), Oe.setUpperBound(1), Y.getEStructuralFeatures().push(Oe), C.Literals.SERVICE__SERVICE = Oe;
    const Ee = new fe();
    Ee.setName("id"), Ee.setLowerBound(0), Ee.setUpperBound(1), Y.getEStructuralFeatures().push(Ee), C.Literals.SERVICE__ID = Ee;
    const Pt = new Zn();
    Pt.setName("IconSettings"), Pt.setAbstract(!1), Pt.setInterface(!1), this.getEClassifiers().push(Pt), Pt.setEPackage(this), C.Literals.ICON_SETTINGS = Pt;
    const Le = new fe();
    Le.setName("currentIcon"), Le.setLowerBound(0), Le.setUpperBound(1), Pt.getEStructuralFeatures().push(Le), C.Literals.ICON_SETTINGS__CURRENT_ICON = Le;
    const Ue = new Xn();
    Ue.setContainment(!1), Ue.setName("iconColor"), Ue.setLowerBound(0), Ue.setUpperBound(1), Pt.getEStructuralFeatures().push(Ue), C.Literals.ICON_SETTINGS__ICON_COLOR = Ue;
    const kt = new fe();
    kt.setName("iconSize"), kt.setLowerBound(0), kt.setUpperBound(1), Pt.getEStructuralFeatures().push(kt), C.Literals.ICON_SETTINGS__ICON_SIZE = kt;
    const Yt = new fe();
    Yt.setName("isIconFilled"), Yt.setLowerBound(0), Yt.setUpperBound(1), Pt.getEStructuralFeatures().push(Yt), C.Literals.ICON_SETTINGS__IS_ICON_FILLED = Yt;
    const Lt = new fe();
    Lt.setName("strokeWeight"), Lt.setLowerBound(0), Lt.setUpperBound(1), Pt.getEStructuralFeatures().push(Lt), C.Literals.ICON_SETTINGS__STROKE_WEIGHT = Lt;
    const je = new fe();
    je.setName("opticSize"), je.setLowerBound(0), je.setUpperBound(1), Pt.getEStructuralFeatures().push(je), C.Literals.ICON_SETTINGS__OPTIC_SIZE = je;
    const Me = new fe();
    Me.setName("grade"), Me.setLowerBound(0), Me.setUpperBound(1), Pt.getEStructuralFeatures().push(Me), C.Literals.ICON_SETTINGS__GRADE = Me;
    const sn = new Zn();
    sn.setName("PointPin"), sn.setAbstract(!1), sn.setInterface(!1), this.getEClassifiers().push(sn), sn.setEPackage(this), C.Literals.POINT_PIN = sn;
    const pn = new fe();
    pn.setName("color"), pn.setLowerBound(0), pn.setUpperBound(1), sn.getEStructuralFeatures().push(pn), C.Literals.POINT_PIN__COLOR = pn;
    const Pn = new fe();
    Pn.setName("solid"), Pn.setLowerBound(0), Pn.setUpperBound(1), sn.getEStructuralFeatures().push(Pn), C.Literals.POINT_PIN__SOLID = Pn;
    const on = new Zn();
    on.setName("PointAndAreaSettings"), on.setAbstract(!1), on.setInterface(!1), this.getEClassifiers().push(on), on.setEPackage(this), C.Literals.POINT_AND_AREA_SETTINGS = on;
    const qn = new fe();
    qn.setName("show_SubElements"), qn.setLowerBound(0), qn.setUpperBound(1), on.getEStructuralFeatures().push(qn), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS = qn;
    const Un = new fe();
    Un.setName("point_render_as"), Un.setLowerBound(0), Un.setUpperBound(1), on.getEStructuralFeatures().push(Un), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS = Un;
    const Ui = new fe();
    Ui.setName("point_prop"), Ui.setLowerBound(0), Ui.setUpperBound(1), on.getEStructuralFeatures().push(Ui), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP = Ui;
    const gn = new Xn();
    gn.setContainment(!0), gn.setName("point"), gn.setLowerBound(0), gn.setUpperBound(1), on.getEStructuralFeatures().push(gn), C.Literals.POINT_AND_AREA_SETTINGS__POINT = gn;
    const Ut = new Xn();
    Ut.setContainment(!0), Ut.setName("pointPin"), Ut.setLowerBound(0), Ut.setUpperBound(1), on.getEStructuralFeatures().push(Ut), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN = Ut;
    const zi = new Xn();
    zi.setContainment(!0), zi.setName("area"), zi.setLowerBound(0), zi.setUpperBound(1), on.getEStructuralFeatures().push(zi), C.Literals.POINT_AND_AREA_SETTINGS__AREA = zi;
    const an = new fe();
    an.setName("label"), an.setLowerBound(0), an.setUpperBound(1), on.getEStructuralFeatures().push(an), C.Literals.POINT_AND_AREA_SETTINGS__LABEL = an;
    const ln = new Zn();
    ln.setName("DSRenderer"), ln.setAbstract(!1), ln.setInterface(!1), this.getEClassifiers().push(ln), ln.setEPackage(this), C.Literals.D_S_RENDERER = ln;
    const yr = new fe();
    yr.setName("name"), yr.setLowerBound(0), yr.setUpperBound(1), ln.getEStructuralFeatures().push(yr), C.Literals.D_S_RENDERER__NAME = yr;
    const Kn = new Xn();
    Kn.setContainment(!0), Kn.setName("datastream"), Kn.setLowerBound(0), Kn.setUpperBound(-1), ln.getEStructuralFeatures().push(Kn), C.Literals.D_S_RENDERER__DATASTREAM = Kn;
    const jt = new Xn();
    jt.setContainment(!0), jt.setName("observations"), jt.setLowerBound(0), jt.setUpperBound(-1), ln.getEStructuralFeatures().push(jt), C.Literals.D_S_RENDERER__OBSERVATIONS = jt;
    const Qn = new Xn();
    Qn.setContainment(!0), Qn.setName("renderer"), Qn.setLowerBound(0), Qn.setUpperBound(1), ln.getEStructuralFeatures().push(Qn), C.Literals.D_S_RENDERER__RENDERER = Qn;
    const xn = new fe();
    xn.setName("id"), xn.setLowerBound(0), xn.setUpperBound(1), ln.getEStructuralFeatures().push(xn), C.Literals.D_S_RENDERER__ID = xn;
    const Vi = new fe();
    Vi.setName("placement"), Vi.setLowerBound(0), Vi.setUpperBound(1), ln.getEStructuralFeatures().push(Vi), C.Literals.D_S_RENDERER__PLACEMENT = Vi;
    const zn = new Zn();
    zn.setName("Placement"), zn.setAbstract(!1), zn.setInterface(!1), this.getEClassifiers().push(zn), zn.setEPackage(this), C.Literals.PLACEMENT = zn;
    const nr = new fe();
    nr.setName("placement"), nr.setLowerBound(0), nr.setUpperBound(1), zn.getEStructuralFeatures().push(nr), C.Literals.PLACEMENT__PLACEMENT = nr;
    const _n = new Zn();
    _n.setName("Observation"), _n.setAbstract(!1), _n.setInterface(!1), this.getEClassifiers().push(_n), _n.setEPackage(this), C.Literals.OBSERVATION = _n;
    const ei = new fe();
    ei.setName("setting"), ei.setLowerBound(0), ei.setUpperBound(1), _n.getEStructuralFeatures().push(ei), C.Literals.OBSERVATION__SETTING = ei;
    const Oi = new fe();
    Oi.setName("component"), Oi.setLowerBound(0), Oi.setUpperBound(1), _n.getEStructuralFeatures().push(Oi), C.Literals.OBSERVATION__COMPONENT = Oi;
    const bi = new Xn();
    bi.setContainment(!0), bi.setName("renderer"), bi.setLowerBound(0), bi.setUpperBound(1), _n.getEStructuralFeatures().push(bi), C.Literals.OBSERVATION__RENDERER = bi;
    const di = new Xn();
    di.setContainment(!0), di.setName("conditions"), di.setLowerBound(0), di.setUpperBound(-1), _n.getEStructuralFeatures().push(di), C.Literals.OBSERVATION__CONDITIONS = di;
    const Fn = new Zn();
    Fn.setName("Condition"), Fn.setAbstract(!1), Fn.setInterface(!1), this.getEClassifiers().push(Fn), Fn.setEPackage(this), C.Literals.CONDITION = Fn;
    const Wi = new fe();
    Wi.setName("prop"), Wi.setLowerBound(0), Wi.setUpperBound(1), Fn.getEStructuralFeatures().push(Wi), C.Literals.CONDITION__PROP = Wi;
    const fi = new fe();
    fi.setName("comperator"), fi.setLowerBound(0), fi.setUpperBound(1), Fn.getEStructuralFeatures().push(fi), C.Literals.CONDITION__COMPERATOR = fi;
    const ti = new fe();
    ti.setName("value"), ti.setLowerBound(0), ti.setUpperBound(1), Fn.getEStructuralFeatures().push(ti), C.Literals.CONDITION__VALUE = ti;
    const An = new Zn();
    An.setName("Renderer"), An.setAbstract(!1), An.setInterface(!1), this.getEClassifiers().push(An), An.setEPackage(this), C.Literals.RENDERER = An;
    const ni = new fe();
    ni.setName("name"), ni.setLowerBound(0), ni.setUpperBound(1), An.getEStructuralFeatures().push(ni), C.Literals.RENDERER__NAME = ni;
    const Li = new Xn();
    Li.setContainment(!0), Li.setName("thing"), Li.setLowerBound(0), Li.setUpperBound(-1), An.getEStructuralFeatures().push(Li), C.Literals.RENDERER__THING = Li;
    const Ii = new Xn();
    Ii.setContainment(!0), Ii.setName("renderer"), Ii.setLowerBound(0), Ii.setUpperBound(1), An.getEStructuralFeatures().push(Ii), C.Literals.RENDERER__RENDERER = Ii;
    const ii = new Xn();
    ii.setContainment(!0), ii.setName("ds_renderer"), ii.setLowerBound(0), ii.setUpperBound(-1), An.getEStructuralFeatures().push(ii), C.Literals.RENDERER__DS_RENDERER = ii;
    const ir = new fe();
    ir.setName("ObservationrefreshTime"), ir.setLowerBound(0), ir.setUpperBound(1), An.getEStructuralFeatures().push(ir), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME = ir;
    const Zi = new fe();
    Zi.setName("lastUpdate"), Zi.setLowerBound(0), Zi.setUpperBound(1), An.getEStructuralFeatures().push(Zi), C.Literals.RENDERER__LAST_UPDATE = Zi;
    const x = new fe();
    x.setName("id"), x.setLowerBound(0), x.setUpperBound(1), An.getEStructuralFeatures().push(x), C.Literals.RENDERER__ID = x;
    const ae = new Zn();
    ae.setName("MapProps"), ae.setAbstract(!1), ae.setInterface(!1), this.getEClassifiers().push(ae), ae.setEPackage(this), C.Literals.MAP_PROPS = ae;
    const J = new fe();
    J.setName("stroke"), J.setLowerBound(0), J.setUpperBound(1), ae.getEStructuralFeatures().push(J), C.Literals.MAP_PROPS__STROKE = J;
    const ve = new fe();
    ve.setName("color"), ve.setLowerBound(0), ve.setUpperBound(1), ae.getEStructuralFeatures().push(ve), C.Literals.MAP_PROPS__COLOR = ve;
    const xe = new fe();
    xe.setName("weight"), xe.setLowerBound(0), xe.setUpperBound(1), ae.getEStructuralFeatures().push(xe), C.Literals.MAP_PROPS__WEIGHT = xe;
    const Re = new fe();
    Re.setName("opacity"), Re.setLowerBound(0), Re.setUpperBound(1), ae.getEStructuralFeatures().push(Re), C.Literals.MAP_PROPS__OPACITY = Re;
    const Xe = new fe();
    Xe.setName("lineCap"), Xe.setLowerBound(0), Xe.setUpperBound(1), ae.getEStructuralFeatures().push(Xe), C.Literals.MAP_PROPS__LINE_CAP = Xe;
    const ft = new fe();
    ft.setName("dashOffset"), ft.setLowerBound(0), ft.setUpperBound(1), ae.getEStructuralFeatures().push(ft), C.Literals.MAP_PROPS__DASH_OFFSET = ft;
    const It = new fe();
    It.setName("fill"), It.setLowerBound(0), It.setUpperBound(1), ae.getEStructuralFeatures().push(It), C.Literals.MAP_PROPS__FILL = It;
    const Mt = new fe();
    Mt.setName("fillOpacity"), Mt.setLowerBound(0), Mt.setUpperBound(1), ae.getEStructuralFeatures().push(Mt), C.Literals.MAP_PROPS__FILL_OPACITY = Mt;
    const Xt = new fe();
    Xt.setName("fillColor"), Xt.setLowerBound(0), Xt.setUpperBound(1), ae.getEStructuralFeatures().push(Xt), C.Literals.MAP_PROPS__FILL_COLOR = Xt;
    const gt = new fe();
    gt.setName("className"), gt.setLowerBound(0), gt.setUpperBound(1), ae.getEStructuralFeatures().push(gt), C.Literals.MAP_PROPS__CLASS_NAME = gt;
    const me = new Zn();
    me.setName("ThingClickPayload"), me.setAbstract(!1), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), C.Literals.THING_CLICK_PAYLOAD = me;
    const ri = new fe();
    ri.setName("id"), ri.setLowerBound(0), ri.setUpperBound(1), me.getEStructuralFeatures().push(ri), C.Literals.THING_CLICK_PAYLOAD__ID = ri;
    const Hi = new fe();
    Hi.setName("name"), Hi.setLowerBound(0), Hi.setUpperBound(1), me.getEStructuralFeatures().push(Hi), C.Literals.THING_CLICK_PAYLOAD__NAME = Hi;
    const pi = new fe();
    pi.setName("description"), pi.setLowerBound(0), pi.setUpperBound(1), me.getEStructuralFeatures().push(pi), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION = pi;
    const Er = new fe();
    Er.setName("properties"), Er.setLowerBound(0), Er.setUpperBound(1), me.getEStructuralFeatures().push(Er), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES = Er;
    const Nt = new fe();
    Nt.setName("location"), Nt.setLowerBound(0), Nt.setUpperBound(1), me.getEStructuralFeatures().push(Nt), C.Literals.THING_CLICK_PAYLOAD__LOCATION = Nt;
    const Cn = new fe();
    Cn.setName("rendererId"), Cn.setLowerBound(0), Cn.setUpperBound(1), me.getEStructuralFeatures().push(Cn), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID = Cn;
    const ot = new Xn();
    ot.setContainment(!0), ot.setName("datastreams"), ot.setLowerBound(0), ot.setUpperBound(-1), me.getEStructuralFeatures().push(ot), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS = ot;
    const zt = new Zn();
    zt.setName("DatastreamSummary"), zt.setAbstract(!1), zt.setInterface(!1), this.getEClassifiers().push(zt), zt.setEPackage(this), C.Literals.DATASTREAM_SUMMARY = zt;
    const On = new fe();
    On.setName("id"), On.setLowerBound(0), On.setUpperBound(1), zt.getEStructuralFeatures().push(On), C.Literals.DATASTREAM_SUMMARY__ID = On;
    const si = new fe();
    si.setName("name"), si.setLowerBound(0), si.setUpperBound(1), zt.getEStructuralFeatures().push(si), C.Literals.DATASTREAM_SUMMARY__NAME = si;
    const mn = new fe();
    mn.setName("observedProperty"), mn.setLowerBound(0), mn.setUpperBound(1), zt.getEStructuralFeatures().push(mn), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY = mn;
    const bn = new Zn();
    bn.setName("DatastreamClickPayload"), bn.setAbstract(!1), bn.setInterface(!1), this.getEClassifiers().push(bn), bn.setEPackage(this), C.Literals.DATASTREAM_CLICK_PAYLOAD = bn;
    const oi = new fe();
    oi.setName("id"), oi.setLowerBound(0), oi.setUpperBound(1), bn.getEStructuralFeatures().push(oi), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID = oi;
    const un = new fe();
    un.setName("name"), un.setLowerBound(0), un.setUpperBound(1), bn.getEStructuralFeatures().push(un), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME = un;
    const qt = new fe();
    qt.setName("thingId"), qt.setLowerBound(0), qt.setUpperBound(1), bn.getEStructuralFeatures().push(qt), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID = qt;
    const $n = new fe();
    $n.setName("unitOfMeasurement"), $n.setLowerBound(0), $n.setUpperBound(1), bn.getEStructuralFeatures().push($n), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT = $n;
    const xr = new fe();
    xr.setName("observedProperty"), xr.setLowerBound(0), xr.setUpperBound(1), bn.getEStructuralFeatures().push(xr), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY = xr;
    const ds = new fe();
    ds.setName("latestObservationResult"), ds.setLowerBound(0), ds.setUpperBound(1), bn.getEStructuralFeatures().push(ds), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT = ds;
    const fs = new fe();
    fs.setName("latestObservationTime"), fs.setLowerBound(0), fs.setUpperBound(1), bn.getEStructuralFeatures().push(fs), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME = fs;
    const gi = new Zn();
    gi.setName("ObservationClickPayload"), gi.setAbstract(!1), gi.setInterface(!1), this.getEClassifiers().push(gi), gi.setEPackage(this), C.Literals.OBSERVATION_CLICK_PAYLOAD = gi;
    const Tr = new fe();
    Tr.setName("id"), Tr.setLowerBound(0), Tr.setUpperBound(1), gi.getEStructuralFeatures().push(Tr), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID = Tr;
    const Yi = new fe();
    Yi.setName("datastreamId"), Yi.setLowerBound(0), Yi.setUpperBound(1), gi.getEStructuralFeatures().push(Yi), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID = Yi;
    const Kr = new fe();
    Kr.setName("phenomenonTime"), Kr.setLowerBound(0), Kr.setUpperBound(1), gi.getEStructuralFeatures().push(Kr), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME = Kr;
    const $r = new fe();
    $r.setName("result"), $r.setLowerBound(0), $r.setUpperBound(1), gi.getEStructuralFeatures().push($r), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT = $r;
    const rr = new fe();
    rr.setName("resultTime"), rr.setLowerBound(0), rr.setUpperBound(1), gi.getEStructuralFeatures().push(rr), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME = rr;
    const Qe = new Zn();
    Qe.setName("MapClickPayload"), Qe.setAbstract(!1), Qe.setInterface(!1), this.getEClassifiers().push(Qe), Qe.setEPackage(this), C.Literals.MAP_CLICK_PAYLOAD = Qe;
    const Ct = new fe();
    Ct.setName("lat"), Ct.setLowerBound(0), Ct.setUpperBound(1), Qe.getEStructuralFeatures().push(Ct), C.Literals.MAP_CLICK_PAYLOAD__LAT = Ct;
    const sr = new fe();
    sr.setName("lon"), sr.setLowerBound(0), sr.setUpperBound(1), Qe.getEStructuralFeatures().push(sr), C.Literals.MAP_CLICK_PAYLOAD__LON = sr;
    const Mn = new Zn();
    Mn.setName("LocationClickPayload"), Mn.setAbstract(!1), Mn.setInterface(!1), this.getEClassifiers().push(Mn), Mn.setEPackage(this), C.Literals.LOCATION_CLICK_PAYLOAD = Mn;
    const _i = new fe();
    _i.setName("id"), _i.setLowerBound(0), _i.setUpperBound(1), Mn.getEStructuralFeatures().push(_i), C.Literals.LOCATION_CLICK_PAYLOAD__ID = _i;
    const Fr = new fe();
    Fr.setName("name"), Fr.setLowerBound(0), Fr.setUpperBound(1), Mn.getEStructuralFeatures().push(Fr), C.Literals.LOCATION_CLICK_PAYLOAD__NAME = Fr;
    const ze = new fe();
    ze.setName("geometry"), ze.setLowerBound(0), ze.setUpperBound(1), Mn.getEStructuralFeatures().push(ze), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY = ze;
    const Ot = new fe();
    Ot.setName("thingIds"), Ot.setLowerBound(0), Ot.setUpperBound(-1), Mn.getEStructuralFeatures().push(Ot), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS = Ot, C.Literals.MAP_WIDGET_INTERFACE.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), C.Literals.THING_CLICK_PAYLOAD.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.DATASTREAM_CLICK_PAYLOAD.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.OBSERVATION_CLICK_PAYLOAD.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_CLICK_PAYLOAD.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.LOCATION_CLICK_PAYLOAD.getESuperTypes().push(Io("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_SETTINGS__DATASOURCE_ID.setEType(pe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__DATASOURCE_IDS.setEType(pe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__BASE_MAP_URL.setEType(pe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__ZOOM.setEType(pe().getEClassifier("EInt")), C.Literals.MAP_SETTINGS__CENTER.setEType(pe().getEClassifier("EDouble")), C.Literals.MAP_SETTINGS__ATTRIBUTION.setEType(pe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__LAYERS.setEType(C.Literals.LAYER), C.Literals.MAP_SETTINGS__STYLES.setEType(C.Literals.D_S_RENDERER), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES.setEType(C.Literals.RENDERER), C.Literals.MAP_SETTINGS__SERVICES.setEType(C.Literals.SERVICE), C.Literals.MAP_SETTINGS__FIXED.setEType(pe().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING.setEType(pe().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR.setEType(pe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__SELECTED_THING_ID.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__DATASOURCE_ID.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__SERVICE.setEType(pe().getEClassifier("EJavaObject")), C.Literals.LAYER__TYPE.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__CHILDS.setEType(C.Literals.LAYER), C.Literals.LAYER__LEVEL.setEType(pe().getEClassifier("EInt")), C.Literals.LAYER__STYLE_IDS.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__NAME.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__TITLE.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__ATTRIBUTION.setEType(pe().getEClassifier("EString")), C.Literals.LAYER__GEO_JSON.setEType(pe().getEClassifier("EJavaObject")), C.Literals.LAYER__WFS_SERVICE.setEType(pe().getEClassifier("EJavaObject")), C.Literals.LAYER__OPACITY.setEType(pe().getEClassifier("EDouble")), C.Literals.SERVICE__TYPE.setEType(pe().getEClassifier("EString")), C.Literals.SERVICE__URL.setEType(pe().getEClassifier("EString")), C.Literals.SERVICE__SERVICE.setEType(pe().getEClassifier("EJavaObject")), C.Literals.SERVICE__ID.setEType(pe().getEClassifier("EString")), C.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(pe().getEClassifier("EString")), C.Literals.ICON_SETTINGS__ICON_COLOR.setEType(Io("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), C.Literals.ICON_SETTINGS__ICON_SIZE.setEType(pe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(pe().getEClassifier("EBoolean")), C.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(pe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(pe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__GRADE.setEType(pe().getEClassifier("EInt")), C.Literals.POINT_PIN__COLOR.setEType(pe().getEClassifier("EString")), C.Literals.POINT_PIN__SOLID.setEType(pe().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS.setEType(pe().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS.setEType(pe().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP.setEType(pe().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT.setEType(C.Literals.ICON_SETTINGS), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN.setEType(C.Literals.POINT_PIN), C.Literals.POINT_AND_AREA_SETTINGS__AREA.setEType(C.Literals.MAP_PROPS), C.Literals.POINT_AND_AREA_SETTINGS__LABEL.setEType(pe().getEClassifier("EJavaObject")), C.Literals.D_S_RENDERER__NAME.setEType(pe().getEClassifier("EString")), C.Literals.D_S_RENDERER__DATASTREAM.setEType(C.Literals.CONDITION), C.Literals.D_S_RENDERER__OBSERVATIONS.setEType(C.Literals.OBSERVATION), C.Literals.D_S_RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.D_S_RENDERER__ID.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION__SETTING.setEType(pe().getEClassifier("EJavaObject")), C.Literals.OBSERVATION__COMPONENT.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.OBSERVATION__CONDITIONS.setEType(C.Literals.CONDITION), C.Literals.CONDITION__PROP.setEType(pe().getEClassifier("EString")), C.Literals.CONDITION__VALUE.setEType(pe().getEClassifier("EString")), C.Literals.RENDERER__NAME.setEType(pe().getEClassifier("EString")), C.Literals.RENDERER__THING.setEType(C.Literals.CONDITION), C.Literals.RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.RENDERER__DS_RENDERER.setEType(C.Literals.D_S_RENDERER), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME.setEType(pe().getEClassifier("EInt")), C.Literals.RENDERER__LAST_UPDATE.setEType(pe().getEClassifier("EInt")), C.Literals.RENDERER__ID.setEType(pe().getEClassifier("EString")), C.Literals.MAP_PROPS__STROKE.setEType(pe().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__COLOR.setEType(pe().getEClassifier("EString")), C.Literals.MAP_PROPS__WEIGHT.setEType(pe().getEClassifier("EInt")), C.Literals.MAP_PROPS__OPACITY.setEType(pe().getEClassifier("EDouble")), C.Literals.MAP_PROPS__LINE_CAP.setEType(pe().getEClassifier("EString")), C.Literals.MAP_PROPS__DASH_OFFSET.setEType(pe().getEClassifier("EString")), C.Literals.MAP_PROPS__FILL.setEType(pe().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__FILL_OPACITY.setEType(pe().getEClassifier("EDouble")), C.Literals.MAP_PROPS__FILL_COLOR.setEType(pe().getEClassifier("EString")), C.Literals.MAP_PROPS__CLASS_NAME.setEType(pe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__ID.setEType(pe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__NAME.setEType(pe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION.setEType(pe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES.setEType(pe().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__LOCATION.setEType(pe().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID.setEType(pe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS.setEType(C.Literals.DATASTREAM_SUMMARY), C.Literals.DATASTREAM_SUMMARY__ID.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__NAME.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT.setEType(pe().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY.setEType(pe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT.setEType(pe().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME.setEType(pe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT.setEType(pe().getEClassifier("EJavaObject")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME.setEType(pe().getEClassifier("EString")), C.Literals.MAP_CLICK_PAYLOAD__LAT.setEType(pe().getEClassifier("EDouble")), C.Literals.MAP_CLICK_PAYLOAD__LON.setEType(pe().getEClassifier("EDouble")), C.Literals.LOCATION_CLICK_PAYLOAD__ID.setEType(pe().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__NAME.setEType(pe().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY.setEType(pe().getEClassifier("EJavaObject")), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS.setEType(pe().getEClassifier("EString"));
  }
}
class Ke extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.DESCRIPTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.DESCRIPTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.PROPERTIES),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.LOCATION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.LOCATION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.RENDERER_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.RENDERER_ID,
      merge: () => !1
    });
  }
  get datastreams() {
    return this._datastreams || (this._datastreams = as(this, this.eClass().getEStructuralFeature("datastreams"))), this._datastreams;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ke.ID:
        return this.id;
      case Ke.NAME:
        return this.name;
      case Ke.DESCRIPTION:
        return this.description;
      case Ke.PROPERTIES:
        return this.properties;
      case Ke.LOCATION:
        return this.location;
      case Ke.RENDERER_ID:
        return this.rendererId;
      case Ke.DATASTREAMS:
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
      case Ke.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Ke.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Ke.DESCRIPTION:
        this.description = n, super.eSet(i, n);
        break;
      case Ke.PROPERTIES:
        this.properties = n, super.eSet(i, n);
        break;
      case Ke.LOCATION:
        this.location = n, super.eSet(i, n);
        break;
      case Ke.RENDERER_ID:
        this.rendererId = n, super.eSet(i, n);
        break;
      case Ke.DATASTREAMS:
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
      case Ke.ID:
        return this._id !== void 0;
      case Ke.NAME:
        return this._name !== void 0;
      case Ke.DESCRIPTION:
        return this._description !== void 0;
      case Ke.PROPERTIES:
        return this._properties !== void 0;
      case Ke.LOCATION:
        return this._location !== void 0;
      case Ke.RENDERER_ID:
        return this._rendererId !== void 0;
      case Ke.DATASTREAMS:
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
      case Ke.ID:
        this._id = void 0;
        return;
      case Ke.NAME:
        this._name = void 0;
        return;
      case Ke.DESCRIPTION:
        this._description = void 0;
        return;
      case Ke.PROPERTIES:
        this._properties = void 0;
        return;
      case Ke.LOCATION:
        this._location = void 0;
        return;
      case Ke.RENDERER_ID:
        this._rendererId = void 0;
        return;
      case Ke.DATASTREAMS:
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
const RT = /* @__PURE__ */ nt({
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
    const i = jE.createLogger("daanse:maps:click"), n = o, u = ge({}), d = Tt(Rp.TINY_EMITTER), p = dn(() => {
      const W = [], K = [];
      for (const R of n.renderers)
        for (const U of n.locations) {
          const ue = U.things ?? [];
          for (const _e of ue) {
            if (!n.compareThing(_e, R)) continue;
            const be = _e["@iot.id"] || _e.iotId || "", ce = U["@iot.id"] || "", se = n.getPoint(U.location), $ = n.isFeatureCollection(U.location), k = n.isPoint(U.location);
            W.push({
              key: `${R.id}-${ce}-${be}`,
              thing: _e,
              location: U,
              renderer: R,
              point: se,
              geoJson: $ && !k ? U.location : null,
              isArea: $ && !k
            });
            const ie = _e.datastreams ?? [];
            for (const Y of ie) {
              const de = Y.iotId || "";
              for (const le of R.ds_renderer) {
                if (!n.compareDatastream(Y, le)) continue;
                const Oe = Y.observedArea ? n.transformToGeoJson(Y.observedArea) : null, Ee = le.placement === Fo.Thing ? se : Oe ? n.getPointformArea(Oe) : null, Pt = le.observations?.some(
                  (Ue) => !n.getById(Ue.component)?.isLayerRenderer
                ), Le = (le.renderer.point_render_as !== "none" || Pt) && !!Ee;
                K.push({
                  key: `${R.id}-${le.id}-${de}`,
                  datastream: Y,
                  thing: _e,
                  location: U,
                  renderer: R,
                  subrenderer: le,
                  point: Ee,
                  observedAreaGeoJson: Oe,
                  showMarker: Le
                });
              }
            }
          }
        }
      return { things: W, datastreams: K };
    }), g = (W, K, R) => {
      if (!n.widgetId) return;
      const U = new Ke();
      U.id = (W["@iot.id"] || W.iotId) ?? "", U.name = W.name ?? "", U.description = W.description ?? "", U.properties = W.properties, U.location = K.location, U.rendererId = R.id ?? "";
      const ue = W.datastreams || W.Datastreams || [];
      for (const be of ue) {
        const ce = new Dn();
        ce.id = be["@iot.id"] || be.iotId || "", ce.name = be.name ?? "", ce.observedProperty = be.ObservedProperty?.name || be.observedProperty?.name || "", U.datastreams.add(ce);
      }
      const _e = {
        type: "widget:MapWidget:click_on_thing",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      };
      console.log("🗺️ Map Widget: Emitting thing click event", _e), d.emit("widget:MapWidget:click_on_thing", _e);
    }, v = (W, K, R) => {
      if (i("Emitting datastream click, widgetId: %s", n.widgetId), !n.widgetId) {
        i("⚠️ widgetId is undefined, not emitting event");
        return;
      }
      const U = new Ve();
      U.id = (W.iotId || W["@iot.id"]) ?? "", U.name = W.name ?? "", U.thingId = (K["@iot.id"] || K.iotId) ?? "", U.unitOfMeasurement = W.unitOfMeasurement ?? "", U.observedProperty = W.observedProperty?.name ?? "";
      const ue = W.observations || [];
      if (ue.length > 0) {
        const _e = ue[ue.length - 1];
        U.latestObservationResult = _e.result ?? "", U.latestObservationTime = _e.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:click_on_datastream", {
        type: "widget:MapWidget:click_on_datastream",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      });
    }, m = (W, K, R) => {
      i("🖱️ Thing clicked: %o", W), u.value[W.iotId ?? "null"] = !u.value[W.iotId ?? "null"], g(W, K, R);
    }, E = (W, K, R) => {
      i("🖱️ Datastream marker clicked: %o", W), v(W, K);
    }, A = (W, K, R) => {
      if (!n.widgetId) return;
      const U = new Ke();
      U.id = (W["@iot.id"] || W.iotId) ?? "", U.name = W.name ?? "", U.description = W.description ?? "", U.properties = W.properties, U.location = K.location, U.rendererId = R.id ?? "", d.emit("widget:MapWidget:hover_on_thing", {
        type: "widget:MapWidget:hover_on_thing",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      });
    }, w = (W, K) => {
      if (!n.widgetId) return;
      const R = new Ve();
      R.id = (W.iotId || W["@iot.id"]) ?? "", R.name = W.name ?? "", R.thingId = (K["@iot.id"] || K.iotId) ?? "", R.unitOfMeasurement = W.unitOfMeasurement ?? "", R.observedProperty = W.observedProperty?.name ?? "";
      const U = W.observations || [];
      if (U.length > 0) {
        const ue = U[U.length - 1];
        R.latestObservationResult = ue.result ?? "", R.latestObservationTime = ue.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:hover_on_datastream", {
        type: "widget:MapWidget:hover_on_datastream",
        widgetId: n.widgetId,
        payload: R,
        timestamp: Date.now()
      });
    }, b = (W) => n.tooltipThingId ? (W["@iot.id"] || W.iotId) === n.tooltipThingId : !1, N = (W) => b(W) && n.tooltipContent || null, M = (W) => W.name || W.description || W.iotId || "", G = (W, K) => {
      const R = [];
      K.name && R.push(K.name), W.name && R.push(W.name);
      const U = W.observations || [];
      if (U.length > 0) {
        const ue = U[U.length - 1], _e = W.unitOfMeasurement?.symbol || "";
        R.push(`${ue.result} ${_e}`);
      }
      return R.join(" - ");
    }, ee = (W) => n.selectedThingId ? (W["@iot.id"] || W.iotId) === n.selectedThingId : !1, Z = dn(() => n.selectionHighlightColor || "#ff0000");
    return (W, K) => (V(), X(De, null, [
      (V(!0), X(De, null, Gt(p.value.things, (R) => (V(), X(De, {
        key: R.key + "area"
      }, [
        R.isArea ? (V(), ht(z(Bo), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.location.location,
          options: o.layerOptions,
          "options-style": () => ee(R.thing) ? { ...R.renderer.renderer.area, fillColor: Z.value, color: Z.value, fillOpacity: 0.5, weight: 3 } : R.renderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Fe("", !0)
      ], 64))), 128)),
      (V(!0), X(De, null, Gt(p.value.things, (R) => (V(), X(De, {
        key: R.key + "marker"
      }, [
        R.point ? (V(), ht(z(yl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (U) => m(R.thing, R.location, R.renderer),
          onMouseenter: (U) => A(R.thing, R.location, R.renderer)
        }, {
          default: Ye(() => [
            he(z(vl), { "class-name": "someExtraClass" }, {
              default: Ye(() => [
                he(wl, {
                  "render-as": R.renderer.renderer.point_render_as,
                  "background-color": R.renderer.renderer.pointPin?.color,
                  "icon-config": R.renderer.renderer.point,
                  "property-value": R.thing[R.renderer.renderer.point_prop ?? ""],
                  "image-url": R.renderer.renderer.point_image_url,
                  "image-size": R.renderer.renderer.point_image_size || 32,
                  "is-solid": R.renderer.renderer.pointPin?.solid,
                  "is-selected": ee(R.thing),
                  "selection-color": Z.value
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024),
            he(z(jf), {
              options: {
                permanent: b(R.thing),
                direction: "top",
                offset: [0, -20]
              }
            }, {
              default: Ye(() => [
                er(wt(N(R.thing) || M(R.thing)), 1)
              ]),
              _: 2
            }, 1032, ["options"])
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Fe("", !0)
      ], 64))), 128)),
      (V(!0), X(De, null, Gt(p.value.datastreams, (R) => (V(), X(De, {
        key: R.key + "dsarea"
      }, [
        R.observedAreaGeoJson ? (V(), ht(z(Bo), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.observedAreaGeoJson,
          options: { ...o.layerOptions, pane: o.areaPane || "overlayPane" },
          "options-style": () => R.subrenderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Fe("", !0)
      ], 64))), 128)),
      (V(!0), X(De, null, Gt(p.value.datastreams, (R) => (V(), X(De, {
        key: R.key + "dslayer"
      }, [
        R.subrenderer.observations && R.datastream.observations ? (V(!0), X(De, { key: 0 }, Gt(R.subrenderer.observations, (U) => (V(), X(De, {
          key: U.component
        }, [
          o.getById(U.component)?.isLayerRenderer ? (V(!0), X(De, { key: 0 }, Gt(R.datastream.observations, (ue) => (V(), X(De, {
            key: ue.iotId
          }, [
            o.getById(U.component) && ue.result ? (V(), ht(Rh(o.getById(U.component)?.component), {
              key: 0,
              config: U.setting,
              data: ue.result,
              "marker-size": 0
            }, null, 8, ["config", "data"])) : Fe("", !0)
          ], 64))), 128)) : Fe("", !0)
        ], 64))), 128)) : Fe("", !0)
      ], 64))), 128)),
      (V(!0), X(De, null, Gt(p.value.datastreams, (R) => (V(), X(De, {
        key: R.key + "dsmarker"
      }, [
        R.showMarker ? (V(), ht(z(yl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (U) => E(R.datastream, R.thing, R.subrenderer),
          onMouseenter: (U) => w(R.datastream, R.thing)
        }, {
          default: Ye(() => [
            he(z(jf), null, {
              default: Ye(() => [
                er(wt(G(R.datastream, R.thing)), 1)
              ]),
              _: 2
            }, 1024),
            he(z(vl), { "class-name": "someExtraClass" }, {
              default: Ye(() => [
                he(wl, {
                  "render-as": R.subrenderer.renderer.point_render_as,
                  "background-color": R.subrenderer.renderer.pointPin?.color,
                  "icon-config": R.subrenderer.renderer.point,
                  "property-value": R.datastream[R.subrenderer.renderer.point_prop ?? ""],
                  "image-url": R.subrenderer.renderer.point_image_url,
                  "image-size": R.subrenderer.renderer.point_image_size || 32,
                  "is-solid": R.subrenderer.renderer.pointPin?.solid,
                  "is-round": !0,
                  "is-selected": ee(R.thing),
                  "selection-color": Z.value
                }, {
                  observation: Ye(() => [
                    R.datastream.observations ? (V(!0), X(De, { key: 0 }, Gt(R.subrenderer.observations, (U) => (V(), X(De, {
                      key: U.component
                    }, [
                      o.getById(U.component) && !o.getById(U.component)?.isLayerRenderer ? (V(), ht(Rh(o.getById(U.component)?.component), {
                        config: U.setting,
                        data: R.datastream.observations[R.subrenderer.renderer.point_render_as === "none" ? 0 : R.datastream.observations.length - 1]?.result,
                        key: R.datastream.observations[R.subrenderer.renderer.point_render_as === "none" ? 0 : R.datastream.observations.length - 1]?.phenomenonTime,
                        "marker-size": R.subrenderer.renderer.point_render_as === "image" ? 0 : R.subrenderer.renderer.point_render_as === "none" ? R.renderer.renderer.point_image_size || 32 : 45
                      }, null, 8, ["config", "data", "marker-size"])) : Fe("", !0)
                    ], 64))), 128)) : Fe("", !0)
                  ]),
                  _: 2
                }, 1032, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Fe("", !0)
      ], 64))), 128))
    ], 64));
  }
}), PT = /* @__PURE__ */ nt({
  __name: "RouteLayer",
  props: {
    datasourceId: {}
  },
  setup(o) {
    const i = o, n = ge(null);
    let u = null;
    const d = dn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "LineString"
    ) : []), p = dn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "Point"
    ) : []), g = dn(() => d.value.length === 0 ? null : {
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
          const b = Tt(Ls).getDatasource(
            i.datasourceId
          ), N = await b.getData("object");
          n.value = N, u && u(), u = b.subscribe(async () => {
            const M = await b.getData("object");
            n.value = M;
          });
        } catch (w) {
          console.warn("RouteLayer: Could not load route data:", w);
        }
    }
    return Ht(() => {
      A();
    }), ki(
      () => i.datasourceId,
      () => A()
    ), Cl(() => {
      u && u();
    }), (w, b) => (V(), X(De, null, [
      g.value ? (V(), ht(z(Bo), {
        key: 0,
        geojson: g.value,
        "options-style": E
      }, null, 8, ["geojson"])) : Fe("", !0),
      (V(!0), X(De, null, Gt(p.value, (N, M) => (V(), ht(z(a1), {
        key: "wp-" + M,
        "lat-lng": v(N),
        radius: 8,
        "fill-color": m(N),
        color: "#fff",
        weight: 2,
        "fill-opacity": 1
      }, null, 8, ["lat-lng", "fill-color"]))), 128))
    ], 64));
  }
}), Tg = () => {
  const o = async (p, g) => {
    const v = new AbortController(), m = setTimeout(() => v.abort(), g);
    try {
      const E = await fetch(p, { signal: v.signal });
      return clearTimeout(m), E;
    } catch (E) {
      throw clearTimeout(m), E.name === "AbortError" ? new Error(`Timeout after ${g}ms`) : E;
    }
  }, i = (p, g) => {
    const v = {
      _capabilitiesUrl: g,
      _info: {},
      _layers: [],
      _operationUrls: {}
    }, m = p.querySelector("Service");
    m && (v._info.title = m.querySelector("Title")?.textContent || "", v._info.name = m.querySelector("Name")?.textContent || "", v._info.abstract = m.querySelector("Abstract")?.textContent || "");
    const E = p.querySelector("Capability > Request");
    E && ["GetMap", "GetCapabilities", "GetFeatureInfo", "GetLegendGraphic"].forEach((N) => {
      const M = E.querySelector(N);
      if (M) {
        const G = M.querySelector("DCPType > HTTP > Get > OnlineResource");
        if (G) {
          const ee = G.getAttribute("xlink:href") || G.getAttribute("href");
          ee && (v._operationUrls[N] = ee);
        }
      }
    }), v._operationUrls.GetMap || (v._operationUrls.GetMap = g.split("?")[0]);
    const A = (b, N = []) => {
      b.querySelectorAll(":scope > Layer").forEach((G) => {
        const ee = {
          name: G.querySelector(":scope > Name")?.textContent || "",
          title: G.querySelector(":scope > Title")?.textContent || "",
          abstract: G.querySelector(":scope > Abstract")?.textContent || "",
          children: []
        }, Z = G.querySelector(":scope > BoundingBox, :scope > LatLonBoundingBox, :scope > EX_GeographicBoundingBox");
        Z && (ee.boundingBox = {
          minx: parseFloat(Z.getAttribute("minx") || Z.querySelector("westBoundLongitude")?.textContent || "0"),
          miny: parseFloat(Z.getAttribute("miny") || Z.querySelector("southBoundLatitude")?.textContent || "0"),
          maxx: parseFloat(Z.getAttribute("maxx") || Z.querySelector("eastBoundLongitude")?.textContent || "0"),
          maxy: parseFloat(Z.getAttribute("maxy") || Z.querySelector("northBoundLatitude")?.textContent || "0")
        }), A(G, ee.children), N.push(ee);
      });
    }, w = p.querySelector("Capability");
    return w && A(w, v._layers), v.getLayers = () => {
      const b = (N) => {
        const M = [];
        return N.forEach((G) => {
          M.push(G), G.children && G.children.length > 0 && M.push(...b(G.children));
        }), M;
      };
      return b(v._layers);
    }, v.getOperationUrl = (b) => v._operationUrls[b] || v._operationUrls.GetMap || g.split("?")[0], v;
  }, n = (p, g) => {
    const v = {
      _capabilitiesUrl: g,
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
        const g = p.includes("?") ? `${p}&SERVICE=WMS&REQUEST=GetCapabilities` : `${p}?SERVICE=WMS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WMS capabilities from:", g);
        const v = await o(g, 15e3);
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
      } catch (g) {
        throw console.log("not a WMS Service:", g), g;
      }
    },
    createServiceWFS: async (p) => {
      try {
        const g = p.includes("?") ? `${p}&SERVICE=WFS&REQUEST=GetCapabilities` : `${p}?SERVICE=WFS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WFS capabilities from:", g);
        const v = await o(g, 15e3);
        if (!v.ok)
          throw new Error(`HTTP ${v.status}: ${v.statusText}`);
        const m = await v.text(), A = new DOMParser().parseFromString(m, "text/xml");
        if (A.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        if (!A.documentElement.tagName.includes("Capabilities"))
          throw new Error("Not a valid WFS GetCapabilities response");
        const N = n(A, p);
        return console.log("[Service.ts] WFS service parsed:", N), N;
      } catch (g) {
        throw console.log("not a WFS Service:", g), g;
      }
    }
  };
};
var Ru = { exports: {} }, vh, cp;
function xT() {
  if (cp) return vh;
  cp = 1;
  var o = 1e3, i = o * 60, n = i * 60, u = n * 24, d = u * 7, p = u * 365.25;
  vh = function(A, w) {
    w = w || {};
    var b = typeof A;
    if (b === "string" && A.length > 0)
      return g(A);
    if (b === "number" && isFinite(A))
      return w.long ? m(A) : v(A);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(A)
    );
  };
  function g(A) {
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
            return b * u;
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
    return w >= u ? Math.round(A / u) + "d" : w >= n ? Math.round(A / n) + "h" : w >= i ? Math.round(A / i) + "m" : w >= o ? Math.round(A / o) + "s" : A + "ms";
  }
  function m(A) {
    var w = Math.abs(A);
    return w >= u ? E(A, w, u, "day") : w >= n ? E(A, w, n, "hour") : w >= i ? E(A, w, i, "minute") : w >= o ? E(A, w, o, "second") : A + " ms";
  }
  function E(A, w, b, N) {
    var M = w >= b * 1.5;
    return Math.round(A / b) + " " + N + (M ? "s" : "");
  }
  return vh;
}
var yh, hp;
function FT() {
  if (hp) return yh;
  hp = 1;
  function o(i) {
    u.debug = u, u.default = u, u.coerce = E, u.disable = v, u.enable = p, u.enabled = m, u.humanize = xT(), u.destroy = A, Object.keys(i).forEach((w) => {
      u[w] = i[w];
    }), u.names = [], u.skips = [], u.formatters = {};
    function n(w) {
      let b = 0;
      for (let N = 0; N < w.length; N++)
        b = (b << 5) - b + w.charCodeAt(N), b |= 0;
      return u.colors[Math.abs(b) % u.colors.length];
    }
    u.selectColor = n;
    function u(w) {
      let b, N = null, M, G;
      function ee(...Z) {
        if (!ee.enabled)
          return;
        const W = ee, K = Number(/* @__PURE__ */ new Date()), R = K - (b || K);
        W.diff = R, W.prev = b, W.curr = K, b = K, Z[0] = u.coerce(Z[0]), typeof Z[0] != "string" && Z.unshift("%O");
        let U = 0;
        Z[0] = Z[0].replace(/%([a-zA-Z%])/g, (_e, be) => {
          if (_e === "%%")
            return "%";
          U++;
          const ce = u.formatters[be];
          if (typeof ce == "function") {
            const se = Z[U];
            _e = ce.call(W, se), Z.splice(U, 1), U--;
          }
          return _e;
        }), u.formatArgs.call(W, Z), (W.log || u.log).apply(W, Z);
      }
      return ee.namespace = w, ee.useColors = u.useColors(), ee.color = u.selectColor(w), ee.extend = d, ee.destroy = u.destroy, Object.defineProperty(ee, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => N !== null ? N : (M !== u.namespaces && (M = u.namespaces, G = u.enabled(w)), G),
        set: (Z) => {
          N = Z;
        }
      }), typeof u.init == "function" && u.init(ee), ee;
    }
    function d(w, b) {
      const N = u(this.namespace + (typeof b > "u" ? ":" : b) + w);
      return N.log = this.log, N;
    }
    function p(w) {
      u.save(w), u.namespaces = w, u.names = [], u.skips = [];
      const b = (typeof w == "string" ? w : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const N of b)
        N[0] === "-" ? u.skips.push(N.slice(1)) : u.names.push(N);
    }
    function g(w, b) {
      let N = 0, M = 0, G = -1, ee = 0;
      for (; N < w.length; )
        if (M < b.length && (b[M] === w[N] || b[M] === "*"))
          b[M] === "*" ? (G = M, ee = N, M++) : (N++, M++);
        else if (G !== -1)
          M = G + 1, ee++, N = ee;
        else
          return !1;
      for (; M < b.length && b[M] === "*"; )
        M++;
      return M === b.length;
    }
    function v() {
      const w = [
        ...u.names,
        ...u.skips.map((b) => "-" + b)
      ].join(",");
      return u.enable(""), w;
    }
    function m(w) {
      for (const b of u.skips)
        if (g(w, b))
          return !1;
      for (const b of u.names)
        if (g(w, b))
          return !0;
      return !1;
    }
    function E(w) {
      return w instanceof Error ? w.stack || w.message : w;
    }
    function A() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return u.enable(u.load()), u;
  }
  return yh = o, yh;
}
var dp;
function MT() {
  return dp || (dp = 1, (function(o, i) {
    var n = {};
    i.formatArgs = d, i.save = p, i.load = g, i.useColors = u, i.storage = v(), i.destroy = /* @__PURE__ */ (() => {
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
    function u() {
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
    function g() {
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
    o.exports = FT()(i);
    const { formatters: m } = o.exports;
    m.j = function(E) {
      try {
        return JSON.stringify(E);
      } catch (A) {
        return "[UnexpectedJSONParseError]: " + A.message;
      }
    };
  })(Ru, Ru.exports)), Ru.exports;
}
var BT = MT();
const io = /* @__PURE__ */ fg(BT);
io.log = console.log.bind(console);
const Bu = localStorage.getItem("debug");
console.log("[Maps Widget] Logger module loaded. localStorage.debug =", Bu);
console.log("[Maps Widget] debug.enable exists:", typeof io.enable);
Bu && (io.enable(Bu), console.log("[Maps Widget] Called debug.enable with:", Bu));
const fr = io("daanse:maps:map"), Dr = io("daanse:maps:datasource"), Eh = io("daanse:maps:observations"), kn = io("daanse:maps:services"), GT = io("daanse:maps:tasks");
class wg extends PE {
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
    const u = this.eClass().getFeatureID(i);
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
  zoomToThing(i, n, u) {
    throw new Error("zoomToThing not implemented");
  }
  selectThingById(i) {
    throw new Error("selectThingById not implemented");
  }
  zoomToLocation(i, n, u) {
    throw new Error("zoomToLocation not implemented");
  }
  showTooltip(i, n) {
    throw new Error("showTooltip not implemented");
  }
  hideTooltip() {
    throw new Error("hideTooltip not implemented");
  }
  displayRoute(i, n, u) {
    throw new Error("displayRoute not implemented");
  }
  clearRoute() {
    throw new Error("clearRoute not implemented");
  }
}
const kT = {
  id: "mapholder",
  class: "holder",
  style: { height: "100%" }
}, UT = /* @__PURE__ */ nt({
  __name: "MapsWidget",
  props: /* @__PURE__ */ zh({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: i }) {
    const n = (x) => {
      const ae = x;
      return typeof ae?.toArray == "function" ? ae.toArray() : Array.isArray(ae) ? ae : [];
    }, u = (x) => x ?? void 0, d = o, { datasourceId: p, id: g } = Ol(d), m = XE().params.pageid || "", E = mr(o, "configv"), A = ge(null), w = new we(), b = [50.93115286, 11.60392726];
    function N() {
      if (E.value.center.size() === 0)
        for (const x of b) E.value.center.add(x);
    }
    const M = Tt(xE), G = Tt(Rp.TINY_EMITTER);
    function ee(x) {
      if (!g?.value) return;
      const { lat: ae, lng: J } = x.latlng, ve = new Ai();
      ve.lat = ae, ve.lon = J, G.emit("widget:MapWidget:click_on_map", {
        type: "widget:MapWidget:click_on_map",
        widgetId: g.value,
        payload: ve,
        timestamp: Date.now()
      });
    }
    const { filterFeatureCollection: Z, compareDatastream: W, compareThing: K } = R1(), { isPoint: R, isFeatureCollection: U, transformToGeoJson: ue, isFeature: _e } = P1(), { createServiceWMS: be, createServiceWFS: ce } = Tg(), se = ge({}), $ = ge(/* @__PURE__ */ new Map()), k = ge(!1), ie = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Map(), Oe = G1(), Ee = /* @__PURE__ */ new WeakMap();
    let Pt = [], Le = 0;
    const Ue = async () => {
      const x = ++Le, ae = [], J = tl(se.value), ve = tl($.value), xe = [];
      J?.datastreams && xe.push([p.value, J.datastreams]);
      for (const [ft, It] of ve.entries()) {
        const Mt = tl(It);
        Mt?.datastreams && xe.push([ft, Mt.datastreams]);
      }
      const Re = 4;
      let Xe = performance.now();
      for (const [ft, It] of xe)
        for (let Mt = 0; Mt < It.length; Mt++) {
          if (performance.now() - Xe > Re) {
            if (x !== Le) return;
            await new Promise((me) => setTimeout(me, 0)), Xe = performance.now();
          }
          const gt = It[Mt];
          if (gt.observedArea)
            Ee.has(gt.observedArea) || Ee.set(gt.observedArea, ue(tl(gt.observedArea))), ae.push({ lng: 0, lat: 0, dsId: ft, dataStream: gt, geoJsonFeature: Ee.get(gt.observedArea) });
          else if (gt.thing?.locations?.[0]) {
            const me = gt.thing.locations[0].location, ri = An(me);
            ri ? ae.push({ lng: ri[0], lat: ri[1], dsId: ft, dataStream: gt, geoJsonFeature: null }) : (Ee.has(me) || Ee.set(me, ue(me)), ae.push({ lng: 0, lat: 0, dsId: ft, dataStream: gt, geoJsonFeature: Ee.get(me) }));
          }
        }
      x === Le && (Pt = ae, fr("Spatial index built:", ae.length, "entries"));
    }, kt = dn(() => {
      try {
        return p.value && Tt(Ls).getDatasource(p.value).type || "ogcsta";
      } catch (x) {
        return Dr("Could not detect datasource type:", x), "ogcsta";
      }
    }), Yt = {
      rest: "object",
      ogcsta: "OGCSTAData",
      "OGC Composer": "OGCSTAData"
    }, Lt = dn(() => Yt[kt.value] || "OGCSTAData"), { update: je, callEvent: Me } = qE(p, Lt.value, se), sn = async (x) => {
      if (x) {
        if (de.has(x)) {
          Dr("Datasource", x, "is already loading, skipping");
          return;
        }
        de.add(x);
        try {
          const ae = Tt(Ls), J = ae.getDatasource(x), ve = ae.getDatasourceType(x), xe = Yt[ve] || "OGCSTAData";
          if (J && typeof J.getData == "function") {
            const Re = await J.getData(xe);
            if ($.value.set(x, Re), !ie.has(x) && typeof J.subscribe == "function") {
              ie.add(x);
              const Xe = async () => {
                const It = await J.getData(xe);
                $.value.set(x, It);
              }, ft = J.subscribe(Xe);
              typeof ft == "function" && Y.set(x, ft);
            }
          }
        } catch (ae) {
          Dr("Could not get datasource data for", x, ae);
        } finally {
          de.delete(x);
        }
      }
    };
    ki(() => [E.value?.datasourceIds, E.value?.layers], async () => {
      const x = /* @__PURE__ */ new Set();
      E.value?.datasourceIds && E.value.datasourceIds.forEach((J) => x.add(J)), E.value?.layers && E.value.layers.forEach((J) => {
        J.datasourceId && J.datasourceId !== p.value && x.add(J.datasourceId);
      });
      let ae = !1;
      for (const J of x)
        $.value.has(J) || (await sn(J), ae = !0);
      ae && A.value && (await Ue(), Ii());
    }, { deep: !0, immediate: !0 }), ki(p, (x, ae, J) => {
      je(x, ae);
    }), ki(() => E.value?.OGCSstyles, (x, ae, J) => {
      Ii(), yr();
    }, { deep: !0 });
    const { getById: pn } = dl();
    ge({});
    const Pn = ge(E.value?.selectedThingId ?? null), on = ge(null), qn = ge(null), Un = ge(null), Ui = ge("#c45e00"), gn = ge(5);
    let Ut = null;
    ki(Pn, (x) => {
      E.value && (E.value.selectedThingId = x ?? void 0);
    }), ge(!1);
    let zi = !1;
    const an = (x) => {
      if (x.datasourceId) {
        const ae = $.value.get(x.datasourceId);
        return ae || (sn(x.datasourceId), {});
      }
      return se.value;
    };
    Ht(async () => {
      if (E.value) {
        if (Object.assign(E.value, {
          ...qf(w),
          ...qf(E.value)
        }), N(), E.value.services) {
          for (const J of E.value.services)
            if (J.type === "WMS") {
              if (!(typeof u(J.service)?.getLayers == "function") && J.url) {
                kn("Reconstructing WMS service from URL: %s", J.url);
                try {
                  J.service = await be(J.url), kn("WMS service reconstructed successfully"), J.reconstructionFailed = !1;
                } catch (xe) {
                  kn("Could not reconstruct WMS service: %o", xe), J.reconstructionFailed = !0;
                }
              }
            } else if (J.type === "WFS" && !(typeof u(J.service)?.getFeatureTypes == "function") && J.url) {
              kn("Reconstructing WFS service from URL: %s", J.url);
              try {
                J.service = await ce(J.url), kn("WFS service reconstructed successfully"), J.reconstructionFailed = !1;
              } catch (xe) {
                kn("Could not reconstruct WFS service: %o", xe), J.reconstructionFailed = !0;
              }
            }
        }
        if (E.value.layers) {
          const J = [];
          for (const ve of E.value.layers)
            if (ve.type === "WMSLayer" && ve.service && !u(ve.service)?.getOperationUrl) {
              const xe = u(ve.service)?._capabilitiesUrl || u(ve.service)?.url || u(ve.service)?.serviceUrl;
              if (xe)
                try {
                  const Re = await be(xe);
                  J.push({ ...ve, service: Re, reconstructionFailed: !1 });
                } catch (Re) {
                  kn("Could not reconstruct WMS service for layer %s: %o", ve.name, Re), J.push({ ...ve, reconstructionFailed: !0 });
                }
              else
                kn("WMS layer missing service URL: %s", ve.name), J.push({ ...ve, reconstructionFailed: !0 });
            } else if (ve.type === "WFSLayer" && ve.wfs_service)
              if (typeof u(ve.wfs_service)?.fetch != "function") {
                const xe = u(ve.wfs_service)?.url;
                if (xe)
                  try {
                    const Re = (await Promise.resolve().then(() => Hw)).default, Xe = new Re(xe);
                    await Xe.fetch(), J.push({ ...ve, wfs_service: Xe, reconstructionFailed: !1 });
                  } catch (Re) {
                    kn("Could not reconstruct WFS service for layer %s: %o", ve.name, Re), J.push({ ...ve, reconstructionFailed: !0 });
                  }
                else
                  kn("WFS layer missing service URL: %s", ve.name), J.push({ ...ve, reconstructionFailed: !0 });
              } else
                J.push(ve);
            else
              J.push(ve);
          E.value.layers.clear();
          for (const ve of J) E.value.layers.add(ve);
        }
        k.value = !0;
      }
      const x = document.getElementById("mapholder"), ae = new ResizeObserver(() => {
        A.value && A.value.leafletObject && A.value.leafletObject.invalidateSize();
      });
      x && ae.observe(x);
    });
    let ln = 0;
    ki(() => se.value?.locations?.length || 0, async (x) => {
      ln === 0 && x > 0 && (await Ue(), Ii(), yr()), ln = x;
    });
    const yr = () => {
      if (!E.value?.OGCSstyles || E.value.OGCSstyles.length === 0) {
        Eh("No OGCSTA styles configured, skipping historical locations load");
        return;
      }
      const x = /* @__PURE__ */ new Map(), ae = se.value?.things || [];
      for (const ve of ae)
        if (!(!ve || !ve.iotId)) {
          for (const xe of E.value.OGCSstyles)
            if (K(ve, xe)) {
              x.set(ve.iotId, ve);
              break;
            }
        }
      for (const [ve, xe] of $.value.entries()) {
        const Re = xe?.things || [];
        for (const Xe of Re)
          if (!(!Xe || !Xe.iotId)) {
            for (const ft of E.value.OGCSstyles)
              if (K(Xe, ft)) {
                x.set(Xe.iotId, Xe);
                break;
              }
          }
      }
      const J = Array.from(x.values());
      if (J.length > 0) {
        Eh(`Setting historical locations filter for ${J.length} matching things`), Me(la, { historicalLocations: J }, !1);
        for (const ve of $.value.keys())
          try {
            const Re = Tt(Ls).getDatasource(ve);
            Re && typeof Re.callEvent == "function" && Re.callEvent(la, { historicalLocations: J }, !1);
          } catch (xe) {
            Dr("Could not call event on datasource", ve, xe);
          }
      } else
        Eh("No things match the configured style filters");
    }, Kn = () => {
      try {
        const x = A.value.leafletObject;
        E.value.fixed ? (x.dragging.disable(), x.scrollWheelZoom.disable(), x.doubleClickZoom.disable(), x.touchZoom.disable(), x.keyboard.disable(), x.zoomControl.remove()) : (x.dragging.enable(), x.scrollWheelZoom.enable(), x.doubleClickZoom.disable(), x.touchZoom.enable(), x.keyboard.enable(), x.zoomControl.addTo(x));
      } catch (x) {
        fr("Error in setFixed:", x);
      }
    };
    ki(() => E.value.fixed, (x, ae, J) => {
      Kn();
    }), dn(() => se.value?.locations ?? []);
    const jt = (x) => (an(x)?.locations ?? []).filter((ve) => ve && (ve["@iot.id"] || ve.iotId));
    dn(() => (x) => D1(E, "value", "renderer", 0, "renderer", "point") ? E.value?.renderer?.[0]?.renderer?.area ?? {} : {});
    const Qn = dn(() => ({
      pointToLayer: (x, ae) => da.circleMarker(ae, {
        radius: 0,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    })), xn = (x) => E.value.layers.findIndex((ae) => ae === x), Vi = (x) => {
      const ae = xn(x);
      return {
        ...Qn.value,
        pane: `layer-pane-${ae}`
      };
    }, zn = (x) => `layer-pane-${xn(x)}`, nr = (x) => x ? `layer-area-pane-${xn(x)}` : "overlayPane", _n = ge(0), ei = dn(() => {
      _n.value;
      const x = /* @__PURE__ */ new Map();
      if (E.value?.styles)
        for (const ae of E.value.styles)
          ae.id && x.set(ae.id, ae);
      return x;
    }), Oi = (x) => ei.value.get(x), bi = () => {
      _n.value++;
    };
    let di = "";
    ki(() => E.value?.styles, (x) => {
      if (!x) return;
      const ae = JSON.stringify(x);
      ae !== di && (di = ae, bi());
    }, { deep: !0 });
    let Fn = !1;
    const Wi = () => {
      zi = !0, fr("map ready"), Kn(), fi();
      const x = A.value?.leafletObject;
      x && (x.on("movestart", () => {
        Fn = !0, Li++;
      }), x.on("moveend", () => {
        Fn = !1;
      }));
    }, fi = () => {
      const x = A.value?.leafletObject;
      !x || !E.value.layers || E.value.layers.forEach((ae, J) => {
        const ve = `layer-pane-${J}`;
        let xe = x.getPane(ve);
        xe || (xe = x.createPane(ve));
        const Re = 400 + (E.value.layers.length - J) * 2;
        xe.style.zIndex = String(Re);
        const Xe = `layer-area-pane-${J}`;
        let ft = x.getPane(Xe);
        ft || (ft = x.createPane(Xe)), ft.style.zIndex = String(Re - 1);
      });
    };
    ki(() => E.value.layers, () => {
      zi && fi();
    }, { deep: !0 });
    const ti = (x) => [x[1], x[0]], An = (x) => x ? x.type === "Point" && Array.isArray(x.coordinates) ? x.coordinates : x.type === "Feature" && x.geometry?.type === "Point" && Array.isArray(x.geometry.coordinates) ? x.geometry.coordinates : null : null, ni = rl.debounce(() => {
      if (Fn) return;
      const x = A.value?.leafletObject;
      if (x) {
        const ae = x.getCenter();
        E.value.center.clear(), E.value.center.add(ae.lat), E.value.center.add(ae.lng), E.value.zoom = x.getZoom();
      }
      Ii();
    }, 500, { leading: !1, trailing: !0 });
    let Li = 0;
    const Ii = async () => {
      if (fr("loadObservationsInView called"), !A.value || !A.value?.leafletObject) {
        fr("Map not ready");
        return;
      }
      let x = A.value?.leafletObject.getBounds();
      if (!x) {
        fr("No map bounds available yet");
        return;
      }
      const ae = ++Li, J = x._southWest.lng, ve = x._southWest.lat, xe = x._northEast.lng, Re = x._northEast.lat;
      let Xe = null;
      const ft = () => (Xe || (Xe = jh({
        type: "Polygon",
        coordinates: [[[xe, Re], [xe, ve], [J, ve], [J, Re], [xe, Re]]]
      })), Xe), It = tl(E.value.OGCSstyles), Mt = /* @__PURE__ */ new Map();
      for (const Nt of It) {
        const Cn = Nt.ObservationrefreshTime !== void 0 && Nt.ObservationrefreshTime !== null ? Nt.ObservationrefreshTime : 0;
        Mt.has(Cn) || Mt.set(Cn, []);
        for (const ot of Nt.ds_renderer)
          Mt.get(Cn).push({ renderer: Nt, subrender: ot });
      }
      const Xt = {}, gt = Pt, me = 4;
      let ri = performance.now();
      for (let Nt = 0; Nt < gt.length; Nt++) {
        if (performance.now() - ri > me) {
          if (ae !== Li || Fn)
            return;
          await new Promise((mn) => setTimeout(mn, 0)), ri = performance.now();
        }
        const ot = gt[Nt];
        let zt;
        if (ot.geoJsonFeature ? zt = uT(ft(), ot.geoJsonFeature) : zt = ot.lng >= J && ot.lng <= xe && ot.lat >= ve && ot.lat <= Re, !zt) continue;
        const { dsId: On, dataStream: si } = ot;
        for (const [mn, bn] of Mt.entries()) {
          let oi = !1;
          for (const { renderer: un, subrender: qt } of bn) {
            const $n = W(si, qt), xr = si.thing ? K(si.thing, un) : !0;
            if ($n && xr) {
              oi = !0;
              break;
            }
          }
          oi && (Xt[mn] || (Xt[mn] = {}), Xt[mn][On] || (Xt[mn][On] = []), Xt[mn][On].push(si));
        }
      }
      if (ae !== Li) {
        fr("Session invalidated after chunked processing, aborting");
        return;
      }
      const Hi = [];
      for (const [Nt, Cn] of Object.entries(Xt))
        for (const [ot, zt] of Object.entries(Cn)) {
          const On = rl.uniqBy(zt, "iotId");
          if (On.length > 0) {
            const si = ot === p.value;
            let mn = 0;
            for (const un of On) {
              const qt = String(un.iotId || un["@iot.id"] || "");
              for (let $n = 0; $n < qt.length; $n++)
                mn = (mn << 5) - mn + qt.charCodeAt($n) | 0;
            }
            const bn = `obs-${ot}-${Nt}-${On.length}-${mn >>> 0}`, oi = new class extends B1 {
              constructor() {
                super(...arguments), this.id = bn;
              }
              invoke() {
                window.clearInterval(this.handle);
              }
              async run() {
                if (si)
                  Me(la, { observations: On }, !1);
                else
                  try {
                    const qt = Tt(Ls).getDatasource(ot);
                    qt && typeof qt.callEvent == "function" && qt.callEvent(la, { observations: On }, !1);
                  } catch (un) {
                    Dr("Could not call event on datasource", ot, un);
                  }
                parseInt(Nt) !== 0 && (this.handle = window.setInterval(async () => {
                  if (si)
                    Me(la, { observations: On }, !1);
                  else
                    try {
                      const qt = Tt(Ls).getDatasource(ot);
                      qt && typeof qt.callEvent == "function" && qt.callEvent(la, { observations: On }, !1);
                    } catch (un) {
                      Dr("Could not call event on datasource", ot, un);
                    }
                }, parseInt(Nt) * 1e3));
              }
            }();
            Hi.push(oi), le.set(oi.id, oi);
          }
        }
      fr("Created", Hi.length, "tasks to invoke"), Oe.addTasksAndIvnoke(Hi);
      const pi = /* @__PURE__ */ new Map();
      for (const [Nt, Cn] of Object.entries(Xt))
        for (const [ot, zt] of Object.entries(Cn))
          pi.has(ot) || pi.set(ot, []), pi.get(ot).push(...zt);
      const Er = pi.get(p.value) || [];
      Me(Hf, { observations: rl.uniqBy(Er, "iotId") });
      for (const Nt of $.value.keys()) {
        const Cn = pi.get(Nt) || [];
        try {
          const zt = Tt(Ls).getDatasource(Nt);
          zt && typeof zt.callEvent == "function" && zt.callEvent(Hf, { observations: rl.uniqBy(Cn, "iotId") });
        } catch (ot) {
          Dr("Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource", Nt, ot);
        }
      }
    }, ii = (x) => {
      if (R(x))
        return ti(x.coordinates);
      if (U(x) || _e(x))
        try {
          let ae = up(x);
          return ti(ae.geometry.coordinates);
        } catch {
          return null;
        }
      return null;
    }, ir = (x) => {
      if (R(x))
        return ti(x.coordinates);
      if (U(x) || _e(x))
        try {
          let ae = up(x);
          return ti(ae.geometry.coordinates);
        } catch {
          return null;
        }
    };
    let Zi = new class extends wg {
      constructor() {
        super(...arguments), this.zoomToThing = (x, ae = 16, J = 1e3) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map instance not available. Cannot zoom to thing.");
            return;
          }
          let ve = (se.value?.things || []).find((It) => It.iotId === x || It["@iot.id"] === x);
          if (!ve) {
            for (const [It, Mt] of $.value.entries())
              if (ve = (Mt?.things || []).find((gt) => gt.iotId === x || gt["@iot.id"] === x), ve) break;
          }
          if (!ve) {
            console.warn(`Thing with ID "${x}" not found.`);
            return;
          }
          if (!ve.locations || !ve.locations[0]) {
            console.warn(`Thing with ID "${x}" has no location.`);
            return;
          }
          const xe = ve.locations[0].location, Re = ue(xe), Xe = ii(Re);
          if (!Xe) {
            console.warn("Could not extract coordinates from thing location.");
            return;
          }
          A.value.leafletObject.flyTo(Xe, ae, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          });
        }, this.selectThingById = (x) => {
          fr("selectThingById called with:", x), Pn.value === x ? (Pn.value = null, fr("Thing deselected")) : (Pn.value = x, fr("Thing selected:", x));
        }, this.zoomToLocation = async (x, ae = 16, J = 1e3) => {
          console.log("🎯 zoomToLocation called with:", { location: x, zoom: ae, duration: J });
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
          const xe = ue(x);
          console.log("🎯 Transformed GeoJSON:", xe);
          const Re = ii(xe);
          if (console.log("🎯 Extracted point:", Re), !Re) {
            console.warn("🎯 Could not extract coordinates from location. GeoJSON was:", xe);
            return;
          }
          const Xe = A.value.leafletObject;
          console.log("🎯 Flying to", Re, "with zoom", ae, "duration", J), Xe.flyTo(Re, ae, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          }), console.log("🎯 flyTo called successfully");
        }, this.showTooltip = (x, ae) => {
          on.value = x, qn.value = ae || null;
        }, this.hideTooltip = () => {
          on.value = null, qn.value = null;
        }, this.displayRoute = (x, ae = "#c45e00", J = 5) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map not ready. Cannot display route.");
            return;
          }
          const ve = A.value.leafletObject;
          if (Ut && (ve.removeLayer(Ut), Ut = null), !x || !x.features) return;
          Ut = da.layerGroup();
          for (const Re of x.features)
            if (Re.geometry.type === "LineString") {
              const Xe = Re.geometry.coordinates.map(
                (It) => [It[1], It[0]]
              ), ft = da.polyline(Xe, {
                color: ae,
                weight: J,
                opacity: 0.8
              });
              Ut.addLayer(ft);
            } else if (Re.geometry.type === "Point") {
              const [Xe, ft] = Re.geometry.coordinates, It = Re.properties?.role;
              let Mt = "#2196f3";
              It === "start" ? Mt = "#4caf50" : It === "end" && (Mt = "#f44336");
              const Xt = da.circleMarker([ft, Xe], {
                radius: 8,
                fillColor: Mt,
                color: "#fff",
                weight: 2,
                fillOpacity: 1
              });
              Re.properties?.name && Xt.bindTooltip(Re.properties.name), Ut.addLayer(Xt);
            }
          Ut.addTo(ve);
          const xe = x.features.filter(
            (Re) => Re.geometry.type === "LineString"
          );
          if (xe.length > 0) {
            const Re = xe.flatMap(
              (Xe) => Xe.geometry.coordinates.map(
                (ft) => [ft[1], ft[0]]
              )
            );
            Re.length > 0 && ve.fitBounds(da.latLngBounds(Re), {
              padding: [50, 50]
            });
          }
          Un.value = x, Ui.value = ae, gn.value = J;
        }, this.clearRoute = () => {
          Ut && A.value && A.value.leafletObject && (A.value.leafletObject.removeLayer(Ut), Ut = null), Un.value = null;
        };
      }
    }();
    return i(Zi), Ht(() => {
      M.registerInstance(g.value, Zi, "MapWidget", m), fr("Registered instance with EventActionsRegistry:", g.value, "on page:", m);
    }), Cl(() => {
      M.unregisterInstance(g.value), fr("Unregistered instance from EventActionsRegistry:", g.value);
      for (const [x, ae] of le.entries())
        try {
          ae.invoke();
        } catch (J) {
          GT("Error stopping task interval:", J);
        }
      Oe.clearAll(), le.clear();
      try {
        Me(Yf, {});
      } catch (x) {
        Dr("Could not unsubscribe from MQTT for primary datasource on unmount:", x);
      }
      for (const x of $.value.keys())
        try {
          const J = Tt(Ls).getDatasource(x);
          J && typeof J.callEvent == "function" && J.callEvent(Yf, {});
        } catch (ae) {
          Dr("Could not unsubscribe from MQTT for datasource", x, "on unmount:", ae);
        }
      for (const [x, ae] of Y.entries())
        try {
          ae();
        } catch (J) {
          Dr(`Error unsubscribing from datasource ${x}:`, J);
        }
      Y.clear(), ie.clear(), $.value.clear();
    }), (x, ae) => (V(), X("div", kT, [
      E.value.baseMapUrl ? (V(), ht(z(qh), {
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
        onMoveend: z(ni),
        onReady: Wi,
        onClick: ee,
        dragging: !E.value.fixed
      }, {
        default: Ye(() => [
          he(z(Jh), {
            attribution: E.value.attribution,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: E.value.baseMapUrl
          }, null, 8, ["attribution", "url"]),
          (V(!0), X(De, null, Gt([...E.value.layers].reverse(), (J, ve) => (V(), X(De, {
            key: `${J.name}-${xn(J)}`
          }, [
            J.type == "WMSLayer" && J.service && typeof u(J.service)?.getOperationUrl == "function" ? (V(), ht(z(L1), {
              key: 0,
              attribution: J.attribution,
              layers: J.name,
              name: J.name,
              opacity: J.opacity,
              transparent: !0,
              url: J.service.getOperationUrl("GetMap"),
              visible: J.checked,
              "z-index": xn(J),
              options: { pane: `layer-pane-${xn(J)}` },
              format: "image/png",
              "layer-type": "base"
            }, null, 8, ["attribution", "layers", "name", "opacity", "url", "visible", "z-index", "options"])) : Fe("", !0),
            J.type == "WFSLayer" ? (V(), ht(ST, {
              key: 1,
              "geo-json": u(J.wfs_service)?.geoJson,
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "filter-feature-collection": z(Z),
              "get-style-by-id": Oi,
              "is-point": z(R)
            }, null, 8, ["geo-json", "style-ids", "layer-options", "filter-feature-collection", "is-point"])) : Fe("", !0),
            J.type == "GEOJSON" ? (V(), ht(NT, {
              key: 2,
              "layer-data": an(J),
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "filter-feature-collection": z(Z),
              "get-style-by-id": Oi,
              "is-point": z(R),
              "get-point": ii
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Fe("", !0),
            J.type == "REST-GEOJSON" ? (V(), ht(DT, {
              key: 3,
              "layer-data": an(J),
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "filter-feature-collection": z(Z),
              "get-style-by-id": Oi,
              "is-point": z(R),
              "get-point": ii
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Fe("", !0),
            J.type == "ROUTE" && J.datasourceId ? (V(), ht(PT, {
              key: 4,
              "datasource-id": J.datasourceId
            }, null, 8, ["datasource-id"])) : Fe("", !0),
            J.type == "OGCSTA" ? (V(), ht(RT, {
              key: 5,
              locations: jt(J),
              renderers: n(E.value.OGCSstyles),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "area-pane": nr(J),
              "widget-id": z(g),
              "compare-thing": z(K),
              "compare-datastream": z(W),
              "is-feature-collection": z(U),
              "is-point": z(R),
              "get-point": ii,
              "get-pointform-area": ir,
              "transform-to-geo-json": z(ue),
              "get-by-id": z(pn),
              "selected-thing-id": Pn.value,
              "selection-highlight-color": E.value.selectionHighlightColor ?? "#ff0000",
              "tooltip-thing-id": on.value,
              "tooltip-content": qn.value
            }, null, 8, ["locations", "renderers", "layer-options", "marker-pane", "area-pane", "widget-id", "compare-thing", "compare-datastream", "is-feature-collection", "is-point", "transform-to-geo-json", "get-by-id", "selected-thing-id", "selection-highlight-color", "tooltip-thing-id", "tooltip-content"])) : Fe("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["center", "zoom", "onMoveend", "dragging"])) : Fe("", !0)
    ]));
  }
}), fp = /* @__PURE__ */ tr(UT, [["__scopeId", "data-v-0a207de4"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function pp(o, i) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(o);
    i && (u = u.filter(function(d) {
      return Object.getOwnPropertyDescriptor(o, d).enumerable;
    })), n.push.apply(n, u);
  }
  return n;
}
function cs(o) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? pp(Object(n), !0).forEach(function(u) {
      zT(o, u, n[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : pp(Object(n)).forEach(function(u) {
      Object.defineProperty(o, u, Object.getOwnPropertyDescriptor(n, u));
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
function zT(o, i, n) {
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
      for (var u in n)
        Object.prototype.hasOwnProperty.call(n, u) && (o[u] = n[u]);
    }
    return o;
  }, Rs.apply(this, arguments);
}
function VT(o, i) {
  if (o == null) return {};
  var n = {}, u = Object.keys(o), d, p;
  for (p = 0; p < u.length; p++)
    d = u[p], !(i.indexOf(d) >= 0) && (n[d] = o[d]);
  return n;
}
function WT(o, i) {
  if (o == null) return {};
  var n = VT(o, i), u, d;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(o);
    for (d = 0; d < p.length; d++)
      u = p[d], !(i.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(o, u) && (n[u] = o[u]);
  }
  return n;
}
var ZT = "1.14.0";
function Ns(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var Ps = Ns(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), xl = Ns(/Edge/i), gp = Ns(/firefox/i), fl = Ns(/safari/i) && !Ns(/chrome/i) && !Ns(/android/i), Sg = Ns(/iP(ad|od|hone)/i), HT = Ns(/chrome/i) && Ns(/android/i), Ag = {
  capture: !1,
  passive: !1
};
function bt(o, i, n) {
  o.addEventListener(i, n, !Ps && Ag);
}
function At(o, i, n) {
  o.removeEventListener(i, n, !Ps && Ag);
}
function Qu(o, i) {
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
function YT(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function os(o, i, n, u) {
  if (o) {
    n = n || document;
    do {
      if (i != null && (i[0] === ">" ? o.parentNode === n && Qu(o, i) : Qu(o, i)) || u && o === n)
        return o;
      if (o === n) break;
    } while (o = YT(o));
  }
  return null;
}
var _p = /\s+/g;
function pr(o, i, n) {
  if (o && i)
    if (o.classList)
      o.classList[n ? "add" : "remove"](i);
    else {
      var u = (" " + o.className + " ").replace(_p, " ").replace(" " + i + " ", " ");
      o.className = (u + (n ? " " + i : "")).replace(_p, " ");
    }
}
function We(o, i, n) {
  var u = o && o.style;
  if (u) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (n = o.currentStyle), i === void 0 ? n : n[i];
    !(i in u) && i.indexOf("webkit") === -1 && (i = "-webkit-" + i), u[i] = n + (typeof n == "string" ? "" : "px");
  }
}
function ma(o, i) {
  var n = "";
  if (typeof o == "string")
    n = o;
  else
    do {
      var u = We(o, "transform");
      u && u !== "none" && (n = u + " " + n);
    } while (!i && (o = o.parentNode));
  var d = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return d && new d(n);
}
function Cg(o, i, n) {
  if (o) {
    var u = o.getElementsByTagName(i), d = 0, p = u.length;
    if (n)
      for (; d < p; d++)
        n(u[d], d);
    return u;
  }
  return [];
}
function us() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function Yn(o, i, n, u, d) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var p, g, v, m, E, A, w;
    if (o !== window && o.parentNode && o !== us() ? (p = o.getBoundingClientRect(), g = p.top, v = p.left, m = p.bottom, E = p.right, A = p.height, w = p.width) : (g = 0, v = 0, m = window.innerHeight, E = window.innerWidth, A = window.innerHeight, w = window.innerWidth), (i || n) && o !== window && (d = d || o.parentNode, !Ps))
      do
        if (d && d.getBoundingClientRect && (We(d, "transform") !== "none" || n && We(d, "position") !== "static")) {
          var b = d.getBoundingClientRect();
          g -= b.top + parseInt(We(d, "border-top-width")), v -= b.left + parseInt(We(d, "border-left-width")), m = g + p.height, E = v + p.width;
          break;
        }
      while (d = d.parentNode);
    if (u && o !== window) {
      var N = ma(d || o), M = N && N.a, G = N && N.d;
      N && (g /= G, v /= M, w /= M, A /= G, m = g + A, E = v + w);
    }
    return {
      top: g,
      left: v,
      bottom: m,
      right: E,
      width: w,
      height: A
    };
  }
}
function mp(o, i, n) {
  for (var u = to(o, !0), d = Yn(o)[i]; u; ) {
    var p = Yn(u)[n], g = void 0;
    if (g = d >= p, !g) return u;
    if (u === us()) break;
    u = to(u, !1);
  }
  return !1;
}
function va(o, i, n, u) {
  for (var d = 0, p = 0, g = o.children; p < g.length; ) {
    if (g[p].style.display !== "none" && g[p] !== Ze.ghost && (u || g[p] !== Ze.dragged) && os(g[p], n.draggable, o, !1)) {
      if (d === i)
        return g[p];
      d++;
    }
    p++;
  }
  return null;
}
function td(o, i) {
  for (var n = o.lastElementChild; n && (n === Ze.ghost || We(n, "display") === "none" || i && !Qu(n, i)); )
    n = n.previousElementSibling;
  return n || null;
}
function Rr(o, i) {
  var n = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== Ze.clone && (!i || Qu(o, i)) && n++;
  return n;
}
function vp(o) {
  var i = 0, n = 0, u = us();
  if (o)
    do {
      var d = ma(o), p = d.a, g = d.d;
      i += o.scrollLeft * p, n += o.scrollTop * g;
    } while (o !== u && (o = o.parentNode));
  return [i, n];
}
function qT(o, i) {
  for (var n in o)
    if (o.hasOwnProperty(n)) {
      for (var u in i)
        if (i.hasOwnProperty(u) && i[u] === o[n][u]) return Number(n);
    }
  return -1;
}
function to(o, i) {
  if (!o || !o.getBoundingClientRect) return us();
  var n = o, u = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var d = We(n);
      if (n.clientWidth < n.scrollWidth && (d.overflowX == "auto" || d.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (d.overflowY == "auto" || d.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return us();
        if (u || i) return n;
        u = !0;
      }
    }
  while (n = n.parentNode);
  return us();
}
function KT(o, i) {
  if (o && i)
    for (var n in i)
      i.hasOwnProperty(n) && (o[n] = i[n]);
  return o;
}
function Th(o, i) {
  return Math.round(o.top) === Math.round(i.top) && Math.round(o.left) === Math.round(i.left) && Math.round(o.height) === Math.round(i.height) && Math.round(o.width) === Math.round(i.width);
}
var pl;
function Og(o, i) {
  return function() {
    if (!pl) {
      var n = arguments, u = this;
      n.length === 1 ? o.call(u, n[0]) : o.apply(u, n), pl = setTimeout(function() {
        pl = void 0;
      }, i);
    }
  };
}
function $T() {
  clearTimeout(pl), pl = void 0;
}
function bg(o, i, n) {
  o.scrollLeft += i, o.scrollTop += n;
}
function Lg(o) {
  var i = window.Polymer, n = window.jQuery || window.Zepto;
  return i && i.dom ? i.dom(o).cloneNode(!0) : n ? n(o).clone(!0)[0] : o.cloneNode(!0);
}
var _r = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function JT() {
  var o = [], i;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var u = [].slice.call(this.el.children);
        u.forEach(function(d) {
          if (!(We(d, "display") === "none" || d === Ze.ghost)) {
            o.push({
              target: d,
              rect: Yn(d)
            });
            var p = cs({}, o[o.length - 1].rect);
            if (d.thisAnimationDuration) {
              var g = ma(d, !0);
              g && (p.top -= g.f, p.left -= g.e);
            }
            d.fromRect = p;
          }
        });
      }
    },
    addAnimationState: function(u) {
      o.push(u);
    },
    removeAnimationState: function(u) {
      o.splice(qT(o, {
        target: u
      }), 1);
    },
    animateAll: function(u) {
      var d = this;
      if (!this.options.animation) {
        clearTimeout(i), typeof u == "function" && u();
        return;
      }
      var p = !1, g = 0;
      o.forEach(function(v) {
        var m = 0, E = v.target, A = E.fromRect, w = Yn(E), b = E.prevFromRect, N = E.prevToRect, M = v.rect, G = ma(E, !0);
        G && (w.top -= G.f, w.left -= G.e), E.toRect = w, E.thisAnimationDuration && Th(b, w) && !Th(A, w) && // Make sure animatingRect is on line between toRect & fromRect
        (M.top - w.top) / (M.left - w.left) === (A.top - w.top) / (A.left - w.left) && (m = XT(M, b, N, d.options)), Th(w, A) || (E.prevFromRect = A, E.prevToRect = w, m || (m = d.options.animation), d.animate(E, M, w, m)), m && (p = !0, g = Math.max(g, m), clearTimeout(E.animationResetTimer), E.animationResetTimer = setTimeout(function() {
          E.animationTime = 0, E.prevFromRect = null, E.fromRect = null, E.prevToRect = null, E.thisAnimationDuration = null;
        }, m), E.thisAnimationDuration = m);
      }), clearTimeout(i), p ? i = setTimeout(function() {
        typeof u == "function" && u();
      }, g) : typeof u == "function" && u(), o = [];
    },
    animate: function(u, d, p, g) {
      if (g) {
        We(u, "transition", ""), We(u, "transform", "");
        var v = ma(this.el), m = v && v.a, E = v && v.d, A = (d.left - p.left) / (m || 1), w = (d.top - p.top) / (E || 1);
        u.animatingX = !!A, u.animatingY = !!w, We(u, "transform", "translate3d(" + A + "px," + w + "px,0)"), this.forRepaintDummy = jT(u), We(u, "transition", "transform " + g + "ms" + (this.options.easing ? " " + this.options.easing : "")), We(u, "transform", "translate3d(0,0,0)"), typeof u.animated == "number" && clearTimeout(u.animated), u.animated = setTimeout(function() {
          We(u, "transition", ""), We(u, "transform", ""), u.animated = !1, u.animatingX = !1, u.animatingY = !1;
        }, g);
      }
    }
  };
}
function jT(o) {
  return o.offsetWidth;
}
function XT(o, i, n, u) {
  return Math.sqrt(Math.pow(i.top - o.top, 2) + Math.pow(i.left - o.left, 2)) / Math.sqrt(Math.pow(i.top - n.top, 2) + Math.pow(i.left - n.left, 2)) * u.animation;
}
var ca = [], wh = {
  initializeByDefault: !0
}, Fl = {
  mount: function(i) {
    for (var n in wh)
      wh.hasOwnProperty(n) && !(n in i) && (i[n] = wh[n]);
    ca.forEach(function(u) {
      if (u.pluginName === i.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(i.pluginName, " more than once");
    }), ca.push(i);
  },
  pluginEvent: function(i, n, u) {
    var d = this;
    this.eventCanceled = !1, u.cancel = function() {
      d.eventCanceled = !0;
    };
    var p = i + "Global";
    ca.forEach(function(g) {
      n[g.pluginName] && (n[g.pluginName][p] && n[g.pluginName][p](cs({
        sortable: n
      }, u)), n.options[g.pluginName] && n[g.pluginName][i] && n[g.pluginName][i](cs({
        sortable: n
      }, u)));
    });
  },
  initializePlugins: function(i, n, u, d) {
    ca.forEach(function(v) {
      var m = v.pluginName;
      if (!(!i.options[m] && !v.initializeByDefault)) {
        var E = new v(i, n, i.options);
        E.sortable = i, E.options = i.options, i[m] = E, Rs(u, E.defaults);
      }
    });
    for (var p in i.options)
      if (i.options.hasOwnProperty(p)) {
        var g = this.modifyOption(i, p, i.options[p]);
        typeof g < "u" && (i.options[p] = g);
      }
  },
  getEventProperties: function(i, n) {
    var u = {};
    return ca.forEach(function(d) {
      typeof d.eventProperties == "function" && Rs(u, d.eventProperties.call(n[d.pluginName], i));
    }), u;
  },
  modifyOption: function(i, n, u) {
    var d;
    return ca.forEach(function(p) {
      i[p.pluginName] && p.optionListeners && typeof p.optionListeners[n] == "function" && (d = p.optionListeners[n].call(i[p.pluginName], u));
    }), d;
  }
};
function QT(o) {
  var i = o.sortable, n = o.rootEl, u = o.name, d = o.targetEl, p = o.cloneEl, g = o.toEl, v = o.fromEl, m = o.oldIndex, E = o.newIndex, A = o.oldDraggableIndex, w = o.newDraggableIndex, b = o.originalEvent, N = o.putSortable, M = o.extraEventProperties;
  if (i = i || n && n[_r], !!i) {
    var G, ee = i.options, Z = "on" + u.charAt(0).toUpperCase() + u.substr(1);
    window.CustomEvent && !Ps && !xl ? G = new CustomEvent(u, {
      bubbles: !0,
      cancelable: !0
    }) : (G = document.createEvent("Event"), G.initEvent(u, !0, !0)), G.to = g || n, G.from = v || n, G.item = d || n, G.clone = p, G.oldIndex = m, G.newIndex = E, G.oldDraggableIndex = A, G.newDraggableIndex = w, G.originalEvent = b, G.pullMode = N ? N.lastPutMode : void 0;
    var W = cs(cs({}, M), Fl.getEventProperties(u, i));
    for (var K in W)
      G[K] = W[K];
    n && n.dispatchEvent(G), ee[Z] && ee[Z].call(i, G);
  }
}
var ew = ["evt"], Xi = function(i, n) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = u.evt, p = WT(u, ew);
  Fl.pluginEvent.bind(Ze)(i, n, cs({
    dragEl: ye,
    parentEl: En,
    ghostEl: rt,
    rootEl: nn,
    nextEl: Ro,
    lastDownEl: ku,
    cloneEl: Tn,
    cloneHidden: eo,
    dragStarted: ol,
    putSortable: ci,
    activeSortable: Ze.active,
    originalEvent: d,
    oldIndex: pa,
    oldDraggableIndex: gl,
    newIndex: gr,
    newDraggableIndex: Qs,
    hideGhostForTarget: Rg,
    unhideGhostForTarget: Pg,
    cloneNowHidden: function() {
      eo = !0;
    },
    cloneNowShown: function() {
      eo = !1;
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
  QT(cs({
    putSortable: ci,
    cloneEl: Tn,
    targetEl: ye,
    rootEl: nn,
    oldIndex: pa,
    oldDraggableIndex: gl,
    newIndex: gr,
    newDraggableIndex: Qs
  }, o));
}
var ye, En, rt, nn, Ro, ku, Tn, eo, pa, gr, gl, Qs, Pu, ci, fa = !1, ec = !1, tc = [], No, Hr, Sh, Ah, yp, Ep, ol, ha, _l, ml = !1, xu = !1, Uu, Si, Ch = [], Fh = !1, nc = [], lc = typeof document < "u", Fu = Sg, Tp = xl || Ps ? "cssFloat" : "float", tw = lc && !HT && !Sg && "draggable" in document.createElement("div"), Ig = (function() {
  if (lc) {
    if (Ps)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
})(), Ng = function(i, n) {
  var u = We(i), d = parseInt(u.width) - parseInt(u.paddingLeft) - parseInt(u.paddingRight) - parseInt(u.borderLeftWidth) - parseInt(u.borderRightWidth), p = va(i, 0, n), g = va(i, 1, n), v = p && We(p), m = g && We(g), E = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + Yn(p).width, A = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Yn(g).width;
  if (u.display === "flex")
    return u.flexDirection === "column" || u.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (u.display === "grid")
    return u.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (p && v.float && v.float !== "none") {
    var w = v.float === "left" ? "left" : "right";
    return g && (m.clear === "both" || m.clear === w) ? "vertical" : "horizontal";
  }
  return p && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || E >= d && u[Tp] === "none" || g && u[Tp] === "none" && E + A > d) ? "vertical" : "horizontal";
}, nw = function(i, n, u) {
  var d = u ? i.left : i.top, p = u ? i.right : i.bottom, g = u ? i.width : i.height, v = u ? n.left : n.top, m = u ? n.right : n.bottom, E = u ? n.width : n.height;
  return d === v || p === m || d + g / 2 === v + E / 2;
}, iw = function(i, n) {
  var u;
  return tc.some(function(d) {
    var p = d[_r].options.emptyInsertThreshold;
    if (!(!p || td(d))) {
      var g = Yn(d), v = i >= g.left - p && i <= g.right + p, m = n >= g.top - p && n <= g.bottom + p;
      if (v && m)
        return u = d;
    }
  }), u;
}, Dg = function(i) {
  function n(p, g) {
    return function(v, m, E, A) {
      var w = v.options.group.name && m.options.group.name && v.options.group.name === m.options.group.name;
      if (p == null && (g || w))
        return !0;
      if (p == null || p === !1)
        return !1;
      if (g && p === "clone")
        return p;
      if (typeof p == "function")
        return n(p(v, m, E, A), g)(v, m, E, A);
      var b = (g ? v : m).options.group.name;
      return p === !0 || typeof p == "string" && p === b || p.join && p.indexOf(b) > -1;
    };
  }
  var u = {}, d = i.group;
  (!d || Gu(d) != "object") && (d = {
    name: d
  }), u.name = d.name, u.checkPull = n(d.pull, !0), u.checkPut = n(d.put), u.revertClone = d.revertClone, i.group = u;
}, Rg = function() {
  !Ig && rt && We(rt, "display", "none");
}, Pg = function() {
  !Ig && rt && We(rt, "display", "");
};
lc && document.addEventListener("click", function(o) {
  if (ec)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), ec = !1, !1;
}, !0);
var Do = function(i) {
  if (ye) {
    i = i.touches ? i.touches[0] : i;
    var n = iw(i.clientX, i.clientY);
    if (n) {
      var u = {};
      for (var d in i)
        i.hasOwnProperty(d) && (u[d] = i[d]);
      u.target = u.rootEl = n, u.preventDefault = void 0, u.stopPropagation = void 0, n[_r]._onDragOver(u);
    }
  }
}, rw = function(i) {
  ye && ye.parentNode[_r]._isOutsideThisEl(i.target);
};
function Ze(o, i) {
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
      return Ng(o, this.options);
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
    supportPointer: Ze.supportPointer !== !1 && "PointerEvent" in window && !fl,
    emptyInsertThreshold: 5
  };
  Fl.initializePlugins(this, o, n);
  for (var u in n)
    !(u in i) && (i[u] = n[u]);
  Dg(i);
  for (var d in this)
    d.charAt(0) === "_" && typeof this[d] == "function" && (this[d] = this[d].bind(this));
  this.nativeDraggable = i.forceFallback ? !1 : tw, this.nativeDraggable && (this.options.touchStartThreshold = 1), i.supportPointer ? bt(o, "pointerdown", this._onTapStart) : (bt(o, "mousedown", this._onTapStart), bt(o, "touchstart", this._onTapStart)), this.nativeDraggable && (bt(o, "dragover", this), bt(o, "dragenter", this)), tc.push(this.el), i.store && i.store.get && this.sort(i.store.get(this) || []), Rs(this, JT());
}
Ze.prototype = /** @lends Sortable.prototype */
{
  constructor: Ze,
  _isOutsideThisEl: function(i) {
    !this.el.contains(i) && i !== this.el && (ha = null);
  },
  _getDirection: function(i, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, i, n, ye) : this.options.direction;
  },
  _onTapStart: function(i) {
    if (i.cancelable) {
      var n = this, u = this.el, d = this.options, p = d.preventOnFilter, g = i.type, v = i.touches && i.touches[0] || i.pointerType && i.pointerType === "touch" && i, m = (v || i).target, E = i.target.shadowRoot && (i.path && i.path[0] || i.composedPath && i.composedPath()[0]) || m, A = d.filter;
      if (dw(u), !ye && !(/mousedown|pointerdown/.test(g) && i.button !== 0 || d.disabled) && !E.isContentEditable && !(!this.nativeDraggable && fl && m && m.tagName.toUpperCase() === "SELECT") && (m = os(m, d.draggable, u, !1), !(m && m.animated) && ku !== m)) {
        if (pa = Rr(m), gl = Rr(m, d.draggable), typeof A == "function") {
          if (A.call(this, i, m, this)) {
            Gi({
              sortable: n,
              rootEl: E,
              name: "filter",
              targetEl: m,
              toEl: u,
              fromEl: u
            }), Xi("filter", n, {
              evt: i
            }), p && i.cancelable && i.preventDefault();
            return;
          }
        } else if (A && (A = A.split(",").some(function(w) {
          if (w = os(E, w.trim(), u, !1), w)
            return Gi({
              sortable: n,
              rootEl: w,
              name: "filter",
              targetEl: m,
              fromEl: u,
              toEl: u
            }), Xi("filter", n, {
              evt: i
            }), !0;
        }), A)) {
          p && i.cancelable && i.preventDefault();
          return;
        }
        d.handle && !os(E, d.handle, u, !1) || this._prepareDragStart(i, v, m);
      }
    }
  },
  _prepareDragStart: function(i, n, u) {
    var d = this, p = d.el, g = d.options, v = p.ownerDocument, m;
    if (u && !ye && u.parentNode === p) {
      var E = Yn(u);
      if (nn = p, ye = u, En = ye.parentNode, Ro = ye.nextSibling, ku = u, Pu = g.group, Ze.dragged = ye, No = {
        target: ye,
        clientX: (n || i).clientX,
        clientY: (n || i).clientY
      }, yp = No.clientX - E.left, Ep = No.clientY - E.top, this._lastX = (n || i).clientX, this._lastY = (n || i).clientY, ye.style["will-change"] = "all", m = function() {
        if (Xi("delayEnded", d, {
          evt: i
        }), Ze.eventCanceled) {
          d._onDrop();
          return;
        }
        d._disableDelayedDragEvents(), !gp && d.nativeDraggable && (ye.draggable = !0), d._triggerDragStart(i, n), Gi({
          sortable: d,
          name: "choose",
          originalEvent: i
        }), pr(ye, g.chosenClass, !0);
      }, g.ignore.split(",").forEach(function(A) {
        Cg(ye, A.trim(), Oh);
      }), bt(v, "dragover", Do), bt(v, "mousemove", Do), bt(v, "touchmove", Do), bt(v, "mouseup", d._onDrop), bt(v, "touchend", d._onDrop), bt(v, "touchcancel", d._onDrop), gp && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Xi("delayStart", this, {
        evt: i
      }), g.delay && (!g.delayOnTouchOnly || n) && (!this.nativeDraggable || !(xl || Ps))) {
        if (Ze.eventCanceled) {
          this._onDrop();
          return;
        }
        bt(v, "mouseup", d._disableDelayedDrag), bt(v, "touchend", d._disableDelayedDrag), bt(v, "touchcancel", d._disableDelayedDrag), bt(v, "mousemove", d._delayedDragTouchMoveHandler), bt(v, "touchmove", d._delayedDragTouchMoveHandler), g.supportPointer && bt(v, "pointermove", d._delayedDragTouchMoveHandler), d._dragStartTimer = setTimeout(m, g.delay);
      } else
        m();
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
    n = n || i.pointerType == "touch" && i, !this.nativeDraggable || n ? this.options.supportPointer ? bt(document, "pointermove", this._onTouchMove) : n ? bt(document, "touchmove", this._onTouchMove) : bt(document, "mousemove", this._onTouchMove) : (bt(ye, "dragend", this), bt(nn, "dragstart", this._onDragStart));
    try {
      document.selection ? zu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(i, n) {
    if (fa = !1, nn && ye) {
      Xi("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && bt(document, "dragover", rw);
      var u = this.options;
      !i && pr(ye, u.dragClass, !1), pr(ye, u.ghostClass, !0), Ze.active = this, i && this._appendGhost(), Gi({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Hr) {
      this._lastX = Hr.clientX, this._lastY = Hr.clientY, Rg();
      for (var i = document.elementFromPoint(Hr.clientX, Hr.clientY), n = i; i && i.shadowRoot && (i = i.shadowRoot.elementFromPoint(Hr.clientX, Hr.clientY), i !== n); )
        n = i;
      if (ye.parentNode[_r]._isOutsideThisEl(i), n)
        do {
          if (n[_r]) {
            var u = void 0;
            if (u = n[_r]._onDragOver({
              clientX: Hr.clientX,
              clientY: Hr.clientY,
              target: i,
              rootEl: n
            }), u && !this.options.dragoverBubble)
              break;
          }
          i = n;
        } while (n = n.parentNode);
      Pg();
    }
  },
  _onTouchMove: function(i) {
    if (No) {
      var n = this.options, u = n.fallbackTolerance, d = n.fallbackOffset, p = i.touches ? i.touches[0] : i, g = rt && ma(rt, !0), v = rt && g && g.a, m = rt && g && g.d, E = Fu && Si && vp(Si), A = (p.clientX - No.clientX + d.x) / (v || 1) + (E ? E[0] - Ch[0] : 0) / (v || 1), w = (p.clientY - No.clientY + d.y) / (m || 1) + (E ? E[1] - Ch[1] : 0) / (m || 1);
      if (!Ze.active && !fa) {
        if (u && Math.max(Math.abs(p.clientX - this._lastX), Math.abs(p.clientY - this._lastY)) < u)
          return;
        this._onDragStart(i, !0);
      }
      if (rt) {
        g ? (g.e += A - (Sh || 0), g.f += w - (Ah || 0)) : g = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: A,
          f: w
        };
        var b = "matrix(".concat(g.a, ",").concat(g.b, ",").concat(g.c, ",").concat(g.d, ",").concat(g.e, ",").concat(g.f, ")");
        We(rt, "webkitTransform", b), We(rt, "mozTransform", b), We(rt, "msTransform", b), We(rt, "transform", b), Sh = A, Ah = w, Hr = p;
      }
      i.cancelable && i.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!rt) {
      var i = this.options.fallbackOnBody ? document.body : nn, n = Yn(ye, !0, Fu, !0, i), u = this.options;
      if (Fu) {
        for (Si = i; We(Si, "position") === "static" && We(Si, "transform") === "none" && Si !== document; )
          Si = Si.parentNode;
        Si !== document.body && Si !== document.documentElement ? (Si === document && (Si = us()), n.top += Si.scrollTop, n.left += Si.scrollLeft) : Si = us(), Ch = vp(Si);
      }
      rt = ye.cloneNode(!0), pr(rt, u.ghostClass, !1), pr(rt, u.fallbackClass, !0), pr(rt, u.dragClass, !0), We(rt, "transition", ""), We(rt, "transform", ""), We(rt, "box-sizing", "border-box"), We(rt, "margin", 0), We(rt, "top", n.top), We(rt, "left", n.left), We(rt, "width", n.width), We(rt, "height", n.height), We(rt, "opacity", "0.8"), We(rt, "position", Fu ? "absolute" : "fixed"), We(rt, "zIndex", "100000"), We(rt, "pointerEvents", "none"), Ze.ghost = rt, i.appendChild(rt), We(rt, "transform-origin", yp / parseInt(rt.style.width) * 100 + "% " + Ep / parseInt(rt.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(i, n) {
    var u = this, d = i.dataTransfer, p = u.options;
    if (Xi("dragStart", this, {
      evt: i
    }), Ze.eventCanceled) {
      this._onDrop();
      return;
    }
    Xi("setupClone", this), Ze.eventCanceled || (Tn = Lg(ye), Tn.draggable = !1, Tn.style["will-change"] = "", this._hideClone(), pr(Tn, this.options.chosenClass, !1), Ze.clone = Tn), u.cloneId = zu(function() {
      Xi("clone", u), !Ze.eventCanceled && (u.options.removeCloneOnHide || nn.insertBefore(Tn, ye), u._hideClone(), Gi({
        sortable: u,
        name: "clone"
      }));
    }), !n && pr(ye, p.dragClass, !0), n ? (ec = !0, u._loopId = setInterval(u._emulateDragOver, 50)) : (At(document, "mouseup", u._onDrop), At(document, "touchend", u._onDrop), At(document, "touchcancel", u._onDrop), d && (d.effectAllowed = "move", p.setData && p.setData.call(u, d, ye)), bt(document, "drop", u), We(ye, "transform", "translateZ(0)")), fa = !0, u._dragStartId = zu(u._dragStarted.bind(u, n, i)), bt(document, "selectstart", u), ol = !0, fl && We(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(i) {
    var n = this.el, u = i.target, d, p, g, v = this.options, m = v.group, E = Ze.active, A = Pu === m, w = v.sort, b = ci || E, N, M = this, G = !1;
    if (Fh) return;
    function ee(Ee, Pt) {
      Xi(Ee, M, cs({
        evt: i,
        isOwner: A,
        axis: N ? "vertical" : "horizontal",
        revert: g,
        dragRect: d,
        targetRect: p,
        canSort: w,
        fromSortable: b,
        target: u,
        completed: W,
        onMove: function(Ue, kt) {
          return Mu(nn, n, ye, d, Ue, Yn(Ue), i, kt);
        },
        changed: K
      }, Pt));
    }
    function Z() {
      ee("dragOverAnimationCapture"), M.captureAnimationState(), M !== b && b.captureAnimationState();
    }
    function W(Ee) {
      return ee("dragOverCompleted", {
        insertion: Ee
      }), Ee && (A ? E._hideClone() : E._showClone(M), M !== b && (pr(ye, ci ? ci.options.ghostClass : E.options.ghostClass, !1), pr(ye, v.ghostClass, !0)), ci !== M && M !== Ze.active ? ci = M : M === Ze.active && ci && (ci = null), b === M && (M._ignoreWhileAnimating = u), M.animateAll(function() {
        ee("dragOverAnimationComplete"), M._ignoreWhileAnimating = null;
      }), M !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (u === ye && !ye.animated || u === n && !u.animated) && (ha = null), !v.dragoverBubble && !i.rootEl && u !== document && (ye.parentNode[_r]._isOutsideThisEl(i.target), !Ee && Do(i)), !v.dragoverBubble && i.stopPropagation && i.stopPropagation(), G = !0;
    }
    function K() {
      gr = Rr(ye), Qs = Rr(ye, v.draggable), Gi({
        sortable: M,
        name: "change",
        toEl: n,
        newIndex: gr,
        newDraggableIndex: Qs,
        originalEvent: i
      });
    }
    if (i.preventDefault !== void 0 && i.cancelable && i.preventDefault(), u = os(u, v.draggable, n, !0), ee("dragOver"), Ze.eventCanceled) return G;
    if (ye.contains(i.target) || u.animated && u.animatingX && u.animatingY || M._ignoreWhileAnimating === u)
      return W(!1);
    if (ec = !1, E && !v.disabled && (A ? w || (g = En !== nn) : ci === this || (this.lastPutMode = Pu.checkPull(this, E, ye, i)) && m.checkPut(this, E, ye, i))) {
      if (N = this._getDirection(i, u) === "vertical", d = Yn(ye), ee("dragOverValid"), Ze.eventCanceled) return G;
      if (g)
        return En = nn, Z(), this._hideClone(), ee("revert"), Ze.eventCanceled || (Ro ? nn.insertBefore(ye, Ro) : nn.appendChild(ye)), W(!0);
      var R = td(n, v.draggable);
      if (!R || lw(i, N, this) && !R.animated) {
        if (R === ye)
          return W(!1);
        if (R && n === i.target && (u = R), u && (p = Yn(u)), Mu(nn, n, ye, d, u, p, i, !!u) !== !1)
          return Z(), n.appendChild(ye), En = n, K(), W(!0);
      } else if (R && aw(i, N, this)) {
        var U = va(n, 0, v, !0);
        if (U === ye)
          return W(!1);
        if (u = U, p = Yn(u), Mu(nn, n, ye, d, u, p, i, !1) !== !1)
          return Z(), n.insertBefore(ye, U), En = n, K(), W(!0);
      } else if (u.parentNode === n) {
        p = Yn(u);
        var ue = 0, _e, be = ye.parentNode !== n, ce = !nw(ye.animated && ye.toRect || d, u.animated && u.toRect || p, N), se = N ? "top" : "left", $ = mp(u, "top", "top") || mp(ye, "top", "top"), k = $ ? $.scrollTop : void 0;
        ha !== u && (_e = p[se], ml = !1, xu = !ce && v.invertSwap || be), ue = uw(i, u, p, N, ce ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, xu, ha === u);
        var ie;
        if (ue !== 0) {
          var Y = Rr(ye);
          do
            Y -= ue, ie = En.children[Y];
          while (ie && (We(ie, "display") === "none" || ie === rt));
        }
        if (ue === 0 || ie === u)
          return W(!1);
        ha = u, _l = ue;
        var de = u.nextElementSibling, le = !1;
        le = ue === 1;
        var Oe = Mu(nn, n, ye, d, u, p, i, le);
        if (Oe !== !1)
          return (Oe === 1 || Oe === -1) && (le = Oe === 1), Fh = !0, setTimeout(ow, 30), Z(), le && !de ? n.appendChild(ye) : u.parentNode.insertBefore(ye, le ? de : u), $ && bg($, 0, k - $.scrollTop), En = ye.parentNode, _e !== void 0 && !xu && (Uu = Math.abs(_e - Yn(u)[se])), K(), W(!0);
      }
      if (n.contains(ye))
        return W(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    At(document, "mousemove", this._onTouchMove), At(document, "touchmove", this._onTouchMove), At(document, "pointermove", this._onTouchMove), At(document, "dragover", Do), At(document, "mousemove", Do), At(document, "touchmove", Do);
  },
  _offUpEvents: function() {
    var i = this.el.ownerDocument;
    At(i, "mouseup", this._onDrop), At(i, "touchend", this._onDrop), At(i, "pointerup", this._onDrop), At(i, "touchcancel", this._onDrop), At(document, "selectstart", this);
  },
  _onDrop: function(i) {
    var n = this.el, u = this.options;
    if (gr = Rr(ye), Qs = Rr(ye, u.draggable), Xi("drop", this, {
      evt: i
    }), En = ye && ye.parentNode, gr = Rr(ye), Qs = Rr(ye, u.draggable), Ze.eventCanceled) {
      this._nulling();
      return;
    }
    fa = !1, xu = !1, ml = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Mh(this.cloneId), Mh(this._dragStartId), this.nativeDraggable && (At(document, "drop", this), At(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), fl && We(document.body, "user-select", ""), We(ye, "transform", ""), i && (ol && (i.cancelable && i.preventDefault(), !u.dropBubble && i.stopPropagation()), rt && rt.parentNode && rt.parentNode.removeChild(rt), (nn === En || ci && ci.lastPutMode !== "clone") && Tn && Tn.parentNode && Tn.parentNode.removeChild(Tn), ye && (this.nativeDraggable && At(ye, "dragend", this), Oh(ye), ye.style["will-change"] = "", ol && !fa && pr(ye, ci ? ci.options.ghostClass : this.options.ghostClass, !1), pr(ye, this.options.chosenClass, !1), Gi({
      sortable: this,
      name: "unchoose",
      toEl: En,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: i
    }), nn !== En ? (gr >= 0 && (Gi({
      rootEl: En,
      name: "add",
      toEl: En,
      fromEl: nn,
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
      fromEl: nn,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: En,
      originalEvent: i
    })), ci && ci.save()) : gr !== pa && gr >= 0 && (Gi({
      sortable: this,
      name: "update",
      toEl: En,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: En,
      originalEvent: i
    })), Ze.active && ((gr == null || gr === -1) && (gr = pa, Qs = gl), Gi({
      sortable: this,
      name: "end",
      toEl: En,
      originalEvent: i
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Xi("nulling", this), nn = ye = En = rt = Ro = Tn = ku = eo = No = Hr = ol = gr = Qs = pa = gl = ha = _l = ci = Pu = Ze.dragged = Ze.ghost = Ze.clone = Ze.active = null, nc.forEach(function(i) {
      i.checked = !0;
    }), nc.length = Sh = Ah = 0;
  },
  handleEvent: function(i) {
    switch (i.type) {
      case "drop":
      case "dragend":
        this._onDrop(i);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(i), sw(i));
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
    for (var i = [], n, u = this.el.children, d = 0, p = u.length, g = this.options; d < p; d++)
      n = u[d], os(n, g.draggable, this.el, !1) && i.push(n.getAttribute(g.dataIdAttr) || hw(n));
    return i;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(i, n) {
    var u = {}, d = this.el;
    this.toArray().forEach(function(p, g) {
      var v = d.children[g];
      os(v, this.options.draggable, d, !1) && (u[p] = v);
    }, this), n && this.captureAnimationState(), i.forEach(function(p) {
      u[p] && (d.removeChild(u[p]), d.appendChild(u[p]));
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
    return os(i, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(i, n) {
    var u = this.options;
    if (n === void 0)
      return u[i];
    var d = Fl.modifyOption(this, i, n);
    typeof d < "u" ? u[i] = d : u[i] = n, i === "group" && Dg(u);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Xi("destroy", this);
    var i = this.el;
    i[_r] = null, At(i, "mousedown", this._onTapStart), At(i, "touchstart", this._onTapStart), At(i, "pointerdown", this._onTapStart), this.nativeDraggable && (At(i, "dragover", this), At(i, "dragenter", this)), Array.prototype.forEach.call(i.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), tc.splice(tc.indexOf(this.el), 1), this.el = i = null;
  },
  _hideClone: function() {
    if (!eo) {
      if (Xi("hideClone", this), Ze.eventCanceled) return;
      We(Tn, "display", "none"), this.options.removeCloneOnHide && Tn.parentNode && Tn.parentNode.removeChild(Tn), eo = !0;
    }
  },
  _showClone: function(i) {
    if (i.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (eo) {
      if (Xi("showClone", this), Ze.eventCanceled) return;
      ye.parentNode == nn && !this.options.group.revertClone ? nn.insertBefore(Tn, ye) : Ro ? nn.insertBefore(Tn, Ro) : nn.appendChild(Tn), this.options.group.revertClone && this.animate(ye, Tn), We(Tn, "display", ""), eo = !1;
    }
  }
};
function sw(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Mu(o, i, n, u, d, p, g, v) {
  var m, E = o[_r], A = E.options.onMove, w;
  return window.CustomEvent && !Ps && !xl ? m = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (m = document.createEvent("Event"), m.initEvent("move", !0, !0)), m.to = i, m.from = o, m.dragged = n, m.draggedRect = u, m.related = d || i, m.relatedRect = p || Yn(i), m.willInsertAfter = v, m.originalEvent = g, o.dispatchEvent(m), A && (w = A.call(E, m, g)), w;
}
function Oh(o) {
  o.draggable = !1;
}
function ow() {
  Fh = !1;
}
function aw(o, i, n) {
  var u = Yn(va(n.el, 0, n.options, !0)), d = 10;
  return i ? o.clientX < u.left - d || o.clientY < u.top && o.clientX < u.right : o.clientY < u.top - d || o.clientY < u.bottom && o.clientX < u.left;
}
function lw(o, i, n) {
  var u = Yn(td(n.el, n.options.draggable)), d = 10;
  return i ? o.clientX > u.right + d || o.clientX <= u.right && o.clientY > u.bottom && o.clientX >= u.left : o.clientX > u.right && o.clientY > u.top || o.clientX <= u.right && o.clientY > u.bottom + d;
}
function uw(o, i, n, u, d, p, g, v) {
  var m = u ? o.clientY : o.clientX, E = u ? n.height : n.width, A = u ? n.top : n.left, w = u ? n.bottom : n.right, b = !1;
  if (!g) {
    if (v && Uu < E * d) {
      if (!ml && (_l === 1 ? m > A + E * p / 2 : m < w - E * p / 2) && (ml = !0), ml)
        b = !0;
      else if (_l === 1 ? m < A + Uu : m > w - Uu)
        return -_l;
    } else if (m > A + E * (1 - d) / 2 && m < w - E * (1 - d) / 2)
      return cw(i);
  }
  return b = b || g, b && (m < A + E * p / 2 || m > w - E * p / 2) ? m > A + E / 2 ? 1 : -1 : 0;
}
function cw(o) {
  return Rr(ye) < Rr(o) ? 1 : -1;
}
function hw(o) {
  for (var i = o.tagName + o.className + o.src + o.href + o.textContent, n = i.length, u = 0; n--; )
    u += i.charCodeAt(n);
  return u.toString(36);
}
function dw(o) {
  nc.length = 0;
  for (var i = o.getElementsByTagName("input"), n = i.length; n--; ) {
    var u = i[n];
    u.checked && nc.push(u);
  }
}
function zu(o) {
  return setTimeout(o, 0);
}
function Mh(o) {
  return clearTimeout(o);
}
lc && bt(document, "touchmove", function(o) {
  (Ze.active || fa) && o.cancelable && o.preventDefault();
});
Ze.utils = {
  on: bt,
  off: At,
  css: We,
  find: Cg,
  is: function(i, n) {
    return !!os(i, n, i, !1);
  },
  extend: KT,
  throttle: Og,
  closest: os,
  toggleClass: pr,
  clone: Lg,
  index: Rr,
  nextTick: zu,
  cancelNextTick: Mh,
  detectDirection: Ng,
  getChild: va
};
Ze.get = function(o) {
  return o[_r];
};
Ze.mount = function() {
  for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
    i[n] = arguments[n];
  i[0].constructor === Array && (i = i[0]), i.forEach(function(u) {
    if (!u.prototype || !u.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(u));
    u.utils && (Ze.utils = cs(cs({}, Ze.utils), u.utils)), Fl.mount(u);
  });
};
Ze.create = function(o, i) {
  return new Ze(o, i);
};
Ze.version = ZT;
var Gn = [], al, Bh, Gh = !1, bh, Lh, ic, ll;
function fw() {
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
      var u = n.originalEvent;
      this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? bt(document, "pointermove", this._handleFallbackAutoScroll) : u.touches ? bt(document, "touchmove", this._handleFallbackAutoScroll) : bt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var u = n.originalEvent;
      !this.options.dragOverBubble && !u.rootEl && this._handleAutoScroll(u);
    },
    drop: function() {
      this.sortable.nativeDraggable ? At(document, "dragover", this._handleAutoScroll) : (At(document, "pointermove", this._handleFallbackAutoScroll), At(document, "touchmove", this._handleFallbackAutoScroll), At(document, "mousemove", this._handleFallbackAutoScroll)), wp(), Vu(), $T();
    },
    nulling: function() {
      ic = Bh = al = Gh = ll = bh = Lh = null, Gn.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, u) {
      var d = this, p = (n.touches ? n.touches[0] : n).clientX, g = (n.touches ? n.touches[0] : n).clientY, v = document.elementFromPoint(p, g);
      if (ic = n, u || this.options.forceAutoScrollFallback || xl || Ps || fl) {
        Ih(n, this.options, v, u);
        var m = to(v, !0);
        Gh && (!ll || p !== bh || g !== Lh) && (ll && wp(), ll = setInterval(function() {
          var E = to(document.elementFromPoint(p, g), !0);
          E !== m && (m = E, Vu()), Ih(n, d.options, E, u);
        }, 10), bh = p, Lh = g);
      } else {
        if (!this.options.bubbleScroll || to(v, !0) === us()) {
          Vu();
          return;
        }
        Ih(n, this.options, to(v, !1), !1);
      }
    }
  }, Rs(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Vu() {
  Gn.forEach(function(o) {
    clearInterval(o.pid);
  }), Gn = [];
}
function wp() {
  clearInterval(ll);
}
var Ih = Og(function(o, i, n, u) {
  if (i.scroll) {
    var d = (o.touches ? o.touches[0] : o).clientX, p = (o.touches ? o.touches[0] : o).clientY, g = i.scrollSensitivity, v = i.scrollSpeed, m = us(), E = !1, A;
    Bh !== n && (Bh = n, Vu(), al = i.scroll, A = i.scrollFn, al === !0 && (al = to(n, !0)));
    var w = 0, b = al;
    do {
      var N = b, M = Yn(N), G = M.top, ee = M.bottom, Z = M.left, W = M.right, K = M.width, R = M.height, U = void 0, ue = void 0, _e = N.scrollWidth, be = N.scrollHeight, ce = We(N), se = N.scrollLeft, $ = N.scrollTop;
      N === m ? (U = K < _e && (ce.overflowX === "auto" || ce.overflowX === "scroll" || ce.overflowX === "visible"), ue = R < be && (ce.overflowY === "auto" || ce.overflowY === "scroll" || ce.overflowY === "visible")) : (U = K < _e && (ce.overflowX === "auto" || ce.overflowX === "scroll"), ue = R < be && (ce.overflowY === "auto" || ce.overflowY === "scroll"));
      var k = U && (Math.abs(W - d) <= g && se + K < _e) - (Math.abs(Z - d) <= g && !!se), ie = ue && (Math.abs(ee - p) <= g && $ + R < be) - (Math.abs(G - p) <= g && !!$);
      if (!Gn[w])
        for (var Y = 0; Y <= w; Y++)
          Gn[Y] || (Gn[Y] = {});
      (Gn[w].vx != k || Gn[w].vy != ie || Gn[w].el !== N) && (Gn[w].el = N, Gn[w].vx = k, Gn[w].vy = ie, clearInterval(Gn[w].pid), (k != 0 || ie != 0) && (E = !0, Gn[w].pid = setInterval(function() {
        u && this.layer === 0 && Ze.active._onTouchMove(ic);
        var de = Gn[this.layer].vy ? Gn[this.layer].vy * v : 0, le = Gn[this.layer].vx ? Gn[this.layer].vx * v : 0;
        typeof A == "function" && A.call(Ze.dragged.parentNode[_r], le, de, o, ic, Gn[this.layer].el) !== "continue" || bg(Gn[this.layer].el, le, de);
      }.bind({
        layer: w
      }), 24))), w++;
    } while (i.bubbleScroll && b !== m && (b = to(b, !1)));
    Gh = E;
  }
}, 30), xg = function(i) {
  var n = i.originalEvent, u = i.putSortable, d = i.dragEl, p = i.activeSortable, g = i.dispatchSortableEvent, v = i.hideGhostForTarget, m = i.unhideGhostForTarget;
  if (n) {
    var E = u || p;
    v();
    var A = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, w = document.elementFromPoint(A.clientX, A.clientY);
    m(), E && !E.el.contains(w) && (g("spill"), this.onSpill({
      dragEl: d,
      putSortable: u
    }));
  }
};
function nd() {
}
nd.prototype = {
  startIndex: null,
  dragStart: function(i) {
    var n = i.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(i) {
    var n = i.dragEl, u = i.putSortable;
    this.sortable.captureAnimationState(), u && u.captureAnimationState();
    var d = va(this.sortable.el, this.startIndex, this.options);
    d ? this.sortable.el.insertBefore(n, d) : this.sortable.el.appendChild(n), this.sortable.animateAll(), u && u.animateAll();
  },
  drop: xg
};
Rs(nd, {
  pluginName: "revertOnSpill"
});
function id() {
}
id.prototype = {
  onSpill: function(i) {
    var n = i.dragEl, u = i.putSortable, d = u || this.sortable;
    d.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), d.animateAll();
  },
  drop: xg
};
Rs(id, {
  pluginName: "removeOnSpill"
});
Ze.mount(new fw());
Ze.mount(id, nd);
var pw = Object.defineProperty, gw = Object.defineProperties, _w = Object.getOwnPropertyDescriptors, Sp = Object.getOwnPropertySymbols, mw = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable, Ap = (o, i, n) => i in o ? pw(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, no = (o, i) => {
  for (var n in i || (i = {}))
    mw.call(i, n) && Ap(o, n, i[n]);
  if (Sp)
    for (var n of Sp(i))
      vw.call(i, n) && Ap(o, n, i[n]);
  return o;
}, rc = (o, i) => gw(o, _w(i));
function Nh(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function Cp(o, i, n) {
  const u = n === 0 ? o.children[0] : o.children[n - 1].nextSibling;
  o.insertBefore(i, u);
}
function yw() {
  return typeof window < "u" ? window.console : global.console;
}
const Ew = yw();
function Tw(o) {
  const i = /* @__PURE__ */ Object.create(null);
  return function(u) {
    return i[u] || (i[u] = o(u));
  };
}
const ww = /-(\w)/g, Sw = Tw((o) => o.replace(ww, (i, n) => n.toUpperCase())), Fg = ["Start", "Add", "Remove", "Update", "End"], Mg = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Bg = ["Move"], Aw = [Bg, Fg, Mg].flatMap((o) => o).map((o) => `on${o}`), kh = {
  manage: Bg,
  manageAndEmit: Fg,
  emit: Mg
};
function Cw(o) {
  return Aw.indexOf(o) !== -1;
}
const Ow = [
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
function bw(o) {
  return Ow.includes(o);
}
function Lw(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function Gg(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function kg(o) {
  return o.reduce((i, [n, u]) => (i[n] = u, i), {});
}
function Iw({ $attrs: o, componentData: i = {} }) {
  const n = kg(Object.entries(o).filter(([u, d]) => Gg(u)));
  return no(no({}, n), i);
}
function Nw({ $attrs: o, callBackBuilder: i }) {
  const n = kg(Ug(o));
  Object.entries(i).forEach(([d, p]) => {
    kh[d].forEach((g) => {
      n[`on${g}`] = p(g);
    });
  });
  const u = `[data-draggable]${n.draggable || ""}`;
  return rc(no({}, n), {
    draggable: u
  });
}
function Ug(o) {
  return Object.entries(o).filter(([i, n]) => !Gg(i)).map(([i, n]) => [Sw(i), n]).filter(([i, n]) => !Cw(i));
}
const Op = (o) => {
  const i = o.el || Array.isArray(o.children) && o.children[0].el.parentNode;
  return i || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), i || {};
}, Dw = (o, i) => o.__draggable_context = i, bp = (o) => o.__draggable_context;
class Rw {
  constructor({
    nodes: { header: i, default: n, footer: u },
    root: d,
    realList: p
  }) {
    this.defaultNodes = n, this.children = [...i, ...n, ...u], this.externalComponent = d.externalComponent, this.rootTransition = d.transition, this.tag = d.tag, this.realList = p;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(i, n) {
    const { tag: u, children: d, _isRootComponent: p } = this;
    return i(u, n, p ? { default: () => d } : d);
  }
  updated() {
    const { defaultNodes: i, realList: n } = this;
    i.forEach((u, d) => {
      Dw(Op(u), {
        element: n[d],
        index: d
      });
    });
  }
  getUnderlyingVm(i) {
    return bp(i);
  }
  getVmIndexFromDomIndex(i, n) {
    const { defaultNodes: u } = this, { length: d } = u, p = n.children, g = p.item(i);
    if (g === null)
      return d;
    const v = bp(g);
    if (v)
      return v.index;
    if (d === 0)
      return 0;
    const m = Op(u[0]), E = [...p].findIndex((A) => A === m);
    return i < E ? 0 : d;
  }
}
function Pw(o, i) {
  const n = o[i];
  return n ? n() : [];
}
function xw({ $slots: o, realList: i, getKey: n }) {
  const u = i || [], [d, p] = ["header", "footer"].map((m) => Pw(o, m)), { item: g } = o;
  if (!g)
    throw new Error("draggable element must have an item slot");
  const v = u.flatMap((m, E) => g({ element: m, index: E }).map((A) => (A.key = n(m), A.props = rc(no({}, A.props || {}), { "data-draggable": !0 }), A)));
  if (v.length !== u.length)
    throw new Error("Item slot must have only one child");
  return {
    header: d,
    footer: p,
    default: v
  };
}
function Fw(o) {
  const i = Lw(o), n = !bw(o) && !i;
  return {
    transition: i,
    externalComponent: n,
    tag: n ? VE(o) : i ? WE : o
  };
}
function Mw({ $slots: o, tag: i, realList: n, getKey: u }) {
  const d = xw({ $slots: o, realList: n, getKey: u }), p = Fw(i);
  return new Rw({ nodes: d, root: p, realList: n });
}
function zg(o, i) {
  Jt(() => this.$emit(o.toLowerCase(), i));
}
function Vg(o) {
  return (i, n) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](i, n);
  };
}
function Bw(o) {
  const i = Vg.call(this, o);
  return (n, u) => {
    i.call(this, n, u), zg.call(this, o, n);
  };
}
let Dh = null;
const Gw = {
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
}, kw = [
  "update:modelValue",
  "change",
  ...[...kh.manageAndEmit, ...kh.emit].map((o) => o.toLowerCase())
], Uw = nt({
  name: "draggable",
  inheritAttrs: !1,
  props: Gw,
  emits: kw,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: i, tag: n, componentData: u, realList: d, getKey: p } = this, g = Mw({
        $slots: o,
        tag: n,
        realList: d,
        getKey: p
      });
      this.componentStructure = g;
      const v = Iw({ $attrs: i, componentData: u });
      return g.render(Ds, v);
    } catch (o) {
      return this.error = !0, Ds("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Ew.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: i, componentStructure: n } = this;
    n.updated();
    const u = Nw({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (p) => Bw.call(this, p),
        emit: (p) => zg.bind(this, p),
        manage: (p) => Vg.call(this, p)
      }
    }), d = i.nodeType === 1 ? i : i.parentElement;
    this._sortable = new Ze(d, u), this.targetDomElement = d, d.__draggable_component__ = this;
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
        i && Ug(o).forEach(([n, u]) => {
          i.option(n, u);
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
      Jt(() => this.$emit("change", o));
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
      const n = (u) => u.splice(i, 0, u.splice(o, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: o, related: i }) {
      const n = this.getUnderlyingPotencialDraggableComponent(o);
      if (!n)
        return { component: n };
      const u = n.realList, d = { list: u, component: n };
      if (o !== i && u) {
        const p = n.getUnderlyingVm(i) || {};
        return no(no({}, p), d);
      }
      return d;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(o, this.targetDomElement);
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), Dh = o.item;
    },
    onDragAdd(o) {
      const i = o.item._underlying_vm_;
      if (i === void 0)
        return;
      Nh(o.item);
      const n = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(n, 0, i);
      const u = { element: i, newIndex: n };
      this.emitChanges({ added: u });
    },
    onDragRemove(o) {
      if (Cp(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        Nh(o.clone);
        return;
      }
      const { index: i, element: n } = this.context;
      this.spliceList(i, 1);
      const u = { element: n, oldIndex: i };
      this.emitChanges({ removed: u });
    },
    onDragUpdate(o) {
      Nh(o.item), Cp(o.from, o.item, o.oldIndex);
      const i = this.context.index, n = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(i, n);
      const u = { element: this.context.element, oldIndex: i, newIndex: n };
      this.emitChanges({ moved: u });
    },
    computeFutureIndex(o, i) {
      if (!o.element)
        return 0;
      const n = [...i.to.children].filter((g) => g.style.display !== "none"), u = n.indexOf(i.related), d = o.component.getVmIndexFromDomIndex(u);
      return n.indexOf(Dh) !== -1 || !i.willInsertAfter ? d : d + 1;
    },
    onDragMove(o, i) {
      const { move: n, realList: u } = this;
      if (!n || !u)
        return !0;
      const d = this.getRelatedContextFromMoveEvent(o), p = this.computeFutureIndex(d, o), g = rc(no({}, this.context), {
        futureIndex: p
      }), v = rc(no({}, o), {
        relatedContext: d,
        draggedContext: g
      });
      return n(v, i);
    },
    onDragEnd() {
      Dh = null;
    }
  }
}), ui = [];
for (let o = 0; o < 256; ++o)
  ui.push((o + 256).toString(16).slice(1));
function zw(o, i = 0) {
  return (ui[o[i + 0]] + ui[o[i + 1]] + ui[o[i + 2]] + ui[o[i + 3]] + "-" + ui[o[i + 4]] + ui[o[i + 5]] + "-" + ui[o[i + 6]] + ui[o[i + 7]] + "-" + ui[o[i + 8]] + ui[o[i + 9]] + "-" + ui[o[i + 10]] + ui[o[i + 11]] + ui[o[i + 12]] + ui[o[i + 13]] + ui[o[i + 14]] + ui[o[i + 15]]).toLowerCase();
}
const Vw = new Uint8Array(16);
function Ww() {
  return crypto.getRandomValues(Vw);
}
function Yr(o, i, n) {
  return crypto.randomUUID ? crypto.randomUUID() : Zw(o);
}
function Zw(o, i, n) {
  o = o || {};
  const u = o.random ?? o.rng?.() ?? Ww();
  if (u.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return u[6] = u[6] & 15 | 64, u[8] = u[8] & 63 | 128, zw(u);
}
class Wg {
  constructor(i) {
    this.geoJson = {}, this.url = i;
  }
  async fetch() {
    return this.geoJson = await (await fetch(this.url)).json(), this.geoJson;
  }
}
const Hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wg
}, Symbol.toStringTag, { value: "Module" })), Yw = { class: "conditions" }, qw = { class: "conditions__new" }, Kw = ["list"], $w = ["id"], Jw = ["value"], jw = ["list"], Xw = ["id"], Qw = ["value"], e2 = { class: "conditions__end" }, t2 = ["value", "list", "onBlur", "onKeyup"], n2 = ["onClick"], i2 = ["onClick"], r2 = ["value", "list", "onBlur", "onKeyup"], s2 = ["onClick"], o2 = { class: "conditions__end" }, a2 = { key: 0 }, l2 = /* @__PURE__ */ nt({
  __name: "ConditionSettings",
  props: {
    modelValue: {
      default: () => Mo([])
    },
    modelModifiers: {},
    thingProps: {
      default: () => Mo(
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
    const i = mr(o, "modelValue"), n = ge(""), u = ge(""), d = ge(Pr.equals), p = mr(o, "thingProps"), g = [
      {
        text: "==",
        selector: Pr.equals
      },
      {
        text: ">",
        selector: Pr.greaterThen
      },
      {
        text: ">=",
        selector: Pr.greaterThenEquals
      },
      {
        text: "<",
        selector: Pr.lessThen
      },
      {
        text: "<=",
        selector: Pr.lessThenEquals
      },
      {
        text: "!=",
        selector: Pr.notEQuals
      }
    ], v = Vf(), m = Vf(), E = (K) => p.value.find((R) => R.selector === K)?.suggestions ?? [], A = dn(() => E(n.value)), w = (K) => g.find((R) => R.selector === K)?.text ?? String(K), b = ge(void 0), N = (K, R) => b.value === `${K}:${R}`, M = (K, R) => {
      b.value = `${K}:${R}`;
    }, G = () => {
      b.value = void 0;
    }, ee = (K) => {
      K && (p.value.some((R) => R.selector === K) || p.value.push({ text: K, selector: K }));
    }, Z = () => {
      ee(n.value), i.value.push({
        comperator: d.value,
        value: u.value,
        prop: n.value
      }), d.value = Pr.equals, u.value = "", n.value = "";
    }, W = (K, R) => {
      ee(R), K.prop = R, G();
    };
    return (K, R) => (V(), X("table", Yw, [
      ne("thead", null, [
        R[4] || (R[4] = ne("tr", null, [
          ne("th", { class: "conditions__head" }, "Property"),
          ne("th", { class: "conditions__head" }, "Is"),
          ne("th", { class: "conditions__head" }, "Value"),
          ne("th", { class: "conditions__head conditions__head--end" })
        ], -1)),
        ne("tr", qw, [
          ne("td", null, [
            Wu(ne("input", {
              "onUpdate:modelValue": R[0] || (R[0] = (U) => n.value = U),
              list: z(v),
              class: "cell__input",
              placeholder: "Property"
            }, null, 8, Kw), [
              [Zu, n.value]
            ]),
            ne("datalist", { id: z(v) }, [
              (V(!0), X(De, null, Gt(p.value, (U) => (V(), X("option", {
                key: U.selector,
                value: U.selector
              }, wt(U.text), 9, Jw))), 128))
            ], 8, $w)
          ]),
          ne("td", null, [
            he(z(qu), {
              modelValue: d.value,
              "onUpdate:modelValue": R[1] || (R[1] = (U) => d.value = U),
              options: g,
              "label-key": "text",
              "value-key": "selector",
              stacked: ""
            }, null, 8, ["modelValue"])
          ]),
          ne("td", null, [
            Wu(ne("input", {
              "onUpdate:modelValue": R[2] || (R[2] = (U) => u.value = U),
              list: z(m),
              class: "cell__input",
              placeholder: "Value"
            }, null, 8, jw), [
              [Zu, u.value]
            ]),
            ne("datalist", { id: z(m) }, [
              (V(!0), X(De, null, Gt(A.value, (U, ue) => (V(), X("option", {
                key: ue,
                value: U
              }, null, 8, Qw))), 128))
            ], 8, Xw)
          ]),
          ne("td", e2, [
            he(z(Hn), {
              intent: "primary",
              disabled: !n.value || !u.value,
              onClick: Z
            }, {
              default: Ye(() => [...R[3] || (R[3] = [
                er(" Add ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ]),
      ne("tbody", null, [
        (V(!0), X(De, null, Gt(i.value, (U, ue) => (V(), X("tr", { key: ue }, [
          ne("td", null, [
            N(ue, "prop") ? (V(), X("input", {
              key: 0,
              value: U.prop,
              list: z(v),
              class: "cell__input",
              onBlur: (_e) => W(U, _e.target.value),
              onKeyup: Hu((_e) => W(U, _e.target.value), ["enter"])
            }, null, 40, t2)) : (V(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (_e) => M(ue, "prop")
            }, wt(U.prop), 9, n2))
          ]),
          ne("td", null, [
            N(ue, "comperator") ? (V(), ht(z(qu), {
              key: 0,
              "model-value": U.comperator,
              options: g,
              "label-key": "text",
              "value-key": "selector",
              stacked: "",
              "onUpdate:modelValue": (_e) => {
                U.comperator = _e, G();
              }
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (V(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (_e) => M(ue, "comperator")
            }, wt(w(U.comperator)), 9, i2))
          ]),
          ne("td", null, [
            N(ue, "value") ? (V(), X("input", {
              key: 0,
              value: U.value,
              list: z(m),
              class: "cell__input",
              onBlur: (_e) => {
                U.value = _e.target.value, G();
              },
              onKeyup: Hu((_e) => {
                U.value = _e.target.value, G();
              }, ["enter"])
            }, null, 40, r2)) : (V(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (_e) => M(ue, "value")
            }, wt(U.value), 9, s2))
          ]),
          ne("td", o2, [
            he(z(Hn), {
              intent: "quiet",
              title: "Remove condition",
              onClick: (_e) => i.value.splice(ue, 1)
            }, {
              default: Ye(() => [
                he(z(Zt), {
                  name: "delete",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]))), 128)),
        i.value.length === 0 ? (V(), X("tr", a2, [...R[5] || (R[5] = [
          ne("td", {
            class: "conditions__empty",
            colspan: "4"
          }, "Nothing to match on yet.", -1)
        ])])) : Fe("", !0)
      ])
    ]));
  }
}), Uh = /* @__PURE__ */ tr(l2, [["__scopeId", "data-v-79b9b15a"]]), u2 = { class: "pmap_container" }, c2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", h2 = 5, d2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', f2 = /* @__PURE__ */ nt({
  __name: "MapPreviewPoint",
  setup(o) {
    const i = [50.93115286, 11.60392726], n = ge(null);
    return Ht(() => {
      n.value && n.value.leafletObject && n.value.leafletObject.invalidateSize();
    }), (u, d) => (V(), X("div", u2, [
      he(z(qh), {
        id: "map_t",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: h2,
        style: { height: "100%" }
      }, {
        default: Ye(() => [
          he(z(Jh), {
            attribution: d2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: c2
          }),
          nl(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["center"])
    ]));
  }
}), p2 = /* @__PURE__ */ tr(f2, [["__scopeId", "data-v-c72cb17a"]]), g2 = { class: "flex flex-col md6 pa-3" }, _2 = { class: "flex flex-col md6 pa-3" }, m2 = { class: "inner" }, v2 = { class: "inner" }, y2 = ["src"], E2 = {
  key: 1,
  class: "placeholder"
}, T2 = /* @__PURE__ */ nt({
  __name: "PointStyler",
  props: {
    modelValue: {
      default: () => Mo({
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
    ZE((d) => ({
      v4eedf852: i.value.pointPin.color
    }));
    const i = mr(o, "modelValue"), n = [
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
    ], u = [
      { label: "Icon", value: "icon" },
      { label: "Property", value: "prop" },
      { label: "Image", value: "image" },
      { label: "None", value: "none" }
    ];
    return (d, p) => (V(), X(De, null, [
      ne("div", g2, [
        he(z(Vh), {
          modelValue: i.value.point_render_as,
          "onUpdate:modelValue": p[0] || (p[0] = (g) => i.value.point_render_as = g),
          options: u,
          "value-key": "value",
          "label-key": "label",
          label: "render point as",
          inline: ""
        }, null, 8, ["modelValue"]),
        i.value.point_render_as == "icon" ? (V(), ht(z(KE), {
          key: 0,
          modelValue: i.value.point,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => i.value.point = g)
        }, null, 8, ["modelValue"])) : Fe("", !0),
        i.value.point_render_as == "prop" ? (V(), ht(z(qu), {
          key: 1,
          modelValue: i.value.point_prop,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => i.value.point_prop = g),
          options: n,
          label: "DataStream Prop",
          placeholder: "Select an option",
          "label-key": "text",
          "value-key": "selector"
        }, null, 8, ["modelValue"])) : Fe("", !0),
        i.value.point_render_as == "image" ? (V(), X(De, { key: 2 }, [
          he(z(ls), {
            modelValue: i.value.point_image_url,
            "onUpdate:modelValue": p[3] || (p[3] = (g) => i.value.point_image_url = g),
            label: "Image URL",
            placeholder: "https://example.com/image.png"
          }, null, 8, ["modelValue"]),
          he(z(ls), {
            modelValue: i.value.point_image_size,
            "onUpdate:modelValue": p[4] || (p[4] = (g) => i.value.point_image_size = g),
            modelModifiers: { number: !0 },
            type: "number",
            label: "Image Size",
            suffix: "px",
            placeholder: "32"
          }, null, 8, ["modelValue"])
        ], 64)) : Fe("", !0),
        i.value.point_render_as != "none" ? (V(), X(De, { key: 3 }, [
          he(z(Fp), { class: "mb15" }),
          he(z(Ku), {
            modelValue: i.value.pointPin.color,
            "onUpdate:modelValue": p[5] || (p[5] = (g) => i.value.pointPin.color = g),
            class: "pin-color",
            label: "Pin colour"
          }, null, 8, ["modelValue"]),
          he(z($u), {
            modelValue: i.value.pointPin.solid,
            "onUpdate:modelValue": p[6] || (p[6] = (g) => i.value.pointPin.solid = g),
            label: "Solid"
          }, null, 8, ["modelValue"])
        ], 64)) : Fe("", !0)
      ]),
      ne("div", _2, [
        he(p2, Np({ ref: "MapPrev2" }, i.value.point), {
          default: Ye(() => [
            he(z(yl), { "lat-lng": [50.92828047934907, 11.587408017353823] }, {
              default: Ye(() => [
                he(z(vl), { "class-name": "someExtraClass" }, {
                  default: Ye(() => [
                    i.value.point_render_as == "icon" ? (V(), X("div", {
                      key: 0,
                      class: xo(["pin", "icon", { solid: i.value.pointPin.solid }])
                    }, [
                      ne("div", m2, [
                        he(z(Pp), {
                          config: i.value.point,
                          configv: i.value.point,
                          "onUpdate:configv": p[7] || (p[7] = (g) => i.value.point = g)
                        }, null, 8, ["config", "configv"])
                      ])
                    ], 2)) : Fe("", !0),
                    i.value.point_render_as == "prop" ? (V(), X("div", {
                      key: 1,
                      class: xo(["pin", "contain", "marker", { solid: i.value.pointPin.solid }])
                    }, [
                      ne("div", v2, wt(i.value.point_prop), 1)
                    ], 2)) : Fe("", !0),
                    i.value.point_render_as == "image" ? (V(), X("div", {
                      key: 2,
                      class: "image-marker",
                      style: ga({ width: (i.value.point_image_size || 32) + "px", height: (i.value.point_image_size || 32) + "px" })
                    }, [
                      i.value.point_image_url ? (V(), X("img", {
                        key: 0,
                        src: i.value.point_image_url,
                        style: { width: "100%", height: "100%", objectFit: "contain" }
                      }, null, 8, y2)) : (V(), X("div", E2, "No Image"))
                    ], 4)) : Fe("", !0)
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
}), Zg = /* @__PURE__ */ tr(T2, [["__scopeId", "data-v-e554de3e"]]), w2 = "FeatureCollection", S2 = /* @__PURE__ */ JSON.parse('[{"type":"Feature","id":0,"properties":{"ID_0":86,"ISO":"DEU","NAME_ENGLI":"Germany","NAME_ISO":"GERMANY","NAME_FAO":"Germany","NAME_LOCAL":"Deutschland","NAME_OBSOL":null,"NAME_VARIA":"Germany","NAME_NONLA":null,"NAME_FRENC":"Allemagne","NAME_SPANI":"Alemania","NAME_RUSSI":"????????","NAME_ARABI":"???????","NAME_CHINE":"??","WASPARTOF":null,"CONTAINS":"East Germany|West Germany|DDR","SOVEREIGN":"Germany","ISO2":"DE","WWW":null,"FIPS":"GM","ISON":276,"VALIDFR":"Unknown","VALIDTO":"Present","EUmember":1},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.407297932191138,55.04395228653645],[8.442500114441145,55.0159721374514],[8.353609085083235,54.967361450195654],[8.366944313049544,54.90236282348644],[8.429720878601302,54.87763977050787],[8.812039375305233,54.9167366027832],[9.224779129028263,54.85595321655279],[9.282591819763411,54.80223464965832],[9.408679962158317,54.841171264648494],[9.435277938842773,54.788471221923885],[9.613611221313704,54.87597274780296],[9.603055953979776,54.83152770996105],[9.84305572509794,54.756248474121094],[9.955279350281046,54.780139923095646],[10.034722328186263,54.67235946655285],[9.983054161071891,54.701248168945426],[9.963891689870369,54.67303628596345],[10.034166336059798,54.66986083984375],[10.02750015258789,54.55041503906284],[9.840277671813965,54.46736145019537],[10.199167251587141,54.45597076416027],[10.13194561004633,54.311248779296875],[10.228056907653865,54.413471221923885],[10.318612098693961,54.43569564819353],[10.704722404479924,54.304862976074276],[10.928610801696777,54.381805419922216],[11.128055572509766,54.39069366455084],[11.058609962463436,54.35430526733438],[11.093610763550032,54.19791793823248],[10.75416564941412,54.05486297607433],[10.890831947326603,53.955696105956974],[11.179167747497502,54.01569366455084],[11.258610725403116,53.98485946655296],[11.258610725403116,53.93402862548851],[11.335276603698844,53.95847320556646],[11.45472240447998,53.900417327881144],[11.483610153198242,53.968471527099666],[11.378055572509936,53.997360229492244],[11.492501258850325,54.02291488647472],[11.490279197693042,53.968193054199276],[11.62583255767845,54.08958435058588],[11.525277137756348,54.07180404663086],[11.682498931884766,54.15319442749018],[12.087498664856184,54.18319320678711],[12.124721527099894,54.150138854980526],[12.09527778625494,54.18097305297857],[12.339165687561263,54.2979164123538],[12.519721031188965,54.484306335449276],[12.962499618530387,54.437637329101676],[12.68351455577495,54.40644354068151],[12.715277671814022,54.404304504394474],[12.678054809570312,54.37014007568371],[12.786945343017862,54.3962516784668],[12.810278892517147,54.3451385498048],[13.019721984863338,54.43902587890659],[13.093609809875716,54.366806030273665],[13.105833053588867,54.281806945800895],[13.286388397216797,54.235137939453296],[13.346388816833723,54.18041610717819],[13.318054199219034,54.15986251831066],[13.415834426880224,54.17514038085943],[13.382498741150187,54.14236068725586],[13.456945419311523,54.090694427490234],[13.696389198303223,54.17180633544956],[13.806944847107104,54.10319519042969],[13.74416637420677,54.029304504394645],[13.914167404174805,53.92235946655302],[13.824722290039404,53.866249084473],[13.937500953674316,53.90847396850597],[13.90583419799816,53.98986053466797],[13.965278625488452,53.99013900756853],[13.959721565246582,53.93402862548851],[14.042499542236555,53.942081451416016],[14.046944618225268,53.99652862548845],[14.00347855685085,54.0366769060455],[14.221389770507926,53.93013763427729],[14.186329841613997,53.91558074951217],[14.2173366546632,53.865417480469205],[13.806388854980412,53.85819625854492],[14.038612365722884,53.75513839721674],[14.2830562591555,53.73875045776384],[14.215276718139592,53.70264053344738],[14.273162841796875,53.69930648803711],[14.324908256530762,53.61864852905296],[14.302708625793684,53.54261016845703],[14.448929786682186,53.26163864135748],[14.378918647766113,53.204158782958984],[14.345703125000057,53.052917480468864],[14.142452239990291,52.961112976074276],[14.121270179748649,52.84027099609369],[14.639061927795638,52.58003234863287],[14.600604057312069,52.53302383422857],[14.631249427795638,52.499130249023665],[14.528908729553166,52.39641189575218],[14.570899963378906,52.2895622253418],[14.699570655822868,52.24108886718756],[14.669348716736067,52.12155151367199],[14.741278648376522,52.07339096069347],[14.70477771759056,51.94266128540062],[14.586701393127385,51.823604583740234],[14.738728523254622,51.66687011718744],[14.698139190673942,51.55850982666027],[14.933858871460018,51.482269287109375],[14.967818260192928,51.3544158935548],[15.028479576110897,51.30979919433605],[14.930111885070744,50.99140548706072],[14.8050794601441,50.828918457031534],[14.710870742797965,50.826759338379134],[14.611928939819393,50.85478210449219],[14.651672363281364,50.93264007568365],[14.560112953186092,50.92348480224615],[14.595055580139274,50.988510131836165],[14.501680374145508,51.05150604248075],[14.39741039276123,51.00828170776373],[14.29401683807373,51.05416488647461],[14.246868133545036,50.97320175170904],[14.400946617126465,50.94234848022472],[14.372268676757926,50.88858032226568],[13.954609870910872,50.80371093750006],[13.850809097290096,50.71820068359375],[13.548975944519043,50.713214874267635],[13.465190887451229,50.59648895263689],[13.374910354614315,50.643661499023665],[13.326787948608512,50.581813812255916],[13.248618125915641,50.59226989746088],[13.195990562439079,50.500591278076286],[13.0332670211792,50.50854873657232],[12.977046012878645,50.41427230834961],[12.828769683837834,50.45862197875988],[12.705128669738826,50.39775848388672],[12.51611328125,50.40008544921898],[12.364088058471737,50.27642440795904],[12.32758998870844,50.17972946166998],[12.282715797424373,50.18267822265631],[12.194091796874943,50.32287597656256],[12.085860252380428,50.25535202026384],[12.198919296264876,50.19562149047863],[12.19906044006359,50.11182022094732],[12.256030082702637,50.062278747558594],[12.547736167907715,49.92714309692383],[12.472072601318473,49.79027175903349],[12.402890205383244,49.75516128540045],[12.527859687805176,49.68775939941435],[12.588051795959473,49.54399871826166],[12.645830154418945,49.53105926513672],[12.661074638366813,49.43216705322294],[12.78410530090332,49.35190582275402],[13.033589363098258,49.30863952636736],[13.180210113525618,49.144439697265625],[13.403729438781738,49.05178070068382],[13.401620864868221,48.98391342163103],[13.63125991821289,48.95058059692383],[13.835957527160701,48.7750511169433],[13.78705883026123,48.721511840820426],[13.809944152832088,48.590904235840014],[13.721092224121207,48.51679229736334],[13.503158569335938,48.59651184082037],[13.435749053955078,48.564682006835994],[13.410618782043514,48.377738952636776],[13.285719871520996,48.30517196655279],[12.868214607238826,48.20366668701183],[12.753028869628963,48.11729049682623],[13.00114727020275,47.8522300720216],[12.91126728057867,47.73124313354498],[13.043539047241325,47.720989227295206],[13.105588912963867,47.639202117920036],[13.013463973999023,47.46576690673845],[12.799818038940373,47.561462402343864],[12.826677322387695,47.61626052856451],[12.782772064209098,47.675922393799055],[12.605334281921444,47.67924880981457],[12.506064414978141,47.62885284423828],[12.43596267700218,47.70073318481451],[12.258779525756836,47.67621994018549],[12.254279136657772,47.739990234375114],[12.17435169219982,47.698875427246094],[12.2092800140382,47.60120010375982],[11.636343955993766,47.598270416259766],[11.58102035522461,47.51182174682634],[11.437379837036133,47.51325988769548],[11.388031959533805,47.47192382812523],[11.424080848693961,47.44562149047846],[11.341606140136776,47.45182418823248],[11.27390003204357,47.391010284423885],[11.224139213562012,47.391269683837834],[11.246058464050293,47.43478012084961],[10.977520942687931,47.39611053466808],[10.926508903503532,47.478080749511776],[10.862998962402344,47.47803115844738],[10.91859436035162,47.51609420776373],[10.883132934570426,47.53810501098644],[10.772025108337402,47.516143798828125],[10.600060462951888,47.57365036010742],[10.561381340026912,47.53593063354498],[10.432245254516829,47.58555984497076],[10.471569061279524,47.43306350708008],[10.433580398559798,47.378719329833984],[10.170168876648177,47.26990127563522],[10.226869583130338,47.3929176330567],[10.095960617065373,47.3548698425293],[10.090755462646598,47.45659255981451],[9.997338294983138,47.48622512817394],[9.971186637878759,47.55048370361328],[9.87366962432867,47.53071975708008],[9.774218559265364,47.59680175781267],[9.688732147217138,47.543983459472656],[9.044014930725098,47.82368850708008],[9.221139907837028,47.66815185546875],[9.164094924927213,47.65358352661133],[8.99164009094244,47.747985839844034],[8.941365242004451,47.731822967529354],[9.006369590759277,47.69509124755882],[8.891834259033374,47.65522384643566],[8.808216094970987,47.74168014526367],[8.771158218383846,47.71976852416992],[8.79814815521263,47.67990875244152],[8.727890014648608,47.696842193603686],[8.730445861816634,47.766109466552734],[8.56799125671381,47.8143768310548],[8.404397964477653,47.680049896240405],[8.473678588867188,47.64335632324219],[8.607149124145621,47.675994873046875],[8.584686279296875,47.60031127929693],[8.520914077758846,47.63809585571306],[8.458548545837402,47.60595703125017],[8.488503456115836,47.581394195556754],[8.379540443420467,47.570251464843864],[8.202873229980526,47.62615585327154],[8.087834358215446,47.56288528442394],[7.944071769714355,47.549701690673885],[7.820772171020621,47.5946998596192],[7.669493198394889,47.53711700439453],[7.632383823394775,47.5624237060548],[7.670560836792106,47.59326171875006],[7.607770919799862,47.580959320068416],[7.512126922607479,47.696090698242244],[7.62215709686285,47.97365951538109],[7.568590164184684,48.0363388061524],[7.577859401702995,48.121391296386776],[7.745231628417969,48.32982635498047],[7.733546733856315,48.39868545532238],[7.835922718048039,48.63367462158203],[8.087015151977653,48.802013397217024],[8.22887897491455,48.97063064575218],[7.937040328979435,49.05623245239258],[7.635286331176815,49.05416870117199],[7.445586204528809,49.184024810791016],[7.293400287628174,49.115158081054744],[7.098150730133057,49.15433120727545],[7.05802440643356,49.112586975097656],[7.033706188201904,49.18826293945324],[6.924295425415494,49.223075866699276],[6.840444087982178,49.21423339843767],[6.834462642669791,49.15137863159214],[6.737987518310831,49.16456985473633],[6.53541898727417,49.434162139892635],[6.35482120513916,49.46498489379883],[6.363647937774658,49.57404708862322],[6.516485214233398,49.724178314208984],[6.528252124786377,49.808570861816406],[6.312281131744612,49.83549880981457],[6.098370075225944,50.05990982055687],[6.189638137817383,50.189464569091854],[6.170382022857893,50.23625564575207],[6.408339977264632,50.33306884765619],[6.33975791931158,50.37989425659174],[6.374671936035213,50.44594955444336],[6.330028057098446,50.49364471435558],[6.172194004059065,50.55051422119158],[6.278378963470516,50.61639785766596],[6.173087120056209,50.62143325805687],[6.118731975555477,50.708736419677905],[5.963199138641357,50.79505157470703],[6.0738401412965,50.846858978271484],[6.082940101623649,50.921798706054744],[6.015170097351074,50.93315887451172],[6.030001163482893,50.98336410522472],[5.903690814971924,50.978271484375284],[5.872058868408317,51.04341125488281],[5.969543933868522,51.034469604492415],[6.171799182891846,51.15293121337896],[6.144780158996809,51.17371749877941],[6.193139076233138,51.19166183471674],[6.091834068298397,51.175292968750284],[6.078186035156193,51.2447128295899],[6.231968879699764,51.36598205566412],[6.220355987548942,51.50917053222656],[6.090958118438778,51.605220794677734],[6.118769168853703,51.6604576110841],[5.964007854461727,51.74161148071289],[6.004777908325309,51.76816940307623],[5.964649200439453,51.824409484863395],[6.168982028961295,51.84503173828142],[6.107149124145565,51.88898849487299],[6.158889770507812,51.905384063720646],[6.417467117309798,51.82563400268566],[6.402299880981388,51.87480163574219],[6.742709159851131,51.89905166625988],[6.835361003875846,51.99552917480486],[6.698178768157959,52.040119171142805],[6.700688838958968,52.07379150390648],[7.069309234619254,52.23925399780296],[7.029718875884953,52.29431915283209],[7.07911586761486,52.38272476196295],[7.006279945373649,52.469501495361385],[6.950539112091064,52.43696975708002],[6.764862060546875,52.464931488037166],[6.683791160583496,52.55606460571312],[6.768260955810604,52.56516647338867],[6.724298000335807,52.59061050415045],[6.743810176849422,52.64709091186529],[7.051859855651912,52.63584899902344],[7.094276905059871,52.84645080566429],[7.26148796081543,52.997539520263615],[7.226968765258846,53.124462127685604],[7.284560203552189,53.19956970214872],[7.205277919769514,53.23880767822271],[7.249166965484562,53.32986068725586],[6.998610973358154,53.361251831054915],[7.034166812896729,53.53319549560558],[7.13361120223999,53.53236007690424],[7.09027719497675,53.57652664184576],[7.158053874969539,53.627918243408146],[7.316944122314794,53.683471679687614],[8.015831947326944,53.71069335937506],[8.172499656677246,53.554584503173885],[8.155276298523177,53.513748168945426],[8.06472206115734,53.50597381591797],[8.073611259460677,53.46486282348633],[8.252499580383244,53.399028778076115],[8.316389083862418,53.46625137329124],[8.316389083862418,53.5220832824707],[8.230832099914778,53.52041625976574],[8.271943092346419,53.609859466552734],[8.516389846801701,53.55625152587902],[8.556944847106877,53.52569580078131],[8.519721984863338,53.50097274780279],[8.570834159851074,53.51819610595703],[8.483611106872786,53.69430541992193],[8.608056068420467,53.87874984741228],[8.883610725402946,53.82791519165045],[9.09972286224371,53.86291503906256],[8.963610649109114,53.894584655761776],[8.819722175598258,54.02152633666998],[8.98250007629423,54.04652786254911],[8.927499771118164,54.131805419921875],[8.85916709899908,54.12263870239269],[8.807498931884709,54.173194885253906],[8.83583259582548,54.251804351806584],[8.951944351196516,54.31289291381836],[8.846387863159237,54.26291656494169],[8.580278396606559,54.30402755737316],[8.60416603088413,54.357917785644645],[8.685832023620605,54.35708236694347],[8.608610153198185,54.38624954223644],[8.893611907959212,54.41208267211914],[9.02361106872587,54.472637176513786],[8.989167213440396,54.519306182861385],[8.903610229492188,54.46069335937506],[8.806388854980526,54.47041702270508],[8.890276908874682,54.59263992309582],[8.813055992126749,54.597362518311],[8.822500228881836,54.64597320556675],[8.687498092651595,54.72986221313516],[8.590276718139762,54.885139465331974],[8.41638755798374,54.84708404541021],[8.310277938842887,54.874305725097656],[8.279722213745174,54.75180435180687],[8.298054695129508,54.909305572509766],[8.407297932191138,55.04395228653645]],[[12.645990473625632,54.40224791003495],[12.435832977295036,54.378749847412166],[12.363612174987793,54.26597213745117],[12.460276603699072,54.24847412109369],[12.409167289733887,54.27986145019537],[12.645990473625632,54.40224791003495]],[[9.941296802167107,54.63977103947349],[9.933056831359806,54.627639770507926],[9.859076590154903,54.5913954629662],[9.938055038452319,54.62347412109392],[9.941296802167107,54.63977103947349]],[[9.740505208965892,54.53330511971416],[9.7124996185305,54.519584655761946],[9.545277595520133,54.5093040466308],[9.574166297912711,54.475139617920036],[9.624165534973372,54.51152801513672],[9.714722633362271,54.49124908447277],[9.740505208965892,54.53330511971416]]],[[[13.94762775222483,54.063982999902095],[13.910832405090275,54.064304351806754],[13.862501144409407,53.99930572509771],[13.858055114746207,54.04847335815441],[13.7691659927371,54.01902770996128],[13.812499046325684,54.09902954101568],[13.749167442322118,54.159027099609716],[13.803610801696834,54.17847061157232],[13.870834350586051,54.10152816772478],[13.94762775222483,54.063982999902095]]],[[[8.411785232872631,55.04948306636195],[8.417499542236328,55.05652618408209],[8.463055610656681,55.04569625854492],[8.411785232872631,55.04948306636195]]],[[[13.406170966791661,54.596560494420075],[13.3702783584597,54.61458206176752],[13.243055343628384,54.55875015258789],[13.2830562591555,54.64625167846674],[13.160833358764933,54.55902862548828],[13.249724388122615,54.659862518310945],[13.42916679382347,54.68458175659174],[13.37583255767845,54.63513946533203],[13.406170966791661,54.596560494420075]]],[[[13.446298879365024,54.57641239394589],[13.679720878601302,54.56263732910156],[13.569721221924112,54.46180725097662],[13.76694393157959,54.34152603149454],[13.72527885437006,54.27347183227545],[13.646389007568416,54.296527862548885],[13.70416736602806,54.326248168945426],[13.610832214355753,54.31624984741222],[13.68305587768566,54.34930419921881],[13.58083438873291,54.35291671752947],[13.352499008178768,54.26958465576217],[13.41805553436285,54.25485992431646],[13.393610000610408,54.22097396850586],[13.290279388427791,54.25125122070318],[13.335277557373274,54.278194427490234],[13.139166831970158,54.2823600769043],[13.18472290039091,54.30097198486328],[13.114721298217717,54.331806182861555],[13.127499580383471,54.37125015258789],[13.261943817138842,54.38291549682657],[13.149722099304313,54.42902755737305],[13.26805686950695,54.47930526733427],[13.158611297607422,54.504028320312614],[13.143611907959041,54.54680633544922],[13.305277824402083,54.51402664184582],[13.29749870300293,54.55236053466797],[13.368612289428881,54.57930374145502],[13.338055610656681,54.54875183105469],[13.377498626709098,54.55902862548828],[13.413056373596476,54.49375152587885],[13.506387710571403,54.480972290039006],[13.501943588257006,54.548473358154695],[13.446298879365024,54.57641239394589]]],[[[13.184166908264217,54.49430465698282],[13.226943969726733,54.468750000000114],[13.120834350586222,54.44235992431646],[13.184166908264217,54.49430465698282]]],[[[13.125168920038526,54.58240134124839],[13.13638877868675,54.6051406860351],[13.158054351806868,54.57930374145502],[13.125168920038526,54.58240134124839]]],[[[11.069721221924055,54.53470230102539],[11.23416805267334,54.5068054199221],[11.31360912322998,54.402084350586335],[11.00916671752924,54.44124984741211],[11.069721221924055,54.53470230102539]]],[[[8.691945075988713,54.557083129882756],[8.671944618225154,54.49458312988281],[8.589166641235579,54.51180648803711],[8.691945075988713,54.557083129882756]]],[[[8.539723396301383,54.75569534301769],[8.595276832580623,54.71958160400385],[8.56694316864025,54.6798629760745],[8.396944999694881,54.70569610595703],[8.539723396301383,54.75569534301769]]],[[[8.551387786865234,54.57958221435541],[8.573056221008358,54.55875015258789],[8.50916671752941,54.57402801513683],[8.551387786865234,54.57958221435541]]],[[[8.476387977600098,54.47652816772461],[8.52583217620861,54.433471679687614],[8.470277786254883,54.42180633544933],[8.476387977600098,54.47652816772461]]],[[[8.483055114746321,54.58458328247116],[8.501387596130428,54.55819320678711],[8.455277442932186,54.55875015258789],[8.483055114746321,54.58458328247116]]],[[[8.356944084167594,54.71152877807617],[8.395278930664062,54.61208343505899],[8.292498588561955,54.66708374023466],[8.356944084167594,54.71152877807617]]],[[[7.895833015442065,53.79402923584007],[7.968054771423567,53.774860382080305],[7.846387863159464,53.78680419921881],[7.895833015442065,53.79402923584007]]],[[[7.706388950348241,53.77958297729492],[7.805832862854288,53.774581909179744],[7.666944026947249,53.7587509155274],[7.706388950348241,53.77958297729492]]],[[[7.573610782623518,53.757362365722656],[7.627499103546597,53.74847412109381],[7.467502117157153,53.727085113525504],[7.573610782623518,53.757362365722656]]],[[[7.394165992737044,53.73458480834961],[7.429722785949707,53.725139617920206],[7.360278129577864,53.72680664062494],[7.394165992737044,53.73458480834961]]],[[[7.058610916137638,53.68458175659197],[7.095833778381348,53.680694580078125],[6.854722023010595,53.66125106811535],[7.058610916137638,53.68458175659197]]],[[[6.761944770812988,53.61875152587896],[6.811388969421671,53.60263824462885],[6.721387863159407,53.583751678466854],[6.749722003937052,53.55680465698242],[6.630833148956526,53.59791564941406],[6.761944770812988,53.61875152587896]]]]}}]'), A2 = {
  type: w2,
  features: S2
}, C2 = { class: "pmap_container" }, O2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", b2 = 5, L2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', I2 = /* @__PURE__ */ nt({
  __name: "MapPreview",
  props: {
    config: {}
  },
  setup(o) {
    const i = [50.93115286, 11.60392726], n = ge(null), u = o, { config: d } = Ol(u), p = (g) => d.value;
    return ki(() => d, () => {
      n.value.leafletObject?.eachLayer((g) => {
        try {
          g.setStyle(p);
        } catch (v) {
          console.log(v);
        }
      });
    }, { deep: !0 }), (g, v) => (V(), X("div", C2, [
      he(z(qh), {
        id: "map",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: b2,
        style: { height: "100%" }
      }, {
        default: Ye(() => [
          he(z(Jh), {
            attribution: L2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: O2
          }),
          he(z(Bo), {
            geojson: z(A2),
            optionsStyle: p
          }, null, 8, ["geojson", "optionsStyle"])
        ]),
        _: 1
      }, 8, ["center"])
    ]));
  }
}), N2 = /* @__PURE__ */ tr(I2, [["__scopeId", "data-v-77cbf15c"]]), D2 = {
  class: "settings-section",
  "data-section": "Style settings"
}, R2 = { class: "settings-container" }, P2 = /* @__PURE__ */ nt({
  __name: "MapSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue");
    return (n, u) => (V(), X("section", D2, [
      ne("div", R2, [
        he(z($u), {
          modelValue: i.value.stroke,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value.stroke = d),
          label: "stroke"
        }, null, 8, ["modelValue"]),
        he(z(Ku), {
          modelValue: i.value.color,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => i.value.color = d),
          label: "line colour"
        }, null, 8, ["modelValue"]),
        he(z(ls), {
          modelValue: i.value.weight,
          "onUpdate:modelValue": u[2] || (u[2] = (d) => i.value.weight = d),
          type: "number",
          label: "line size",
          suffix: "px"
        }, null, 8, ["modelValue"]),
        he(z(Ju), {
          modelValue: i.value.opacity,
          "onUpdate:modelValue": u[3] || (u[3] = (d) => i.value.opacity = d),
          min: 0,
          max: 1,
          step: 0.01,
          label: "line opacity"
        }, null, 8, ["modelValue"]),
        he(z($u), {
          modelValue: i.value.fill,
          "onUpdate:modelValue": u[4] || (u[4] = (d) => i.value.fill = d),
          label: "fill"
        }, null, 8, ["modelValue"]),
        he(z(Ju), {
          modelValue: i.value.fillOpacity,
          "onUpdate:modelValue": u[5] || (u[5] = (d) => i.value.fillOpacity = d),
          min: 0,
          max: 1,
          step: 0.01,
          label: "fill opacity"
        }, null, 8, ["modelValue"]),
        he(z(Ku), {
          modelValue: i.value.fillColor,
          "onUpdate:modelValue": u[6] || (u[6] = (d) => i.value.fillColor = d),
          label: "fill colour"
        }, null, 8, ["modelValue"]),
        he(z(ls), {
          modelValue: i.value.className,
          "onUpdate:modelValue": u[7] || (u[7] = (d) => i.value.className = d),
          label: "class name"
        }, null, 8, ["modelValue"])
      ])
    ]));
  }
}), x2 = /* @__PURE__ */ tr(P2, [["__scopeId", "data-v-b31840f8"]]), F2 = { class: "flex flex-col md6 pa-3" }, M2 = { class: "flex flex-col md6 pa-3" }, Hg = /* @__PURE__ */ nt({
  __name: "AreaStyler",
  props: {
    modelValue: {
      default: () => Mo({
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
    return (n, u) => (V(), X(De, null, [
      ne("div", F2, [
        he(x2, {
          modelValue: i.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value = d)
        }, null, 8, ["modelValue"])
      ]),
      ne("div", M2, [
        he(N2, {
          ref: "MapPrev",
          config: i.value
        }, null, 8, ["config"])
      ])
    ], 64));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const B2 = () => {
};
function Yg(o, i, n) {
  var u;
  let d;
  Dp(n) ? d = { evaluating: n } : d = n || {};
  const { lazy: p = !1, flush: g = "sync", evaluating: v = void 0, shallow: m = !0, onError: E = (u = globalThis.reportError) !== null && u !== void 0 ? u : B2 } = d, A = Wf(!p), w = m ? Wf(i) : ge(i);
  let b = 0;
  return HE(async (N) => {
    if (!A.value) return;
    b++;
    const M = b;
    let G = !1;
    v && Promise.resolve().then(() => {
      v.value = !0;
    });
    try {
      const ee = await o((Z) => {
        N(() => {
          v && (v.value = !1), G || Z();
        });
      });
      M === b && (w.value = ee);
    } catch (ee) {
      E(ee);
    } finally {
      v && M === b && (v.value = !1), G = !0;
    }
  }, { flush: g }), p ? dn(() => (A.value = !0, w.value)) : w;
}
const G2 = /* @__PURE__ */ nt({
  __name: "PlacementSytler",
  props: {
    modelValue: {
      default: () => Mo({
        placement: Fo.OberservedArea
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue");
    return (n, u) => (V(), X(De, null, [
      ne("div", null, [
        he(z(Vh), {
          modelValue: i.value.placement,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value.placement = d),
          options: [z(Fo).Thing, z(Fo).OberservedArea],
          label: "render within",
          stacked: ""
        }, null, 8, ["modelValue", "options"])
      ]),
      u[1] || (u[1] = ne("div", null, null, -1))
    ], 64));
  }
}), k2 = { class: "auto-update-settings" }, U2 = { class: "refresh-setting" }, z2 = { class: "refresh-info" }, V2 = { class: "info-item" }, W2 = { class: "value" }, Z2 = {
  key: 0,
  class: "info-item"
}, H2 = { class: "value" }, Y2 = /* @__PURE__ */ nt({
  __name: "AutoUpdateSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue");
    let n = null;
    const u = (g) => {
      n && clearTimeout(n), n = setTimeout(() => {
        i.value.ObservationrefreshTime = g;
      }, 300);
    }, d = (g) => g === 0 ? "Never" : `${g}s`, p = (g) => new Date(g).toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return (g, v) => (V(), X("div", k2, [
      v[3] || (v[3] = ne("h3", null, "Auto-update Configuration", -1)),
      ne("div", U2, [
        ne("label", null, "Observation Refresh Time: " + wt(d(i.value.ObservationrefreshTime || 0)), 1),
        he(z(Ju), {
          "model-value": i.value.ObservationrefreshTime || 0,
          "onUpdate:modelValue": u,
          min: 0,
          max: 30,
          step: 1,
          suffix: "s",
          class: "refresh-slider"
        }, null, 8, ["model-value"]),
        v[0] || (v[0] = ne("div", { class: "slider-labels" }, [
          ne("span", null, "Never"),
          ne("span", null, "1s"),
          ne("span", null, "15s"),
          ne("span", null, "30s")
        ], -1))
      ]),
      ne("div", z2, [
        ne("div", V2, [
          v[1] || (v[1] = ne("span", { class: "label" }, "Current Setting:", -1)),
          ne("span", W2, wt(d(i.value.ObservationrefreshTime || 0)), 1)
        ]),
        i.value.lastUpdate ? (V(), X("div", Z2, [
          v[2] || (v[2] = ne("span", { class: "label" }, "Last Update:", -1)),
          ne("span", H2, wt(p(i.value.lastUpdate)), 1)
        ])) : Fe("", !0)
      ])
    ]));
  }
}), q2 = /* @__PURE__ */ tr(Y2, [["__scopeId", "data-v-c7aa1779"]]), K2 = { class: "tree_detail" }, $2 = { class: "tree" }, J2 = { class: "menu" }, j2 = { class: "menuitem" }, X2 = { class: "checked" }, Q2 = ["onClick"], eS = ["onClick"], tS = { class: "icon" }, nS = { class: "marked" }, iS = { class: "text" }, rS = ["onUpdate:modelValue"], sS = ["onClick"], oS = { class: "options" }, aS = {
  key: 0,
  class: "childs"
}, lS = ["onClick"], uS = { class: "icon" }, cS = { class: "marked" }, hS = { class: "text" }, dS = ["onUpdate:modelValue"], fS = ["onClick"], pS = { class: "options" }, gS = {
  key: 0,
  class: "childs"
}, _S = ["onClick"], mS = { class: "icon" }, vS = { class: "marked" }, yS = { class: "text" }, ES = { class: "options" }, TS = { class: "detail" }, wS = {
  key: 0,
  class: "content"
}, SS = { class: "scroller" }, AS = {
  key: 0,
  class: "full"
}, CS = {
  key: 0,
  class: "rowlayout"
}, OS = {
  key: 1,
  class: "full rowlayout"
}, bS = {
  key: 2,
  class: "full"
}, LS = {
  key: 3,
  class: "full"
}, IS = {
  key: 1,
  class: "content center"
}, NS = { class: "prose" }, DS = { style: { margin: "10px 0", "padding-left": "20px" } }, RS = { class: "prose" }, PS = { class: "choices" }, xS = { class: "choice__text" }, FS = { class: "choice__name" }, MS = { class: "choice__what" }, BS = /* @__PURE__ */ nt({
  __name: "RendererModal",
  props: /* @__PURE__ */ zh({
    services: {},
    allLayers: {}
  }, {
    modelValue: {
      default: () => Mo(
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
    const i = mr(o, "modelValue"), n = mr(o, "show"), u = mr(o, "layer"), d = o, { services: p, allLayers: g } = Ol(d);
    ge([]);
    const v = ge(0), m = ge(void 0), E = ge(!1), A = ge(null), w = ge([]), b = ge(!1), N = ge(null), { getAll: M, getById: G } = dl(), ee = (ie) => g?.value ? g.value.filter(
      (Y) => Y.styleIds?.includes(ie)
    ) : [], Z = (ie) => {
      const Y = ee(ie.id);
      Y.length > 0 ? (A.value = ie, w.value = Y, E.value = !0) : W(ie);
    }, W = (ie) => {
      w.value.forEach((de) => {
        const le = de.styleIds?.indexOf(ie.id);
        le !== void 0 && le !== -1 && de.styleIds?.splice(le, 1);
      });
      const Y = i.value.indexOf(ie);
      Y !== -1 && (i.value.splice(Y, 1), m.value?.id === ie.id && (m.value = void 0)), E.value = !1, A.value = null, w.value = [];
    }, K = () => {
      E.value = !1, A.value = null, w.value = [];
    }, R = () => {
      u.value?.type == "OGCSTA" ? i.value.push({
        name: "new Style",
        thing: [
          {
            prop: "name",
            comperator: Pr.equals,
            value: "example"
          }
        ],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new He(), {
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
        id: Yr()
      }) : i.value.push({
        name: "new Style",
        datastream: [
          {
            prop: "name",
            comperator: Pr.equals,
            value: "*"
          }
        ],
        placement: Fo.Thing,
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new He(), {
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
        id: Yr()
      });
    }, U = () => {
      m.value.ds_renderer.push({
        name: "new DS Style",
        datastream: [
          {
            prop: "name",
            comperator: Pr.equals,
            value: "*"
          }
        ],
        placement: Fo.Thing,
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
        id: Yr()
      });
    }, ue = (ie) => {
      N.value = ie, b.value = !0;
    }, _e = (ie) => {
      if (!N.value) return;
      const Y = G(ie), de = {
        component: ie
      };
      Y?.isLayerRenderer ? de.setting = {
        conditions: [],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new He(), {
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
      } : de.setting = {}, N.value.observations || (N.value.observations = []), N.value.observations.push(de), b.value = !1, N.value = null;
    }, be = Yg(async () => {
      const ie = u.value;
      if (!ie) return [];
      if (ie.type == "WFSLayer")
        try {
          const de = await p.value.find((le) => le.id == ie.service)?.service?.getFeatureTypePropDetails(ie.name ?? "");
          return console.log(de), Object.entries(de).map(
            (le) => ({ text: le[0], selector: le[0], suggestions: le[1].uniqueValues.map((Oe) => Oe.value) })
          );
        } catch (Y) {
          return console.log(Y), [];
        }
      else if (ie.type == "GEOJSON" && ie.geoJson)
        try {
          const Y = ie.geoJson;
          if (!Y?.features || Y.features.length === 0)
            return [];
          const de = /* @__PURE__ */ new Map();
          for (const le of Y.features)
            if (le.properties)
              for (const [Oe, Ee] of Object.entries(le.properties))
                de.has(Oe) || de.set(Oe, /* @__PURE__ */ new Set()), de.get(Oe)?.add(Ee);
          return Array.from(de.entries()).map(([le, Oe]) => ({
            text: le,
            selector: le,
            suggestions: Array.from(Oe)
          }));
        } catch (Y) {
          return console.log(Y), [];
        }
      else
        return [];
    }, []);
    ki(n, (ie) => {
      ie && (m.value = void 0);
    }), ki(m, () => {
      v.value = 0;
    });
    const ce = ge(void 0), se = dn(() => {
      const ie = m.value;
      return ie ? ie.component && !ie.datastream ? ["Settings"] : u.value?.type === "OGCSTA" ? ie.thing ? ["Conditions", "Points", "Areas", "Auto-update"] : ["Conditions", "Points", "Areas", "Placement"] : ["Conditions", "Points", "Areas"] : [];
    }), $ = dn(() => se.value.map((ie) => ({ id: ie, label: ie }))), k = dn({
      get: () => se.value[v.value] ?? se.value[0] ?? "",
      set: (ie) => {
        const Y = se.value.indexOf(ie);
        v.value = Y >= 0 ? Y : 0;
      }
    });
    return (ie, Y) => (V(), X(De, null, [
      he(z(ul), {
        modelValue: n.value,
        "onUpdate:modelValue": Y[14] || (Y[14] = (de) => n.value = de),
        size: "lg",
        title: "Styles"
      }, {
        actions: Ye(() => [
          he(z(Hn), {
            onClick: Y[13] || (Y[13] = (de) => n.value = !1)
          }, {
            default: Ye(() => [...Y[24] || (Y[24] = [
              er("Close", -1)
            ])]),
            _: 1
          })
        ]),
        default: Ye(() => [
          ne("div", K2, [
            ne("div", $2, [
              ne("div", J2, [
                ne("div", j2, [
                  ne("div", X2, [
                    he(z(Hn), {
                      intent: "quiet",
                      title: "Add style",
                      onClick: R
                    }, {
                      default: Ye(() => [
                        he(z(Zt), {
                          name: "add",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                he(z(Fp)),
                (V(!0), X(De, null, Gt(i.value, (de) => (V(), X("div", {
                  key: de.id
                }, [
                  ne("div", {
                    class: xo([{ active: de.id == m.value?.id }, "menuitem"]),
                    onClick: (le) => m.value = de
                  }, [
                    ne("div", {
                      class: "checked",
                      onClick: () => {
                        const le = u.value?.styleIds?.indexOf(de.id);
                        le != -1 ? u.value?.styleIds?.splice(le, 1) : u.value?.styleIds?.push(de.id);
                      }
                    }, [
                      he(z(Zt), {
                        name: "check",
                        size: "sm",
                        tone: u.value?.styleIds?.includes(de.id) ? "color-accent" : "color-divider"
                      }, null, 8, ["tone"])
                    ], 8, eS),
                    ne("div", tS, [
                      ne("span", nS, [
                        he(z(Zt), {
                          name: "style",
                          size: "sm"
                        }),
                        Y[18] || (Y[18] = ne("span", { class: "marked__tag" }, "Th", -1))
                      ])
                    ]),
                    ne("div", iS, [
                      ce.value === de.id ? Wu((V(), X("input", {
                        key: 0,
                        "onUpdate:modelValue": (le) => de.name = le,
                        class: "item__input",
                        onBlur: Y[0] || (Y[0] = (le) => ce.value = void 0),
                        onKeyup: Y[1] || (Y[1] = Hu((le) => ce.value = void 0, ["enter"]))
                      }, null, 40, rS)), [
                        [Zu, de.name]
                      ]) : (V(), X("span", {
                        key: 1,
                        onClick: (le) => ce.value = de.id
                      }, wt(de.name), 9, sS))
                    ]),
                    ne("div", oS, [
                      u.value?.type == "OGCSTA" && de?.thing ? (V(), ht(z(Hn), {
                        key: 0,
                        intent: "quiet",
                        title: "Add datastream style",
                        onClick: U
                      }, {
                        default: Ye(() => [
                          he(z(Zt), {
                            name: "add",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      })) : Fe("", !0),
                      he(z(Hn), {
                        intent: "quiet",
                        title: "Delete style",
                        onClick: (le) => Z(de)
                      }, {
                        default: Ye(() => [
                          he(z(Zt), {
                            name: "delete",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ], 10, Q2),
                  de?.thing ? (V(), X("div", aS, [
                    (V(!0), X(De, null, Gt(de?.ds_renderer, (le) => (V(), X("div", {
                      key: le.id,
                      class: xo([{ active: le.id == m.value?.id }, "menuitem"]),
                      onClick: (Oe) => m.value = le
                    }, [
                      Y[20] || (Y[20] = ne("div", null, null, -1)),
                      ne("div", uS, [
                        ne("span", cS, [
                          he(z(Zt), {
                            name: "settings",
                            size: "sm"
                          }),
                          Y[19] || (Y[19] = ne("span", { class: "marked__tag" }, "DS", -1))
                        ])
                      ]),
                      ne("div", hS, [
                        ce.value === le.id ? Wu((V(), X("input", {
                          key: 0,
                          "onUpdate:modelValue": (Oe) => le.name = Oe,
                          class: "item__input",
                          onBlur: Y[2] || (Y[2] = (Oe) => ce.value = void 0),
                          onKeyup: Y[3] || (Y[3] = Hu((Oe) => ce.value = void 0, ["enter"]))
                        }, null, 40, dS)), [
                          [Zu, le.name]
                        ]) : (V(), X("span", {
                          key: 1,
                          onClick: (Oe) => ce.value = le.id
                        }, wt(le.name), 9, fS))
                      ]),
                      ne("div", pS, [
                        he(z(Hn), {
                          intent: "quiet",
                          title: "Add observation",
                          onClick: (Oe) => ue(le)
                        }, {
                          default: Ye(() => [
                            he(z(Zt), {
                              name: "add",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        he(z(Hn), {
                          intent: "quiet",
                          title: "Delete datastream style",
                          onClick: () => {
                            const Oe = de, Ee = Oe.ds_renderer.indexOf(le);
                            Ee !== -1 && (Oe.ds_renderer.splice(Ee, 1), m.value?.id === le.id && (m.value = void 0));
                          }
                        }, {
                          default: Ye(() => [
                            he(z(Zt), {
                              name: "delete",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ], 10, lS))), 128)),
                    (V(!0), X(De, null, Gt(de?.ds_renderer, (le) => (V(), X(De, {
                      key: "obs-parent-" + le.id
                    }, [
                      le.observations && le.observations.length > 0 ? (V(), X("div", gS, [
                        (V(!0), X(De, null, Gt(le.observations, (Oe, Ee) => (V(), X("div", {
                          key: "obs-" + le.id + "-" + Ee,
                          class: xo([{ active: Oe === m.value }, "menuitem"]),
                          onClick: (Pt) => m.value = Oe
                        }, [
                          Y[22] || (Y[22] = ne("div", null, null, -1)),
                          ne("div", mS, [
                            ne("span", vS, [
                              he(z(Zt), {
                                name: "visibility",
                                size: "sm"
                              }),
                              Y[21] || (Y[21] = ne("span", { class: "marked__tag" }, "Obs", -1))
                            ])
                          ]),
                          ne("div", yS, wt(Oe.component || "Observation"), 1),
                          ne("div", ES, [
                            he(z(Hn), {
                              intent: "quiet",
                              title: "Delete observation",
                              onClick: () => {
                                if (!le.observations) return;
                                const Pt = le.observations.indexOf(Oe);
                                Pt !== -1 && (le.observations.splice(Pt, 1), m.value === Oe && (m.value = void 0));
                              }
                            }, {
                              default: Ye(() => [
                                he(z(Zt), {
                                  name: "delete",
                                  size: "sm"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ], 10, _S))), 128))
                      ])) : Fe("", !0)
                    ], 64))), 128))
                  ])) : Fe("", !0)
                ]))), 128))
              ])
            ]),
            ne("div", TS, [
              he(z(QE), {
                modelValue: k.value,
                "onUpdate:modelValue": Y[4] || (Y[4] = (de) => k.value = de),
                tabs: $.value,
                label: "Renderer settings"
              }, null, 8, ["modelValue", "tabs"]),
              m.value ? (V(), X("div", wS, [
                ne("div", SS, [
                  m.value?.component && !m.value?.datastream ? (V(), X("div", AS, [
                    z(G)(m.value.component)?.setupComponent ? (V(), ht(Rh(z(G)(m.value.component)?.setupComponent), {
                      key: 0,
                      modelValue: m.value.setting,
                      "onUpdate:modelValue": Y[5] || (Y[5] = (de) => m.value.setting = de)
                    }, null, 8, ["modelValue"])) : Fe("", !0)
                  ])) : (V(), X(De, { key: 1 }, [
                    v.value == 1 || v.value == 2 ? (V(), X("div", CS, [
                      v.value == 1 ? (V(), ht(Zg, {
                        key: 0,
                        modelValue: m.value.renderer,
                        "onUpdate:modelValue": Y[6] || (Y[6] = (de) => m.value.renderer = de)
                      }, null, 8, ["modelValue"])) : Fe("", !0),
                      v.value == 2 ? (V(), ht(Hg, {
                        key: 1,
                        modelValue: m.value.renderer.area,
                        "onUpdate:modelValue": Y[7] || (Y[7] = (de) => m.value.renderer.area = de)
                      }, null, 8, ["modelValue"])) : Fe("", !0)
                    ])) : Fe("", !0),
                    v.value == 3 && u.value?.type == "OGCSTA" && !m.value.thing ? (V(), X("div", OS, [
                      he(G2, {
                        modelValue: m.value,
                        "onUpdate:modelValue": Y[8] || (Y[8] = (de) => m.value = de)
                      }, null, 8, ["modelValue"])
                    ])) : v.value == 3 && u.value?.type == "OGCSTA" && m.value.thing ? (V(), X("div", bS, [
                      he(q2, {
                        modelValue: m.value,
                        "onUpdate:modelValue": Y[9] || (Y[9] = (de) => m.value = de)
                      }, null, 8, ["modelValue"])
                    ])) : (V(), X("div", LS, [
                      u.value?.type == "OGCSTA" && m.value.thing ? (V(), X(De, { key: 0 }, [
                        v.value == 0 ? (V(), ht(Uh, {
                          key: 0,
                          modelValue: m.value.thing,
                          "onUpdate:modelValue": Y[10] || (Y[10] = (de) => m.value.thing = de)
                        }, null, 8, ["modelValue"])) : Fe("", !0)
                      ], 64)) : (V(), X(De, { key: 1 }, [
                        v.value == 0 ? (V(), ht(Uh, {
                          key: 0,
                          modelValue: m.value.datastream,
                          "onUpdate:modelValue": Y[11] || (Y[11] = (de) => m.value.datastream = de),
                          "thing-props": z(be),
                          "onUpdate:thingProps": Y[12] || (Y[12] = (de) => Dp(be) ? be.value = de : null)
                        }, null, 8, ["modelValue", "thing-props"])) : Fe("", !0)
                      ], 64))
                    ]))
                  ], 64))
                ])
              ])) : (V(), X("div", IS, [
                he(z(Zt), {
                  name: "style",
                  size: "lg",
                  class: "empty__icon"
                }),
                ne("span", null, [
                  ne("span", {
                    class: "underline blue",
                    onClick: R
                  }, "create"),
                  Y[23] || (Y[23] = er(" or select Sytle to edit", -1))
                ])
              ]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      he(z(ul), {
        modelValue: E.value,
        "onUpdate:modelValue": Y[16] || (Y[16] = (de) => E.value = de),
        title: "Delete style",
        size: "sm",
        onCancel: K
      }, {
        actions: Ye(() => [
          he(z(Hn), {
            intent: "quiet",
            onClick: K
          }, {
            default: Ye(() => [...Y[28] || (Y[28] = [
              er("Cancel", -1)
            ])]),
            _: 1
          }),
          he(z(Hn), {
            intent: "danger",
            onClick: Y[15] || (Y[15] = (de) => W(A.value))
          }, {
            default: Ye(() => [...Y[29] || (Y[29] = [
              er("Delete", -1)
            ])]),
            _: 1
          })
        ]),
        default: Ye(() => [
          ne("div", NS, [
            ne("p", null, [
              Y[25] || (Y[25] = ne("strong", null, "Warning:", -1)),
              er(' This style "' + wt(A.value?.name) + '" is used by ' + wt(w.value.length) + " layer(s):", 1)
            ]),
            ne("ul", DS, [
              (V(!0), X(De, null, Gt(w.value, (de, le) => (V(), X("li", { key: le }, wt(de.name || de.title || "Unnamed Layer"), 1))), 128))
            ]),
            Y[26] || (Y[26] = ne("p", null, "If you delete this style, it will be removed from all these layers.", -1)),
            Y[27] || (Y[27] = ne("p", null, [
              ne("strong", null, "Do you want to continue?")
            ], -1))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      he(z(ul), {
        modelValue: b.value,
        "onUpdate:modelValue": Y[17] || (Y[17] = (de) => b.value = de),
        title: "Select observation renderer",
        size: "md"
      }, {
        default: Ye(() => [
          ne("div", RS, [
            Y[30] || (Y[30] = ne("p", null, "Choose which type of renderer to use for observations:", -1)),
            ne("div", PS, [
              (V(!0), X(De, null, Gt(z(M)(), ([de, le]) => (V(), ht(z(Hn), {
                key: de,
                class: "choice",
                onClick: (Oe) => _e(de)
              }, {
                default: Ye(() => [
                  ne("span", xS, [
                    ne("span", FS, wt(le.name), 1),
                    ne("span", MS, wt(le.description), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["onClick"]))), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
}), GS = /* @__PURE__ */ tr(BS, [["__scopeId", "data-v-ec924328"]]), kS = { class: "settings-container" }, US = { key: 0 }, zS = { key: 1 }, VS = { class: "note" }, WS = { class: "note note--body" }, ZS = {
  class: "settings-section",
  "data-section": "Layers"
}, HS = {
  key: 0,
  class: "empty"
}, YS = { class: "list-group-item" }, qS = { class: "row dragIcon" }, KS = {
  key: 2,
  class: "failed"
}, $S = { class: "row nhidden options" }, JS = ["id"], jS = { class: "slider__track" }, XS = { key: 0 }, QS = {
  class: "settings-section bottomframe",
  "data-section": "Services"
}, eA = { class: "section__head" }, tA = {
  key: 0,
  class: "empty"
}, nA = {
  key: 1,
  class: "tree"
}, iA = { class: "tree__row" }, rA = { key: 2 }, sA = { key: 3 }, oA = {
  key: 0,
  class: "tree__layers"
}, aA = ["onClick"], lA = {
  class: "settings-section bottomframe",
  "data-section": "Map"
}, uA = { class: "section__head" }, cA = { class: "settings-container" }, hA = /* @__PURE__ */ nt({
  __name: "MapsWidgetSettings",
  props: /* @__PURE__ */ zh({
    dataSources: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    YE();
    const i = o, n = mr(o, "modelValue"), u = ge(!1), d = ge(!1), p = ge(!1), g = ge(""), v = Tg(), m = ge(!1), E = ge([]);
    ki(E, (se) => {
      kn("Selected nodes changed:", se);
    });
    const A = dn(() => ({
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), w = ge(""), b = async () => {
      console.log("addService called with URL:", w.value), d.value = !0;
      let se = null, $ = null, k = !1;
      try {
        console.log("Trying WMS...");
        const ie = await v.createServiceWMS(w.value);
        console.log("WMS result:", ie), ie && (n.value.services.push({
          service: ie,
          url: w.value,
          type: "WMS",
          id: Yr()
        }), k = !0);
      } catch (ie) {
        console.log("WMS error:", ie), se = ie;
      }
      try {
        console.log("Trying WFS...");
        const ie = await v.createServiceWFS(w.value);
        console.log("WFS result:", ie), ie && (n.value.services.push({
          service: ie,
          url: w.value,
          type: "WFS",
          id: Yr()
        }), k = !0);
      } catch (ie) {
        console.log("WFS error:", ie), $ = ie;
      }
      if (k)
        u.value = !1, w.value = "";
      else {
        const ie = se || $;
        g.value = ie?.message || "Failed to load service. The URL is not a valid WMS or WFS service.", p.value = !0;
      }
      d.value = !1;
    }, N = (se, $) => {
      const k = [];
      return se && se.forEach((ie) => {
        k.push({
          id: Yr(),
          opacity: 1,
          service: $,
          type: "WMSLayer",
          name: ie.name,
          title: ie.title,
          attribution: ie.attribution,
          childs: N(ie.children, $)
        });
      }), k;
    }, M = ge(/* @__PURE__ */ new Map()), G = Yg(async () => {
      kn("Computing services async");
      const se = [];
      for (let k of n.value.services ?? []) {
        if (kn("Service:", k), !!k.reconstructionFailed) {
          kn("Service failed reconstruction:", k.url), se.push({
            service: { _info: { title: `${k.url} (failed)`, name: k.url } },
            type: k.type,
            level: 0,
            childs: [],
            failed: !0
          });
          continue;
        }
        if (k.type == "WFS")
          kn("Processing WFS service"), k.service && typeof k.service.getFeatureTypes == "function" ? se.push({
            service: k.service,
            type: "WFS",
            level: 0,
            childs: k.service.getFeatureTypes().map(
              (Y) => ({
                id: Yr(),
                opacity: 1,
                service: k.id,
                wfs_service: new Wg(k.service.getFeatureUrl(Y.name, { outputCrs: "EPSG:4326", asJson: !0, maxFeatures: 100 })),
                geoJson: {},
                type: "WFSLayer",
                name: Y.name,
                title: Y.title,
                attribution: ""
              })
            )
          }) : kn("WFS service missing getFeatureTypes method");
        else if (kn("Processing WMS service"), console.log("[MapsWidgetSettings] WMS service object:", k), console.log("[MapsWidgetSettings] service.service:", k.service), console.log("[MapsWidgetSettings] service.service._info:", k.service?._info), console.log("[MapsWidgetSettings] getLayers type:", typeof k.service?.getLayers), k.service && typeof k.service.getLayers == "function") {
          const Y = k.service.getLayers();
          console.log("[MapsWidgetSettings] WMS layers:", Y), se.push({
            service: k.service,
            type: "WMS",
            childs: N(Y, k.service),
            level: 0
          }), kn("WMS service added to tree"), console.log("[MapsWidgetSettings] ret after adding WMS:", JSON.parse(JSON.stringify(se)));
        } else
          kn("WMS service missing getLayers method");
      }
      const $ = [n.value.datasourceId, ...n.value.datasourceIds ?? []].filter(Boolean);
      for (const k of $) {
        if (!k) continue;
        const ie = Tt(Ls);
        try {
          const Y = ie.getDatasource(k);
          Dr("Datasource type:", ie.getDatasourceType(k));
          const de = ie.getDatasourceType(k);
          if (!M.value.has(k)) {
            let Oe;
            de == "OGC Composer" ? Oe = {
              id: Yr(),
              opacity: 1,
              service: Y,
              geoJson: {},
              type: "GEOJSON",
              name: "GEOJSON",
              title: "GEOJSON",
              attribution: "",
              datasourceId: k
            } : de == "valhalla" ? Oe = {
              id: Yr(),
              opacity: 1,
              service: Y,
              geoJson: {},
              type: "ROUTE",
              name: "Route",
              title: "Valhalla Route",
              attribution: "",
              datasourceId: k
            } : de == "rest" ? Oe = {
              id: Yr(),
              opacity: 1,
              service: Y,
              geoJson: {},
              type: "REST-GEOJSON",
              name: "REST-GEOJSON",
              title: "REST GeoJSON",
              attribution: "",
              datasourceId: k
            } : Oe = {
              id: Yr(),
              opacity: 1,
              service: Y,
              geoJson: {},
              type: "OGCSTA",
              name: "OGCSTA",
              title: "OGCSTA",
              attribution: "",
              datasourceId: k
            }, M.value.set(k, Oe);
          }
          const le = M.value.get(k);
          de == "OGC Composer" ? se.push({
            service: { _info: { title: k + "[Composer]", name: k } },
            type: "GEOJSON",
            level: 0,
            childs: [le]
          }) : de == "valhalla" ? se.push({
            service: { _info: { title: k + "[Valhalla Route]", name: k } },
            type: "ROUTE",
            level: 0,
            childs: [le]
          }) : de == "rest" ? se.push({
            service: { _info: { title: k + "[REST]", name: k } },
            type: "REST-GEOJSON",
            level: 0,
            childs: [le]
          }) : se.push({
            service: { _info: { title: k + "[OGCSTA]", name: k } },
            type: "OGCSTA",
            childs: [le],
            level: 0
          });
        } catch {
          Dr("Service not supported for datasource:", k);
        }
      }
      return console.log("[MapsWidgetSettings] Final services array:", se), console.log("[MapsWidgetSettings] Final services length:", se.length), se;
    });
    ge(0.5);
    const ee = ge(!1), Z = async (se) => {
      const $ = { ...se, checked: !0, styleIds: [] };
      if ($.type == "WFSLayer") {
        const k = await $.wfs_service.fetch();
        kn("WFS data fetched:", k);
      }
      n.value.layers.push($);
    }, W = (se) => {
      const $ = n.value.layers.indexOf(se);
      $ > -1 && n.value.layers.splice($, 1);
    }, K = ge(void 0), R = dn(() => K.value?.type == "OGCSTA" ? n.value.OGCSstyles : n.value.styles), U = ge("wms_wfs"), ue = ge(""), _e = dn(() => i.dataSources ? i.dataSources.filter((se) => se.type === "ogcsta" || se.type === "OGC Composer" || se.type === "rest" || se.type === "valhalla").map((se) => ({
      text: `${se.name} (${se.type})`,
      value: se.uid
    })) : []), be = () => {
      ue.value && !n.value.datasourceIds.includes(ue.value) && (n.value.datasourceIds.push(ue.value), ue.value = "", u.value = !1);
    }, ce = (se) => {
      const $ = n.value.datasourceIds.indexOf(se);
      $ > -1 && (n.value.datasourceIds.splice($, 1), M.value.delete(se));
    };
    return (se, $) => (V(), X(De, null, [
      he(z(ul), {
        modelValue: u.value,
        "onUpdate:modelValue": $[6] || ($[6] = (k) => u.value = k),
        size: "sm",
        title: "Add service"
      }, {
        actions: Ye(() => [
          he(z(Hn), {
            intent: "quiet",
            onClick: $[4] || ($[4] = (k) => u.value = !1)
          }, {
            default: Ye(() => [...$[20] || ($[20] = [
              er("Cancel", -1)
            ])]),
            _: 1
          }),
          he(z(Hn), {
            intent: "primary",
            onClick: $[5] || ($[5] = (k) => U.value === "wms_wfs" ? b() : be())
          }, {
            default: Ye(() => [
              er(wt(U.value === "wms_wfs" ? "Add" : "Add datasource"), 1)
            ]),
            _: 1
          })
        ]),
        default: Ye(() => [
          ne("div", kS, [
            he(z(Vh), {
              modelValue: U.value,
              "onUpdate:modelValue": $[0] || ($[0] = (k) => U.value = k),
              options: [
                { value: "wms_wfs", label: "WMS/WFS service" },
                { value: "datasource", label: "Datasource" }
              ],
              "value-key": "value",
              "label-key": "label",
              stacked: ""
            }, null, 8, ["modelValue"]),
            U.value === "wms_wfs" ? (V(), X("div", US, [
              he(z(ls), {
                modelValue: w.value,
                "onUpdate:modelValue": $[1] || ($[1] = (k) => w.value = k),
                label: "Service URL",
                placeholder: "https://[serviceurl]"
              }, null, 8, ["modelValue"])
            ])) : (V(), X("div", zS, [
              _e.value.length > 0 ? (V(), ht(z(qu), {
                key: 0,
                modelValue: ue.value,
                "onUpdate:modelValue": $[2] || ($[2] = (k) => ue.value = k),
                options: _e.value,
                label: "Select datasource",
                placeholder: "Choose a datasource",
                "label-key": "text",
                "value-key": "value"
              }, null, 8, ["modelValue", "options"])) : (V(), ht(z(ls), {
                key: 1,
                modelValue: ue.value,
                "onUpdate:modelValue": $[3] || ($[3] = (k) => ue.value = k),
                placeholder: "Enter datasource ID",
                label: "Datasource ID"
              }, null, 8, ["modelValue"])),
              ne("p", VS, [
                $[19] || ($[19] = er(" Primary datasource: ", -1)),
                ne("strong", null, wt(n.value.datasourceId), 1)
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      he(z(ul), {
        modelValue: p.value,
        "onUpdate:modelValue": $[8] || ($[8] = (k) => p.value = k),
        size: "sm"
      }, {
        header: Ye(() => [
          he(z(Zt), {
            name: "error",
            size: "lg",
            tone: "color-err"
          }),
          $[21] || ($[21] = ne("h2", { class: "dialog__title" }, "Service error", -1))
        ]),
        actions: Ye(() => [
          he(z(Hn), {
            onClick: $[7] || ($[7] = (k) => p.value = !1)
          }, {
            default: Ye(() => [...$[22] || ($[22] = [
              er("OK", -1)
            ])]),
            _: 1
          })
        ]),
        default: Ye(() => [
          ne("p", WS, wt(g.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      he(GS, {
        modelValue: R.value,
        "onUpdate:modelValue": $[9] || ($[9] = (k) => R.value = k),
        layer: K.value,
        "onUpdate:layer": $[10] || ($[10] = (k) => K.value = k),
        show: ee.value,
        "onUpdate:show": $[11] || ($[11] = (k) => ee.value = k),
        services: n.value.services,
        "all-layers": n.value.layers
      }, null, 8, ["modelValue", "layer", "show", "services", "all-layers"]),
      ne("section", ZS, [
        n.value.layers?.length ? (V(), ht(z(Uw), Np({
          key: 1,
          modelValue: n.value.layers,
          "onUpdate:modelValue": $[12] || ($[12] = (k) => n.value.layers = k),
          animation: 150,
          "component-data": {
            tag: "ul",
            type: "transition-group",
            name: m.value ? null : "flip-list"
          },
          class: "list-group",
          "item-key": "id"
        }, A.value, {
          onEnd: $[13] || ($[13] = (k) => m.value = !1),
          onStart: $[14] || ($[14] = (k) => m.value = !0)
        }), {
          item: Ye(({ element: k }) => [
            ne("li", YS, [
              ne("div", qS, [
                k.reconstructionFailed ? (V(), ht(z(Zt), {
                  key: 0,
                  name: "error",
                  tone: "color-err"
                })) : (V(), ht(z(Zt), {
                  key: 1,
                  name: k.checked ? "layers" : "layers_clear",
                  title: k.checked ? "Hide layer" : "Show layer",
                  onClick: (ie) => k.checked = !k.checked
                }, null, 8, ["name", "title", "onClick"])),
                er(" " + wt(k.title) + " ", 1),
                k.reconstructionFailed ? (V(), X("span", KS, "(failed)")) : Fe("", !0)
              ]),
              ne("div", $S, [
                he(z(Zt), { name: "opacity" }),
                ne("div", {
                  id: k.id,
                  class: "slider nhidden sliderPopOver"
                }, [
                  ne("div", jS, [
                    he(z(Ju), {
                      modelValue: k.opacity,
                      "onUpdate:modelValue": (ie) => k.opacity = ie,
                      min: 0,
                      max: 1,
                      step: 0.01
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ], 8, JS),
                k.type == "WFSLayer" || k.type == "OGCSTA" || k.type == "GEOJSON" || k.type == "REST-GEOJSON" ? (V(), X("div", XS, [
                  he(z(Hn), {
                    intent: "quiet",
                    title: "Styles",
                    onClick: () => {
                      K.value = k, ee.value = !0;
                    }
                  }, {
                    default: Ye(() => [
                      he(z(Zt), {
                        name: "settings",
                        size: "sm"
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])) : Fe("", !0),
                he(z(Hn), {
                  intent: "danger",
                  title: "Remove layer",
                  onClick: Zf((ie) => W(k), ["stop"])
                }, {
                  default: Ye(() => [
                    he(z(Zt), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ])
          ]),
          _: 1
        }, 16, ["modelValue", "component-data"])) : (V(), X("span", HS, " No Layers here "))
      ]),
      ne("section", QS, [
        ne("div", eA, [
          he(z(Zt), {
            name: "cable",
            size: "sm"
          }),
          $[23] || ($[23] = ne("span", { class: "section__title" }, "Services", -1)),
          he(z(Hn), {
            intent: "quiet",
            title: "Add service",
            busy: d.value,
            onClick: $[15] || ($[15] = (k) => u.value = !0)
          }, {
            default: Ye(() => [
              he(z(Zt), {
                name: "add_circle",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["busy"])
        ]),
        z(G) && z(G).length == 0 ? (V(), X("span", tA, " No Services here ")) : (V(), X("ul", nA, [
          (V(!0), X(De, null, Gt(z(G), (k) => (V(), X("li", {
            key: k.id,
            class: "tree__service"
          }, [
            ne("div", iA, [
              k.failed ? (V(), ht(z(Zt), {
                key: 0,
                name: "error",
                tone: "color-err"
              })) : (V(), ht(z(Zt), {
                key: 1,
                name: "cable"
              })),
              k.service._info.title ? (V(), X("b", rA, wt(k.service._info.title), 1)) : (V(), X("b", sA, wt(k.service._info.name), 1)),
              (k.type === "OGCSTA" || k.type === "GEOJSON" || k.type === "REST-GEOJSON") && n.value.datasourceIds?.includes(k.service._info.name) ? (V(), ht(z(Hn), {
                key: 4,
                intent: "quiet",
                title: "Remove datasource",
                onClick: Zf((ie) => ce(k.service._info.name), ["stop"])
              }, {
                default: Ye(() => [
                  he(z(Zt), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])) : Fe("", !0)
            ]),
            k.childs && k.childs.length ? (V(), X("ul", oA, [
              (V(!0), X(De, null, Gt(k.childs, (ie) => (V(), X("li", {
                key: ie.id ?? ie.title,
                class: "tree__row"
              }, [
                ne("span", {
                  class: "tree__add",
                  onClick: () => Z(ie)
                }, [
                  he(z(Zt), {
                    name: "layers",
                    class: "nsee"
                  }),
                  he(z(Zt), {
                    name: "add",
                    class: "nhidden"
                  }),
                  er(" " + wt(ie.title), 1)
                ], 8, aA)
              ]))), 128))
            ])) : Fe("", !0)
          ]))), 128))
        ]))
      ]),
      ne("section", lA, [
        ne("div", uA, [
          he(z(Zt), {
            name: "map",
            size: "sm"
          }),
          $[24] || ($[24] = ne("span", { class: "section__title" }, "Map", -1))
        ]),
        ne("div", cA, [
          he(z(ls), {
            modelValue: n.value.baseMapUrl,
            "onUpdate:modelValue": $[16] || ($[16] = (k) => n.value.baseMapUrl = k),
            label: "Base map URL",
            placeholder: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            hint: "Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates."
          }, null, 8, ["modelValue"]),
          he(z($u), {
            modelValue: n.value.fixed,
            "onUpdate:modelValue": $[17] || ($[17] = (k) => n.value.fixed = k),
            label: "Map fixed"
          }, null, 8, ["modelValue"]),
          he(z(Ku), {
            modelValue: n.value.selectionHighlightColor,
            "onUpdate:modelValue": $[18] || ($[18] = (k) => n.value.selectionHighlightColor = k),
            label: "Selection highlight colour",
            hint: "Colour used to highlight selected Things on the map."
          }, null, 8, ["modelValue"])
        ])
      ])
    ], 64));
  }
}), Lp = /* @__PURE__ */ tr(hA, [["__scopeId", "data-v-ef38e5fc"]]), dA = {
  key: 0,
  class: "datapoint tlc"
}, fA = /* @__PURE__ */ nt({
  __name: "TLCDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 45 }
  },
  setup(o) {
    const i = o, { config: n, data: u, markerSize: d } = Ol(i);
    return (p, g) => (V(), X("div", {
      class: "datapoint-wrapper",
      style: ga({ width: (z(d) || 45) + "px", height: (z(d) || 45) + "px" })
    }, [
      z(u) ? (V(), X("div", dA, wt(z(u)), 1)) : Fe("", !0)
    ], 4));
  }
}), pA = /* @__PURE__ */ tr(fA, [["__scopeId", "data-v-2eb55b7f"]]), gA = {};
function _A(o, i) {
  return " empty ";
}
const mA = /* @__PURE__ */ tr(gA, [["render", _A], ["__scopeId", "data-v-ca2b9f21"]]);
class vA {
  constructor() {
    this.component = pA, this.setupComponent = mA, this.description = "renders a Trafic Light DataPoint", this.name = "Traffic Light Data Point Renderer", this.qualifiedName = "tlc", this.namespace = "tlc", this.example = " 🟢⚪⚪";
  }
}
const yA = {
  key: 0,
  class: "datapoint"
}, EA = {
  key: 1,
  class: "datapoint"
}, TA = /* @__PURE__ */ nt({
  __name: "ValueUnitDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(o) {
    const i = o, { config: n, data: u, markerSize: d } = Ol(i);
    return n.value && !n.value.unit && (n.value.unit = ""), n.value && !n.value.prefix && (n.value.prefix = ""), n.value && !n.value.suffix && (n.value.suffix = ""), (p, g) => (V(), X("div", {
      class: "datapoint-wrapper",
      style: ga({ width: (z(d) || 0) + "px", height: (z(d) || 0) + "px" })
    }, [
      z(u) ? (V(), X("div", yA, wt(z(n).prefix) + wt(z(u)) + " " + wt(z(n).unit) + " " + wt(z(n).suffix), 1)) : (V(), X("div", EA, wt(z(n).prefix) + " -- " + wt(z(n).unit) + " " + wt(z(n).suffix), 1))
    ], 4));
  }
}), wA = /* @__PURE__ */ tr(TA, [["__scopeId", "data-v-a78b518d"]]), SA = {
  class: "settings-section",
  "data-section": "Style settings"
}, AA = { class: "settings-container" }, CA = /* @__PURE__ */ nt({
  __name: "ValueUnitDataLabelRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue");
    return (n, u) => (V(), X("section", SA, [
      ne("div", AA, [
        he(z(ls), {
          modelValue: i.value.unit,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => i.value.unit = d),
          label: "unit"
        }, null, 8, ["modelValue"]),
        he(z(ls), {
          modelValue: i.value.prefix,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => i.value.prefix = d),
          label: "Prefix"
        }, null, 8, ["modelValue"]),
        he(z(ls), {
          modelValue: i.value.suffix,
          "onUpdate:modelValue": u[2] || (u[2] = (d) => i.value.suffix = d),
          label: "suffix"
        }, null, 8, ["modelValue"])
      ])
    ]));
  }
}), OA = /* @__PURE__ */ tr(CA, [["__scopeId", "data-v-98e6b38b"]]);
class bA {
  constructor() {
    this.component = wA, this.setupComponent = OA, this.description = "Renders a value and unit", this.name = "Value and Unit Data Point Renderer", this.namespace = "general", this.qualifiedName = "ValueUnitDataPointRenderer", this.example = " 15";
  }
}
const LA = [
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
    payloadType: Ke
  },
  {
    name: "Datastream Clicked",
    type: "click_on_datastream",
    description: "Triggered when a Datastream is clicked on the map",
    payloadType: Ve
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
    payloadType: $t
  },
  {
    name: "Thing Hovered",
    type: "hover_on_thing",
    description: "Triggered when hovering over a Thing marker on the map",
    payloadType: Ke
  },
  {
    name: "Datastream Hovered",
    type: "hover_on_datastream",
    description: "Triggered when hovering over a Datastream marker on the map",
    payloadType: Ve
  }
], IA = `<?xml version="1.0" encoding="UTF-8"?>
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
var NA = Object.defineProperty, DA = Object.getOwnPropertyDescriptor, rd = (o, i, n, u) => {
  for (var d = u > 1 ? void 0 : u ? DA(i, n) : i, p = o.length - 1, g; p >= 0; p--)
    (g = o[p]) && (d = (u ? g(i, n, d) : g(d)) || d);
  return u && d && NA(i, n, d), d;
}, Ip = (o, i) => (n, u) => i(n, u, o);
const Po = "MapWidget";
let sc = class {
  constructor(o, i) {
    this.events = o, this.actions = i, this.type = Po, this.component = fp, this.settingsComponent = Lp, this.supportedDSTypes = ["ogcsta", "OGC Composer", "rest", "valhalla"], this.icon = n1, this.name = "Map";
  }
  register() {
    dl().registerDataPointRenderer(new vA()), dl().registerDataPointRenderer(new bA()), this.events.registerWidget(Po, LA), this.actions.registerActionsFromEcoreString(Po, IA, "widget", "model.ecore").catch(() => {
      this.actions.registerWidgetType(Po, wg, "widget");
    }), UE().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.map",
      {
        MapsWidget: fp,
        MapsWidgetSettings: Lp,
        useDataPointRegistry: dl,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker: wl,
        ConditionSettings: Uh,
        PointStyler: Zg,
        AreaStyler: Hg
      },
      "0.0.1-next.1",
      "ui.vue.widget.map"
    );
  }
  unregister() {
    this.events.unregisterWidget(Po), this.actions.unregisterWidgetType(Po);
  }
};
rd([
  BE()
], sc.prototype, "register", 1);
rd([
  GE()
], sc.prototype, "unregister", 1);
sc = rd([
  kE({
    service: [e1],
    properties: { "widget.type": Po }
  }),
  Ip(0, zf(FE)),
  Ip(1, zf(ME))
], sc);
export {
  Hg as AreaStyler,
  Uh as ConditionSettings,
  wl as MapMarker,
  sc as MapWidgetProvider,
  fp as MapsWidget,
  Lp as MapsWidgetSettings,
  Zg as PointStyler,
  dl as useDataPointRegistry
};
