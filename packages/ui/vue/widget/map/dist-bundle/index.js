(function(){var i="ui.vue.widget.map",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.pin{&[data-v-dc572ab0]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-dc572ab0]{border-radius:50%}&.solid{.inner[data-v-dc572ab0]{background:transparent}}&.contain{&[data-v-dc572ab0]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-dc572ab0]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.observation-slot[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:0;left:0}&.marker{&[data-v-dc572ab0]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-dc572ab0]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.image-marker[data-v-dc572ab0]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.text-container[data-v-0a207de4]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.pin{&[data-v-0a207de4]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}&.round[data-v-0a207de4]{border-radius:50%}&.contain{&[data-v-0a207de4]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-0a207de4]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-0a207de4]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}&.marker{&[data-v-0a207de4]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-0a207de4]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.component[data-v-0a207de4]{overflow:hidden}.cmap_container[data-v-0a207de4]{width:100%;height:100%;position:relative}.image-marker[data-v-0a207de4]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.row{align-items:flex-start;display:flex;flex:1 1 auto;flex-wrap:wrap;min-width:0;flex-direction:row}.table-inline__cell{padding:0}#proptableConditions{.va-data-table__table-td{padding:0;margin:7px 0}}.pmap_container[data-v-c72cb17a]{width:100%;min-height:250px}.pin{&[data-v-e554de3e]{width:45px;height:45px;border-radius:50% 50% 50% 0;background:var(--v4eedf852);transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-e554de3e]{border-radius:50%}&.solid{.inner[data-v-e554de3e]{background:transparent}}&.contain{&[data-v-e554de3e]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-e554de3e]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}&.marker{&[data-v-e554de3e]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;background:var(--v4eedf852);transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-e554de3e]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.flex[data-v-e554de3e]{display:flex}.image-marker[data-v-e554de3e]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.placeholder[data-v-e554de3e]{background:#ccc;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1px dashed #999}.pmap_container[data-v-77cbf15c]{width:100%;height:250px}.settings-container[data-v-b31840f8]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-b31840f8]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-b31840f8]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-b31840f8]:hover{transform:scale(1.1)}.active-icon[data-v-b31840f8]{border:2px solid rgb(0,121,0)}.slider[data-v-b31840f8]{padding:0 10px}.auto-update-settings[data-v-c7aa1779]{padding:1rem;display:flex;flex-direction:column;gap:1.5rem}.auto-update-settings h3[data-v-c7aa1779]{margin:0;color:var(--color-fg);font-size:1.1rem;font-weight:600}.refresh-setting[data-v-c7aa1779]{display:flex;flex-direction:column;gap:1rem}.refresh-setting label[data-v-c7aa1779]{font-weight:500;color:var(--color-fg);font-size:.9rem}.refresh-slider[data-v-c7aa1779]{margin:.5rem 0}.slider-labels[data-v-c7aa1779]{display:flex;justify-content:space-between;font-size:.8rem;color:var(--color-dim);margin-top:.5rem}.refresh-info[data-v-c7aa1779]{background:var(--color-raised);border:1px solid var(--color-divider);border-radius:6px;padding:1rem;display:flex;flex-direction:column;gap:.5rem}.info-item[data-v-c7aa1779]{display:flex;justify-content:space-between;align-items:center}.info-item .label[data-v-c7aa1779]{font-weight:500;color:var(--color-dim);font-size:.9rem}.info-item .value[data-v-c7aa1779]{font-weight:600;color:var(--color-fg);font-size:.9rem}.full[data-v-ec924328]{position:relative}.tree_detail[data-v-ec924328]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;gap:5px}.tree[data-v-ec924328]{width:300px;max-height:500px;overflow-y:auto}.detail[data-v-ec924328]{border-left:1px solid var(--color-divider)}.marked[data-v-ec924328]{position:relative;display:inline-flex}.marked__tag[data-v-ec924328]{position:absolute;top:-6px;right:-10px;padding:0 3px;border-radius:7px;background:var(--color-raised);color:var(--color-dim);font-family:var(--font-sans);font-size:9px;line-height:14px}.item__input[data-v-ec924328]{width:100%;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 3px);background:var(--color-pane);color:var(--color-fg);font:inherit;padding:1px 4px}.prose[data-v-ec924328]{padding:4px 2px;color:var(--color-fg);line-height:1.5}.choices[data-v-ec924328]{display:flex;flex-direction:column;gap:8px;margin-top:12px}.choice[data-v-ec924328]{justify-content:flex-start;height:auto;padding:8px 10px}.choice__text[data-v-ec924328]{display:flex;flex-direction:column;gap:2px;text-align:left}.choice__name[data-v-ec924328]{font-weight:600}.choice__what[data-v-ec924328]{font-size:var(--text-xs);opacity:.75}.empty__icon[data-v-ec924328]{font-size:74px}.menuitem{&[data-v-ec924328]{display:grid;grid-template-columns:25px 35px 1fr min-content;align-items:center;padding-top:2px;padding-bottom:2px;padding-left:5px;cursor:pointer}.checked[data-v-ec924328]{margin-top:-5px}&.active[data-v-ec924328]{background-color:var(--color-raised)}.options[data-v-ec924328]{display:flex;flex-direction:row}}.childs[data-v-ec924328]{grid-column:span 4;padding-left:15px}.content{&[data-v-ec924328]{width:846px;height:500px;padding:0 0 0 15px}.scroller[data-v-ec924328]{min-height:100%;max-height:100%;overflow-y:auto}&.center[data-v-ec924328]{display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center;color:var(--color-dim)}}.underline[data-v-ec924328]{cursor:pointer}.blue[data-v-ec924328]{color:var(--color-accent)}.rowlayout[data-v-ec924328]{display:grid;flex-direction:row;flex-wrap:nowrap;width:100%;grid-template-columns:66% 1fr;gap:15px}.settings-container[data-v-5f2599d9]{display:flex;flex-direction:column;gap:1rem;padding:15px}.hint-text[data-v-5f2599d9]{font-size:12px;color:var(--va-text-secondary);margin:-8px 0 0;padding-left:4px}.list-group-item{&[data-v-5f2599d9]{display:flex;flex-direction:column;align-items:flex-start;cursor:move;padding:var(--va-tree-node-padding);list-style:none}.row[data-v-5f2599d9]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:6px;align-items:center}&[data-v-5f2599d9]:hover{background-color:#d6dde3;border-radius:var(--va-tree-node-border-radius)}}.empty[data-v-5f2599d9]{display:block;width:100%;vertical-align:middle;text-align:center;font-variant:small-caps;font-style:italic;color:#5d5d5d}.bottomframe[data-v-5f2599d9]{border-bottom:1px solid var(--va-background-border)}#header-va-4[data-v-5f2599d9]{padding:6px 12px}.options[data-v-5f2599d9]{padding-top:6px;padding-left:12px;border-top:1px dotted #00000047}.row.nhidden[data-v-5f2599d9]{display:none}.dragIcon[data-v-5f2599d9]{cursor:n-resize}.button{margin-top:35px}.flip-list-move{transition:transform .5s}.no-move{transition:transform 0s}.ghost{opacity:.5;background:#c8ebfb}.list-group{min-height:20px}.list-group-item{cursor:move}.list-group-item i{cursor:pointer}.nhidden,.row.nhidden{display:none}.va-tree-node-root{&:hover{cursor:pointer;.nhidden{display:inline}.nsee{display:none}}}.list-group-item{&:hover{cursor:pointer;.nhidden{display:flex}}}.sliderPopOver{padding:2px 7px;.va-slider__handler{left:51%;background-color:#fff!important;border-color:#99a9c8!important;border-radius:6px!important;border-width:1px!important;width:11px;height:20px;.va-slider__handler__dot--focus{margin-top:4px}}}.mt4{margin-top:4px}.datapoint-wrapper[data-v-2eb55b7f]{position:relative;display:inline-block}.tlc[data-v-2eb55b7f]{position:absolute;border:4px solid #f8f6f6;background:#6a6a6a;padding:3px;border-radius:12px;text-wrap:nowrap;top:100%;left:50%;transform:translate(-50%) rotate(-90deg);margin-top:5px;box-shadow:-3px 5px 6px #1919192b;font-size:12px;white-space:nowrap}.settings-container[data-v-ca2b9f21]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-ca2b9f21]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-ca2b9f21]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-ca2b9f21]:hover{transform:scale(1.1)}.active-icon[data-v-ca2b9f21]{border:2px solid rgb(0,121,0)}.slider[data-v-ca2b9f21]{padding:0 10px}.datapoint-wrapper[data-v-a78b518d]{position:relative;display:inline-block}.datapoint[data-v-a78b518d]{display:inline-block;text-wrap:nowrap;position:absolute;border:1px solid #ccc;background:#fff;padding:4px;top:100%;left:50%;transform:translate(-50%);margin-top:5px;border-radius:21px;white-space:nowrap}.settings-container[data-v-98e6b38b]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-98e6b38b]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-98e6b38b]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-98e6b38b]:hover{transform:scale(1.1)}.active-icon[data-v-98e6b38b]{border:2px solid rgb(0,121,0)}.slider[data-v-98e6b38b]{padding:0 10px}\n";})();
import { PayloadImpl as Sl, WidgetActionInterfaceImpl as RE, EVENT_ACTIONS_REGISTRY as PE, EVENT_REGISTRY_ID as xE, EVENT_ACTIONS_REGISTRY_ID as FE } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ME, deactivate as BE, component as GE, inject as Gf, initTsmRuntime as kE } from "@eclipse-daanse/tsm";
import { defineComponent as rt, h as Rs, ref as _e, reactive as Bo, provide as qr, computed as Tn, onMounted as Zt, markRaw as Rn, nextTick as Jt, onBeforeUnmount as Al, inject as St, watch as ki, onUnmounted as Cl, render as UE, createElementBlock as se, openBlock as V, Fragment as Me, renderList as En, createBlock as je, createCommentVNode as Ge, unref as j, renderSlot as il, normalizeClass as us, normalizeStyle as _a, createElementVNode as ue, toDisplayString as Lt, withCtx as De, createVNode as ce, createTextVNode as hn, resolveDynamicComponent as Oh, mergeModels as kh, toRefs as bl, useModel as gr, toRaw as nl, resolveComponent as ci, TransitionGroup as zE, useCssVars as VE, mergeProps as Bu, isRef as Ip, shallowRef as kf, watchEffect as WE, withDirectives as Uf, withKeys as zf, vModelText as Vf, getCurrentInstance as ZE, withModifiers as Wf } from "vue";
import { FILTER as ua, UPDATE_MQTT_SUBSCRIPTIONS as Zf, MQTT_UNSUBSCRIBE_ALL as Hf } from "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
import { VariableWrapper as uh, useDatasourceRepository as HE, plainSettings as Yf } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Is } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { IconWidget as Dp, IconWidgetSettings as YE } from "org.eclipse.daanse.board.app.ui.vue.widget.icon";
import { BasicEObject as _r, createBasicEList as Zu, createContainmentEList as ls, BasicEFactory as qE, BasicEPackage as KE, EPackageRegistry as Rp, BasicEClass as Zn, BasicEAttribute as pe, BasicEReference as jn, getEcorePackage as ge } from "@emfts/core";
import { loggerFactory as JE } from "org.eclipse.daanse.board.app.lib.logger";
import { useRoute as $E } from "vue-router";
import { DRadioGroup as Pp, DSelect as jE, DInput as Fo, DDivider as xp, DColorInput as Lh, DCheckbox as Ih, DSlider as Nh, DModal as ch, DButton as ss, DIcon as Zr, DTabs as XE } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as QE } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Np } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function e1(o, i) {
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
const t1 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M60%2020C45.088%2020%2033%2031.588%2033%2045.88C33%2065.16%2060%20100%2060%20100C60%20100%2087%2065.16%2087%2045.88C87%2031.588%2074.912%2020%2060%2020ZM60%2056.2C54.036%2056.2%2049.2%2051.484%2049.2%2045.68C49.2%2039.876%2054.036%2035.16%2060%2035.16C65.964%2035.16%2070.8%2039.876%2070.8%2045.68C70.8%2051.484%2065.964%2056.2%2060%2056.2Z'%20fill='%23606060'/%3e%3c/svg%3e", qf = (o, i) => {
  for (const n of Object.keys(i))
    o.on(n, i[n]);
}, Fp = (o) => {
  for (const i of Object.keys(o)) {
    const n = o[i];
    n && Xs(n.cancel) && n.cancel();
  }
}, n1 = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), Xs = (o) => typeof o == "function", wn = (o, i, n) => {
  for (const l in n) {
    const d = "set" + n1(l);
    o[d] ? ki(
      () => n[l],
      (p, g) => {
        o[d](p, g);
      }
    ) : i[d] && ki(
      () => n[l],
      (p) => {
        i[d](p);
      }
    );
  }
}, dn = (o, i, n = {}) => {
  const l = { ...n };
  for (const d in o) {
    const p = i[d], g = o[d];
    p && (p && p.custom === !0 || g !== void 0 && (l[d] = g));
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
}, i1 = async (o) => {
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
}, Ou = (o) => {
  const i = _e(
    (...l) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), n = (...l) => i.value(...l);
  return n.wrapped = i, qr(o, n), n;
}, Lu = (o, i) => o.wrapped.value = i, rn = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, Mt = (o) => {
  const i = St(o);
  if (i === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return i;
}, Sn = Symbol(
  "useGlobalLeaflet"
), Ci = Symbol("addLayer"), ec = Symbol("removeLayer"), Ol = Symbol(
  "registerControl"
), Mp = Symbol(
  "registerLayerControl"
), Bp = Symbol(
  "canSetParentHtml"
), Gp = Symbol("setParentHtml"), kp = Symbol("setIcon"), Up = Symbol("bindPopup"), zp = Symbol("bindTooltip"), Vp = Symbol("unbindPopup"), Wp = Symbol("unbindTooltip"), Ll = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, Il = (o) => ({ options: o.options, methods: {} }), Ea = {
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
  const l = Mt(Ci), d = Mt(ec), { options: p, methods: g } = Il(o), v = dn(
    o,
    Ea,
    p
  ), m = () => l({ leafletObject: i.value }), E = () => d({ leafletObject: i.value }), A = {
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
      if (!i.value || !Xs(i.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      i.value.bindPopup(w);
    },
    bindTooltip(w) {
      if (!i.value || !Xs(i.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      i.value.bindTooltip(w);
    },
    unbindTooltip() {
      i.value && (Xs(i.value.closeTooltip) && i.value.closeTooltip(), Xs(i.value.unbindTooltip) && i.value.unbindTooltip());
    },
    unbindPopup() {
      i.value && (Xs(i.value.closePopup) && i.value.closePopup(), Xs(i.value.unbindPopup) && i.value.unbindPopup());
    },
    updateVisibleProp(w) {
      n.emit("update:visible", w);
    }
  };
  return qr(Up, A.bindPopup), qr(zp, A.bindTooltip), qr(Vp, A.unbindPopup), qr(Wp, A.unbindTooltip), Cl(() => {
    A.unbindPopup(), A.unbindTooltip(), E();
  }), { options: v, methods: A };
}, ds = (o, i) => {
  if (o && i.default)
    return Rs("div", { style: { display: "none" } }, i.default());
}, Zp = {
  ...Ea,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, r1 = (o, i, n) => {
  const { options: l, methods: d } = Nl(
    o,
    i,
    n
  );
  return { options: dn(
    o,
    Zp,
    l
  ), methods: d };
}, Uh = {
  ...Zp,
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
}, Hp = (o, i, n) => {
  const { options: l, methods: d } = r1(o, i, n), p = dn(
    o,
    Uh,
    l
  ), g = Mt(ec), v = {
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
}, zh = {
  ...Uh,
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
}, Yp = (o, i, n) => {
  const { options: l, methods: d } = Hp(
    o,
    i,
    n
  ), p = dn(
    o,
    zh,
    l
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
}, qp = {
  ...zh,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, s1 = (o, i, n) => {
  const { options: l, methods: d } = Yp(o, i, n), p = dn(
    o,
    qp,
    l
  ), g = {
    ...d
  };
  return { options: p, methods: g };
};
rt({
  name: "LCircle",
  props: qp,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = s1(o, n, i);
    return Zt(async () => {
      const { circle: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLng, g));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const o1 = rt({
  name: "LCircleMarker",
  props: zh,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = Yp(
      o,
      n,
      i
    );
    return Zt(async () => {
      const { circleMarker: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLng, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), Ta = {
  ...Ll,
  position: {
    type: String
  }
}, Dl = (o, i) => {
  const { options: n, methods: l } = Il(o), d = dn(
    o,
    Ta,
    n
  ), p = {
    ...l,
    setPosition(g) {
      i.value && i.value.setPosition(g);
    }
  };
  return Cl(() => {
    i.value && i.value.remove();
  }), { options: d, methods: p };
}, a1 = (o) => o.default ? Rs("div", { ref: "root" }, o.default()) : null;
rt({
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
    const n = _e(), l = _e(), d = St(Sn), p = Mt(Ol), { options: g, methods: v } = Dl(o, n);
    return Zt(async () => {
      const { Control: m, DomEvent: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = m.extend({
        onAdd() {
          return l.value;
        }
      });
      n.value = Rn(new A(g)), wn(v, n.value, o), p({ leafletObject: n.value }), o.disableClickPropagation && l.value && E.disableClickPropagation(l.value), o.disableScrollPropagation && l.value && E.disableScrollPropagation(l.value), Jt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return a1(this.$slots);
  }
});
const Kp = {
  ...Ta,
  prefix: {
    type: String
  }
}, l1 = (o, i) => {
  const { options: n, methods: l } = Dl(
    o,
    i
  ), d = dn(
    o,
    Kp,
    n
  ), p = {
    ...l,
    setPrefix(g) {
      i.value.setPrefix(g);
    }
  };
  return { options: d, methods: p };
};
rt({
  name: "LControlAttribution",
  props: Kp,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Ol), { options: p, methods: g } = l1(o, n);
    return Zt(async () => {
      const { control: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
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
}, u1 = (o, i) => {
  const { options: n } = Dl(o, i);
  return { options: dn(
    o,
    Jp,
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
rt({
  name: "LControlLayers",
  props: Jp,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Mp), { options: p, methods: g } = u1(o, n);
    return Zt(async () => {
      const { control: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
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
const $p = {
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
}, c1 = (o, i) => {
  const { options: n, methods: l } = Dl(
    o,
    i
  );
  return { options: dn(
    o,
    $p,
    n
  ), methods: l };
};
rt({
  name: "LControlScale",
  props: $p,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Ol), { options: p, methods: g } = c1(o, n);
    return Zt(async () => {
      const { control: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.scale(p)), wn(g, n.value, o), d({ leafletObject: n.value }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const jp = {
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
}, h1 = (o, i) => {
  const { options: n, methods: l } = Dl(
    o,
    i
  );
  return { options: dn(
    o,
    jp,
    n
  ), methods: l };
};
rt({
  name: "LControlZoom",
  props: jp,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Ol), { options: p, methods: g } = h1(o, n);
    return Zt(async () => {
      const { control: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.zoom(p)), wn(g, n.value, o), d({ leafletObject: n.value }), Jt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const tc = {
  ...Ea
}, Vh = (o, i, n) => {
  const { options: l, methods: d } = Nl(
    o,
    i,
    n
  ), p = dn(
    o,
    tc,
    l
  ), g = {
    ...d,
    addLayer(v) {
      i.value.addLayer(v.leafletObject);
    },
    removeLayer(v) {
      i.value.removeLayer(v.leafletObject);
    }
  };
  return qr(Ci, g.addLayer), qr(ec, g.removeLayer), { options: p, methods: g };
}, Xp = {
  ...tc
}, d1 = (o, i, n) => {
  const { options: l, methods: d } = Vh(
    o,
    i,
    n
  ), p = dn(
    o,
    Xp,
    l
  ), g = {
    ...d
  };
  return { options: p, methods: g };
};
rt({
  props: Xp,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { methods: g, options: v } = d1(
      o,
      n,
      i
    );
    return Zt(async () => {
      const { featureGroup: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(void 0, v)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const Qp = {
  ...tc,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, f1 = (o, i, n) => {
  const { options: l, methods: d } = Vh(
    o,
    i,
    n
  ), p = dn(
    o,
    Qp,
    l
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
}, Go = rt({
  props: Qp,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { methods: g, options: v } = f1(o, n, i);
    return Zt(async () => {
      const { geoJSON: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.geojson, v));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), Wh = {
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
}, eg = (o, i, n) => {
  const { options: l, methods: d } = Nl(
    o,
    i,
    n
  ), p = dn(
    o,
    Wh,
    l
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
}, p1 = (o, i, n, l) => o.extend({
  initialize(d) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), n.setOptions(this, d);
  },
  createTile(d) {
    const p = this._tileCoordsToKey(d);
    this.tileComponents[p] = i.create("div");
    const g = Rs({ setup: l, props: ["coords"] }, { coords: d });
    return UE(g, this.tileComponents[p]), this.tileComponents[p];
  },
  _unloadTile(d) {
    const p = this._tileCoordsToKey(d.coords);
    this.tileComponents[p] && (this.tileComponents[p].innerHTML = "", this.tileComponents[p] = void 0);
  }
});
rt({
  props: {
    ...Wh,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, i) {
    const n = _e(), l = _e(null), d = _e(!1), p = St(Sn), g = Mt(Ci), { options: v, methods: m } = eg(o, n, i);
    return Zt(async () => {
      const { GridLayer: E, DomUtil: A, Util: w } = p ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), O = p1(
        E,
        A,
        w,
        o.childRender
      );
      n.value = Rn(new O(v));
      const { listeners: N } = hi(i.attrs);
      n.value.on(N), wn(m, n.value, o), g({
        ...o,
        ...m,
        leafletObject: n.value
      }), d.value = !0, Jt(() => i.emit("ready", n.value));
    }), { root: l, ready: d, leafletObject: n };
  },
  render() {
    return this.ready ? Rs("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Kf = {
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
}, vl = rt({
  name: "LIcon",
  props: {
    ...Kf,
    ...Ll
  },
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Bp), p = Mt(Gp), g = Mt(kp);
    let v, m, E, A, w;
    const O = (X, x, z) => {
      const Y = X && X.innerHTML;
      if (!x) {
        z && w && d() && p(Y);
        return;
      }
      const { listeners: R } = hi(i.attrs);
      w && m(w, R);
      const { options: q } = Il(o), fe = dn(
        o,
        Kf,
        q
      );
      Y && (fe.html = Y), w = fe.html ? E(fe) : A(fe), v(w, R), g(w);
    }, N = () => {
      Jt(() => O(n.value, !0, !1));
    }, k = () => {
      Jt(() => O(n.value, !1, !0));
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
    return Zt(async () => {
      const {
        DomEvent: X,
        divIcon: x,
        icon: z
      } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
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
    return Rs("div", { ref: "root" }, o);
  }
}), tg = {
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
}, g1 = (o, i, n) => {
  const { options: l, methods: d } = Nl(
    o,
    i,
    n
  ), p = dn(
    o,
    tg,
    l
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
rt({
  name: "LImageOverlay",
  props: tg,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = g1(
      o,
      n,
      i
    );
    return Zt(async () => {
      const { imageOverlay: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.url, o.bounds, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
rt({
  props: tc,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { methods: g } = Vh(o, n, i);
    return Zt(async () => {
      const { layerGroup: v } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v(void 0, o.options)
      );
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(g, n.value, o), p({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
function ng(o, i, n) {
  var l, d, p;
  i === void 0 && (i = 50), n === void 0 && (n = {});
  var g = (l = n.isImmediate) != null && l, v = (d = n.callback) != null && d, m = n.maxWait, E = Date.now(), A = [];
  function w() {
    if (m !== void 0) {
      var N = Date.now() - E;
      if (N + i >= m)
        return m - N;
    }
    return i;
  }
  var O = function() {
    var N = [].slice.call(arguments), k = this;
    return new Promise(function(G, X) {
      var x = g && p === void 0;
      if (p !== void 0 && clearTimeout(p), p = setTimeout(function() {
        if (p = void 0, E = Date.now(), !g) {
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
  return O.cancel = function(N) {
    p !== void 0 && clearTimeout(p), A.forEach(function(k) {
      return (0, k.reject)(N);
    }), A = [];
  }, O;
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
}, Zh = rt({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Jf,
  setup(o, i) {
    const n = _e(), l = Bo({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: d } = Il(o), p = dn(
      o,
      Jf,
      d
    ), { listeners: g, attrs: v } = hi(i.attrs), m = Ou(Ci), E = Ou(ec), A = Ou(Ol), w = Ou(
      Mp
    );
    qr(Sn, o.useGlobalLeaflet);
    const O = Tn(() => {
      const x = {};
      return o.noBlockingAnimations && (x.animate = !1), x;
    }), N = Tn(() => {
      const x = O.value;
      return o.padding && (x.padding = o.padding), o.paddingTopLeft && (x.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (x.paddingBottomRight = o.paddingBottomRight), x;
    }), k = {
      moveend: ng((x) => {
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
    Zt(async () => {
      o.useGlobalLeaflet && (rn.L = rn.L || await Promise.resolve().then(() => F1));
      const { map: x, CRS: z, Icon: Y, latLngBounds: R, latLng: q, stamp: fe } = o.useGlobalLeaflet ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        p.beforeMapMount && await p.beforeMapMount();
      } catch (he) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${he.message}`
        );
      }
      await i1(Y);
      const Se = typeof p.crs == "string" ? z[p.crs] : p.crs;
      p.crs = Se || z.EPSG3857;
      const Ie = {
        addLayer(he) {
          he.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd.push(he) : l.layersInControl.find(
            (Oe) => fe(Oe.leafletObject) === fe(he.leafletObject)
          ) || (l.layerControl.addLayer(he), l.layersInControl.push(he))), he.visible !== !1 && l.leafletRef.addLayer(he.leafletObject);
        },
        removeLayer(he) {
          he.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd = l.layersToAdd.filter(
            (Oe) => Oe.name !== he.name
          ) : (l.layerControl.removeLayer(he.leafletObject), l.layersInControl = l.layersInControl.filter(
            (Oe) => fe(Oe.leafletObject) !== fe(he.leafletObject)
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
          he !== Oe && l.leafletRef.setZoom(he, O.value);
        },
        setCrs(he) {
          const Oe = l.leafletRef.getBounds();
          l.leafletRef.options.crs = he, l.leafletRef.fitBounds(Oe, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(he) {
          l.leafletRef.fitBounds(he, N.value);
        },
        setBounds(he) {
          if (!he)
            return;
          const Oe = R(he);
          Oe.isValid() && !(l.lastSetBounds || l.leafletRef.getBounds()).equals(Oe, 0) && (l.lastSetBounds = Oe, l.leafletRef.fitBounds(Oe));
        },
        setCenter(he) {
          if (he == null)
            return;
          const Oe = q(he), ae = l.lastSetCenter || l.leafletRef.getCenter();
          (ae.lat !== Oe.lat || ae.lng !== Oe.lng) && (l.lastSetCenter = Oe, l.leafletRef.panTo(Oe, O.value));
        }
      };
      Lu(m, Ie.addLayer), Lu(E, Ie.removeLayer), Lu(A, Ie.registerControl), Lu(w, Ie.registerLayerControl), l.leafletRef = Rn(x(n.value, p)), wn(Ie, l.leafletRef, o), qf(l.leafletRef, k), qf(l.leafletRef, g), l.ready = !0, Jt(() => i.emit("ready", l.leafletRef));
    }), Al(() => {
      Fp(k), l.leafletRef && (l.leafletRef.off(), l.leafletRef.remove());
    });
    const G = Tn(() => l.leafletRef), X = Tn(() => l.ready);
    return { root: n, ready: X, leafletObject: G, attrs: v };
  },
  render({ attrs: o }) {
    return o.style || (o.style = {}), o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%"), Rs(
      "div",
      {
        ...o,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), _1 = ["Symbol(Comment)", "Symbol(Text)"], m1 = ["LTooltip", "LPopup"], ig = {
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
}, v1 = (o, i, n) => {
  const { options: l, methods: d } = Nl(
    o,
    i,
    n
  ), p = dn(
    o,
    ig,
    l
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
}, y1 = (o, i) => {
  const n = i.slots.default && i.slots.default();
  return n && n.length && n.some(E1);
};
function E1(o) {
  return !(_1.includes(o.type.toString()) || m1.includes(o.type.name));
}
const yl = rt({
  name: "LMarker",
  props: ig,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci);
    qr(
      Bp,
      () => {
        var E;
        return !!((E = n.value) != null && E.getElement());
      }
    ), qr(Gp, (E) => {
      var A, w;
      const O = Xs((A = n.value) == null ? void 0 : A.getElement) && ((w = n.value) == null ? void 0 : w.getElement());
      O && (O.innerHTML = E);
    }), qr(
      kp,
      (E) => {
        var A;
        return ((A = n.value) == null ? void 0 : A.setIcon) && n.value.setIcon(E);
      }
    );
    const { options: g, methods: v } = v1(o, n, i), m = {
      moveHandler: ng(v.latLngSync)
    };
    return Zt(async () => {
      const { marker: E, divIcon: A } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      y1(g, i) && (g.icon = A({ className: "" })), n.value = Rn(E(o.latLng, g));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), n.value.on("move", m.moveHandler), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), Al(() => Fp(m)), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), Hh = {
  ...Uh,
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
}, rg = (o, i, n) => {
  const { options: l, methods: d } = Hp(
    o,
    i,
    n
  ), p = dn(
    o,
    Hh,
    l
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
}, Hu = {
  ...Hh
}, sg = (o, i, n) => {
  const { options: l, methods: d } = rg(
    o,
    i,
    n
  ), p = dn(
    o,
    Hu,
    l
  ), g = {
    ...d,
    toGeoJSON(v) {
      return i.value.toGeoJSON(v);
    }
  };
  return { options: p, methods: g };
};
rt({
  name: "LPolygon",
  props: Hu,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = sg(o, n, i);
    return Zt(async () => {
      const { polygon: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLngs, g));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
rt({
  name: "LPolyline",
  props: Hh,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = rg(o, n, i);
    return Zt(async () => {
      const { polyline: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLngs, g)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const og = {
  ...Ll,
  content: {
    type: String,
    default: null
  }
}, ag = (o, i) => {
  const { options: n, methods: l } = Il(o), d = {
    ...l,
    setContent(p) {
      i.value && p !== null && p !== void 0 && i.value.setContent(p);
    }
  };
  return { options: n, methods: d };
}, lg = (o) => o.default ? Rs("div", { ref: "root" }, o.default()) : null, T1 = {
  ...og,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, w1 = (o, i) => {
  const { options: n, methods: l } = ag(o, i);
  return { options: n, methods: l };
};
rt({
  name: "LPopup",
  props: T1,
  setup(o, i) {
    const n = _e(), l = _e(null), d = St(Sn), p = Mt(Up), g = Mt(Vp), { options: v, methods: m } = w1(o, n);
    return Zt(async () => {
      const { popup: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(E(v)), o.latLng !== void 0 && n.value.setLatLng(o.latLng), wn(m, n.value, o);
      const { listeners: A } = hi(i.attrs);
      n.value.on(A), n.value.setContent(o.content || l.value || ""), p(n.value), Jt(() => i.emit("ready", n.value));
    }), Al(() => {
      g();
    }), { root: l, leafletObject: n };
  },
  render() {
    return lg(this.$slots);
  }
});
const ug = {
  ...Hu,
  latLngs: {
    ...Hu.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, S1 = (o, i, n) => {
  const { options: l, methods: d } = sg(
    o,
    i,
    n
  ), p = dn(
    o,
    ug,
    l
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
rt({
  name: "LRectangle",
  props: ug,
  setup(o, i) {
    const n = _e(), l = _e(!1), d = St(Sn), p = Mt(Ci), { options: g, methods: v } = S1(o, n, i);
    return Zt(async () => {
      const { rectangle: m, latLngBounds: E } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = o.bounds ? E(o.bounds) : E(o.latLngs || []);
      n.value = Rn(m(A, g));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Jt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const Yh = {
  ...Wh,
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
}, cg = (o, i, n) => {
  const { options: l, methods: d } = eg(o, i, n), p = dn(
    o,
    Yh,
    l
  ), g = {
    ...d
  };
  return { options: p, methods: g };
}, qh = rt({
  props: Yh,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Ci), { options: p, methods: g } = cg(o, n, i);
    return Zt(async () => {
      const { tileLayer: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
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
}), A1 = {
  ...og
}, C1 = (o, i) => {
  const { options: n, methods: l } = ag(o, i), d = Mt(Wp);
  return Al(() => {
    d();
  }), { options: n, methods: l };
}, $f = rt({
  name: "LTooltip",
  props: A1,
  setup(o, i) {
    const n = _e(), l = _e(null), d = St(Sn), p = Mt(zp), { options: g, methods: v } = C1(o, n);
    return Zt(async () => {
      const { tooltip: m } = d ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(g)), wn(v, n.value, o);
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), n.value.setContent(o.content || l.value || ""), p(n.value), Jt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return lg(this.$slots);
  }
}), hg = {
  ...Yh,
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
  const { options: l, methods: d } = cg(o, i, n);
  return {
    options: dn(
      o,
      hg,
      l
    ),
    methods: {
      ...d
    }
  };
}, O1 = rt({
  props: hg,
  setup(o, i) {
    const n = _e(), l = St(Sn), d = Mt(Ci), { options: p, methods: g } = b1(
      o,
      n,
      i
    );
    return Zt(async () => {
      const { tileLayer: v } = l ? rn.L : await import("./leaflet-src.esm-BnEQV3J-.js");
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
function dg(o) {
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
var L1 = rl.exports, jf;
function I1() {
  return jf || (jf = 1, (function(o, i) {
    (function() {
      var n, l = "4.17.21", d = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", v = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", E = 500, A = "__lodash_placeholder__", w = 1, O = 2, N = 4, k = 1, G = 2, X = 1, x = 2, z = 4, Y = 8, R = 16, q = 32, fe = 64, Se = 128, Ie = 256, he = 512, Oe = 30, ae = "...", Z = 800, K = 16, U = 1, ie = 2, ne = 3, Ee = 1 / 0, de = 9007199254740991, yt = 17976931348623157e292, Le = NaN, ke = 4294967295, xt = ke - 1, Bt = ke >>> 1, le = [
        ["ary", Se],
        ["bind", X],
        ["bindKey", x],
        ["curry", Y],
        ["curryRight", R],
        ["flip", he],
        ["partial", q],
        ["partialRight", fe],
        ["rearg", Ie]
      ], Ue = "[object Arguments]", Pe = "[object Array]", Ht = "[object AsyncFunction]", $t = "[object Boolean]", Pn = "[object Date]", sn = "[object DOMException]", Yn = "[object Error]", Un = "[object Function]", Ui = "[object GeneratorFunction]", fn = "[object Map]", Ut = "[object Number]", zi = "[object Null]", on = "[object Object]", an = "[object Promise]", vr = "[object Proxy]", qn = "[object RegExp]", jt = "[object Set]", Xn = "[object String]", xn = "[object Symbol]", Vi = "[object Undefined]", zn = "[object WeakMap]", er = "[object WeakSet]", pn = "[object ArrayBuffer]", Qn = "[object DataView]", bi = "[object Float32Array]", Oi = "[object Float64Array]", di = "[object Int8Array]", Fn = "[object Int16Array]", Wi = "[object Int32Array]", fi = "[object Uint8Array]", ei = "[object Uint8ClampedArray]", An = "[object Uint16Array]", ti = "[object Uint32Array]", Li = /\b__p \+= '';/g, Ii = /\b(__p \+=) '' \+/g, ni = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tr = /&(?:amp|lt|gt|quot|#39);/g, Zi = /[&<>"']/g, F = RegExp(tr.source), oe = RegExp(Zi.source), J = /<%-([\s\S]+?)%>/g, ve = /<%([\s\S]+?)%>/g, Be = /<%=([\s\S]+?)%>/g, xe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, et = /^\w*$/, pt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nt = /[\\^$.*+?()[\]{}|]/g, Gt = RegExp(Nt.source), Xt = /^\s+/, _t = /\s/, me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ii = /\{\n\/\* \[wrapped with (.+)\] \*/, Hi = /,? & /, pi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, yr = /[()=,{}\[\]\/\s]/, Dt = /\\(\\)?/g, Cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, lt = /\w*$/, zt = /^[-+]0x[0-9a-f]+$/i, bn = /^0b[01]+$/i, ri = /^\[object .+?Constructor\]$/, gn = /^0o[0-7]+$/i, On = /^(?:0|[1-9]\d*)$/, si = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ln = /($^)/, Yt = /['\n\r\u2028\u2029\\]/g, Kn = "\\ud800-\\udfff", Pr = "\\u0300-\\u036f", fs = "\\ufe20-\\ufe2f", ps = "\\u20d0-\\u20ff", gi = Pr + fs + ps, Er = "\\u2700-\\u27bf", Yi = "a-z\\xdf-\\xf6\\xf8-\\xff", Kr = "\\xac\\xb1\\xd7\\xf7", Jr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nr = "\\u2000-\\u206f", tt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bt = "A-Z\\xc0-\\xd6\\xd8-\\xde", ir = "\\ufe0e\\ufe0f", Mn = Kr + Jr + nr + tt, _i = "['’]", xr = "[" + Kn + "]", Ze = "[" + Mn + "]", Ot = "[" + gi + "]", ko = "\\d+", Uo = "[" + Er + "]", Ni = "[" + Yi + "]", Ml = "[^" + Kn + Mn + ko + Er + Yi + bt + "]", Fs = "\\ud83c[\\udffb-\\udfff]", gs = "(?:" + Ot + "|" + Fs + ")", un = "[^" + Kn + "]", Fr = "(?:\\ud83c[\\udde6-\\uddff]){2}", _s = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tr = "[" + bt + "]", zo = "\\u200d", Ms = "(?:" + Ni + "|" + Ml + ")", wa = "(?:" + Tr + "|" + Ml + ")", Vo = "(?:" + _i + "(?:d|ll|m|re|s|t|ve))?", so = "(?:" + _i + "(?:D|LL|M|RE|S|T|VE))?", Wo = gs + "?", Zo = "[" + ir + "]?", Ho = "(?:" + zo + "(?:" + [un, Fr, _s].join("|") + ")" + Zo + Wo + ")*", Bl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Sa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gl = Zo + Wo + Ho, Xe = "(?:" + [Uo, Fr, _s].join("|") + ")" + Gl, wr = "(?:" + [un + Ot + "?", Ot, Fr, _s, xr].join("|") + ")", Ft = RegExp(_i, "g"), kl = RegExp(Ot, "g"), oo = RegExp(Fs + "(?=" + Fs + ")|" + wr + Gl, "g"), Aa = RegExp([
        Tr + "?" + Ni + "+" + Vo + "(?=" + [Ze, Tr, "$"].join("|") + ")",
        wa + "+" + so + "(?=" + [Ze, Tr + Ms, "$"].join("|") + ")",
        Tr + "?" + Ms + "+" + Vo,
        Tr + "+" + so,
        Sa,
        Bl,
        ko,
        Xe
      ].join("|"), "g"), Ca = RegExp("[" + zo + Kn + gi + ir + "]"), ms = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ba = [
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
      ], ao = -1, nt = {};
      nt[bi] = nt[Oi] = nt[di] = nt[Fn] = nt[Wi] = nt[fi] = nt[ei] = nt[An] = nt[ti] = !0, nt[Ue] = nt[Pe] = nt[pn] = nt[$t] = nt[Qn] = nt[Pn] = nt[Yn] = nt[Un] = nt[fn] = nt[Ut] = nt[on] = nt[qn] = nt[jt] = nt[Xn] = nt[zn] = !1;
      var Et = {};
      Et[Ue] = Et[Pe] = Et[pn] = Et[Qn] = Et[$t] = Et[Pn] = Et[bi] = Et[Oi] = Et[di] = Et[Fn] = Et[Wi] = Et[fn] = Et[Ut] = Et[on] = Et[qn] = Et[jt] = Et[Xn] = Et[xn] = Et[fi] = Et[ei] = Et[An] = Et[ti] = !0, Et[Yn] = Et[Un] = Et[zn] = !1;
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
      }, ic = {
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
      }, Oa = parseFloat, rc = parseInt, La = typeof Iu == "object" && Iu && Iu.Object === Object && Iu, gt = typeof self == "object" && self && self.Object === Object && self, Vn = La || gt || Function("return this")(), Di = i && !i.nodeType && i, rr = Di && !0 && o && !o.nodeType && o, Ia = rr && rr.exports === Di, Na = Ia && La.process, mi = (function() {
        try {
          var P = rr && rr.require && rr.require("util").types;
          return P || Na && Na.binding && Na.binding("util");
        } catch {
        }
      })(), Wl = mi && mi.isArrayBuffer, Da = mi && mi.isDate, Zl = mi && mi.isMap, Hl = mi && mi.isRegExp, Yo = mi && mi.isSet, Yl = mi && mi.isTypedArray;
      function Qt(P, $, H) {
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
      function sc(P, $, H, Ce) {
        for (var Je = -1, Tt = P == null ? 0 : P.length; ++Je < Tt; ) {
          var Ln = P[Je];
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
      function Ra(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length; ++H < Ce; )
          if (!$(P[H], H, P))
            return !1;
        return !0;
      }
      function Mr(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length, Je = 0, Tt = []; ++H < Ce; ) {
          var Ln = P[H];
          $(Ln, H, P) && (Tt[Je++] = Ln);
        }
        return Tt;
      }
      function Bs(P, $) {
        var H = P == null ? 0 : P.length;
        return !!H && Gs(P, $, 0) > -1;
      }
      function Pa(P, $, H) {
        for (var Ce = -1, Je = P == null ? 0 : P.length; ++Ce < Je; )
          if (H($, P[Ce]))
            return !0;
        return !1;
      }
      function kt(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length, Je = Array(Ce); ++H < Ce; )
          Je[H] = $(P[H], H, P);
        return Je;
      }
      function Br(P, $) {
        for (var H = -1, Ce = $.length, Je = P.length; ++H < Ce; )
          P[Je + H] = $[H];
        return P;
      }
      function xa(P, $, H, Ce) {
        var Je = -1, Tt = P == null ? 0 : P.length;
        for (Ce && Tt && (H = P[++Je]); ++Je < Tt; )
          H = $(H, P[Je], Je, P);
        return H;
      }
      function oc(P, $, H, Ce) {
        var Je = P == null ? 0 : P.length;
        for (Ce && Je && (H = P[--Je]); Je--; )
          H = $(H, P[Je], Je, P);
        return H;
      }
      function lo(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length; ++H < Ce; )
          if ($(P[H], H, P))
            return !0;
        return !1;
      }
      var ac = qo("length");
      function ql(P) {
        return P.split("");
      }
      function Kl(P) {
        return P.match(pi) || [];
      }
      function uo(P, $, H) {
        var Ce;
        return H(P, function(Je, Tt, Ln) {
          if ($(Je, Tt, Ln))
            return Ce = Tt, !1;
        }), Ce;
      }
      function Sr(P, $, H, Ce) {
        for (var Je = P.length, Tt = H + (Ce ? 1 : -1); Ce ? Tt-- : ++Tt < Je; )
          if ($(P[Tt], Tt, P))
            return Tt;
        return -1;
      }
      function Gs(P, $, H) {
        return $ === $ ? zs(P, $, H) : Sr(P, Pi, H);
      }
      function co(P, $, H, Ce) {
        for (var Je = H - 1, Tt = P.length; ++Je < Tt; )
          if (Ce(P[Je], $))
            return Je;
        return -1;
      }
      function Pi(P) {
        return P !== P;
      }
      function Fa(P, $) {
        var H = P == null ? 0 : P.length;
        return H ? Ga(P, $) / H : Le;
      }
      function qo(P) {
        return function($) {
          return $ == null ? n : $[P];
        };
      }
      function Ma(P) {
        return function($) {
          return P == null ? n : P[$];
        };
      }
      function Ko(P, $, H, Ce, Je) {
        return Je(P, function(Tt, Ln, Rt) {
          H = Ce ? (Ce = !1, Tt) : $(H, Tt, Ln, Rt);
        }), H;
      }
      function Ba(P, $) {
        var H = P.length;
        for (P.sort($); H--; )
          P[H] = P[H].value;
        return P;
      }
      function Ga(P, $) {
        for (var H, Ce = -1, Je = P.length; ++Ce < Je; ) {
          var Tt = $(P[Ce]);
          Tt !== n && (H = H === n ? Tt : H + Tt);
        }
        return H;
      }
      function ka(P, $) {
        for (var H = -1, Ce = Array(P); ++H < P; )
          Ce[H] = $(H);
        return Ce;
      }
      function Jl(P, $) {
        return kt($, function(H) {
          return [H, P[H]];
        });
      }
      function $l(P) {
        return P && P.slice(0, za(P) + 1).replace(Xt, "");
      }
      function qt(P) {
        return function($) {
          return P($);
        };
      }
      function jr(P, $) {
        return kt($, function(H) {
          return P[H];
        });
      }
      function ho(P, $) {
        return P.has($);
      }
      function Ar(P, $) {
        for (var H = -1, Ce = P.length; ++H < Ce && Gs($, P[H], 0) > -1; )
          ;
        return H;
      }
      function jl(P, $) {
        for (var H = P.length; H-- && Gs($, P[H], 0) > -1; )
          ;
        return H;
      }
      function ks(P, $) {
        for (var H = P.length, Ce = 0; H--; )
          P[H] === $ && ++Ce;
        return Ce;
      }
      var lc = Ma(Ul), fo = Ma(zl);
      function Xl(P) {
        return "\\" + Vl[P];
      }
      function Jo(P, $) {
        return P == null ? n : P[$];
      }
      function Us(P) {
        return Ca.test(P);
      }
      function Xr(P) {
        return ms.test(P);
      }
      function $o(P) {
        for (var $, H = []; !($ = P.next()).done; )
          H.push($.value);
        return H;
      }
      function Ua(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce, Je) {
          H[++$] = [Je, Ce];
        }), H;
      }
      function jo(P, $) {
        return function(H) {
          return P($(H));
        };
      }
      function Qr(P, $) {
        for (var H = -1, Ce = P.length, Je = 0, Tt = []; ++H < Ce; ) {
          var Ln = P[H];
          (Ln === $ || Ln === A) && (P[H] = A, Tt[Je++] = H);
        }
        return Tt;
      }
      function qi(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce) {
          H[++$] = Ce;
        }), H;
      }
      function uc(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce) {
          H[++$] = [Ce, Ce];
        }), H;
      }
      function zs(P, $, H) {
        for (var Ce = H - 1, Je = P.length; ++Ce < Je; )
          if (P[Ce] === $)
            return Ce;
        return -1;
      }
      function cc(P, $, H) {
        for (var Ce = H + 1; Ce--; )
          if (P[Ce] === $)
            return Ce;
        return Ce;
      }
      function vi(P) {
        return Us(P) ? Xo(P) : ac(P);
      }
      function yi(P) {
        return Us(P) ? Wa(P) : ql(P);
      }
      function za(P) {
        for (var $ = P.length; $-- && _t.test(P.charAt($)); )
          ;
        return $;
      }
      var Va = Ma(ic);
      function Xo(P) {
        for (var $ = oo.lastIndex = 0; oo.test(P); )
          ++$;
        return $;
      }
      function Wa(P) {
        return P.match(oo) || [];
      }
      function Qo(P) {
        return P.match(Aa) || [];
      }
      var Vs = (function P($) {
        $ = $ == null ? Vn : Gr.defaults(Vn.Object(), $, Gr.pick(Vn, ba));
        var H = $.Array, Ce = $.Date, Je = $.Error, Tt = $.Function, Ln = $.Math, Rt = $.Object, Za = $.RegExp, Cr = $.String, oi = $.TypeError, ea = H.prototype, ta = Tt.prototype, Ws = Rt.prototype, po = $["__core-js_shared__"], na = ta.toString, mt = Ws.hasOwnProperty, hc = 0, vs = (function() {
          var t = /[^.]+$/.exec(po && po.keys && po.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), go = Ws.toString, Ql = na.call(Rt), dc = Vn._, kr = Za(
          "^" + na.call(mt).replace(Nt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), _o = Ia ? $.Buffer : n, Ur = $.Symbol, es = $.Uint8Array, eu = _o ? _o.allocUnsafe : n, ys = jo(Rt.getPrototypeOf, Rt), Zs = Rt.create, Ha = Ws.propertyIsEnumerable, mo = ea.splice, tu = Ur ? Ur.isConcatSpreadable : n, Hs = Ur ? Ur.iterator : n, ts = Ur ? Ur.toStringTag : n, vo = (function() {
          try {
            var t = Oo(Rt, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), nu = $.clearTimeout !== Vn.clearTimeout && $.clearTimeout, iu = Ce && Ce.now !== Vn.Date.now && Ce.now, fc = $.setTimeout !== Vn.setTimeout && $.setTimeout, yo = Ln.ceil, Eo = Ln.floor, Ya = Rt.getOwnPropertySymbols, e = _o ? _o.isBuffer : n, r = $.isFinite, a = ea.join, c = jo(Rt.keys, Rt), f = Ln.max, y = Ln.min, I = Ce.now, B = $.parseInt, W = Ln.random, te = ea.reverse, Ae = Oo($, "DataView"), Fe = Oo($, "Map"), st = Oo($, "Promise"), _n = Oo($, "Set"), en = Oo($, "WeakMap"), Jn = Oo(Rt, "create"), Wn = en && new en(), sr = {}, pc = Lo(Ae), gc = Lo(Fe), _c = Lo(st), ru = Lo(_n), mc = Lo(en), To = Ur ? Ur.prototype : n, Vt = To ? To.valueOf : n, wo = To ? To.toString : n;
        function T(t) {
          if (mn(t) && !it(t) && !(t instanceof ht)) {
            if (t instanceof Ei)
              return t;
            if (mt.call(t, "__wrapped__"))
              return nf(t);
          }
          return new Ei(t);
        }
        var Ys = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(s) {
            if (!cn(s))
              return {};
            if (Zs)
              return Zs(s);
            t.prototype = s;
            var u = new t();
            return t.prototype = n, u;
          };
        })();
        function ia() {
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
        }, T.prototype = ia.prototype, T.prototype.constructor = T, Ei.prototype = Ys(ia.prototype), Ei.prototype.constructor = Ei;
        function ht(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ke, this.__views__ = [];
        }
        function vc() {
          var t = new ht(this.__wrapped__);
          return t.__actions__ = Ki(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ki(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ki(this.__views__), t;
        }
        function Yg() {
          if (this.__filtered__) {
            var t = new ht(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function qg() {
          var t = this.__wrapped__.value(), s = this.__dir__, u = it(t), h = s < 0, _ = u ? t.length : 0, S = sm(0, _, this.__views__), b = S.start, D = S.end, M = D - b, Q = h ? D : b - 1, ee = this.__iteratees__, re = ee.length, Te = 0, Re = y(M, this.__takeCount__);
          if (!u || !h && _ == M && Re == M)
            return Cd(t, this.__actions__);
          var Ve = [];
          e:
            for (; M-- && Te < Re; ) {
              Q += s;
              for (var ut = -1, We = t[Q]; ++ut < re; ) {
                var ft = ee[ut], vt = ft.iteratee, lr = ft.type, Mi = vt(We);
                if (lr == ie)
                  We = Mi;
                else if (!Mi) {
                  if (lr == U)
                    continue e;
                  break e;
                }
              }
              Ve[Te++] = We;
            }
          return Ve;
        }
        ht.prototype = Ys(ia.prototype), ht.prototype.constructor = ht;
        function So(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function Kg() {
          this.__data__ = Jn ? Jn(null) : {}, this.size = 0;
        }
        function Jg(t) {
          var s = this.has(t) && delete this.__data__[t];
          return this.size -= s ? 1 : 0, s;
        }
        function $g(t) {
          var s = this.__data__;
          if (Jn) {
            var u = s[t];
            return u === m ? n : u;
          }
          return mt.call(s, t) ? s[t] : n;
        }
        function jg(t) {
          var s = this.__data__;
          return Jn ? s[t] !== n : mt.call(s, t);
        }
        function Xg(t, s) {
          var u = this.__data__;
          return this.size += this.has(t) ? 0 : 1, u[t] = Jn && s === n ? m : s, this;
        }
        So.prototype.clear = Kg, So.prototype.delete = Jg, So.prototype.get = $g, So.prototype.has = jg, So.prototype.set = Xg;
        function Es(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function Qg() {
          this.__data__ = [], this.size = 0;
        }
        function e_(t) {
          var s = this.__data__, u = su(s, t);
          if (u < 0)
            return !1;
          var h = s.length - 1;
          return u == h ? s.pop() : mo.call(s, u, 1), --this.size, !0;
        }
        function t_(t) {
          var s = this.__data__, u = su(s, t);
          return u < 0 ? n : s[u][1];
        }
        function n_(t) {
          return su(this.__data__, t) > -1;
        }
        function i_(t, s) {
          var u = this.__data__, h = su(u, t);
          return h < 0 ? (++this.size, u.push([t, s])) : u[h][1] = s, this;
        }
        Es.prototype.clear = Qg, Es.prototype.delete = e_, Es.prototype.get = t_, Es.prototype.has = n_, Es.prototype.set = i_;
        function Ts(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function r_() {
          this.size = 0, this.__data__ = {
            hash: new So(),
            map: new (Fe || Es)(),
            string: new So()
          };
        }
        function s_(t) {
          var s = mu(this, t).delete(t);
          return this.size -= s ? 1 : 0, s;
        }
        function o_(t) {
          return mu(this, t).get(t);
        }
        function a_(t) {
          return mu(this, t).has(t);
        }
        function l_(t, s) {
          var u = mu(this, t), h = u.size;
          return u.set(t, s), this.size += u.size == h ? 0 : 1, this;
        }
        Ts.prototype.clear = r_, Ts.prototype.delete = s_, Ts.prototype.get = o_, Ts.prototype.has = a_, Ts.prototype.set = l_;
        function Ao(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.__data__ = new Ts(); ++s < u; )
            this.add(t[s]);
        }
        function u_(t) {
          return this.__data__.set(t, m), this;
        }
        function c_(t) {
          return this.__data__.has(t);
        }
        Ao.prototype.add = Ao.prototype.push = u_, Ao.prototype.has = c_;
        function zr(t) {
          var s = this.__data__ = new Es(t);
          this.size = s.size;
        }
        function h_() {
          this.__data__ = new Es(), this.size = 0;
        }
        function d_(t) {
          var s = this.__data__, u = s.delete(t);
          return this.size = s.size, u;
        }
        function f_(t) {
          return this.__data__.get(t);
        }
        function p_(t) {
          return this.__data__.has(t);
        }
        function g_(t, s) {
          var u = this.__data__;
          if (u instanceof Es) {
            var h = u.__data__;
            if (!Fe || h.length < d - 1)
              return h.push([t, s]), this.size = ++u.size, this;
            u = this.__data__ = new Ts(h);
          }
          return u.set(t, s), this.size = u.size, this;
        }
        zr.prototype.clear = h_, zr.prototype.delete = d_, zr.prototype.get = f_, zr.prototype.has = p_, zr.prototype.set = g_;
        function nd(t, s) {
          var u = it(t), h = !u && Io(t), _ = !u && !h && js(t), S = !u && !h && !_ && aa(t), b = u || h || _ || S, D = b ? ka(t.length, Cr) : [], M = D.length;
          for (var Q in t)
            (s || mt.call(t, Q)) && !(b && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            _ && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            S && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
            Cs(Q, M))) && D.push(Q);
          return D;
        }
        function id(t) {
          var s = t.length;
          return s ? t[Ic(0, s - 1)] : n;
        }
        function __(t, s) {
          return vu(Ki(t), Co(s, 0, t.length));
        }
        function m_(t) {
          return vu(Ki(t));
        }
        function yc(t, s, u) {
          (u !== n && !Vr(t[s], u) || u === n && !(s in t)) && ws(t, s, u);
        }
        function qa(t, s, u) {
          var h = t[s];
          (!(mt.call(t, s) && Vr(h, u)) || u === n && !(s in t)) && ws(t, s, u);
        }
        function su(t, s) {
          for (var u = t.length; u--; )
            if (Vr(t[u][0], s))
              return u;
          return -1;
        }
        function v_(t, s, u, h) {
          return qs(t, function(_, S, b) {
            s(h, _, u(_), b);
          }), h;
        }
        function rd(t, s) {
          return t && is(s, $n(s), t);
        }
        function y_(t, s) {
          return t && is(s, $i(s), t);
        }
        function ws(t, s, u) {
          s == "__proto__" && vo ? vo(t, s, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : t[s] = u;
        }
        function Ec(t, s) {
          for (var u = -1, h = s.length, _ = H(h), S = t == null; ++u < h; )
            _[u] = S ? n : eh(t, s[u]);
          return _;
        }
        function Co(t, s, u) {
          return t === t && (u !== n && (t = t <= u ? t : u), s !== n && (t = t >= s ? t : s)), t;
        }
        function br(t, s, u, h, _, S) {
          var b, D = s & w, M = s & O, Q = s & N;
          if (u && (b = _ ? u(t, h, _, S) : u(t)), b !== n)
            return b;
          if (!cn(t))
            return t;
          var ee = it(t);
          if (ee) {
            if (b = am(t), !D)
              return Ki(t, b);
          } else {
            var re = Ti(t), Te = re == Un || re == Ui;
            if (js(t))
              return Ld(t, D);
            if (re == on || re == Ue || Te && !_) {
              if (b = M || Te ? {} : qd(t), !D)
                return M ? $_(t, y_(b, t)) : J_(t, rd(b, t));
            } else {
              if (!Et[re])
                return _ ? t : {};
              b = lm(t, re, D);
            }
          }
          S || (S = new zr());
          var Re = S.get(t);
          if (Re)
            return Re;
          S.set(t, b), Sf(t) ? t.forEach(function(We) {
            b.add(br(We, s, u, We, t, S));
          }) : Tf(t) && t.forEach(function(We, ft) {
            b.set(ft, br(We, s, u, ft, t, S));
          });
          var Ve = Q ? M ? Uc : kc : M ? $i : $n, ut = ee ? n : Ve(t);
          return Ri(ut || t, function(We, ft) {
            ut && (ft = We, We = t[ft]), qa(b, ft, br(We, s, u, ft, t, S));
          }), b;
        }
        function E_(t) {
          var s = $n(t);
          return function(u) {
            return sd(u, t, s);
          };
        }
        function sd(t, s, u) {
          var h = u.length;
          if (t == null)
            return !h;
          for (t = Rt(t); h--; ) {
            var _ = u[h], S = s[_], b = t[_];
            if (b === n && !(_ in t) || !S(b))
              return !1;
          }
          return !0;
        }
        function od(t, s, u) {
          if (typeof t != "function")
            throw new oi(g);
          return el(function() {
            t.apply(n, u);
          }, s);
        }
        function Ka(t, s, u, h) {
          var _ = -1, S = Bs, b = !0, D = t.length, M = [], Q = s.length;
          if (!D)
            return M;
          u && (s = kt(s, qt(u))), h ? (S = Pa, b = !1) : s.length >= d && (S = ho, b = !1, s = new Ao(s));
          e:
            for (; ++_ < D; ) {
              var ee = t[_], re = u == null ? ee : u(ee);
              if (ee = h || ee !== 0 ? ee : 0, b && re === re) {
                for (var Te = Q; Te--; )
                  if (s[Te] === re)
                    continue e;
                M.push(ee);
              } else S(s, re, h) || M.push(ee);
            }
          return M;
        }
        var qs = Pd(ns), ad = Pd(wc, !0);
        function T_(t, s) {
          var u = !0;
          return qs(t, function(h, _, S) {
            return u = !!s(h, _, S), u;
          }), u;
        }
        function ou(t, s, u) {
          for (var h = -1, _ = t.length; ++h < _; ) {
            var S = t[h], b = s(S);
            if (b != null && (D === n ? b === b && !ar(b) : u(b, D)))
              var D = b, M = S;
          }
          return M;
        }
        function w_(t, s, u, h) {
          var _ = t.length;
          for (u = at(u), u < 0 && (u = -u > _ ? 0 : _ + u), h = h === n || h > _ ? _ : at(h), h < 0 && (h += _), h = u > h ? 0 : Cf(h); u < h; )
            t[u++] = s;
          return t;
        }
        function ld(t, s) {
          var u = [];
          return qs(t, function(h, _, S) {
            s(h, _, S) && u.push(h);
          }), u;
        }
        function ai(t, s, u, h, _) {
          var S = -1, b = t.length;
          for (u || (u = cm), _ || (_ = []); ++S < b; ) {
            var D = t[S];
            s > 0 && u(D) ? s > 1 ? ai(D, s - 1, u, h, _) : Br(_, D) : h || (_[_.length] = D);
          }
          return _;
        }
        var Tc = xd(), ud = xd(!0);
        function ns(t, s) {
          return t && Tc(t, s, $n);
        }
        function wc(t, s) {
          return t && ud(t, s, $n);
        }
        function au(t, s) {
          return Mr(s, function(u) {
            return bs(t[u]);
          });
        }
        function bo(t, s) {
          s = Js(s, t);
          for (var u = 0, h = s.length; t != null && u < h; )
            t = t[rs(s[u++])];
          return u && u == h ? t : n;
        }
        function cd(t, s, u) {
          var h = s(t);
          return it(t) ? h : Br(h, u(t));
        }
        function xi(t) {
          return t == null ? t === n ? Vi : zi : ts && ts in Rt(t) ? rm(t) : mm(t);
        }
        function Sc(t, s) {
          return t > s;
        }
        function S_(t, s) {
          return t != null && mt.call(t, s);
        }
        function A_(t, s) {
          return t != null && s in Rt(t);
        }
        function C_(t, s, u) {
          return t >= y(s, u) && t < f(s, u);
        }
        function Ac(t, s, u) {
          for (var h = u ? Pa : Bs, _ = t[0].length, S = t.length, b = S, D = H(S), M = 1 / 0, Q = []; b--; ) {
            var ee = t[b];
            b && s && (ee = kt(ee, qt(s))), M = y(ee.length, M), D[b] = !u && (s || _ >= 120 && ee.length >= 120) ? new Ao(b && ee) : n;
          }
          ee = t[0];
          var re = -1, Te = D[0];
          e:
            for (; ++re < _ && Q.length < M; ) {
              var Re = ee[re], Ve = s ? s(Re) : Re;
              if (Re = u || Re !== 0 ? Re : 0, !(Te ? ho(Te, Ve) : h(Q, Ve, u))) {
                for (b = S; --b; ) {
                  var ut = D[b];
                  if (!(ut ? ho(ut, Ve) : h(t[b], Ve, u)))
                    continue e;
                }
                Te && Te.push(Ve), Q.push(Re);
              }
            }
          return Q;
        }
        function b_(t, s, u, h) {
          return ns(t, function(_, S, b) {
            s(h, u(_), S, b);
          }), h;
        }
        function Ja(t, s, u) {
          s = Js(s, t), t = jd(t, s);
          var h = t == null ? t : t[rs(Lr(s))];
          return h == null ? n : Qt(h, t, u);
        }
        function hd(t) {
          return mn(t) && xi(t) == Ue;
        }
        function O_(t) {
          return mn(t) && xi(t) == pn;
        }
        function L_(t) {
          return mn(t) && xi(t) == Pn;
        }
        function $a(t, s, u, h, _) {
          return t === s ? !0 : t == null || s == null || !mn(t) && !mn(s) ? t !== t && s !== s : I_(t, s, u, h, $a, _);
        }
        function I_(t, s, u, h, _, S) {
          var b = it(t), D = it(s), M = b ? Pe : Ti(t), Q = D ? Pe : Ti(s);
          M = M == Ue ? on : M, Q = Q == Ue ? on : Q;
          var ee = M == on, re = Q == on, Te = M == Q;
          if (Te && js(t)) {
            if (!js(s))
              return !1;
            b = !0, ee = !1;
          }
          if (Te && !ee)
            return S || (S = new zr()), b || aa(t) ? Zd(t, s, u, h, _, S) : nm(t, s, M, u, h, _, S);
          if (!(u & k)) {
            var Re = ee && mt.call(t, "__wrapped__"), Ve = re && mt.call(s, "__wrapped__");
            if (Re || Ve) {
              var ut = Re ? t.value() : t, We = Ve ? s.value() : s;
              return S || (S = new zr()), _(ut, We, u, h, S);
            }
          }
          return Te ? (S || (S = new zr()), im(t, s, u, h, _, S)) : !1;
        }
        function N_(t) {
          return mn(t) && Ti(t) == fn;
        }
        function Cc(t, s, u, h) {
          var _ = u.length, S = _, b = !h;
          if (t == null)
            return !S;
          for (t = Rt(t); _--; ) {
            var D = u[_];
            if (b && D[2] ? D[1] !== t[D[0]] : !(D[0] in t))
              return !1;
          }
          for (; ++_ < S; ) {
            D = u[_];
            var M = D[0], Q = t[M], ee = D[1];
            if (b && D[2]) {
              if (Q === n && !(M in t))
                return !1;
            } else {
              var re = new zr();
              if (h)
                var Te = h(Q, ee, M, t, s, re);
              if (!(Te === n ? $a(ee, Q, k | G, h, re) : Te))
                return !1;
            }
          }
          return !0;
        }
        function dd(t) {
          if (!cn(t) || dm(t))
            return !1;
          var s = bs(t) ? kr : ri;
          return s.test(Lo(t));
        }
        function D_(t) {
          return mn(t) && xi(t) == qn;
        }
        function R_(t) {
          return mn(t) && Ti(t) == jt;
        }
        function P_(t) {
          return mn(t) && Au(t.length) && !!nt[xi(t)];
        }
        function fd(t) {
          return typeof t == "function" ? t : t == null ? ji : typeof t == "object" ? it(t) ? _d(t[0], t[1]) : gd(t) : Mf(t);
        }
        function bc(t) {
          if (!Qa(t))
            return c(t);
          var s = [];
          for (var u in Rt(t))
            mt.call(t, u) && u != "constructor" && s.push(u);
          return s;
        }
        function x_(t) {
          if (!cn(t))
            return _m(t);
          var s = Qa(t), u = [];
          for (var h in t)
            h == "constructor" && (s || !mt.call(t, h)) || u.push(h);
          return u;
        }
        function Oc(t, s) {
          return t < s;
        }
        function pd(t, s) {
          var u = -1, h = Ji(t) ? H(t.length) : [];
          return qs(t, function(_, S, b) {
            h[++u] = s(_, S, b);
          }), h;
        }
        function gd(t) {
          var s = Vc(t);
          return s.length == 1 && s[0][2] ? Jd(s[0][0], s[0][1]) : function(u) {
            return u === t || Cc(u, t, s);
          };
        }
        function _d(t, s) {
          return Zc(t) && Kd(s) ? Jd(rs(t), s) : function(u) {
            var h = eh(u, t);
            return h === n && h === s ? th(u, t) : $a(s, h, k | G);
          };
        }
        function lu(t, s, u, h, _) {
          t !== s && Tc(s, function(S, b) {
            if (_ || (_ = new zr()), cn(S))
              F_(t, s, b, u, lu, h, _);
            else {
              var D = h ? h(Yc(t, b), S, b + "", t, s, _) : n;
              D === n && (D = S), yc(t, b, D);
            }
          }, $i);
        }
        function F_(t, s, u, h, _, S, b) {
          var D = Yc(t, u), M = Yc(s, u), Q = b.get(M);
          if (Q) {
            yc(t, u, Q);
            return;
          }
          var ee = S ? S(D, M, u + "", t, s, b) : n, re = ee === n;
          if (re) {
            var Te = it(M), Re = !Te && js(M), Ve = !Te && !Re && aa(M);
            ee = M, Te || Re || Ve ? it(D) ? ee = D : In(D) ? ee = Ki(D) : Re ? (re = !1, ee = Ld(M, !0)) : Ve ? (re = !1, ee = Id(M, !0)) : ee = [] : tl(M) || Io(M) ? (ee = D, Io(D) ? ee = bf(D) : (!cn(D) || bs(D)) && (ee = qd(M))) : re = !1;
          }
          re && (b.set(M, ee), _(ee, M, h, S, b), b.delete(M)), yc(t, u, ee);
        }
        function md(t, s) {
          var u = t.length;
          if (u)
            return s += s < 0 ? u : 0, Cs(s, u) ? t[s] : n;
        }
        function vd(t, s, u) {
          s.length ? s = kt(s, function(S) {
            return it(S) ? function(b) {
              return bo(b, S.length === 1 ? S[0] : S);
            } : S;
          }) : s = [ji];
          var h = -1;
          s = kt(s, qt(ze()));
          var _ = pd(t, function(S, b, D) {
            var M = kt(s, function(Q) {
              return Q(S);
            });
            return { criteria: M, index: ++h, value: S };
          });
          return Ba(_, function(S, b) {
            return K_(S, b, u);
          });
        }
        function M_(t, s) {
          return yd(t, s, function(u, h) {
            return th(t, h);
          });
        }
        function yd(t, s, u) {
          for (var h = -1, _ = s.length, S = {}; ++h < _; ) {
            var b = s[h], D = bo(t, b);
            u(D, b) && ja(S, Js(b, t), D);
          }
          return S;
        }
        function B_(t) {
          return function(s) {
            return bo(s, t);
          };
        }
        function Lc(t, s, u, h) {
          var _ = h ? co : Gs, S = -1, b = s.length, D = t;
          for (t === s && (s = Ki(s)), u && (D = kt(t, qt(u))); ++S < b; )
            for (var M = 0, Q = s[S], ee = u ? u(Q) : Q; (M = _(D, ee, M, h)) > -1; )
              D !== t && mo.call(D, M, 1), mo.call(t, M, 1);
          return t;
        }
        function Ed(t, s) {
          for (var u = t ? s.length : 0, h = u - 1; u--; ) {
            var _ = s[u];
            if (u == h || _ !== S) {
              var S = _;
              Cs(_) ? mo.call(t, _, 1) : Rc(t, _);
            }
          }
          return t;
        }
        function Ic(t, s) {
          return t + Eo(W() * (s - t + 1));
        }
        function G_(t, s, u, h) {
          for (var _ = -1, S = f(yo((s - t) / (u || 1)), 0), b = H(S); S--; )
            b[h ? S : ++_] = t, t += u;
          return b;
        }
        function Nc(t, s) {
          var u = "";
          if (!t || s < 1 || s > de)
            return u;
          do
            s % 2 && (u += t), s = Eo(s / 2), s && (t += t);
          while (s);
          return u;
        }
        function dt(t, s) {
          return qc($d(t, s, ji), t + "");
        }
        function k_(t) {
          return id(la(t));
        }
        function U_(t, s) {
          var u = la(t);
          return vu(u, Co(s, 0, u.length));
        }
        function ja(t, s, u, h) {
          if (!cn(t))
            return t;
          s = Js(s, t);
          for (var _ = -1, S = s.length, b = S - 1, D = t; D != null && ++_ < S; ) {
            var M = rs(s[_]), Q = u;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return t;
            if (_ != b) {
              var ee = D[M];
              Q = h ? h(ee, M, D) : n, Q === n && (Q = cn(ee) ? ee : Cs(s[_ + 1]) ? [] : {});
            }
            qa(D, M, Q), D = D[M];
          }
          return t;
        }
        var Td = Wn ? function(t, s) {
          return Wn.set(t, s), t;
        } : ji, z_ = vo ? function(t, s) {
          return vo(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ih(s),
            writable: !0
          });
        } : ji;
        function V_(t) {
          return vu(la(t));
        }
        function Or(t, s, u) {
          var h = -1, _ = t.length;
          s < 0 && (s = -s > _ ? 0 : _ + s), u = u > _ ? _ : u, u < 0 && (u += _), _ = s > u ? 0 : u - s >>> 0, s >>>= 0;
          for (var S = H(_); ++h < _; )
            S[h] = t[h + s];
          return S;
        }
        function W_(t, s) {
          var u;
          return qs(t, function(h, _, S) {
            return u = s(h, _, S), !u;
          }), !!u;
        }
        function uu(t, s, u) {
          var h = 0, _ = t == null ? h : t.length;
          if (typeof s == "number" && s === s && _ <= Bt) {
            for (; h < _; ) {
              var S = h + _ >>> 1, b = t[S];
              b !== null && !ar(b) && (u ? b <= s : b < s) ? h = S + 1 : _ = S;
            }
            return _;
          }
          return Dc(t, s, ji, u);
        }
        function Dc(t, s, u, h) {
          var _ = 0, S = t == null ? 0 : t.length;
          if (S === 0)
            return 0;
          s = u(s);
          for (var b = s !== s, D = s === null, M = ar(s), Q = s === n; _ < S; ) {
            var ee = Eo((_ + S) / 2), re = u(t[ee]), Te = re !== n, Re = re === null, Ve = re === re, ut = ar(re);
            if (b)
              var We = h || Ve;
            else Q ? We = Ve && (h || Te) : D ? We = Ve && Te && (h || !Re) : M ? We = Ve && Te && !Re && (h || !ut) : Re || ut ? We = !1 : We = h ? re <= s : re < s;
            We ? _ = ee + 1 : S = ee;
          }
          return y(S, xt);
        }
        function wd(t, s) {
          for (var u = -1, h = t.length, _ = 0, S = []; ++u < h; ) {
            var b = t[u], D = s ? s(b) : b;
            if (!u || !Vr(D, M)) {
              var M = D;
              S[_++] = b === 0 ? 0 : b;
            }
          }
          return S;
        }
        function Sd(t) {
          return typeof t == "number" ? t : ar(t) ? Le : +t;
        }
        function or(t) {
          if (typeof t == "string")
            return t;
          if (it(t))
            return kt(t, or) + "";
          if (ar(t))
            return wo ? wo.call(t) : "";
          var s = t + "";
          return s == "0" && 1 / t == -Ee ? "-0" : s;
        }
        function Ks(t, s, u) {
          var h = -1, _ = Bs, S = t.length, b = !0, D = [], M = D;
          if (u)
            b = !1, _ = Pa;
          else if (S >= d) {
            var Q = s ? null : em(t);
            if (Q)
              return qi(Q);
            b = !1, _ = ho, M = new Ao();
          } else
            M = s ? [] : D;
          e:
            for (; ++h < S; ) {
              var ee = t[h], re = s ? s(ee) : ee;
              if (ee = u || ee !== 0 ? ee : 0, b && re === re) {
                for (var Te = M.length; Te--; )
                  if (M[Te] === re)
                    continue e;
                s && M.push(re), D.push(ee);
              } else _(M, re, u) || (M !== D && M.push(re), D.push(ee));
            }
          return D;
        }
        function Rc(t, s) {
          return s = Js(s, t), t = jd(t, s), t == null || delete t[rs(Lr(s))];
        }
        function Ad(t, s, u, h) {
          return ja(t, s, u(bo(t, s)), h);
        }
        function cu(t, s, u, h) {
          for (var _ = t.length, S = h ? _ : -1; (h ? S-- : ++S < _) && s(t[S], S, t); )
            ;
          return u ? Or(t, h ? 0 : S, h ? S + 1 : _) : Or(t, h ? S + 1 : 0, h ? _ : S);
        }
        function Cd(t, s) {
          var u = t;
          return u instanceof ht && (u = u.value()), xa(s, function(h, _) {
            return _.func.apply(_.thisArg, Br([h], _.args));
          }, u);
        }
        function Pc(t, s, u) {
          var h = t.length;
          if (h < 2)
            return h ? Ks(t[0]) : [];
          for (var _ = -1, S = H(h); ++_ < h; )
            for (var b = t[_], D = -1; ++D < h; )
              D != _ && (S[_] = Ka(S[_] || b, t[D], s, u));
          return Ks(ai(S, 1), s, u);
        }
        function bd(t, s, u) {
          for (var h = -1, _ = t.length, S = s.length, b = {}; ++h < _; ) {
            var D = h < S ? s[h] : n;
            u(b, t[h], D);
          }
          return b;
        }
        function xc(t) {
          return In(t) ? t : [];
        }
        function Fc(t) {
          return typeof t == "function" ? t : ji;
        }
        function Js(t, s) {
          return it(t) ? t : Zc(t, s) ? [t] : tf(Pt(t));
        }
        var Z_ = dt;
        function $s(t, s, u) {
          var h = t.length;
          return u = u === n ? h : u, !s && u >= h ? t : Or(t, s, u);
        }
        var Od = nu || function(t) {
          return Vn.clearTimeout(t);
        };
        function Ld(t, s) {
          if (s)
            return t.slice();
          var u = t.length, h = eu ? eu(u) : new t.constructor(u);
          return t.copy(h), h;
        }
        function Mc(t) {
          var s = new t.constructor(t.byteLength);
          return new es(s).set(new es(t)), s;
        }
        function H_(t, s) {
          var u = s ? Mc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.byteLength);
        }
        function Y_(t) {
          var s = new t.constructor(t.source, lt.exec(t));
          return s.lastIndex = t.lastIndex, s;
        }
        function q_(t) {
          return Vt ? Rt(Vt.call(t)) : {};
        }
        function Id(t, s) {
          var u = s ? Mc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.length);
        }
        function Nd(t, s) {
          if (t !== s) {
            var u = t !== n, h = t === null, _ = t === t, S = ar(t), b = s !== n, D = s === null, M = s === s, Q = ar(s);
            if (!D && !Q && !S && t > s || S && b && M && !D && !Q || h && b && M || !u && M || !_)
              return 1;
            if (!h && !S && !Q && t < s || Q && u && _ && !h && !S || D && u && _ || !b && _ || !M)
              return -1;
          }
          return 0;
        }
        function K_(t, s, u) {
          for (var h = -1, _ = t.criteria, S = s.criteria, b = _.length, D = u.length; ++h < b; ) {
            var M = Nd(_[h], S[h]);
            if (M) {
              if (h >= D)
                return M;
              var Q = u[h];
              return M * (Q == "desc" ? -1 : 1);
            }
          }
          return t.index - s.index;
        }
        function Dd(t, s, u, h) {
          for (var _ = -1, S = t.length, b = u.length, D = -1, M = s.length, Q = f(S - b, 0), ee = H(M + Q), re = !h; ++D < M; )
            ee[D] = s[D];
          for (; ++_ < b; )
            (re || _ < S) && (ee[u[_]] = t[_]);
          for (; Q--; )
            ee[D++] = t[_++];
          return ee;
        }
        function Rd(t, s, u, h) {
          for (var _ = -1, S = t.length, b = -1, D = u.length, M = -1, Q = s.length, ee = f(S - D, 0), re = H(ee + Q), Te = !h; ++_ < ee; )
            re[_] = t[_];
          for (var Re = _; ++M < Q; )
            re[Re + M] = s[M];
          for (; ++b < D; )
            (Te || _ < S) && (re[Re + u[b]] = t[_++]);
          return re;
        }
        function Ki(t, s) {
          var u = -1, h = t.length;
          for (s || (s = H(h)); ++u < h; )
            s[u] = t[u];
          return s;
        }
        function is(t, s, u, h) {
          var _ = !u;
          u || (u = {});
          for (var S = -1, b = s.length; ++S < b; ) {
            var D = s[S], M = h ? h(u[D], t[D], D, u, t) : n;
            M === n && (M = t[D]), _ ? ws(u, D, M) : qa(u, D, M);
          }
          return u;
        }
        function J_(t, s) {
          return is(t, Wc(t), s);
        }
        function $_(t, s) {
          return is(t, Hd(t), s);
        }
        function hu(t, s) {
          return function(u, h) {
            var _ = it(u) ? sc : v_, S = s ? s() : {};
            return _(u, t, ze(h, 2), S);
          };
        }
        function ra(t) {
          return dt(function(s, u) {
            var h = -1, _ = u.length, S = _ > 1 ? u[_ - 1] : n, b = _ > 2 ? u[2] : n;
            for (S = t.length > 3 && typeof S == "function" ? (_--, S) : n, b && Fi(u[0], u[1], b) && (S = _ < 3 ? n : S, _ = 1), s = Rt(s); ++h < _; ) {
              var D = u[h];
              D && t(s, D, h, S);
            }
            return s;
          });
        }
        function Pd(t, s) {
          return function(u, h) {
            if (u == null)
              return u;
            if (!Ji(u))
              return t(u, h);
            for (var _ = u.length, S = s ? _ : -1, b = Rt(u); (s ? S-- : ++S < _) && h(b[S], S, b) !== !1; )
              ;
            return u;
          };
        }
        function xd(t) {
          return function(s, u, h) {
            for (var _ = -1, S = Rt(s), b = h(s), D = b.length; D--; ) {
              var M = b[t ? D : ++_];
              if (u(S[M], M, S) === !1)
                break;
            }
            return s;
          };
        }
        function j_(t, s, u) {
          var h = s & X, _ = Xa(t);
          function S() {
            var b = this && this !== Vn && this instanceof S ? _ : t;
            return b.apply(h ? u : this, arguments);
          }
          return S;
        }
        function Fd(t) {
          return function(s) {
            s = Pt(s);
            var u = Us(s) ? yi(s) : n, h = u ? u[0] : s.charAt(0), _ = u ? $s(u, 1).join("") : s.slice(1);
            return h[t]() + _;
          };
        }
        function sa(t) {
          return function(s) {
            return xa(xf(Pf(s).replace(Ft, "")), t, "");
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
            var u = Ys(t.prototype), h = t.apply(u, s);
            return cn(h) ? h : u;
          };
        }
        function X_(t, s, u) {
          var h = Xa(t);
          function _() {
            for (var S = arguments.length, b = H(S), D = S, M = oa(_); D--; )
              b[D] = arguments[D];
            var Q = S < 3 && b[0] !== M && b[S - 1] !== M ? [] : Qr(b, M);
            if (S -= Q.length, S < u)
              return Ud(
                t,
                s,
                du,
                _.placeholder,
                n,
                b,
                Q,
                n,
                n,
                u - S
              );
            var ee = this && this !== Vn && this instanceof _ ? h : t;
            return Qt(ee, this, b);
          }
          return _;
        }
        function Md(t) {
          return function(s, u, h) {
            var _ = Rt(s);
            if (!Ji(s)) {
              var S = ze(u, 3);
              s = $n(s), u = function(D) {
                return S(_[D], D, _);
              };
            }
            var b = t(s, u, h);
            return b > -1 ? _[S ? s[b] : b] : n;
          };
        }
        function Bd(t) {
          return As(function(s) {
            var u = s.length, h = u, _ = Ei.prototype.thru;
            for (t && s.reverse(); h--; ) {
              var S = s[h];
              if (typeof S != "function")
                throw new oi(g);
              if (_ && !b && _u(S) == "wrapper")
                var b = new Ei([], !0);
            }
            for (h = b ? h : u; ++h < u; ) {
              S = s[h];
              var D = _u(S), M = D == "wrapper" ? zc(S) : n;
              M && Hc(M[0]) && M[1] == (Se | Y | q | Ie) && !M[4].length && M[9] == 1 ? b = b[_u(M[0])].apply(b, M[3]) : b = S.length == 1 && Hc(S) ? b[D]() : b.thru(S);
            }
            return function() {
              var Q = arguments, ee = Q[0];
              if (b && Q.length == 1 && it(ee))
                return b.plant(ee).value();
              for (var re = 0, Te = u ? s[re].apply(this, Q) : ee; ++re < u; )
                Te = s[re].call(this, Te);
              return Te;
            };
          });
        }
        function du(t, s, u, h, _, S, b, D, M, Q) {
          var ee = s & Se, re = s & X, Te = s & x, Re = s & (Y | R), Ve = s & he, ut = Te ? n : Xa(t);
          function We() {
            for (var ft = arguments.length, vt = H(ft), lr = ft; lr--; )
              vt[lr] = arguments[lr];
            if (Re)
              var Mi = oa(We), ur = ks(vt, Mi);
            if (h && (vt = Dd(vt, h, _, Re)), S && (vt = Rd(vt, S, b, Re)), ft -= ur, Re && ft < Q) {
              var Nn = Qr(vt, Mi);
              return Ud(
                t,
                s,
                du,
                We.placeholder,
                u,
                vt,
                Nn,
                D,
                M,
                Q - ft
              );
            }
            var Wr = re ? u : this, Ls = Te ? Wr[t] : t;
            return ft = vt.length, D ? vt = vm(vt, D) : Ve && ft > 1 && vt.reverse(), ee && M < ft && (vt.length = M), this && this !== Vn && this instanceof We && (Ls = ut || Xa(Ls)), Ls.apply(Wr, vt);
          }
          return We;
        }
        function Gd(t, s) {
          return function(u, h) {
            return b_(u, t, s(h), {});
          };
        }
        function fu(t, s) {
          return function(u, h) {
            var _;
            if (u === n && h === n)
              return s;
            if (u !== n && (_ = u), h !== n) {
              if (_ === n)
                return h;
              typeof u == "string" || typeof h == "string" ? (u = or(u), h = or(h)) : (u = Sd(u), h = Sd(h)), _ = t(u, h);
            }
            return _;
          };
        }
        function Bc(t) {
          return As(function(s) {
            return s = kt(s, qt(ze())), dt(function(u) {
              var h = this;
              return t(s, function(_) {
                return Qt(_, h, u);
              });
            });
          });
        }
        function pu(t, s) {
          s = s === n ? " " : or(s);
          var u = s.length;
          if (u < 2)
            return u ? Nc(s, t) : s;
          var h = Nc(s, yo(t / vi(s)));
          return Us(s) ? $s(yi(h), 0, t).join("") : h.slice(0, t);
        }
        function Q_(t, s, u, h) {
          var _ = s & X, S = Xa(t);
          function b() {
            for (var D = -1, M = arguments.length, Q = -1, ee = h.length, re = H(ee + M), Te = this && this !== Vn && this instanceof b ? S : t; ++Q < ee; )
              re[Q] = h[Q];
            for (; M--; )
              re[Q++] = arguments[++D];
            return Qt(Te, _ ? u : this, re);
          }
          return b;
        }
        function kd(t) {
          return function(s, u, h) {
            return h && typeof h != "number" && Fi(s, u, h) && (u = h = n), s = Os(s), u === n ? (u = s, s = 0) : u = Os(u), h = h === n ? s < u ? 1 : -1 : Os(h), G_(s, u, h, t);
          };
        }
        function gu(t) {
          return function(s, u) {
            return typeof s == "string" && typeof u == "string" || (s = Ir(s), u = Ir(u)), t(s, u);
          };
        }
        function Ud(t, s, u, h, _, S, b, D, M, Q) {
          var ee = s & Y, re = ee ? b : n, Te = ee ? n : b, Re = ee ? S : n, Ve = ee ? n : S;
          s |= ee ? q : fe, s &= ~(ee ? fe : q), s & z || (s &= -4);
          var ut = [
            t,
            s,
            _,
            Re,
            re,
            Ve,
            Te,
            D,
            M,
            Q
          ], We = u.apply(n, ut);
          return Hc(t) && Xd(We, ut), We.placeholder = h, Qd(We, t, s);
        }
        function Gc(t) {
          var s = Ln[t];
          return function(u, h) {
            if (u = Ir(u), h = h == null ? 0 : y(at(h), 292), h && r(u)) {
              var _ = (Pt(u) + "e").split("e"), S = s(_[0] + "e" + (+_[1] + h));
              return _ = (Pt(S) + "e").split("e"), +(_[0] + "e" + (+_[1] - h));
            }
            return s(u);
          };
        }
        var em = _n && 1 / qi(new _n([, -0]))[1] == Ee ? function(t) {
          return new _n(t);
        } : oh;
        function zd(t) {
          return function(s) {
            var u = Ti(s);
            return u == fn ? Ua(s) : u == jt ? uc(s) : Jl(s, t(s));
          };
        }
        function Ss(t, s, u, h, _, S, b, D) {
          var M = s & x;
          if (!M && typeof t != "function")
            throw new oi(g);
          var Q = h ? h.length : 0;
          if (Q || (s &= -97, h = _ = n), b = b === n ? b : f(at(b), 0), D = D === n ? D : at(D), Q -= _ ? _.length : 0, s & fe) {
            var ee = h, re = _;
            h = _ = n;
          }
          var Te = M ? n : zc(t), Re = [
            t,
            s,
            u,
            h,
            _,
            ee,
            re,
            S,
            b,
            D
          ];
          if (Te && gm(Re, Te), t = Re[0], s = Re[1], u = Re[2], h = Re[3], _ = Re[4], D = Re[9] = Re[9] === n ? M ? 0 : t.length : f(Re[9] - Q, 0), !D && s & (Y | R) && (s &= -25), !s || s == X)
            var Ve = j_(t, s, u);
          else s == Y || s == R ? Ve = X_(t, s, D) : (s == q || s == (X | q)) && !_.length ? Ve = Q_(t, s, u, h) : Ve = du.apply(n, Re);
          var ut = Te ? Td : Xd;
          return Qd(ut(Ve, Re), t, s);
        }
        function Vd(t, s, u, h) {
          return t === n || Vr(t, Ws[u]) && !mt.call(h, u) ? s : t;
        }
        function Wd(t, s, u, h, _, S) {
          return cn(t) && cn(s) && (S.set(s, t), lu(t, s, n, Wd, S), S.delete(s)), t;
        }
        function tm(t) {
          return tl(t) ? n : t;
        }
        function Zd(t, s, u, h, _, S) {
          var b = u & k, D = t.length, M = s.length;
          if (D != M && !(b && M > D))
            return !1;
          var Q = S.get(t), ee = S.get(s);
          if (Q && ee)
            return Q == s && ee == t;
          var re = -1, Te = !0, Re = u & G ? new Ao() : n;
          for (S.set(t, s), S.set(s, t); ++re < D; ) {
            var Ve = t[re], ut = s[re];
            if (h)
              var We = b ? h(ut, Ve, re, s, t, S) : h(Ve, ut, re, t, s, S);
            if (We !== n) {
              if (We)
                continue;
              Te = !1;
              break;
            }
            if (Re) {
              if (!lo(s, function(ft, vt) {
                if (!ho(Re, vt) && (Ve === ft || _(Ve, ft, u, h, S)))
                  return Re.push(vt);
              })) {
                Te = !1;
                break;
              }
            } else if (!(Ve === ut || _(Ve, ut, u, h, S))) {
              Te = !1;
              break;
            }
          }
          return S.delete(t), S.delete(s), Te;
        }
        function nm(t, s, u, h, _, S, b) {
          switch (u) {
            case Qn:
              if (t.byteLength != s.byteLength || t.byteOffset != s.byteOffset)
                return !1;
              t = t.buffer, s = s.buffer;
            case pn:
              return !(t.byteLength != s.byteLength || !S(new es(t), new es(s)));
            case $t:
            case Pn:
            case Ut:
              return Vr(+t, +s);
            case Yn:
              return t.name == s.name && t.message == s.message;
            case qn:
            case Xn:
              return t == s + "";
            case fn:
              var D = Ua;
            case jt:
              var M = h & k;
              if (D || (D = qi), t.size != s.size && !M)
                return !1;
              var Q = b.get(t);
              if (Q)
                return Q == s;
              h |= G, b.set(t, s);
              var ee = Zd(D(t), D(s), h, _, S, b);
              return b.delete(t), ee;
            case xn:
              if (Vt)
                return Vt.call(t) == Vt.call(s);
          }
          return !1;
        }
        function im(t, s, u, h, _, S) {
          var b = u & k, D = kc(t), M = D.length, Q = kc(s), ee = Q.length;
          if (M != ee && !b)
            return !1;
          for (var re = M; re--; ) {
            var Te = D[re];
            if (!(b ? Te in s : mt.call(s, Te)))
              return !1;
          }
          var Re = S.get(t), Ve = S.get(s);
          if (Re && Ve)
            return Re == s && Ve == t;
          var ut = !0;
          S.set(t, s), S.set(s, t);
          for (var We = b; ++re < M; ) {
            Te = D[re];
            var ft = t[Te], vt = s[Te];
            if (h)
              var lr = b ? h(vt, ft, Te, s, t, S) : h(ft, vt, Te, t, s, S);
            if (!(lr === n ? ft === vt || _(ft, vt, u, h, S) : lr)) {
              ut = !1;
              break;
            }
            We || (We = Te == "constructor");
          }
          if (ut && !We) {
            var Mi = t.constructor, ur = s.constructor;
            Mi != ur && "constructor" in t && "constructor" in s && !(typeof Mi == "function" && Mi instanceof Mi && typeof ur == "function" && ur instanceof ur) && (ut = !1);
          }
          return S.delete(t), S.delete(s), ut;
        }
        function As(t) {
          return qc($d(t, n, of), t + "");
        }
        function kc(t) {
          return cd(t, $n, Wc);
        }
        function Uc(t) {
          return cd(t, $i, Hd);
        }
        var zc = Wn ? function(t) {
          return Wn.get(t);
        } : oh;
        function _u(t) {
          for (var s = t.name + "", u = sr[s], h = mt.call(sr, s) ? u.length : 0; h--; ) {
            var _ = u[h], S = _.func;
            if (S == null || S == t)
              return _.name;
          }
          return s;
        }
        function oa(t) {
          var s = mt.call(T, "placeholder") ? T : t;
          return s.placeholder;
        }
        function ze() {
          var t = T.iteratee || rh;
          return t = t === rh ? fd : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function mu(t, s) {
          var u = t.__data__;
          return hm(s) ? u[typeof s == "string" ? "string" : "hash"] : u.map;
        }
        function Vc(t) {
          for (var s = $n(t), u = s.length; u--; ) {
            var h = s[u], _ = t[h];
            s[u] = [h, _, Kd(_)];
          }
          return s;
        }
        function Oo(t, s) {
          var u = Jo(t, s);
          return dd(u) ? u : n;
        }
        function rm(t) {
          var s = mt.call(t, ts), u = t[ts];
          try {
            t[ts] = n;
            var h = !0;
          } catch {
          }
          var _ = go.call(t);
          return h && (s ? t[ts] = u : delete t[ts]), _;
        }
        var Wc = Ya ? function(t) {
          return t == null ? [] : (t = Rt(t), Mr(Ya(t), function(s) {
            return Ha.call(t, s);
          }));
        } : ah, Hd = Ya ? function(t) {
          for (var s = []; t; )
            Br(s, Wc(t)), t = ys(t);
          return s;
        } : ah, Ti = xi;
        (Ae && Ti(new Ae(new ArrayBuffer(1))) != Qn || Fe && Ti(new Fe()) != fn || st && Ti(st.resolve()) != an || _n && Ti(new _n()) != jt || en && Ti(new en()) != zn) && (Ti = function(t) {
          var s = xi(t), u = s == on ? t.constructor : n, h = u ? Lo(u) : "";
          if (h)
            switch (h) {
              case pc:
                return Qn;
              case gc:
                return fn;
              case _c:
                return an;
              case ru:
                return jt;
              case mc:
                return zn;
            }
          return s;
        });
        function sm(t, s, u) {
          for (var h = -1, _ = u.length; ++h < _; ) {
            var S = u[h], b = S.size;
            switch (S.type) {
              case "drop":
                t += b;
                break;
              case "dropRight":
                s -= b;
                break;
              case "take":
                s = y(s, t + b);
                break;
              case "takeRight":
                t = f(t, s - b);
                break;
            }
          }
          return { start: t, end: s };
        }
        function om(t) {
          var s = t.match(ii);
          return s ? s[1].split(Hi) : [];
        }
        function Yd(t, s, u) {
          s = Js(s, t);
          for (var h = -1, _ = s.length, S = !1; ++h < _; ) {
            var b = rs(s[h]);
            if (!(S = t != null && u(t, b)))
              break;
            t = t[b];
          }
          return S || ++h != _ ? S : (_ = t == null ? 0 : t.length, !!_ && Au(_) && Cs(b, _) && (it(t) || Io(t)));
        }
        function am(t) {
          var s = t.length, u = new t.constructor(s);
          return s && typeof t[0] == "string" && mt.call(t, "index") && (u.index = t.index, u.input = t.input), u;
        }
        function qd(t) {
          return typeof t.constructor == "function" && !Qa(t) ? Ys(ys(t)) : {};
        }
        function lm(t, s, u) {
          var h = t.constructor;
          switch (s) {
            case pn:
              return Mc(t);
            case $t:
            case Pn:
              return new h(+t);
            case Qn:
              return H_(t, u);
            case bi:
            case Oi:
            case di:
            case Fn:
            case Wi:
            case fi:
            case ei:
            case An:
            case ti:
              return Id(t, u);
            case fn:
              return new h();
            case Ut:
            case Xn:
              return new h(t);
            case qn:
              return Y_(t);
            case jt:
              return new h();
            case xn:
              return q_(t);
          }
        }
        function um(t, s) {
          var u = s.length;
          if (!u)
            return t;
          var h = u - 1;
          return s[h] = (u > 1 ? "& " : "") + s[h], s = s.join(u > 2 ? ", " : " "), t.replace(me, `{
/* [wrapped with ` + s + `] */
`);
        }
        function cm(t) {
          return it(t) || Io(t) || !!(tu && t && t[tu]);
        }
        function Cs(t, s) {
          var u = typeof t;
          return s = s ?? de, !!s && (u == "number" || u != "symbol" && On.test(t)) && t > -1 && t % 1 == 0 && t < s;
        }
        function Fi(t, s, u) {
          if (!cn(u))
            return !1;
          var h = typeof s;
          return (h == "number" ? Ji(u) && Cs(s, u.length) : h == "string" && s in u) ? Vr(u[s], t) : !1;
        }
        function Zc(t, s) {
          if (it(t))
            return !1;
          var u = typeof t;
          return u == "number" || u == "symbol" || u == "boolean" || t == null || ar(t) ? !0 : et.test(t) || !xe.test(t) || s != null && t in Rt(s);
        }
        function hm(t) {
          var s = typeof t;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? t !== "__proto__" : t === null;
        }
        function Hc(t) {
          var s = _u(t), u = T[s];
          if (typeof u != "function" || !(s in ht.prototype))
            return !1;
          if (t === u)
            return !0;
          var h = zc(u);
          return !!h && t === h[0];
        }
        function dm(t) {
          return !!vs && vs in t;
        }
        var fm = po ? bs : lh;
        function Qa(t) {
          var s = t && t.constructor, u = typeof s == "function" && s.prototype || Ws;
          return t === u;
        }
        function Kd(t) {
          return t === t && !cn(t);
        }
        function Jd(t, s) {
          return function(u) {
            return u == null ? !1 : u[t] === s && (s !== n || t in Rt(u));
          };
        }
        function pm(t) {
          var s = wu(t, function(h) {
            return u.size === E && u.clear(), h;
          }), u = s.cache;
          return s;
        }
        function gm(t, s) {
          var u = t[1], h = s[1], _ = u | h, S = _ < (X | x | Se), b = h == Se && u == Y || h == Se && u == Ie && t[7].length <= s[8] || h == (Se | Ie) && s[7].length <= s[8] && u == Y;
          if (!(S || b))
            return t;
          h & X && (t[2] = s[2], _ |= u & X ? 0 : z);
          var D = s[3];
          if (D) {
            var M = t[3];
            t[3] = M ? Dd(M, D, s[4]) : D, t[4] = M ? Qr(t[3], A) : s[4];
          }
          return D = s[5], D && (M = t[5], t[5] = M ? Rd(M, D, s[6]) : D, t[6] = M ? Qr(t[5], A) : s[6]), D = s[7], D && (t[7] = D), h & Se && (t[8] = t[8] == null ? s[8] : y(t[8], s[8])), t[9] == null && (t[9] = s[9]), t[0] = s[0], t[1] = _, t;
        }
        function _m(t) {
          var s = [];
          if (t != null)
            for (var u in Rt(t))
              s.push(u);
          return s;
        }
        function mm(t) {
          return go.call(t);
        }
        function $d(t, s, u) {
          return s = f(s === n ? t.length - 1 : s, 0), function() {
            for (var h = arguments, _ = -1, S = f(h.length - s, 0), b = H(S); ++_ < S; )
              b[_] = h[s + _];
            _ = -1;
            for (var D = H(s + 1); ++_ < s; )
              D[_] = h[_];
            return D[s] = u(b), Qt(t, this, D);
          };
        }
        function jd(t, s) {
          return s.length < 2 ? t : bo(t, Or(s, 0, -1));
        }
        function vm(t, s) {
          for (var u = t.length, h = y(s.length, u), _ = Ki(t); h--; ) {
            var S = s[h];
            t[h] = Cs(S, u) ? _[S] : n;
          }
          return t;
        }
        function Yc(t, s) {
          if (!(s === "constructor" && typeof t[s] == "function") && s != "__proto__")
            return t[s];
        }
        var Xd = ef(Td), el = fc || function(t, s) {
          return Vn.setTimeout(t, s);
        }, qc = ef(z_);
        function Qd(t, s, u) {
          var h = s + "";
          return qc(t, um(h, ym(om(h), u)));
        }
        function ef(t) {
          var s = 0, u = 0;
          return function() {
            var h = I(), _ = K - (h - u);
            if (u = h, _ > 0) {
              if (++s >= Z)
                return arguments[0];
            } else
              s = 0;
            return t.apply(n, arguments);
          };
        }
        function vu(t, s) {
          var u = -1, h = t.length, _ = h - 1;
          for (s = s === n ? h : s; ++u < s; ) {
            var S = Ic(u, _), b = t[S];
            t[S] = t[u], t[u] = b;
          }
          return t.length = s, t;
        }
        var tf = pm(function(t) {
          var s = [];
          return t.charCodeAt(0) === 46 && s.push(""), t.replace(pt, function(u, h, _, S) {
            s.push(_ ? S.replace(Dt, "$1") : h || u);
          }), s;
        });
        function rs(t) {
          if (typeof t == "string" || ar(t))
            return t;
          var s = t + "";
          return s == "0" && 1 / t == -Ee ? "-0" : s;
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
        function ym(t, s) {
          return Ri(le, function(u) {
            var h = "_." + u[0];
            s & u[1] && !Bs(t, h) && t.push(h);
          }), t.sort();
        }
        function nf(t) {
          if (t instanceof ht)
            return t.clone();
          var s = new Ei(t.__wrapped__, t.__chain__);
          return s.__actions__ = Ki(t.__actions__), s.__index__ = t.__index__, s.__values__ = t.__values__, s;
        }
        function Em(t, s, u) {
          (u ? Fi(t, s, u) : s === n) ? s = 1 : s = f(at(s), 0);
          var h = t == null ? 0 : t.length;
          if (!h || s < 1)
            return [];
          for (var _ = 0, S = 0, b = H(yo(h / s)); _ < h; )
            b[S++] = Or(t, _, _ += s);
          return b;
        }
        function Tm(t) {
          for (var s = -1, u = t == null ? 0 : t.length, h = 0, _ = []; ++s < u; ) {
            var S = t[s];
            S && (_[h++] = S);
          }
          return _;
        }
        function wm() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var s = H(t - 1), u = arguments[0], h = t; h--; )
            s[h - 1] = arguments[h];
          return Br(it(u) ? Ki(u) : [u], ai(s, 1));
        }
        var Sm = dt(function(t, s) {
          return In(t) ? Ka(t, ai(s, 1, In, !0)) : [];
        }), Am = dt(function(t, s) {
          var u = Lr(s);
          return In(u) && (u = n), In(t) ? Ka(t, ai(s, 1, In, !0), ze(u, 2)) : [];
        }), Cm = dt(function(t, s) {
          var u = Lr(s);
          return In(u) && (u = n), In(t) ? Ka(t, ai(s, 1, In, !0), n, u) : [];
        });
        function bm(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : at(s), Or(t, s < 0 ? 0 : s, h)) : [];
        }
        function Om(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : at(s), s = h - s, Or(t, 0, s < 0 ? 0 : s)) : [];
        }
        function Lm(t, s) {
          return t && t.length ? cu(t, ze(s, 3), !0, !0) : [];
        }
        function Im(t, s) {
          return t && t.length ? cu(t, ze(s, 3), !0) : [];
        }
        function Nm(t, s, u, h) {
          var _ = t == null ? 0 : t.length;
          return _ ? (u && typeof u != "number" && Fi(t, s, u) && (u = 0, h = _), w_(t, s, u, h)) : [];
        }
        function rf(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = u == null ? 0 : at(u);
          return _ < 0 && (_ = f(h + _, 0)), Sr(t, ze(s, 3), _);
        }
        function sf(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = h - 1;
          return u !== n && (_ = at(u), _ = u < 0 ? f(h + _, 0) : y(_, h - 1)), Sr(t, ze(s, 3), _, !0);
        }
        function of(t) {
          var s = t == null ? 0 : t.length;
          return s ? ai(t, 1) : [];
        }
        function Dm(t) {
          var s = t == null ? 0 : t.length;
          return s ? ai(t, Ee) : [];
        }
        function Rm(t, s) {
          var u = t == null ? 0 : t.length;
          return u ? (s = s === n ? 1 : at(s), ai(t, s)) : [];
        }
        function Pm(t) {
          for (var s = -1, u = t == null ? 0 : t.length, h = {}; ++s < u; ) {
            var _ = t[s];
            h[_[0]] = _[1];
          }
          return h;
        }
        function af(t) {
          return t && t.length ? t[0] : n;
        }
        function xm(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = u == null ? 0 : at(u);
          return _ < 0 && (_ = f(h + _, 0)), Gs(t, s, _);
        }
        function Fm(t) {
          var s = t == null ? 0 : t.length;
          return s ? Or(t, 0, -1) : [];
        }
        var Mm = dt(function(t) {
          var s = kt(t, xc);
          return s.length && s[0] === t[0] ? Ac(s) : [];
        }), Bm = dt(function(t) {
          var s = Lr(t), u = kt(t, xc);
          return s === Lr(u) ? s = n : u.pop(), u.length && u[0] === t[0] ? Ac(u, ze(s, 2)) : [];
        }), Gm = dt(function(t) {
          var s = Lr(t), u = kt(t, xc);
          return s = typeof s == "function" ? s : n, s && u.pop(), u.length && u[0] === t[0] ? Ac(u, n, s) : [];
        });
        function km(t, s) {
          return t == null ? "" : a.call(t, s);
        }
        function Lr(t) {
          var s = t == null ? 0 : t.length;
          return s ? t[s - 1] : n;
        }
        function Um(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var _ = h;
          return u !== n && (_ = at(u), _ = _ < 0 ? f(h + _, 0) : y(_, h - 1)), s === s ? cc(t, s, _) : Sr(t, Pi, _, !0);
        }
        function zm(t, s) {
          return t && t.length ? md(t, at(s)) : n;
        }
        var Vm = dt(lf);
        function lf(t, s) {
          return t && t.length && s && s.length ? Lc(t, s) : t;
        }
        function Wm(t, s, u) {
          return t && t.length && s && s.length ? Lc(t, s, ze(u, 2)) : t;
        }
        function Zm(t, s, u) {
          return t && t.length && s && s.length ? Lc(t, s, n, u) : t;
        }
        var Hm = As(function(t, s) {
          var u = t == null ? 0 : t.length, h = Ec(t, s);
          return Ed(t, kt(s, function(_) {
            return Cs(_, u) ? +_ : _;
          }).sort(Nd)), h;
        });
        function Ym(t, s) {
          var u = [];
          if (!(t && t.length))
            return u;
          var h = -1, _ = [], S = t.length;
          for (s = ze(s, 3); ++h < S; ) {
            var b = t[h];
            s(b, h, t) && (u.push(b), _.push(h));
          }
          return Ed(t, _), u;
        }
        function Kc(t) {
          return t == null ? t : te.call(t);
        }
        function qm(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (u && typeof u != "number" && Fi(t, s, u) ? (s = 0, u = h) : (s = s == null ? 0 : at(s), u = u === n ? h : at(u)), Or(t, s, u)) : [];
        }
        function Km(t, s) {
          return uu(t, s);
        }
        function Jm(t, s, u) {
          return Dc(t, s, ze(u, 2));
        }
        function $m(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var h = uu(t, s);
            if (h < u && Vr(t[h], s))
              return h;
          }
          return -1;
        }
        function jm(t, s) {
          return uu(t, s, !0);
        }
        function Xm(t, s, u) {
          return Dc(t, s, ze(u, 2), !0);
        }
        function Qm(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var h = uu(t, s, !0) - 1;
            if (Vr(t[h], s))
              return h;
          }
          return -1;
        }
        function ev(t) {
          return t && t.length ? wd(t) : [];
        }
        function tv(t, s) {
          return t && t.length ? wd(t, ze(s, 2)) : [];
        }
        function nv(t) {
          var s = t == null ? 0 : t.length;
          return s ? Or(t, 1, s) : [];
        }
        function iv(t, s, u) {
          return t && t.length ? (s = u || s === n ? 1 : at(s), Or(t, 0, s < 0 ? 0 : s)) : [];
        }
        function rv(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : at(s), s = h - s, Or(t, s < 0 ? 0 : s, h)) : [];
        }
        function sv(t, s) {
          return t && t.length ? cu(t, ze(s, 3), !1, !0) : [];
        }
        function ov(t, s) {
          return t && t.length ? cu(t, ze(s, 3)) : [];
        }
        var av = dt(function(t) {
          return Ks(ai(t, 1, In, !0));
        }), lv = dt(function(t) {
          var s = Lr(t);
          return In(s) && (s = n), Ks(ai(t, 1, In, !0), ze(s, 2));
        }), uv = dt(function(t) {
          var s = Lr(t);
          return s = typeof s == "function" ? s : n, Ks(ai(t, 1, In, !0), n, s);
        });
        function cv(t) {
          return t && t.length ? Ks(t) : [];
        }
        function hv(t, s) {
          return t && t.length ? Ks(t, ze(s, 2)) : [];
        }
        function dv(t, s) {
          return s = typeof s == "function" ? s : n, t && t.length ? Ks(t, n, s) : [];
        }
        function Jc(t) {
          if (!(t && t.length))
            return [];
          var s = 0;
          return t = Mr(t, function(u) {
            if (In(u))
              return s = f(u.length, s), !0;
          }), ka(s, function(u) {
            return kt(t, qo(u));
          });
        }
        function uf(t, s) {
          if (!(t && t.length))
            return [];
          var u = Jc(t);
          return s == null ? u : kt(u, function(h) {
            return Qt(s, n, h);
          });
        }
        var fv = dt(function(t, s) {
          return In(t) ? Ka(t, s) : [];
        }), pv = dt(function(t) {
          return Pc(Mr(t, In));
        }), gv = dt(function(t) {
          var s = Lr(t);
          return In(s) && (s = n), Pc(Mr(t, In), ze(s, 2));
        }), _v = dt(function(t) {
          var s = Lr(t);
          return s = typeof s == "function" ? s : n, Pc(Mr(t, In), n, s);
        }), mv = dt(Jc);
        function vv(t, s) {
          return bd(t || [], s || [], qa);
        }
        function yv(t, s) {
          return bd(t || [], s || [], ja);
        }
        var Ev = dt(function(t) {
          var s = t.length, u = s > 1 ? t[s - 1] : n;
          return u = typeof u == "function" ? (t.pop(), u) : n, uf(t, u);
        });
        function cf(t) {
          var s = T(t);
          return s.__chain__ = !0, s;
        }
        function Tv(t, s) {
          return s(t), t;
        }
        function yu(t, s) {
          return s(t);
        }
        var wv = As(function(t) {
          var s = t.length, u = s ? t[0] : 0, h = this.__wrapped__, _ = function(S) {
            return Ec(S, t);
          };
          return s > 1 || this.__actions__.length || !(h instanceof ht) || !Cs(u) ? this.thru(_) : (h = h.slice(u, +u + (s ? 1 : 0)), h.__actions__.push({
            func: yu,
            args: [_],
            thisArg: n
          }), new Ei(h, this.__chain__).thru(function(S) {
            return s && !S.length && S.push(n), S;
          }));
        });
        function Sv() {
          return cf(this);
        }
        function Av() {
          return new Ei(this.value(), this.__chain__);
        }
        function Cv() {
          this.__values__ === n && (this.__values__ = Af(this.value()));
          var t = this.__index__ >= this.__values__.length, s = t ? n : this.__values__[this.__index__++];
          return { done: t, value: s };
        }
        function bv() {
          return this;
        }
        function Ov(t) {
          for (var s, u = this; u instanceof ia; ) {
            var h = nf(u);
            h.__index__ = 0, h.__values__ = n, s ? _.__wrapped__ = h : s = h;
            var _ = h;
            u = u.__wrapped__;
          }
          return _.__wrapped__ = t, s;
        }
        function Lv() {
          var t = this.__wrapped__;
          if (t instanceof ht) {
            var s = t;
            return this.__actions__.length && (s = new ht(this)), s = s.reverse(), s.__actions__.push({
              func: yu,
              args: [Kc],
              thisArg: n
            }), new Ei(s, this.__chain__);
          }
          return this.thru(Kc);
        }
        function Iv() {
          return Cd(this.__wrapped__, this.__actions__);
        }
        var Nv = hu(function(t, s, u) {
          mt.call(t, u) ? ++t[u] : ws(t, u, 1);
        });
        function Dv(t, s, u) {
          var h = it(t) ? Ra : T_;
          return u && Fi(t, s, u) && (s = n), h(t, ze(s, 3));
        }
        function Rv(t, s) {
          var u = it(t) ? Mr : ld;
          return u(t, ze(s, 3));
        }
        var Pv = Md(rf), xv = Md(sf);
        function Fv(t, s) {
          return ai(Eu(t, s), 1);
        }
        function Mv(t, s) {
          return ai(Eu(t, s), Ee);
        }
        function Bv(t, s, u) {
          return u = u === n ? 1 : at(u), ai(Eu(t, s), u);
        }
        function hf(t, s) {
          var u = it(t) ? Ri : qs;
          return u(t, ze(s, 3));
        }
        function df(t, s) {
          var u = it(t) ? $r : ad;
          return u(t, ze(s, 3));
        }
        var Gv = hu(function(t, s, u) {
          mt.call(t, u) ? t[u].push(s) : ws(t, u, [s]);
        });
        function kv(t, s, u, h) {
          t = Ji(t) ? t : la(t), u = u && !h ? at(u) : 0;
          var _ = t.length;
          return u < 0 && (u = f(_ + u, 0)), Cu(t) ? u <= _ && t.indexOf(s, u) > -1 : !!_ && Gs(t, s, u) > -1;
        }
        var Uv = dt(function(t, s, u) {
          var h = -1, _ = typeof s == "function", S = Ji(t) ? H(t.length) : [];
          return qs(t, function(b) {
            S[++h] = _ ? Qt(s, b, u) : Ja(b, s, u);
          }), S;
        }), zv = hu(function(t, s, u) {
          ws(t, u, s);
        });
        function Eu(t, s) {
          var u = it(t) ? kt : pd;
          return u(t, ze(s, 3));
        }
        function Vv(t, s, u, h) {
          return t == null ? [] : (it(s) || (s = s == null ? [] : [s]), u = h ? n : u, it(u) || (u = u == null ? [] : [u]), vd(t, s, u));
        }
        var Wv = hu(function(t, s, u) {
          t[u ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function Zv(t, s, u) {
          var h = it(t) ? xa : Ko, _ = arguments.length < 3;
          return h(t, ze(s, 4), u, _, qs);
        }
        function Hv(t, s, u) {
          var h = it(t) ? oc : Ko, _ = arguments.length < 3;
          return h(t, ze(s, 4), u, _, ad);
        }
        function Yv(t, s) {
          var u = it(t) ? Mr : ld;
          return u(t, Su(ze(s, 3)));
        }
        function qv(t) {
          var s = it(t) ? id : k_;
          return s(t);
        }
        function Kv(t, s, u) {
          (u ? Fi(t, s, u) : s === n) ? s = 1 : s = at(s);
          var h = it(t) ? __ : U_;
          return h(t, s);
        }
        function Jv(t) {
          var s = it(t) ? m_ : V_;
          return s(t);
        }
        function $v(t) {
          if (t == null)
            return 0;
          if (Ji(t))
            return Cu(t) ? vi(t) : t.length;
          var s = Ti(t);
          return s == fn || s == jt ? t.size : bc(t).length;
        }
        function jv(t, s, u) {
          var h = it(t) ? lo : W_;
          return u && Fi(t, s, u) && (s = n), h(t, ze(s, 3));
        }
        var Xv = dt(function(t, s) {
          if (t == null)
            return [];
          var u = s.length;
          return u > 1 && Fi(t, s[0], s[1]) ? s = [] : u > 2 && Fi(s[0], s[1], s[2]) && (s = [s[0]]), vd(t, ai(s, 1), []);
        }), Tu = iu || function() {
          return Vn.Date.now();
        };
        function Qv(t, s) {
          if (typeof s != "function")
            throw new oi(g);
          return t = at(t), function() {
            if (--t < 1)
              return s.apply(this, arguments);
          };
        }
        function ff(t, s, u) {
          return s = u ? n : s, s = t && s == null ? t.length : s, Ss(t, Se, n, n, n, n, s);
        }
        function pf(t, s) {
          var u;
          if (typeof s != "function")
            throw new oi(g);
          return t = at(t), function() {
            return --t > 0 && (u = s.apply(this, arguments)), t <= 1 && (s = n), u;
          };
        }
        var $c = dt(function(t, s, u) {
          var h = X;
          if (u.length) {
            var _ = Qr(u, oa($c));
            h |= q;
          }
          return Ss(t, h, s, u, _);
        }), gf = dt(function(t, s, u) {
          var h = X | x;
          if (u.length) {
            var _ = Qr(u, oa(gf));
            h |= q;
          }
          return Ss(s, h, t, u, _);
        });
        function _f(t, s, u) {
          s = u ? n : s;
          var h = Ss(t, Y, n, n, n, n, n, s);
          return h.placeholder = _f.placeholder, h;
        }
        function mf(t, s, u) {
          s = u ? n : s;
          var h = Ss(t, R, n, n, n, n, n, s);
          return h.placeholder = mf.placeholder, h;
        }
        function vf(t, s, u) {
          var h, _, S, b, D, M, Q = 0, ee = !1, re = !1, Te = !0;
          if (typeof t != "function")
            throw new oi(g);
          s = Ir(s) || 0, cn(u) && (ee = !!u.leading, re = "maxWait" in u, S = re ? f(Ir(u.maxWait) || 0, s) : S, Te = "trailing" in u ? !!u.trailing : Te);
          function Re(Nn) {
            var Wr = h, Ls = _;
            return h = _ = n, Q = Nn, b = t.apply(Ls, Wr), b;
          }
          function Ve(Nn) {
            return Q = Nn, D = el(ft, s), ee ? Re(Nn) : b;
          }
          function ut(Nn) {
            var Wr = Nn - M, Ls = Nn - Q, Bf = s - Wr;
            return re ? y(Bf, S - Ls) : Bf;
          }
          function We(Nn) {
            var Wr = Nn - M, Ls = Nn - Q;
            return M === n || Wr >= s || Wr < 0 || re && Ls >= S;
          }
          function ft() {
            var Nn = Tu();
            if (We(Nn))
              return vt(Nn);
            D = el(ft, ut(Nn));
          }
          function vt(Nn) {
            return D = n, Te && h ? Re(Nn) : (h = _ = n, b);
          }
          function lr() {
            D !== n && Od(D), Q = 0, h = M = _ = D = n;
          }
          function Mi() {
            return D === n ? b : vt(Tu());
          }
          function ur() {
            var Nn = Tu(), Wr = We(Nn);
            if (h = arguments, _ = this, M = Nn, Wr) {
              if (D === n)
                return Ve(M);
              if (re)
                return Od(D), D = el(ft, s), Re(M);
            }
            return D === n && (D = el(ft, s)), b;
          }
          return ur.cancel = lr, ur.flush = Mi, ur;
        }
        var e0 = dt(function(t, s) {
          return od(t, 1, s);
        }), t0 = dt(function(t, s, u) {
          return od(t, Ir(s) || 0, u);
        });
        function n0(t) {
          return Ss(t, he);
        }
        function wu(t, s) {
          if (typeof t != "function" || s != null && typeof s != "function")
            throw new oi(g);
          var u = function() {
            var h = arguments, _ = s ? s.apply(this, h) : h[0], S = u.cache;
            if (S.has(_))
              return S.get(_);
            var b = t.apply(this, h);
            return u.cache = S.set(_, b) || S, b;
          };
          return u.cache = new (wu.Cache || Ts)(), u;
        }
        wu.Cache = Ts;
        function Su(t) {
          if (typeof t != "function")
            throw new oi(g);
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
        function i0(t) {
          return pf(2, t);
        }
        var r0 = Z_(function(t, s) {
          s = s.length == 1 && it(s[0]) ? kt(s[0], qt(ze())) : kt(ai(s, 1), qt(ze()));
          var u = s.length;
          return dt(function(h) {
            for (var _ = -1, S = y(h.length, u); ++_ < S; )
              h[_] = s[_].call(this, h[_]);
            return Qt(t, this, h);
          });
        }), jc = dt(function(t, s) {
          var u = Qr(s, oa(jc));
          return Ss(t, q, n, s, u);
        }), yf = dt(function(t, s) {
          var u = Qr(s, oa(yf));
          return Ss(t, fe, n, s, u);
        }), s0 = As(function(t, s) {
          return Ss(t, Ie, n, n, n, s);
        });
        function o0(t, s) {
          if (typeof t != "function")
            throw new oi(g);
          return s = s === n ? s : at(s), dt(t, s);
        }
        function a0(t, s) {
          if (typeof t != "function")
            throw new oi(g);
          return s = s == null ? 0 : f(at(s), 0), dt(function(u) {
            var h = u[s], _ = $s(u, 0, s);
            return h && Br(_, h), Qt(t, this, _);
          });
        }
        function l0(t, s, u) {
          var h = !0, _ = !0;
          if (typeof t != "function")
            throw new oi(g);
          return cn(u) && (h = "leading" in u ? !!u.leading : h, _ = "trailing" in u ? !!u.trailing : _), vf(t, s, {
            leading: h,
            maxWait: s,
            trailing: _
          });
        }
        function u0(t) {
          return ff(t, 1);
        }
        function c0(t, s) {
          return jc(Fc(s), t);
        }
        function h0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return it(t) ? t : [t];
        }
        function d0(t) {
          return br(t, N);
        }
        function f0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, N, s);
        }
        function p0(t) {
          return br(t, w | N);
        }
        function g0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, w | N, s);
        }
        function _0(t, s) {
          return s == null || sd(t, s, $n(s));
        }
        function Vr(t, s) {
          return t === s || t !== t && s !== s;
        }
        var m0 = gu(Sc), v0 = gu(function(t, s) {
          return t >= s;
        }), Io = hd(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? hd : function(t) {
          return mn(t) && mt.call(t, "callee") && !Ha.call(t, "callee");
        }, it = H.isArray, y0 = Wl ? qt(Wl) : O_;
        function Ji(t) {
          return t != null && Au(t.length) && !bs(t);
        }
        function In(t) {
          return mn(t) && Ji(t);
        }
        function E0(t) {
          return t === !0 || t === !1 || mn(t) && xi(t) == $t;
        }
        var js = e || lh, T0 = Da ? qt(Da) : L_;
        function w0(t) {
          return mn(t) && t.nodeType === 1 && !tl(t);
        }
        function S0(t) {
          if (t == null)
            return !0;
          if (Ji(t) && (it(t) || typeof t == "string" || typeof t.splice == "function" || js(t) || aa(t) || Io(t)))
            return !t.length;
          var s = Ti(t);
          if (s == fn || s == jt)
            return !t.size;
          if (Qa(t))
            return !bc(t).length;
          for (var u in t)
            if (mt.call(t, u))
              return !1;
          return !0;
        }
        function A0(t, s) {
          return $a(t, s);
        }
        function C0(t, s, u) {
          u = typeof u == "function" ? u : n;
          var h = u ? u(t, s) : n;
          return h === n ? $a(t, s, n, u) : !!h;
        }
        function Xc(t) {
          if (!mn(t))
            return !1;
          var s = xi(t);
          return s == Yn || s == sn || typeof t.message == "string" && typeof t.name == "string" && !tl(t);
        }
        function b0(t) {
          return typeof t == "number" && r(t);
        }
        function bs(t) {
          if (!cn(t))
            return !1;
          var s = xi(t);
          return s == Un || s == Ui || s == Ht || s == vr;
        }
        function Ef(t) {
          return typeof t == "number" && t == at(t);
        }
        function Au(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= de;
        }
        function cn(t) {
          var s = typeof t;
          return t != null && (s == "object" || s == "function");
        }
        function mn(t) {
          return t != null && typeof t == "object";
        }
        var Tf = Zl ? qt(Zl) : N_;
        function O0(t, s) {
          return t === s || Cc(t, s, Vc(s));
        }
        function L0(t, s, u) {
          return u = typeof u == "function" ? u : n, Cc(t, s, Vc(s), u);
        }
        function I0(t) {
          return wf(t) && t != +t;
        }
        function N0(t) {
          if (fm(t))
            throw new Je(p);
          return dd(t);
        }
        function D0(t) {
          return t === null;
        }
        function R0(t) {
          return t == null;
        }
        function wf(t) {
          return typeof t == "number" || mn(t) && xi(t) == Ut;
        }
        function tl(t) {
          if (!mn(t) || xi(t) != on)
            return !1;
          var s = ys(t);
          if (s === null)
            return !0;
          var u = mt.call(s, "constructor") && s.constructor;
          return typeof u == "function" && u instanceof u && na.call(u) == Ql;
        }
        var Qc = Hl ? qt(Hl) : D_;
        function P0(t) {
          return Ef(t) && t >= -de && t <= de;
        }
        var Sf = Yo ? qt(Yo) : R_;
        function Cu(t) {
          return typeof t == "string" || !it(t) && mn(t) && xi(t) == Xn;
        }
        function ar(t) {
          return typeof t == "symbol" || mn(t) && xi(t) == xn;
        }
        var aa = Yl ? qt(Yl) : P_;
        function x0(t) {
          return t === n;
        }
        function F0(t) {
          return mn(t) && Ti(t) == zn;
        }
        function M0(t) {
          return mn(t) && xi(t) == er;
        }
        var B0 = gu(Oc), G0 = gu(function(t, s) {
          return t <= s;
        });
        function Af(t) {
          if (!t)
            return [];
          if (Ji(t))
            return Cu(t) ? yi(t) : Ki(t);
          if (Hs && t[Hs])
            return $o(t[Hs]());
          var s = Ti(t), u = s == fn ? Ua : s == jt ? qi : la;
          return u(t);
        }
        function Os(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Ir(t), t === Ee || t === -Ee) {
            var s = t < 0 ? -1 : 1;
            return s * yt;
          }
          return t === t ? t : 0;
        }
        function at(t) {
          var s = Os(t), u = s % 1;
          return s === s ? u ? s - u : s : 0;
        }
        function Cf(t) {
          return t ? Co(at(t), 0, ke) : 0;
        }
        function Ir(t) {
          if (typeof t == "number")
            return t;
          if (ar(t))
            return Le;
          if (cn(t)) {
            var s = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = cn(s) ? s + "" : s;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = $l(t);
          var u = bn.test(t);
          return u || gn.test(t) ? rc(t.slice(2), u ? 2 : 8) : zt.test(t) ? Le : +t;
        }
        function bf(t) {
          return is(t, $i(t));
        }
        function k0(t) {
          return t ? Co(at(t), -de, de) : t === 0 ? t : 0;
        }
        function Pt(t) {
          return t == null ? "" : or(t);
        }
        var U0 = ra(function(t, s) {
          if (Qa(s) || Ji(s)) {
            is(s, $n(s), t);
            return;
          }
          for (var u in s)
            mt.call(s, u) && qa(t, u, s[u]);
        }), Of = ra(function(t, s) {
          is(s, $i(s), t);
        }), bu = ra(function(t, s, u, h) {
          is(s, $i(s), t, h);
        }), z0 = ra(function(t, s, u, h) {
          is(s, $n(s), t, h);
        }), V0 = As(Ec);
        function W0(t, s) {
          var u = Ys(t);
          return s == null ? u : rd(u, s);
        }
        var Z0 = dt(function(t, s) {
          t = Rt(t);
          var u = -1, h = s.length, _ = h > 2 ? s[2] : n;
          for (_ && Fi(s[0], s[1], _) && (h = 1); ++u < h; )
            for (var S = s[u], b = $i(S), D = -1, M = b.length; ++D < M; ) {
              var Q = b[D], ee = t[Q];
              (ee === n || Vr(ee, Ws[Q]) && !mt.call(t, Q)) && (t[Q] = S[Q]);
            }
          return t;
        }), H0 = dt(function(t) {
          return t.push(n, Wd), Qt(Lf, n, t);
        });
        function Y0(t, s) {
          return uo(t, ze(s, 3), ns);
        }
        function q0(t, s) {
          return uo(t, ze(s, 3), wc);
        }
        function K0(t, s) {
          return t == null ? t : Tc(t, ze(s, 3), $i);
        }
        function J0(t, s) {
          return t == null ? t : ud(t, ze(s, 3), $i);
        }
        function $0(t, s) {
          return t && ns(t, ze(s, 3));
        }
        function j0(t, s) {
          return t && wc(t, ze(s, 3));
        }
        function X0(t) {
          return t == null ? [] : au(t, $n(t));
        }
        function Q0(t) {
          return t == null ? [] : au(t, $i(t));
        }
        function eh(t, s, u) {
          var h = t == null ? n : bo(t, s);
          return h === n ? u : h;
        }
        function ey(t, s) {
          return t != null && Yd(t, s, S_);
        }
        function th(t, s) {
          return t != null && Yd(t, s, A_);
        }
        var ty = Gd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = go.call(s)), t[s] = u;
        }, ih(ji)), ny = Gd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = go.call(s)), mt.call(t, s) ? t[s].push(u) : t[s] = [u];
        }, ze), iy = dt(Ja);
        function $n(t) {
          return Ji(t) ? nd(t) : bc(t);
        }
        function $i(t) {
          return Ji(t) ? nd(t, !0) : x_(t);
        }
        function ry(t, s) {
          var u = {};
          return s = ze(s, 3), ns(t, function(h, _, S) {
            ws(u, s(h, _, S), h);
          }), u;
        }
        function sy(t, s) {
          var u = {};
          return s = ze(s, 3), ns(t, function(h, _, S) {
            ws(u, _, s(h, _, S));
          }), u;
        }
        var oy = ra(function(t, s, u) {
          lu(t, s, u);
        }), Lf = ra(function(t, s, u, h) {
          lu(t, s, u, h);
        }), ay = As(function(t, s) {
          var u = {};
          if (t == null)
            return u;
          var h = !1;
          s = kt(s, function(S) {
            return S = Js(S, t), h || (h = S.length > 1), S;
          }), is(t, Uc(t), u), h && (u = br(u, w | O | N, tm));
          for (var _ = s.length; _--; )
            Rc(u, s[_]);
          return u;
        });
        function ly(t, s) {
          return If(t, Su(ze(s)));
        }
        var uy = As(function(t, s) {
          return t == null ? {} : M_(t, s);
        });
        function If(t, s) {
          if (t == null)
            return {};
          var u = kt(Uc(t), function(h) {
            return [h];
          });
          return s = ze(s), yd(t, u, function(h, _) {
            return s(h, _[0]);
          });
        }
        function cy(t, s, u) {
          s = Js(s, t);
          var h = -1, _ = s.length;
          for (_ || (_ = 1, t = n); ++h < _; ) {
            var S = t == null ? n : t[rs(s[h])];
            S === n && (h = _, S = u), t = bs(S) ? S.call(t) : S;
          }
          return t;
        }
        function hy(t, s, u) {
          return t == null ? t : ja(t, s, u);
        }
        function dy(t, s, u, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : ja(t, s, u, h);
        }
        var Nf = zd($n), Df = zd($i);
        function fy(t, s, u) {
          var h = it(t), _ = h || js(t) || aa(t);
          if (s = ze(s, 4), u == null) {
            var S = t && t.constructor;
            _ ? u = h ? new S() : [] : cn(t) ? u = bs(S) ? Ys(ys(t)) : {} : u = {};
          }
          return (_ ? Ri : ns)(t, function(b, D, M) {
            return s(u, b, D, M);
          }), u;
        }
        function py(t, s) {
          return t == null ? !0 : Rc(t, s);
        }
        function gy(t, s, u) {
          return t == null ? t : Ad(t, s, Fc(u));
        }
        function _y(t, s, u, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : Ad(t, s, Fc(u), h);
        }
        function la(t) {
          return t == null ? [] : jr(t, $n(t));
        }
        function my(t) {
          return t == null ? [] : jr(t, $i(t));
        }
        function vy(t, s, u) {
          return u === n && (u = s, s = n), u !== n && (u = Ir(u), u = u === u ? u : 0), s !== n && (s = Ir(s), s = s === s ? s : 0), Co(Ir(t), s, u);
        }
        function yy(t, s, u) {
          return s = Os(s), u === n ? (u = s, s = 0) : u = Os(u), t = Ir(t), C_(t, s, u);
        }
        function Ey(t, s, u) {
          if (u && typeof u != "boolean" && Fi(t, s, u) && (s = u = n), u === n && (typeof s == "boolean" ? (u = s, s = n) : typeof t == "boolean" && (u = t, t = n)), t === n && s === n ? (t = 0, s = 1) : (t = Os(t), s === n ? (s = t, t = 0) : s = Os(s)), t > s) {
            var h = t;
            t = s, s = h;
          }
          if (u || t % 1 || s % 1) {
            var _ = W();
            return y(t + _ * (s - t + Oa("1e-" + ((_ + "").length - 1))), s);
          }
          return Ic(t, s);
        }
        var Ty = sa(function(t, s, u) {
          return s = s.toLowerCase(), t + (u ? Rf(s) : s);
        });
        function Rf(t) {
          return nh(Pt(t).toLowerCase());
        }
        function Pf(t) {
          return t = Pt(t), t && t.replace(si, lc).replace(kl, "");
        }
        function wy(t, s, u) {
          t = Pt(t), s = or(s);
          var h = t.length;
          u = u === n ? h : Co(at(u), 0, h);
          var _ = u;
          return u -= s.length, u >= 0 && t.slice(u, _) == s;
        }
        function Sy(t) {
          return t = Pt(t), t && oe.test(t) ? t.replace(Zi, fo) : t;
        }
        function Ay(t) {
          return t = Pt(t), t && Gt.test(t) ? t.replace(Nt, "\\$&") : t;
        }
        var Cy = sa(function(t, s, u) {
          return t + (u ? "-" : "") + s.toLowerCase();
        }), by = sa(function(t, s, u) {
          return t + (u ? " " : "") + s.toLowerCase();
        }), Oy = Fd("toLowerCase");
        function Ly(t, s, u) {
          t = Pt(t), s = at(s);
          var h = s ? vi(t) : 0;
          if (!s || h >= s)
            return t;
          var _ = (s - h) / 2;
          return pu(Eo(_), u) + t + pu(yo(_), u);
        }
        function Iy(t, s, u) {
          t = Pt(t), s = at(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? t + pu(s - h, u) : t;
        }
        function Ny(t, s, u) {
          t = Pt(t), s = at(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? pu(s - h, u) + t : t;
        }
        function Dy(t, s, u) {
          return u || s == null ? s = 0 : s && (s = +s), B(Pt(t).replace(Xt, ""), s || 0);
        }
        function Ry(t, s, u) {
          return (u ? Fi(t, s, u) : s === n) ? s = 1 : s = at(s), Nc(Pt(t), s);
        }
        function Py() {
          var t = arguments, s = Pt(t[0]);
          return t.length < 3 ? s : s.replace(t[1], t[2]);
        }
        var xy = sa(function(t, s, u) {
          return t + (u ? "_" : "") + s.toLowerCase();
        });
        function Fy(t, s, u) {
          return u && typeof u != "number" && Fi(t, s, u) && (s = u = n), u = u === n ? ke : u >>> 0, u ? (t = Pt(t), t && (typeof s == "string" || s != null && !Qc(s)) && (s = or(s), !s && Us(t)) ? $s(yi(t), 0, u) : t.split(s, u)) : [];
        }
        var My = sa(function(t, s, u) {
          return t + (u ? " " : "") + nh(s);
        });
        function By(t, s, u) {
          return t = Pt(t), u = u == null ? 0 : Co(at(u), 0, t.length), s = or(s), t.slice(u, u + s.length) == s;
        }
        function Gy(t, s, u) {
          var h = T.templateSettings;
          u && Fi(t, s, u) && (s = n), t = Pt(t), s = bu({}, s, h, Vd);
          var _ = bu({}, s.imports, h.imports, Vd), S = $n(_), b = jr(_, S), D, M, Q = 0, ee = s.interpolate || ln, re = "__p += '", Te = Za(
            (s.escape || ln).source + "|" + ee.source + "|" + (ee === Be ? Cn : ln).source + "|" + (s.evaluate || ln).source + "|$",
            "g"
          ), Re = "//# sourceURL=" + (mt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ao + "]") + `
`;
          t.replace(Te, function(We, ft, vt, lr, Mi, ur) {
            return vt || (vt = lr), re += t.slice(Q, ur).replace(Yt, Xl), ft && (D = !0, re += `' +
__e(` + ft + `) +
'`), Mi && (M = !0, re += `';
` + Mi + `;
__p += '`), vt && (re += `' +
((__t = (` + vt + `)) == null ? '' : __t) +
'`), Q = ur + We.length, We;
          }), re += `';
`;
          var Ve = mt.call(s, "variable") && s.variable;
          if (!Ve)
            re = `with (obj) {
` + re + `
}
`;
          else if (yr.test(Ve))
            throw new Je(v);
          re = (M ? re.replace(Li, "") : re).replace(Ii, "$1").replace(ni, "$1;"), re = "function(" + (Ve || "obj") + `) {
` + (Ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + re + `return __p
}`;
          var ut = Ff(function() {
            return Tt(S, Re + "return " + re).apply(n, b);
          });
          if (ut.source = re, Xc(ut))
            throw ut;
          return ut;
        }
        function ky(t) {
          return Pt(t).toLowerCase();
        }
        function Uy(t) {
          return Pt(t).toUpperCase();
        }
        function zy(t, s, u) {
          if (t = Pt(t), t && (u || s === n))
            return $l(t);
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), _ = yi(s), S = Ar(h, _), b = jl(h, _) + 1;
          return $s(h, S, b).join("");
        }
        function Vy(t, s, u) {
          if (t = Pt(t), t && (u || s === n))
            return t.slice(0, za(t) + 1);
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), _ = jl(h, yi(s)) + 1;
          return $s(h, 0, _).join("");
        }
        function Wy(t, s, u) {
          if (t = Pt(t), t && (u || s === n))
            return t.replace(Xt, "");
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), _ = Ar(h, yi(s));
          return $s(h, _).join("");
        }
        function Zy(t, s) {
          var u = Oe, h = ae;
          if (cn(s)) {
            var _ = "separator" in s ? s.separator : _;
            u = "length" in s ? at(s.length) : u, h = "omission" in s ? or(s.omission) : h;
          }
          t = Pt(t);
          var S = t.length;
          if (Us(t)) {
            var b = yi(t);
            S = b.length;
          }
          if (u >= S)
            return t;
          var D = u - vi(h);
          if (D < 1)
            return h;
          var M = b ? $s(b, 0, D).join("") : t.slice(0, D);
          if (_ === n)
            return M + h;
          if (b && (D += M.length - D), Qc(_)) {
            if (t.slice(D).search(_)) {
              var Q, ee = M;
              for (_.global || (_ = Za(_.source, Pt(lt.exec(_)) + "g")), _.lastIndex = 0; Q = _.exec(ee); )
                var re = Q.index;
              M = M.slice(0, re === n ? D : re);
            }
          } else if (t.indexOf(or(_), D) != D) {
            var Te = M.lastIndexOf(_);
            Te > -1 && (M = M.slice(0, Te));
          }
          return M + h;
        }
        function Hy(t) {
          return t = Pt(t), t && F.test(t) ? t.replace(tr, Va) : t;
        }
        var Yy = sa(function(t, s, u) {
          return t + (u ? " " : "") + s.toUpperCase();
        }), nh = Fd("toUpperCase");
        function xf(t, s, u) {
          return t = Pt(t), s = u ? n : s, s === n ? Xr(t) ? Qo(t) : Kl(t) : t.match(s) || [];
        }
        var Ff = dt(function(t, s) {
          try {
            return Qt(t, n, s);
          } catch (u) {
            return Xc(u) ? u : new Je(u);
          }
        }), qy = As(function(t, s) {
          return Ri(s, function(u) {
            u = rs(u), ws(t, u, $c(t[u], t));
          }), t;
        });
        function Ky(t) {
          var s = t == null ? 0 : t.length, u = ze();
          return t = s ? kt(t, function(h) {
            if (typeof h[1] != "function")
              throw new oi(g);
            return [u(h[0]), h[1]];
          }) : [], dt(function(h) {
            for (var _ = -1; ++_ < s; ) {
              var S = t[_];
              if (Qt(S[0], this, h))
                return Qt(S[1], this, h);
            }
          });
        }
        function Jy(t) {
          return E_(br(t, w));
        }
        function ih(t) {
          return function() {
            return t;
          };
        }
        function $y(t, s) {
          return t == null || t !== t ? s : t;
        }
        var jy = Bd(), Xy = Bd(!0);
        function ji(t) {
          return t;
        }
        function rh(t) {
          return fd(typeof t == "function" ? t : br(t, w));
        }
        function Qy(t) {
          return gd(br(t, w));
        }
        function eE(t, s) {
          return _d(t, br(s, w));
        }
        var tE = dt(function(t, s) {
          return function(u) {
            return Ja(u, t, s);
          };
        }), nE = dt(function(t, s) {
          return function(u) {
            return Ja(t, u, s);
          };
        });
        function sh(t, s, u) {
          var h = $n(s), _ = au(s, h);
          u == null && !(cn(s) && (_.length || !h.length)) && (u = s, s = t, t = this, _ = au(s, $n(s)));
          var S = !(cn(u) && "chain" in u) || !!u.chain, b = bs(t);
          return Ri(_, function(D) {
            var M = s[D];
            t[D] = M, b && (t.prototype[D] = function() {
              var Q = this.__chain__;
              if (S || Q) {
                var ee = t(this.__wrapped__), re = ee.__actions__ = Ki(this.__actions__);
                return re.push({ func: M, args: arguments, thisArg: t }), ee.__chain__ = Q, ee;
              }
              return M.apply(t, Br([this.value()], arguments));
            });
          }), t;
        }
        function iE() {
          return Vn._ === this && (Vn._ = dc), this;
        }
        function oh() {
        }
        function rE(t) {
          return t = at(t), dt(function(s) {
            return md(s, t);
          });
        }
        var sE = Bc(kt), oE = Bc(Ra), aE = Bc(lo);
        function Mf(t) {
          return Zc(t) ? qo(rs(t)) : B_(t);
        }
        function lE(t) {
          return function(s) {
            return t == null ? n : bo(t, s);
          };
        }
        var uE = kd(), cE = kd(!0);
        function ah() {
          return [];
        }
        function lh() {
          return !1;
        }
        function hE() {
          return {};
        }
        function dE() {
          return "";
        }
        function fE() {
          return !0;
        }
        function pE(t, s) {
          if (t = at(t), t < 1 || t > de)
            return [];
          var u = ke, h = y(t, ke);
          s = ze(s), t -= ke;
          for (var _ = ka(h, s); ++u < t; )
            s(u);
          return _;
        }
        function gE(t) {
          return it(t) ? kt(t, rs) : ar(t) ? [t] : Ki(tf(Pt(t)));
        }
        function _E(t) {
          var s = ++hc;
          return Pt(t) + s;
        }
        var mE = fu(function(t, s) {
          return t + s;
        }, 0), vE = Gc("ceil"), yE = fu(function(t, s) {
          return t / s;
        }, 1), EE = Gc("floor");
        function TE(t) {
          return t && t.length ? ou(t, ji, Sc) : n;
        }
        function wE(t, s) {
          return t && t.length ? ou(t, ze(s, 2), Sc) : n;
        }
        function SE(t) {
          return Fa(t, ji);
        }
        function AE(t, s) {
          return Fa(t, ze(s, 2));
        }
        function CE(t) {
          return t && t.length ? ou(t, ji, Oc) : n;
        }
        function bE(t, s) {
          return t && t.length ? ou(t, ze(s, 2), Oc) : n;
        }
        var OE = fu(function(t, s) {
          return t * s;
        }, 1), LE = Gc("round"), IE = fu(function(t, s) {
          return t - s;
        }, 0);
        function NE(t) {
          return t && t.length ? Ga(t, ji) : 0;
        }
        function DE(t, s) {
          return t && t.length ? Ga(t, ze(s, 2)) : 0;
        }
        return T.after = Qv, T.ary = ff, T.assign = U0, T.assignIn = Of, T.assignInWith = bu, T.assignWith = z0, T.at = V0, T.before = pf, T.bind = $c, T.bindAll = qy, T.bindKey = gf, T.castArray = h0, T.chain = cf, T.chunk = Em, T.compact = Tm, T.concat = wm, T.cond = Ky, T.conforms = Jy, T.constant = ih, T.countBy = Nv, T.create = W0, T.curry = _f, T.curryRight = mf, T.debounce = vf, T.defaults = Z0, T.defaultsDeep = H0, T.defer = e0, T.delay = t0, T.difference = Sm, T.differenceBy = Am, T.differenceWith = Cm, T.drop = bm, T.dropRight = Om, T.dropRightWhile = Lm, T.dropWhile = Im, T.fill = Nm, T.filter = Rv, T.flatMap = Fv, T.flatMapDeep = Mv, T.flatMapDepth = Bv, T.flatten = of, T.flattenDeep = Dm, T.flattenDepth = Rm, T.flip = n0, T.flow = jy, T.flowRight = Xy, T.fromPairs = Pm, T.functions = X0, T.functionsIn = Q0, T.groupBy = Gv, T.initial = Fm, T.intersection = Mm, T.intersectionBy = Bm, T.intersectionWith = Gm, T.invert = ty, T.invertBy = ny, T.invokeMap = Uv, T.iteratee = rh, T.keyBy = zv, T.keys = $n, T.keysIn = $i, T.map = Eu, T.mapKeys = ry, T.mapValues = sy, T.matches = Qy, T.matchesProperty = eE, T.memoize = wu, T.merge = oy, T.mergeWith = Lf, T.method = tE, T.methodOf = nE, T.mixin = sh, T.negate = Su, T.nthArg = rE, T.omit = ay, T.omitBy = ly, T.once = i0, T.orderBy = Vv, T.over = sE, T.overArgs = r0, T.overEvery = oE, T.overSome = aE, T.partial = jc, T.partialRight = yf, T.partition = Wv, T.pick = uy, T.pickBy = If, T.property = Mf, T.propertyOf = lE, T.pull = Vm, T.pullAll = lf, T.pullAllBy = Wm, T.pullAllWith = Zm, T.pullAt = Hm, T.range = uE, T.rangeRight = cE, T.rearg = s0, T.reject = Yv, T.remove = Ym, T.rest = o0, T.reverse = Kc, T.sampleSize = Kv, T.set = hy, T.setWith = dy, T.shuffle = Jv, T.slice = qm, T.sortBy = Xv, T.sortedUniq = ev, T.sortedUniqBy = tv, T.split = Fy, T.spread = a0, T.tail = nv, T.take = iv, T.takeRight = rv, T.takeRightWhile = sv, T.takeWhile = ov, T.tap = Tv, T.throttle = l0, T.thru = yu, T.toArray = Af, T.toPairs = Nf, T.toPairsIn = Df, T.toPath = gE, T.toPlainObject = bf, T.transform = fy, T.unary = u0, T.union = av, T.unionBy = lv, T.unionWith = uv, T.uniq = cv, T.uniqBy = hv, T.uniqWith = dv, T.unset = py, T.unzip = Jc, T.unzipWith = uf, T.update = gy, T.updateWith = _y, T.values = la, T.valuesIn = my, T.without = fv, T.words = xf, T.wrap = c0, T.xor = pv, T.xorBy = gv, T.xorWith = _v, T.zip = mv, T.zipObject = vv, T.zipObjectDeep = yv, T.zipWith = Ev, T.entries = Nf, T.entriesIn = Df, T.extend = Of, T.extendWith = bu, sh(T, T), T.add = mE, T.attempt = Ff, T.camelCase = Ty, T.capitalize = Rf, T.ceil = vE, T.clamp = vy, T.clone = d0, T.cloneDeep = p0, T.cloneDeepWith = g0, T.cloneWith = f0, T.conformsTo = _0, T.deburr = Pf, T.defaultTo = $y, T.divide = yE, T.endsWith = wy, T.eq = Vr, T.escape = Sy, T.escapeRegExp = Ay, T.every = Dv, T.find = Pv, T.findIndex = rf, T.findKey = Y0, T.findLast = xv, T.findLastIndex = sf, T.findLastKey = q0, T.floor = EE, T.forEach = hf, T.forEachRight = df, T.forIn = K0, T.forInRight = J0, T.forOwn = $0, T.forOwnRight = j0, T.get = eh, T.gt = m0, T.gte = v0, T.has = ey, T.hasIn = th, T.head = af, T.identity = ji, T.includes = kv, T.indexOf = xm, T.inRange = yy, T.invoke = iy, T.isArguments = Io, T.isArray = it, T.isArrayBuffer = y0, T.isArrayLike = Ji, T.isArrayLikeObject = In, T.isBoolean = E0, T.isBuffer = js, T.isDate = T0, T.isElement = w0, T.isEmpty = S0, T.isEqual = A0, T.isEqualWith = C0, T.isError = Xc, T.isFinite = b0, T.isFunction = bs, T.isInteger = Ef, T.isLength = Au, T.isMap = Tf, T.isMatch = O0, T.isMatchWith = L0, T.isNaN = I0, T.isNative = N0, T.isNil = R0, T.isNull = D0, T.isNumber = wf, T.isObject = cn, T.isObjectLike = mn, T.isPlainObject = tl, T.isRegExp = Qc, T.isSafeInteger = P0, T.isSet = Sf, T.isString = Cu, T.isSymbol = ar, T.isTypedArray = aa, T.isUndefined = x0, T.isWeakMap = F0, T.isWeakSet = M0, T.join = km, T.kebabCase = Cy, T.last = Lr, T.lastIndexOf = Um, T.lowerCase = by, T.lowerFirst = Oy, T.lt = B0, T.lte = G0, T.max = TE, T.maxBy = wE, T.mean = SE, T.meanBy = AE, T.min = CE, T.minBy = bE, T.stubArray = ah, T.stubFalse = lh, T.stubObject = hE, T.stubString = dE, T.stubTrue = fE, T.multiply = OE, T.nth = zm, T.noConflict = iE, T.noop = oh, T.now = Tu, T.pad = Ly, T.padEnd = Iy, T.padStart = Ny, T.parseInt = Dy, T.random = Ey, T.reduce = Zv, T.reduceRight = Hv, T.repeat = Ry, T.replace = Py, T.result = cy, T.round = LE, T.runInContext = P, T.sample = qv, T.size = $v, T.snakeCase = xy, T.some = jv, T.sortedIndex = Km, T.sortedIndexBy = Jm, T.sortedIndexOf = $m, T.sortedLastIndex = jm, T.sortedLastIndexBy = Xm, T.sortedLastIndexOf = Qm, T.startCase = My, T.startsWith = By, T.subtract = IE, T.sum = NE, T.sumBy = DE, T.template = Gy, T.times = pE, T.toFinite = Os, T.toInteger = at, T.toLength = Cf, T.toLower = ky, T.toNumber = Ir, T.toSafeInteger = k0, T.toString = Pt, T.toUpper = Uy, T.trim = zy, T.trimEnd = Vy, T.trimStart = Wy, T.truncate = Zy, T.unescape = Hy, T.uniqueId = _E, T.upperCase = Yy, T.upperFirst = nh, T.each = hf, T.eachRight = df, T.first = af, sh(T, (function() {
          var t = {};
          return ns(T, function(s, u) {
            mt.call(T.prototype, u) || (t[u] = s);
          }), t;
        })(), { chain: !1 }), T.VERSION = l, Ri(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          T[t].placeholder = T;
        }), Ri(["drop", "take"], function(t, s) {
          ht.prototype[t] = function(u) {
            u = u === n ? 1 : f(at(u), 0);
            var h = this.__filtered__ && !s ? new ht(this) : this.clone();
            return h.__filtered__ ? h.__takeCount__ = y(u, h.__takeCount__) : h.__views__.push({
              size: y(u, ke),
              type: t + (h.__dir__ < 0 ? "Right" : "")
            }), h;
          }, ht.prototype[t + "Right"] = function(u) {
            return this.reverse()[t](u).reverse();
          };
        }), Ri(["filter", "map", "takeWhile"], function(t, s) {
          var u = s + 1, h = u == U || u == ne;
          ht.prototype[t] = function(_) {
            var S = this.clone();
            return S.__iteratees__.push({
              iteratee: ze(_, 3),
              type: u
            }), S.__filtered__ = S.__filtered__ || h, S;
          };
        }), Ri(["head", "last"], function(t, s) {
          var u = "take" + (s ? "Right" : "");
          ht.prototype[t] = function() {
            return this[u](1).value()[0];
          };
        }), Ri(["initial", "tail"], function(t, s) {
          var u = "drop" + (s ? "" : "Right");
          ht.prototype[t] = function() {
            return this.__filtered__ ? new ht(this) : this[u](1);
          };
        }), ht.prototype.compact = function() {
          return this.filter(ji);
        }, ht.prototype.find = function(t) {
          return this.filter(t).head();
        }, ht.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, ht.prototype.invokeMap = dt(function(t, s) {
          return typeof t == "function" ? new ht(this) : this.map(function(u) {
            return Ja(u, t, s);
          });
        }), ht.prototype.reject = function(t) {
          return this.filter(Su(ze(t)));
        }, ht.prototype.slice = function(t, s) {
          t = at(t);
          var u = this;
          return u.__filtered__ && (t > 0 || s < 0) ? new ht(u) : (t < 0 ? u = u.takeRight(-t) : t && (u = u.drop(t)), s !== n && (s = at(s), u = s < 0 ? u.dropRight(-s) : u.take(s - t)), u);
        }, ht.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, ht.prototype.toArray = function() {
          return this.take(ke);
        }, ns(ht.prototype, function(t, s) {
          var u = /^(?:filter|find|map|reject)|While$/.test(s), h = /^(?:head|last)$/.test(s), _ = T[h ? "take" + (s == "last" ? "Right" : "") : s], S = h || /^find/.test(s);
          _ && (T.prototype[s] = function() {
            var b = this.__wrapped__, D = h ? [1] : arguments, M = b instanceof ht, Q = D[0], ee = M || it(b), re = function(ft) {
              var vt = _.apply(T, Br([ft], D));
              return h && Te ? vt[0] : vt;
            };
            ee && u && typeof Q == "function" && Q.length != 1 && (M = ee = !1);
            var Te = this.__chain__, Re = !!this.__actions__.length, Ve = S && !Te, ut = M && !Re;
            if (!S && ee) {
              b = ut ? b : new ht(this);
              var We = t.apply(b, D);
              return We.__actions__.push({ func: yu, args: [re], thisArg: n }), new Ei(We, Te);
            }
            return Ve && ut ? t.apply(this, D) : (We = this.thru(re), Ve ? h ? We.value()[0] : We.value() : We);
          });
        }), Ri(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var s = ea[t], u = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(t);
          T.prototype[t] = function() {
            var _ = arguments;
            if (h && !this.__chain__) {
              var S = this.value();
              return s.apply(it(S) ? S : [], _);
            }
            return this[u](function(b) {
              return s.apply(it(b) ? b : [], _);
            });
          };
        }), ns(ht.prototype, function(t, s) {
          var u = T[s];
          if (u) {
            var h = u.name + "";
            mt.call(sr, h) || (sr[h] = []), sr[h].push({ name: s, func: u });
          }
        }), sr[du(n, x).name] = [{
          name: "wrapper",
          func: n
        }], ht.prototype.clone = vc, ht.prototype.reverse = Yg, ht.prototype.value = qg, T.prototype.at = wv, T.prototype.chain = Sv, T.prototype.commit = Av, T.prototype.next = Cv, T.prototype.plant = Ov, T.prototype.reverse = Lv, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = Iv, T.prototype.first = T.prototype.head, Hs && (T.prototype[Hs] = bv), T;
      }), Gr = Vs();
      rr ? ((rr.exports = Gr)._ = Gr, Di._ = Gr) : Vn._ = Gr;
    }).call(L1);
  })(rl, rl.exports)), rl.exports;
}
var sl = I1();
function N1(o, ...i) {
  return [].slice.call(arguments, 1).reduce(function(n, l) {
    return n && n[l];
  }, o);
}
function hh(o, i) {
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
const os = {
  eq: "eq",
  lt: "lt",
  gt: "gt",
  lte: "lte",
  gte: "gte",
  neq: "neq"
};
function D1() {
  const o = (p, g) => !g.thing || g.thing.length == 0 || !p ? !1 : g.thing.map(
    (m) => {
      if (m.value == "*")
        return !0;
      {
        const E = hh(p, m.prop ?? "");
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
        const E = hh(p, m.prop ?? "");
        return E == null ? m.comperator === os.neq : m.comperator ? d(m.comperator, E, m.value) : !1;
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
          const w = hh(E.properties, A.prop ?? "");
          if (!w)
            continue;
          if (A.comperator && d(A.comperator, w, A.value)) {
            m.push(E);
            break;
          }
        }
    return v.features = m, v;
  }, l = (p, g) => {
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
      case os.eq:
        return A ? l(m, E) : m === E;
      case os.neq:
        return A ? !l(m, E) : m !== E;
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
function R1() {
  return {
    isFeature: (d) => !(!d || !d.type || d.type !== "Feature"),
    isFeatureCollection: (d) => !(!d || !d.type || d.type !== "FeatureCollection"),
    isPoint: (d) => !(!d || !d.type || d.type !== "Point" || !d.coordinates || !sl.isArray(d.coordinates) || d.coordinates.length < 2),
    transformToGeoJson: (d) => d ? d.type == "Feature" || d.type == "FeatureCollection" ? d : ["Polygon", "MultiPolygon", "Line", "MultiLine", "Point", "MultiPoint"].includes(d.type) ? {
      type: "Feature",
      properties: {},
      geometry: d
    } : null : null
  };
}
var ol = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var P1 = ol.exports, Xf;
function x1() {
  return Xf || (Xf = 1, (function(o, i) {
    (function(n, l) {
      l(i);
    })(P1, (function(n) {
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
      function O(e, r) {
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
      function fe(e) {
        return window["webkit" + e] || window["moz" + e] || window["ms" + e];
      }
      var Se = 0;
      function Ie(e) {
        var r = +/* @__PURE__ */ new Date(), a = Math.max(0, 16 - (r - Se));
        return Se = r + a, window.setTimeout(e, a);
      }
      var he = window.requestAnimationFrame || fe("RequestAnimationFrame") || Ie, Oe = window.cancelAnimationFrame || fe("CancelAnimationFrame") || fe("CancelRequestAnimationFrame") || function(e) {
        window.clearTimeout(e);
      };
      function ae(e, r, a) {
        if (a && he === Ie)
          e.call(r);
        else
          return he.call(window, g(e, r));
      }
      function Z(e) {
        e && Oe.call(window, e);
      }
      var K = {
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
        formatNum: O,
        trim: N,
        splitWords: k,
        setOptions: G,
        getParamString: X,
        template: z,
        isArray: Y,
        indexOf: R,
        emptyImageUrl: q,
        requestFn: he,
        cancelFn: Oe,
        requestAnimFrame: ae,
        cancelAnimFrame: Z
      };
      function U() {
      }
      U.extend = function(e) {
        var r = function() {
          G(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, a = r.__super__ = this.prototype, c = p(a);
        c.constructor = r, r.prototype = c;
        for (var f in this)
          Object.prototype.hasOwnProperty.call(this, f) && f !== "prototype" && f !== "__super__" && (r[f] = this[f]);
        return e.statics && d(r, e.statics), e.includes && (ie(e.includes), d.apply(null, [c].concat(e.includes))), d(c, e), delete c.statics, delete c.includes, c.options && (c.options = a.options ? p(a.options) : {}, d(c.options, e.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var y = 0, I = c._initHooks.length; y < I; y++)
              c._initHooks[y].call(this);
          }
        }, r;
      }, U.include = function(e) {
        var r = this.prototype.options;
        return d(this.prototype, e), e.options && (this.prototype.options = r, this.mergeOptions(e.options)), this;
      }, U.mergeOptions = function(e) {
        return d(this.prototype.options, e), this;
      }, U.addInitHook = function(e) {
        var r = Array.prototype.slice.call(arguments, 1), a = typeof e == "function" ? e : function() {
          this[e].apply(this, r);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(a), this;
      };
      function ie(e) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          e = Y(e) ? e : [e];
          for (var r = 0; r < e.length; r++)
            e[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var ne = {
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
      ne.addEventListener = ne.on, ne.removeEventListener = ne.clearAllEventListeners = ne.off, ne.addOneTimeEventListener = ne.once, ne.fireEvent = ne.fire, ne.hasEventListeners = ne.listens;
      var Ee = U.extend(ne);
      function de(e, r, a) {
        this.x = a ? Math.round(e) : e, this.y = a ? Math.round(r) : r;
      }
      var yt = Math.trunc || function(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      };
      de.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new de(this.x, this.y);
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
          return new de(this.x * e.x, this.y * e.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(e) {
          return new de(this.x / e.x, this.y / e.y);
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
          return this.x = yt(this.x), this.y = yt(this.y), this;
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
          return "Point(" + O(this.x) + ", " + O(this.y) + ")";
        }
      };
      function Le(e, r, a) {
        return e instanceof de ? e : Y(e) ? new de(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new de(e.x, e.y) : new de(e, r, a);
      }
      function ke(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      ke.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r, a;
          if (!e)
            return this;
          if (e instanceof de || typeof e[0] == "number" || "x" in e)
            r = a = Le(e);
          else if (e = xt(e), r = e.min, a = e.max, !r || !a)
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
          return typeof e[0] == "number" || e instanceof de ? e = Le(e) : e = xt(e), e instanceof ke ? (r = e.min, a = e.max) : r = a = e, r.x >= this.min.x && a.x <= this.max.x && r.y >= this.min.y && a.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(e) {
          e = xt(e);
          var r = this.min, a = this.max, c = e.min, f = e.max, y = f.x >= r.x && c.x <= a.x, I = f.y >= r.y && c.y <= a.y;
          return y && I;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(e) {
          e = xt(e);
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
          return xt(
            Le(r.x - c, r.y - f),
            Le(a.x + c, a.y + f)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(e) {
          return e ? (e = xt(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
        }
      };
      function xt(e, r) {
        return !e || e instanceof ke ? e : new ke(e, r);
      }
      function Bt(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      Bt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r = this._southWest, a = this._northEast, c, f;
          if (e instanceof Ue)
            c = e, f = e;
          else if (e instanceof Bt) {
            if (c = e._southWest, f = e._northEast, !c || !f)
              return this;
          } else
            return e ? this.extend(Pe(e) || le(e)) : this;
          return !r && !a ? (this._southWest = new Ue(c.lat, c.lng), this._northEast = new Ue(f.lat, f.lng)) : (r.lat = Math.min(c.lat, r.lat), r.lng = Math.min(c.lng, r.lng), a.lat = Math.max(f.lat, a.lat), a.lng = Math.max(f.lng, a.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var r = this._southWest, a = this._northEast, c = Math.abs(r.lat - a.lat) * e, f = Math.abs(r.lng - a.lng) * e;
          return new Bt(
            new Ue(r.lat - c, r.lng - f),
            new Ue(a.lat + c, a.lng + f)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new Ue(
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
          return new Ue(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new Ue(this.getSouth(), this.getEast());
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
          typeof e[0] == "number" || e instanceof Ue || "lat" in e ? e = Pe(e) : e = le(e);
          var r = this._southWest, a = this._northEast, c, f;
          return e instanceof Bt ? (c = e.getSouthWest(), f = e.getNorthEast()) : c = f = e, c.lat >= r.lat && f.lat <= a.lat && c.lng >= r.lng && f.lng <= a.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(e) {
          e = le(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), f = e.getNorthEast(), y = f.lat >= r.lat && c.lat <= a.lat, I = f.lng >= r.lng && c.lng <= a.lng;
          return y && I;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(e) {
          e = le(e);
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
          return e ? (e = le(e), this._southWest.equals(e.getSouthWest(), r) && this._northEast.equals(e.getNorthEast(), r)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function le(e, r) {
        return e instanceof Bt ? e : new Bt(e, r);
      }
      function Ue(e, r, a) {
        if (isNaN(e) || isNaN(r))
          throw new Error("Invalid LatLng object: (" + e + ", " + r + ")");
        this.lat = +e, this.lng = +r, a !== void 0 && (this.alt = +a);
      }
      Ue.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          if (!e)
            return !1;
          e = Pe(e);
          var a = Math.max(
            Math.abs(this.lat - e.lat),
            Math.abs(this.lng - e.lng)
          );
          return a <= (r === void 0 ? 1e-9 : r);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(e) {
          return "LatLng(" + O(this.lat, e) + ", " + O(this.lng, e) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(e) {
          return $t.distance(this, Pe(e));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return $t.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(e) {
          var r = 180 * e / 40075017, a = r / Math.cos(Math.PI / 180 * this.lat);
          return le(
            [this.lat - r, this.lng - a],
            [this.lat + r, this.lng + a]
          );
        },
        clone: function() {
          return new Ue(this.lat, this.lng, this.alt);
        }
      };
      function Pe(e, r, a) {
        return e instanceof Ue ? e : Y(e) && typeof e[0] != "object" ? e.length === 3 ? new Ue(e[0], e[1], e[2]) : e.length === 2 ? new Ue(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new Ue(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : r === void 0 ? null : new Ue(e, r, a);
      }
      var Ht = {
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
          return new ke(c, f);
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
          return new Ue(a, r, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(e) {
          var r = e.getCenter(), a = this.wrapLatLng(r), c = r.lat - a.lat, f = r.lng - a.lng;
          if (c === 0 && f === 0)
            return e;
          var y = e.getSouthWest(), I = e.getNorthEast(), B = new Ue(y.lat - c, y.lng - f), W = new Ue(I.lat - c, I.lng - f);
          return new Bt(B, W);
        }
      }, $t = d({}, Ht, {
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
      }), Pn = 6378137, sn = {
        R: Pn,
        MAX_LATITUDE: 85.0511287798,
        project: function(e) {
          var r = Math.PI / 180, a = this.MAX_LATITUDE, c = Math.max(Math.min(a, e.lat), -a), f = Math.sin(c * r);
          return new de(
            this.R * e.lng * r,
            this.R * Math.log((1 + f) / (1 - f)) / 2
          );
        },
        unproject: function(e) {
          var r = 180 / Math.PI;
          return new Ue(
            (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * r,
            e.x * r / this.R
          );
        },
        bounds: (function() {
          var e = Pn * Math.PI;
          return new ke([-e, -e], [e, e]);
        })()
      };
      function Yn(e, r, a, c) {
        if (Y(e)) {
          this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
          return;
        }
        this._a = e, this._b = r, this._c = a, this._d = c;
      }
      Yn.prototype = {
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
          return r = r || 1, new de(
            (e.x / r - this._b) / this._a,
            (e.y / r - this._d) / this._c
          );
        }
      };
      function Un(e, r, a, c) {
        return new Yn(e, r, a, c);
      }
      var Ui = d({}, $t, {
        code: "EPSG:3857",
        projection: sn,
        transformation: (function() {
          var e = 0.5 / (Math.PI * sn.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), fn = d({}, Ui, {
        code: "EPSG:900913"
      });
      function Ut(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function zi(e, r) {
        var a = "", c, f, y, I, B, W;
        for (c = 0, y = e.length; c < y; c++) {
          for (B = e[c], f = 0, I = B.length; f < I; f++)
            W = B[f], a += (f ? "L" : "M") + W.x + " " + W.y;
          a += r ? me.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var on = document.documentElement.style, an = "ActiveXObject" in window, vr = an && !document.addEventListener, qn = "msLaunchUri" in navigator && !("documentMode" in document), jt = _t("webkit"), Xn = _t("android"), xn = _t("android 2") || _t("android 3"), Vi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), zn = Xn && _t("Google") && Vi < 537 && !("AudioNode" in window), er = !!window.opera, pn = !qn && _t("chrome"), Qn = _t("gecko") && !jt && !er && !an, bi = !pn && _t("safari"), Oi = _t("phantom"), di = "OTransition" in on, Fn = navigator.platform.indexOf("Win") === 0, Wi = an && "transition" in on, fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !xn, ei = "MozPerspective" in on, An = !window.L_DISABLE_3D && (Wi || fi || ei) && !di && !Oi, ti = typeof orientation < "u" || _t("mobile"), Li = ti && jt, Ii = ti && fi, ni = !window.PointerEvent && window.MSPointerEvent, tr = !!(window.PointerEvent || ni), Zi = "ontouchstart" in window || !!window.TouchEvent, F = !window.L_NO_TOUCH && (Zi || tr), oe = ti && er, J = ti && Qn, ve = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Be = (function() {
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
      })(), xe = (function() {
        return !!document.createElement("canvas").getContext;
      })(), et = !!(document.createElementNS && Ut("svg").createSVGRect), pt = !!et && (function() {
        var e = document.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), Nt = !et && (function() {
        try {
          var e = document.createElement("div");
          e.innerHTML = '<v:shape adj="1"/>';
          var r = e.firstChild;
          return r.style.behavior = "url(#default#VML)", r && typeof r.adj == "object";
        } catch {
          return !1;
        }
      })(), Gt = navigator.platform.indexOf("Mac") === 0, Xt = navigator.platform.indexOf("Linux") === 0;
      function _t(e) {
        return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
      }
      var me = {
        ie: an,
        ielt9: vr,
        edge: qn,
        webkit: jt,
        android: Xn,
        android23: xn,
        androidStock: zn,
        opera: er,
        chrome: pn,
        gecko: Qn,
        safari: bi,
        phantom: Oi,
        opera12: di,
        win: Fn,
        ie3d: Wi,
        webkit3d: fi,
        gecko3d: ei,
        any3d: An,
        mobile: ti,
        mobileWebkit: Li,
        mobileWebkit3d: Ii,
        msPointer: ni,
        pointer: tr,
        touch: F,
        touchNative: Zi,
        mobileOpera: oe,
        mobileGecko: J,
        retina: ve,
        passiveEvents: Be,
        canvas: xe,
        svg: et,
        vml: Nt,
        inlineSvg: pt,
        mac: Gt,
        linux: Xt
      }, ii = me.msPointer ? "MSPointerDown" : "pointerdown", Hi = me.msPointer ? "MSPointerMove" : "pointermove", pi = me.msPointer ? "MSPointerUp" : "pointerup", yr = me.msPointer ? "MSPointerCancel" : "pointercancel", Dt = {
        touchstart: ii,
        touchmove: Hi,
        touchend: pi,
        touchcancel: yr
      }, Cn = {
        touchstart: Kn,
        touchmove: Yt,
        touchend: Yt,
        touchcancel: Yt
      }, lt = {}, zt = !1;
      function bn(e, r, a) {
        return r === "touchstart" && ln(), Cn[r] ? (a = Cn[r].bind(this, a), e.addEventListener(Dt[r], a, !1), a) : (console.warn("wrong event specified:", r), w);
      }
      function ri(e, r, a) {
        if (!Dt[r]) {
          console.warn("wrong event specified:", r);
          return;
        }
        e.removeEventListener(Dt[r], a, !1);
      }
      function gn(e) {
        lt[e.pointerId] = e;
      }
      function On(e) {
        lt[e.pointerId] && (lt[e.pointerId] = e);
      }
      function si(e) {
        delete lt[e.pointerId];
      }
      function ln() {
        zt || (document.addEventListener(ii, gn, !0), document.addEventListener(Hi, On, !0), document.addEventListener(pi, si, !0), document.addEventListener(yr, si, !0), zt = !0);
      }
      function Yt(e, r) {
        if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
          r.touches = [];
          for (var a in lt)
            r.touches.push(lt[a]);
          r.changedTouches = [r], e(r);
        }
      }
      function Kn(e, r) {
        r.MSPOINTER_TYPE_TOUCH && r.pointerType === r.MSPOINTER_TYPE_TOUCH && nt(r), Yt(e, r);
      }
      function Pr(e) {
        var r = {}, a, c;
        for (c in e)
          a = e[c], r[c] = a && a.bind ? a.bind(e) : a;
        return e = r, r.type = "dblclick", r.detail = 2, r.isTrusted = !1, r._simulated = !0, r;
      }
      var fs = 200;
      function ps(e, r) {
        e.addEventListener("dblclick", r);
        var a = 0, c;
        function f(y) {
          if (y.detail !== 1) {
            c = y.detail;
            return;
          }
          if (!(y.pointerType === "mouse" || y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)) {
            var I = Ul(y);
            if (!(I.some(function(W) {
              return W instanceof HTMLLabelElement && W.attributes.for;
            }) && !I.some(function(W) {
              return W instanceof HTMLInputElement || W instanceof HTMLSelectElement;
            }))) {
              var B = Date.now();
              B - a <= fs ? (c++, c === 2 && r(Pr(y))) : c = 1, a = B;
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
      var Er = Fs(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Yi = Fs(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Kr = Yi === "webkitTransition" || Yi === "OTransition" ? Yi + "End" : "transitionend";
      function Jr(e) {
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
      function tt(e, r, a) {
        var c = document.createElement(e);
        return c.className = r || "", a && a.appendChild(c), c;
      }
      function bt(e) {
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
      function _i(e) {
        var r = e.parentNode;
        r && r.firstChild !== e && r.insertBefore(e, r.firstChild);
      }
      function xr(e, r) {
        if (e.classList !== void 0)
          return e.classList.contains(r);
        var a = Uo(e);
        return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
      }
      function Ze(e, r) {
        if (e.classList !== void 0)
          for (var a = k(r), c = 0, f = a.length; c < f; c++)
            e.classList.add(a[c]);
        else if (!xr(e, r)) {
          var y = Uo(e);
          ko(e, (y ? y + " " : "") + r);
        }
      }
      function Ot(e, r) {
        e.classList !== void 0 ? e.classList.remove(r) : ko(e, N((" " + Uo(e) + " ").replace(" " + r + " ", " ")));
      }
      function ko(e, r) {
        e.className.baseVal === void 0 ? e.className = r : e.className.baseVal = r;
      }
      function Uo(e) {
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
      function Fs(e) {
        for (var r = document.documentElement.style, a = 0; a < e.length; a++)
          if (e[a] in r)
            return e[a];
        return !1;
      }
      function gs(e, r, a) {
        var c = r || new de(0, 0);
        e.style[Er] = (me.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (a ? " scale(" + a + ")" : "");
      }
      function un(e, r) {
        e._leaflet_pos = r, me.any3d ? gs(e, r) : (e.style.left = r.x + "px", e.style.top = r.y + "px");
      }
      function Fr(e) {
        return e._leaflet_pos || new de(0, 0);
      }
      var _s, Tr, zo;
      if ("onselectstart" in document)
        _s = function() {
          Xe(window, "selectstart", nt);
        }, Tr = function() {
          Ft(window, "selectstart", nt);
        };
      else {
        var Ms = Fs(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        _s = function() {
          if (Ms) {
            var e = document.documentElement.style;
            zo = e[Ms], e[Ms] = "none";
          }
        }, Tr = function() {
          Ms && (document.documentElement.style[Ms] = zo, zo = void 0);
        };
      }
      function wa() {
        Xe(window, "dragstart", nt);
      }
      function Vo() {
        Ft(window, "dragstart", nt);
      }
      var so, Wo;
      function Zo(e) {
        for (; e.tabIndex === -1; )
          e = e.parentNode;
        e.style && (Ho(), so = e, Wo = e.style.outlineStyle, e.style.outlineStyle = "none", Xe(window, "keydown", Ho));
      }
      function Ho() {
        so && (so.style.outlineStyle = Wo, so = void 0, Wo = void 0, Ft(window, "keydown", Ho));
      }
      function Bl(e) {
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
        TRANSFORM: Er,
        TRANSITION: Yi,
        TRANSITION_END: Kr,
        get: Jr,
        getStyle: nr,
        create: tt,
        remove: bt,
        empty: ir,
        toFront: Mn,
        toBack: _i,
        hasClass: xr,
        addClass: Ze,
        removeClass: Ot,
        setClass: ko,
        getClass: Uo,
        setOpacity: Ni,
        testProp: Fs,
        setTransform: gs,
        setPosition: un,
        getPosition: Fr,
        get disableTextSelection() {
          return _s;
        },
        get enableTextSelection() {
          return Tr;
        },
        disableImageDrag: wa,
        enableImageDrag: Vo,
        preventOutline: Zo,
        restoreOutline: Ho,
        getSizedParentNode: Bl,
        getScale: Sa
      };
      function Xe(e, r, a, c) {
        if (r && typeof r == "object")
          for (var f in r)
            Aa(e, f, r[f], a);
        else {
          r = k(r);
          for (var y = 0, I = r.length; y < I; y++)
            Aa(e, r[y], a, c);
        }
        return this;
      }
      var wr = "_leaflet_events";
      function Ft(e, r, a, c) {
        if (arguments.length === 1)
          kl(e), delete e[wr];
        else if (r && typeof r == "object")
          for (var f in r)
            Ca(e, f, r[f], a);
        else if (r = k(r), arguments.length === 2)
          kl(e, function(B) {
            return R(r, B) !== -1;
          });
        else
          for (var y = 0, I = r.length; y < I; y++)
            Ca(e, r[y], a, c);
        return this;
      }
      function kl(e, r) {
        for (var a in e[wr]) {
          var c = a.split(/\d/)[0];
          (!r || r(c)) && Ca(e, c, null, null, a);
        }
      }
      var oo = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Aa(e, r, a, c) {
        var f = r + m(a) + (c ? "_" + m(c) : "");
        if (e[wr] && e[wr][f])
          return this;
        var y = function(B) {
          return a.call(c || e, B || window.event);
        }, I = y;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? y = bn(e, r, y) : me.touch && r === "dblclick" ? y = ps(e, y) : "addEventListener" in e ? r === "touchstart" || r === "touchmove" || r === "wheel" || r === "mousewheel" ? e.addEventListener(oo[r] || r, y, me.passiveEvents ? { passive: !1 } : !1) : r === "mouseenter" || r === "mouseleave" ? (y = function(B) {
          B = B || window.event, Oa(e, B) && I(B);
        }, e.addEventListener(oo[r], y, !1)) : e.addEventListener(r, I, !1) : e.attachEvent("on" + r, y), e[wr] = e[wr] || {}, e[wr][f] = y;
      }
      function Ca(e, r, a, c, f) {
        f = f || r + m(a) + (c ? "_" + m(c) : "");
        var y = e[wr] && e[wr][f];
        if (!y)
          return this;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? ri(e, r, y) : me.touch && r === "dblclick" ? gi(e, y) : "removeEventListener" in e ? e.removeEventListener(oo[r] || r, y, !1) : e.detachEvent("on" + r, y), e[wr][f] = null;
      }
      function ms(e) {
        return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
      }
      function ba(e) {
        return Aa(e, "wheel", ms), this;
      }
      function ao(e) {
        return Xe(e, "mousedown touchstart dblclick contextmenu", ms), e._leaflet_disable_click = !0, this;
      }
      function nt(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
      }
      function Et(e) {
        return nt(e), ms(e), this;
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
          return new de(e.clientX, e.clientY);
        var a = Sa(r), c = a.boundingClientRect;
        return new de(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (e.clientX - c.left) / a.x - r.clientLeft,
          (e.clientY - c.top) / a.y - r.clientTop
        );
      }
      var ic = me.linux && me.chrome ? window.devicePixelRatio : me.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Vl(e) {
        return me.edge ? e.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          e.deltaY && e.deltaMode === 0 ? -e.deltaY / ic : (
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
      var rc = {
        __proto__: null,
        on: Xe,
        off: Ft,
        stopPropagation: ms,
        disableScrollPropagation: ba,
        disableClickPropagation: ao,
        preventDefault: nt,
        stop: Et,
        getPropagationPath: Ul,
        getMousePosition: zl,
        getWheelDelta: Vl,
        isExternalTarget: Oa,
        addListener: Xe,
        removeListener: Ft
      }, La = Ee.extend({
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
          this._animId = ae(this._animate, this), this._step();
        },
        _step: function(e) {
          var r = +/* @__PURE__ */ new Date() - this._startTime, a = this._duration * 1e3;
          r < a ? this._runFrame(this._easeOut(r / a), e) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(e, r) {
          var a = this._startPos.add(this._offset.multiplyBy(e));
          r && a._round(), un(this._el, a), this.fire("step");
        },
        _complete: function() {
          Z(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(e) {
          return 1 - Math.pow(1 - e, this._easeOutPower);
        }
      }), gt = Ee.extend({
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
          r = G(this, r), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), r.maxBounds && this.setMaxBounds(r.maxBounds), r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)), r.center && r.zoom !== void 0 && this.setView(Pe(r.center), r.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Yi && me.any3d && !me.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Xe(this._proxy, Kr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(e, r, a) {
          if (r = r === void 0 ? this._zoom : this._limitZoom(r), e = this._limitCenter(Pe(e), r, this.options.maxBounds), a = a || {}, this._stop(), this._loaded && !a.reset && a !== !0) {
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
          var c = this.getZoomScale(r), f = this.getSize().divideBy(2), y = e instanceof de ? e : this.latLngToContainerPoint(e), I = y.subtract(f).multiplyBy(1 - 1 / c), B = this.containerPointToLatLng(f.add(I));
          return this.setView(B, r, { zoom: a });
        },
        _getBoundsCenterZoom: function(e, r) {
          r = r || {}, e = e.getBounds ? e.getBounds() : le(e);
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), f = this.getBoundsZoom(e, !1, a.add(c));
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
          if (e = le(e), !e.isValid())
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
            Ze(this._mapPane, "leaflet-pan-anim");
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
          e = Pe(e), r = r === void 0 ? I : r;
          var B = Math.max(y.x, y.y), W = B * this.getZoomScale(I, r), te = f.distanceTo(c) || 1, Ae = 1.42, Fe = Ae * Ae;
          function st(Vt) {
            var wo = Vt ? -1 : 1, T = Vt ? W : B, Ys = W * W - B * B + wo * Fe * Fe * te * te, ia = 2 * T * Fe * te, Ei = Ys / ia, ht = Math.sqrt(Ei * Ei + 1) - Ei, vc = ht < 1e-9 ? -18 : Math.log(ht);
            return vc;
          }
          function _n(Vt) {
            return (Math.exp(Vt) - Math.exp(-Vt)) / 2;
          }
          function en(Vt) {
            return (Math.exp(Vt) + Math.exp(-Vt)) / 2;
          }
          function Jn(Vt) {
            return _n(Vt) / en(Vt);
          }
          var Wn = st(0);
          function sr(Vt) {
            return B * (en(Wn) / en(Wn + Ae * Vt));
          }
          function pc(Vt) {
            return B * (en(Wn) * Jn(Wn + Ae * Vt) - _n(Wn)) / Fe;
          }
          function gc(Vt) {
            return 1 - Math.pow(1 - Vt, 1.5);
          }
          var _c = Date.now(), ru = (st(1) - Wn) / Ae, mc = a.duration ? 1e3 * a.duration : 1e3 * ru * 0.8;
          function To() {
            var Vt = (Date.now() - _c) / mc, wo = gc(Vt) * ru;
            Vt <= 1 ? (this._flyToFrame = ae(To, this), this._move(
              this.unproject(c.add(f.subtract(c).multiplyBy(pc(wo) / te)), I),
              this.getScaleZoom(B / sr(wo), I),
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
          return e = le(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var a = this.getCenter(), c = this._limitCenter(a, this._zoom, le(e));
          return a.equals(c) || this.panTo(c, r), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(e, r) {
          r = r || {};
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), f = this.project(this.getCenter()), y = this.project(e), I = this.getPixelBounds(), B = xt([I.min.add(a), I.max.subtract(c)]), W = B.getSize();
          if (!B.contains(y)) {
            this._enforcingBounds = !0;
            var te = y.subtract(B.getCenter()), Ae = B.extend(y).getSize().subtract(W);
            f.x += te.x < 0 ? -Ae.x : Ae.x, f.y += te.y < 0 ? -Ae.y : Ae.y, this.panTo(this.unproject(f), r), this._enforcingBounds = !1;
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
            var r = e.coords.latitude, a = e.coords.longitude, c = new Ue(r, a), f = c.toBounds(e.coords.accuracy * 2), y = this._locateOptions;
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), bt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (Z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
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
          var a = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), c = tt("div", a, r || this._mapPane);
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
          return new Bt(r, a);
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
          e = le(e), a = Le(a || [0, 0]);
          var c = this.getZoom() || 0, f = this.getMinZoom(), y = this.getMaxZoom(), I = e.getNorthWest(), B = e.getSouthEast(), W = this.getSize().subtract(a), te = xt(this.project(B, c), this.project(I, c)).getSize(), Ae = me.any3d ? this.options.zoomSnap : 1, Fe = W.x / te.x, st = W.y / te.y, _n = r ? Math.max(Fe, st) : Math.min(Fe, st);
          return c = this.getScaleZoom(_n, c), Ae && (c = Math.round(c / (Ae / 100)) * (Ae / 100), c = r ? Math.ceil(c / Ae) * Ae : Math.floor(c / Ae) * Ae), Math.max(f, Math.min(y, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new de(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(e, r) {
          var a = this._getTopLeftPoint(e, r);
          return new ke(a, a.add(this.getSize()));
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
          return r = r === void 0 ? this._zoom : r, this.options.crs.latLngToPoint(Pe(e), r);
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
          var r = this.project(Pe(e))._round();
          return r._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(e) {
          return this.options.crs.wrapLatLng(Pe(e));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(e) {
          return this.options.crs.wrapLatLngBounds(le(e));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(e, r) {
          return this.options.crs.distance(Pe(e), Pe(r));
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
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Pe(e)));
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
          var r = this._container = Jr(e);
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          Xe(r, "scroll", this._onScroll, this), this._containerId = m(r);
        },
        _initLayout: function() {
          var e = this._container;
          this._fadeAnimated = this.options.fadeAnimation && me.any3d, Ze(e, "leaflet-container" + (me.touch ? " leaflet-touch" : "") + (me.retina ? " leaflet-retina" : "") + (me.ielt9 ? " leaflet-oldie" : "") + (me.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var r = nr(e, "position");
          r !== "absolute" && r !== "relative" && r !== "fixed" && r !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var e = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), un(this._mapPane, new de(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ze(e.markerPane, "leaflet-zoom-hide"), Ze(e.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(e, r, a) {
          un(this._mapPane, new de(0, 0));
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
          return Z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(e) {
          un(this._mapPane, this._getMapPanePos().subtract(e));
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
          var r = e ? Ft : Xe;
          r(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && r(window, "resize", this._onResize, this), me.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          Z(this._resizeRequest), this._resizeRequest = ae(
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
            a === "mousedown" && Zo(r), this._fireDOMEvent(e, a);
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
            r === "contextmenu" && nt(e);
            var B = f[0], W = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var te = B.getLatLng && (!B._radius || B._radius <= 10);
              W.containerPoint = te ? this.latLngToContainerPoint(B.getLatLng()) : this.mouseEventToContainerPoint(e), W.layerPoint = this.containerPointToLayerPoint(W.containerPoint), W.latlng = te ? B.getLatLng() : this.layerPointToLatLng(W.layerPoint);
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
          return Fr(this._mapPane) || new de(0, 0);
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
          return xt([
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
          var c = this.project(e, r), f = this.getSize().divideBy(2), y = new ke(c.subtract(f), c.add(f)), I = this._getBoundsOffset(y, a, r);
          return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1 ? e : this.unproject(c.add(I), r);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(e, r) {
          if (!r)
            return e;
          var a = this.getPixelBounds(), c = new ke(a.min.add(e), a.max.add(e));
          return e.add(this._getBoundsOffset(c, r));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(e, r, a) {
          var c = xt(
            this.project(r.getNorthEast(), a),
            this.project(r.getSouthWest(), a)
          ), f = c.min.subtract(e.min), y = c.max.subtract(e.max), I = this._rebound(f.x, -y.x), B = this._rebound(f.y, -y.y);
          return new de(I, B);
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
          var e = this._proxy = tt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(e), this.on("zoomanim", function(r) {
            var a = Er, c = this._proxy.style[a];
            gs(this._proxy, this.project(r.center, r.zoom), this.getZoomScale(r.zoom, 1)), c === this._proxy.style[a] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          bt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var e = this.getCenter(), r = this.getZoom();
          gs(this._proxy, this.project(e, r), this.getZoomScale(r, 1));
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
          return a.animate !== !0 && !this.getSize().contains(f) ? !1 : (ae(function() {
            this._moveStart(!0, a.noMoveStart || !1)._animateZoom(e, r, !0);
          }, this), !0);
        },
        _animateZoom: function(e, r, a, c) {
          this._mapPane && (a && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = r, Ze(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
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
        return new gt(e, r);
      }
      var Di = U.extend({
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
          return Ze(r, "leaflet-control"), a.indexOf("bottom") !== -1 ? c.insertBefore(r, c.firstChild) : c.appendChild(r), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (bt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(e) {
          this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
        }
      }), rr = function(e) {
        return new Di(e);
      };
      gt.include({
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
          var e = this._controlCorners = {}, r = "leaflet-", a = this._controlContainer = tt("div", r + "control-container", this._container);
          function c(f, y) {
            var I = r + f + " " + r + y;
            e[f + y] = tt("div", I, a);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var e in this._controlCorners)
            bt(this._controlCorners[e]);
          bt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Ia = Di.extend({
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
          Ze(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var e = this._map.getSize().y - (this._container.offsetTop + 50);
          return e < this._section.clientHeight ? (Ze(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : Ot(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Ot(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var e = "leaflet-control-layers", r = this._container = tt("div", e), a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), ao(r), ba(r);
          var c = this._section = tt("section", e + "-list");
          a && (this._map.on("click", this.collapse, this), Xe(r, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var f = this._layersLink = tt("a", e + "-toggle", r);
          f.href = "#", f.title = "Layers", f.setAttribute("role", "button"), Xe(f, {
            keydown: function(y) {
              y.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(y) {
              nt(y), this._expandSafely();
            }
          }, this), a || this.expand(), this._baseLayersList = tt("div", e + "-base", c), this._separator = tt("div", e + "-separator", c), this._overlaysList = tt("div", e + "-overlays", c), r.appendChild(c);
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
          e.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = a) : c = this._createRadioElement("leaflet-base-layers_" + m(this), a), this._layerControlInputs.push(c), c.layerId = m(e.layer), Xe(c, "click", this._onInputClick, this);
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
          this._preventClick = !0, Xe(e, "click", nt), this.expand();
          var r = this;
          setTimeout(function() {
            Ft(e, "click", nt), r._preventClick = !1;
          });
        }
      }), Na = function(e, r, a) {
        return new Ia(e, r, a);
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
          var r = "leaflet-control-zoom", a = tt("div", r + " leaflet-bar"), c = this.options;
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
          var y = tt("a", a, c);
          return y.innerHTML = e, y.href = "#", y.title = r, y.setAttribute("role", "button"), y.setAttribute("aria-label", r), ao(y), Xe(y, "click", Et), Xe(y, "click", f, this), Xe(y, "click", this._refocusOnMap, this), y;
        },
        _updateDisabled: function() {
          var e = this._map, r = "leaflet-disabled";
          Ot(this._zoomInButton, r), Ot(this._zoomOutButton, r), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Ze(this._zoomOutButton, r), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Ze(this._zoomInButton, r), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      gt.mergeOptions({
        zoomControl: !0
      }), gt.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new mi(), this.addControl(this.zoomControl));
      });
      var Wl = function(e) {
        return new mi(e);
      }, Da = Di.extend({
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
          var r = "leaflet-control-scale", a = tt("div", r), c = this.options;
          return this._addScales(c, r + "-line", a), e.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), a;
        },
        onRemove: function(e) {
          e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(e, r, a) {
          e.metric && (this._mScale = tt("div", r, a)), e.imperial && (this._iScale = tt("div", r, a));
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
        return new Da(e);
      }, Hl = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Yo = Di.extend({
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
          e.attributionControl = this, this._container = tt("div", "leaflet-control-attribution"), ao(this._container);
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
      gt.mergeOptions({
        attributionControl: !0
      }), gt.addInitHook(function() {
        this.options.attributionControl && new Yo().addTo(this);
      });
      var Yl = function(e) {
        return new Yo(e);
      };
      Di.Layers = Ia, Di.Zoom = mi, Di.Scale = Da, Di.Attribution = Yo, rr.layers = Na, rr.zoom = Wl, rr.scale = Zl, rr.attribution = Yl;
      var Qt = U.extend({
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
      var sc = { Events: ne }, Ri = me.touch ? "touchstart mousedown" : "mousedown", $r = Ee.extend({
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
          this._enabled || (Xe(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && ($r._dragging === this && this.finishDrag(!0), Ft(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(e) {
          if (this._enabled && (this._moved = !1, !xr(this._element, "leaflet-zoom-anim"))) {
            if (e.touches && e.touches.length !== 1) {
              $r._dragging === this && this.finishDrag();
              return;
            }
            if (!($r._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && ($r._dragging = this, this._preventOutline && Zo(this._element), wa(), _s(), !this._moving)) {
              this.fire("down");
              var r = e.touches ? e.touches[0] : e, a = Bl(this._element);
              this._startPoint = new de(r.clientX, r.clientY), this._startPos = Fr(this._element), this._parentScale = Sa(a);
              var c = e.type === "mousedown";
              Xe(document, c ? "mousemove" : "touchmove", this._onMove, this), Xe(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(e) {
          if (this._enabled) {
            if (e.touches && e.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = e.touches && e.touches.length === 1 ? e.touches[0] : e, a = new de(r.clientX, r.clientY)._subtract(this._startPoint);
            !a.x && !a.y || Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (a.x /= this._parentScale.x, a.y /= this._parentScale.y, nt(e), this._moved || (this.fire("dragstart"), this._moved = !0, Ze(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ze(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, this._lastEvent = e, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var e = { originalEvent: this._lastEvent };
          this.fire("predrag", e), un(this._element, this._newPos), this.fire("drag", e);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(e) {
          Ot(document.body, "leaflet-dragging"), this._lastTarget && (Ot(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Ft(document, "mousemove touchmove", this._onMove, this), Ft(document, "mouseup touchend touchcancel", this._onUp, this), Vo(), Tr();
          var r = this._moved && this._moving;
          this._moving = !1, $r._dragging = !1, r && this.fire("dragend", {
            noInertia: e,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Ra(e, r, a) {
        var c, f = [1, 4, 2, 8], y, I, B, W, te, Ae, Fe, st;
        for (y = 0, Ae = e.length; y < Ae; y++)
          e[y]._code = Sr(e[y], r);
        for (B = 0; B < 4; B++) {
          for (Fe = f[B], c = [], y = 0, Ae = e.length, I = Ae - 1; y < Ae; I = y++)
            W = e[y], te = e[I], W._code & Fe ? te._code & Fe || (st = uo(te, W, Fe, r, a), st._code = Sr(st, r), c.push(st)) : (te._code & Fe && (st = uo(te, W, Fe, r, a), st._code = Sr(st, r), c.push(st)), c.push(W));
          e = c;
        }
        return e;
      }
      function Mr(e, r) {
        var a, c, f, y, I, B, W, te, Ae;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Fe = Pe([0, 0]), st = le(e), _n = st.getNorthWest().distanceTo(st.getSouthWest()) * st.getNorthEast().distanceTo(st.getNorthWest());
        _n < 1700 && (Fe = Bs(e));
        var en = e.length, Jn = [];
        for (a = 0; a < en; a++) {
          var Wn = Pe(e[a]);
          Jn.push(r.project(Pe([Wn.lat - Fe.lat, Wn.lng - Fe.lng])));
        }
        for (B = W = te = 0, a = 0, c = en - 1; a < en; c = a++)
          f = Jn[a], y = Jn[c], I = f.y * y.x - y.y * f.x, W += (f.x + y.x) * I, te += (f.y + y.y) * I, B += I * 3;
        B === 0 ? Ae = Jn[0] : Ae = [W / B, te / B];
        var sr = r.unproject(Le(Ae));
        return Pe([sr.lat + Fe.lat, sr.lng + Fe.lng]);
      }
      function Bs(e) {
        for (var r = 0, a = 0, c = 0, f = 0; f < e.length; f++) {
          var y = Pe(e[f]);
          r += y.lat, a += y.lng, c++;
        }
        return Pe([r / c, a / c]);
      }
      var Pa = {
        __proto__: null,
        clipPolygon: Ra,
        polygonCenter: Mr,
        centroid: Bs
      };
      function kt(e, r) {
        if (!r || !e.length)
          return e.slice();
        var a = r * r;
        return e = ac(e, a), e = oc(e, a), e;
      }
      function Br(e, r, a) {
        return Math.sqrt(co(e, r, a, !0));
      }
      function xa(e, r, a) {
        return co(e, r, a);
      }
      function oc(e, r) {
        var a = e.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, f = new c(a);
        f[0] = f[a - 1] = 1, lo(e, f, r, 0, a - 1);
        var y, I = [];
        for (y = 0; y < a; y++)
          f[y] && I.push(e[y]);
        return I;
      }
      function lo(e, r, a, c, f) {
        var y = 0, I, B, W;
        for (B = c + 1; B <= f - 1; B++)
          W = co(e[B], e[c], e[f], !0), W > y && (I = B, y = W);
        y > a && (r[I] = 1, lo(e, r, a, c, I), lo(e, r, a, I, f));
      }
      function ac(e, r) {
        for (var a = [e[0]], c = 1, f = 0, y = e.length; c < y; c++)
          Gs(e[c], e[f]) > r && (a.push(e[c]), f = c);
        return f < y - 1 && a.push(e[y - 1]), a;
      }
      var ql;
      function Kl(e, r, a, c, f) {
        var y = c ? ql : Sr(e, a), I = Sr(r, a), B, W, te;
        for (ql = I; ; ) {
          if (!(y | I))
            return [e, r];
          if (y & I)
            return !1;
          B = y || I, W = uo(e, r, B, a, f), te = Sr(W, a), B === y ? (e = W, y = te) : (r = W, I = te);
        }
      }
      function uo(e, r, a, c, f) {
        var y = r.x - e.x, I = r.y - e.y, B = c.min, W = c.max, te, Ae;
        return a & 8 ? (te = e.x + y * (W.y - e.y) / I, Ae = W.y) : a & 4 ? (te = e.x + y * (B.y - e.y) / I, Ae = B.y) : a & 2 ? (te = W.x, Ae = e.y + I * (W.x - e.x) / y) : a & 1 && (te = B.x, Ae = e.y + I * (B.x - e.x) / y), new de(te, Ae, f);
      }
      function Sr(e, r) {
        var a = 0;
        return e.x < r.min.x ? a |= 1 : e.x > r.max.x && (a |= 2), e.y < r.min.y ? a |= 4 : e.y > r.max.y && (a |= 8), a;
      }
      function Gs(e, r) {
        var a = r.x - e.x, c = r.y - e.y;
        return a * a + c * c;
      }
      function co(e, r, a, c) {
        var f = r.x, y = r.y, I = a.x - f, B = a.y - y, W = I * I + B * B, te;
        return W > 0 && (te = ((e.x - f) * I + (e.y - y) * B) / W, te > 1 ? (f = a.x, y = a.y) : te > 0 && (f += I * te, y += B * te)), I = e.x - f, B = e.y - y, c ? I * I + B * B : new de(f, y);
      }
      function Pi(e) {
        return !Y(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
      }
      function Fa(e) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Pi(e);
      }
      function qo(e, r) {
        var a, c, f, y, I, B, W, te;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Ae = Pe([0, 0]), Fe = le(e), st = Fe.getNorthWest().distanceTo(Fe.getSouthWest()) * Fe.getNorthEast().distanceTo(Fe.getNorthWest());
        st < 1700 && (Ae = Bs(e));
        var _n = e.length, en = [];
        for (a = 0; a < _n; a++) {
          var Jn = Pe(e[a]);
          en.push(r.project(Pe([Jn.lat - Ae.lat, Jn.lng - Ae.lng])));
        }
        for (a = 0, c = 0; a < _n - 1; a++)
          c += en[a].distanceTo(en[a + 1]) / 2;
        if (c === 0)
          te = en[0];
        else
          for (a = 0, y = 0; a < _n - 1; a++)
            if (I = en[a], B = en[a + 1], f = I.distanceTo(B), y += f, y > c) {
              W = (y - c) / f, te = [
                B.x - W * (B.x - I.x),
                B.y - W * (B.y - I.y)
              ];
              break;
            }
        var Wn = r.unproject(Le(te));
        return Pe([Wn.lat + Ae.lat, Wn.lng + Ae.lng]);
      }
      var Ma = {
        __proto__: null,
        simplify: kt,
        pointToSegmentDistance: Br,
        closestPointOnSegment: xa,
        clipSegment: Kl,
        _getEdgeIntersection: uo,
        _getBitCode: Sr,
        _sqClosestPointOnSegment: co,
        isFlat: Pi,
        _flat: Fa,
        polylineCenter: qo
      }, Ko = {
        project: function(e) {
          return new de(e.lng, e.lat);
        },
        unproject: function(e) {
          return new Ue(e.y, e.x);
        },
        bounds: new ke([-180, -90], [180, 90])
      }, Ba = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new ke([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(e) {
          var r = Math.PI / 180, a = this.R, c = e.lat * r, f = this.R_MINOR / a, y = Math.sqrt(1 - f * f), I = y * Math.sin(c), B = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - I) / (1 + I), y / 2);
          return c = -a * Math.log(Math.max(B, 1e-10)), new de(e.lng * r * a, c);
        },
        unproject: function(e) {
          for (var r = 180 / Math.PI, a = this.R, c = this.R_MINOR / a, f = Math.sqrt(1 - c * c), y = Math.exp(-e.y / a), I = Math.PI / 2 - 2 * Math.atan(y), B = 0, W = 0.1, te; B < 15 && Math.abs(W) > 1e-7; B++)
            te = f * Math.sin(I), te = Math.pow((1 - te) / (1 + te), f / 2), W = Math.PI / 2 - 2 * Math.atan(y * te) - I, I += W;
          return new Ue(I * r, e.x * r / a);
        }
      }, Ga = {
        __proto__: null,
        LonLat: Ko,
        Mercator: Ba,
        SphericalMercator: sn
      }, ka = d({}, $t, {
        code: "EPSG:3395",
        projection: Ba,
        transformation: (function() {
          var e = 0.5 / (Math.PI * Ba.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), Jl = d({}, $t, {
        code: "EPSG:4326",
        projection: Ko,
        transformation: Un(1 / 180, 1, -1 / 180, 0.5)
      }), $l = d({}, Ht, {
        projection: Ko,
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
      Ht.Earth = $t, Ht.EPSG3395 = ka, Ht.EPSG3857 = Ui, Ht.EPSG900913 = fn, Ht.EPSG4326 = Jl, Ht.Simple = $l;
      var qt = Ee.extend({
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
      gt.include({
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
      var jr = qt.extend({
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
      }), ho = function(e, r) {
        return new jr(e, r);
      }, Ar = jr.extend({
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
          var e = new Bt();
          for (var r in this._layers) {
            var a = this._layers[r];
            e.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return e;
        }
      }), jl = function(e, r) {
        return new Ar(e, r);
      }, ks = U.extend({
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
      function lc(e) {
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
          var r = function(a, c, f) {
            var y = c.exec(a);
            return y && y[f];
          };
          return e = r(e, /^url\((['"])?(.+)\1\)$/, 2), e && r(e, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var e = tt("div", "leaflet-default-icon-path", document.body), r = nr(e, "background-image") || nr(e, "backgroundImage");
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
          this._draggable || (this._draggable = new $r(e, e, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), Ze(e, "leaflet-marker-draggable");
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
          var r = this._marker, a = r._map, c = this._marker.options.autoPanSpeed, f = this._marker.options.autoPanPadding, y = Fr(r._icon), I = a.getPixelBounds(), B = a.getPixelOrigin(), W = xt(
            I.min._subtract(B).add(f),
            I.max._subtract(B).subtract(f)
          );
          if (!W.contains(y)) {
            var te = Le(
              (Math.max(W.max.x, y.x) - W.max.x) / (I.max.x - W.max.x) - (Math.min(W.min.x, y.x) - W.min.x) / (I.min.x - W.min.x),
              (Math.max(W.max.y, y.y) - W.max.y) / (I.max.y - W.max.y) - (Math.min(W.min.y, y.y) - W.min.y) / (I.min.y - W.min.y)
            ).multiplyBy(c);
            a.panBy(te, { animate: !1 }), this._draggable._newPos._add(te), this._draggable._startPos._add(te), un(r._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = ae(this._adjustPan.bind(this, e));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
          this._marker.options.autoPan && (Z(this._panRequest), this._panRequest = ae(this._adjustPan.bind(this, e)));
        },
        _onDrag: function(e) {
          var r = this._marker, a = r._shadow, c = Fr(r._icon), f = r._map.layerPointToLatLng(c);
          a && un(a, c), r._latlng = f, e.latlng = f, e.oldLatLng = this._oldLatLng, r.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
          Z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
        }
      }), Jo = qt.extend({
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
          G(this, r), this._latlng = Pe(e);
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
          return this._latlng = Pe(e), this.update(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          a !== this._icon && (this._icon && this._removeIcon(), c = !0, e.title && (a.title = e.title), a.tagName === "IMG" && (a.alt = e.alt || "")), Ze(a, r), e.keyboard && (a.tabIndex = "0", a.setAttribute("role", "button")), this._icon = a, e.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Xe(a, "focus", this._panOnFocus, this);
          var f = e.icon.createShadow(this._shadow), y = !1;
          f !== this._shadow && (this._removeShadow(), y = !0), f && (Ze(f, r), f.alt = ""), this._shadow = f, e.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), f && y && this.getPane(e.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Ft(this._icon, "focus", this._panOnFocus, this), bt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && bt(this._shadow), this._shadow = null;
        },
        _setPos: function(e) {
          this._icon && un(this._icon, e), this._shadow && un(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(e) {
          this._icon && (this._icon.style.zIndex = this._zIndex + e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
          this._setPos(r);
        },
        _initInteraction: function() {
          if (this.options.interactive && (Ze(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Xl)) {
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
      function Us(e, r) {
        return new Jo(e, r);
      }
      var Xr = qt.extend({
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
          G(this, r), this._latlng = Pe(e), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(e) {
          var r = this._latlng;
          return this._latlng = Pe(e), this.redraw(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          this._pxBounds = new ke(this._point.subtract(c), this._point.add(c));
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
        return new $o(e, r);
      }
      var jo = $o.extend({
        initialize: function(e, r, a) {
          if (typeof r == "number" && (r = d({}, a, { radius: r })), G(this, r), this._latlng = Pe(e), isNaN(this.options.radius))
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
          return new Bt(
            this._map.layerPointToLatLng(this._point.subtract(e)),
            this._map.layerPointToLatLng(this._point.add(e))
          );
        },
        setStyle: Xr.prototype.setStyle,
        _project: function() {
          var e = this._latlng.lng, r = this._latlng.lat, a = this._map, c = a.options.crs;
          if (c.distance === $t.distance) {
            var f = Math.PI / 180, y = this._mRadius / $t.R / f, I = a.project([r + y, e]), B = a.project([r - y, e]), W = I.add(B).divideBy(2), te = a.unproject(W).lat, Ae = Math.acos((Math.cos(y * f) - Math.sin(r * f) * Math.sin(te * f)) / (Math.cos(r * f) * Math.cos(te * f))) / f;
            (isNaN(Ae) || Ae === 0) && (Ae = y / Math.cos(Math.PI / 180 * r)), this._point = W.subtract(a.getPixelOrigin()), this._radius = isNaN(Ae) ? 0 : W.x - a.project([te, e - Ae]).x, this._radiusY = W.y - I.y;
          } else {
            var Fe = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(Fe).x;
          }
          this._updateBounds();
        }
      });
      function Qr(e, r, a) {
        return new jo(e, r, a);
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
          for (var r = 1 / 0, a = null, c = co, f, y, I = 0, B = this._parts.length; I < B; I++)
            for (var W = this._parts[I], te = 1, Ae = W.length; te < Ae; te++) {
              f = W[te - 1], y = W[te];
              var Fe = c(e, f, y, !0);
              Fe < r && (r = Fe, a = c(e, f, y));
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
          return r = r || this._defaultShape(), e = Pe(e), r.push(e), this._bounds.extend(e), this.redraw();
        },
        _setLatLngs: function(e) {
          this._bounds = new Bt(), this._latlngs = this._convertLatLngs(e);
        },
        _defaultShape: function() {
          return Pi(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(e) {
          for (var r = [], a = Pi(e), c = 0, f = e.length; c < f; c++)
            a ? (r[c] = Pe(e[c]), this._bounds.extend(r[c])) : r[c] = this._convertLatLngs(e[c]);
          return r;
        },
        _project: function() {
          var e = new ke();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
        },
        _updateBounds: function() {
          var e = this._clickTolerance(), r = new de(e, e);
          this._rawPxBounds && (this._pxBounds = new ke([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(e, r, a) {
          var c = e[0] instanceof Ue, f = e.length, y, I;
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
                B = Kl(W[c], W[c + 1], e, c, !0), B && (r[f] = r[f] || [], r[f].push(B[0]), (B[1] !== W[c + 1] || c === I - 2) && (r[f].push(B[1]), f++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var e = this._parts, r = this.options.smoothFactor, a = 0, c = e.length; a < c; a++)
            e[a] = kt(e[a], r);
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
      function uc(e, r) {
        return new qi(e, r);
      }
      qi._flat = Fa;
      var zs = qi.extend({
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
          return a >= 2 && r[0] instanceof Ue && r[0].equals(r[a - 1]) && r.pop(), r;
        },
        _setLatLngs: function(e) {
          qi.prototype._setLatLngs.call(this, e), Pi(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Pi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var e = this._renderer._bounds, r = this.options.weight, a = new de(r, r);
          if (e = new ke(e.min.subtract(a), e.max.add(a)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, f = this._rings.length, y; c < f; c++)
              y = Ra(this._rings[c], e, !0), y.length && this._parts.push(y);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          var r = !1, a, c, f, y, I, B, W, te;
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (y = 0, W = this._parts.length; y < W; y++)
            for (a = this._parts[y], I = 0, te = a.length, B = te - 1; I < te; B = I++)
              c = a[I], f = a[B], c.y > e.y != f.y > e.y && e.x < (f.x - c.x) * (e.y - c.y) / (f.y - c.y) + c.x && (r = !r);
          return r || qi.prototype._containsPoint.call(this, e, !0);
        }
      });
      function cc(e, r) {
        return new zs(e, r);
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
        var a = e.type === "Feature" ? e.geometry : e, c = a ? a.coordinates : null, f = [], y = r && r.pointToLayer, I = r && r.coordsToLatLng || Va, B, W, te, Ae;
        if (!c && !a)
          return null;
        switch (a.type) {
          case "Point":
            return B = I(c), za(y, e, B, r);
          case "MultiPoint":
            for (te = 0, Ae = c.length; te < Ae; te++)
              B = I(c[te]), f.push(za(y, e, B, r));
            return new Ar(f);
          case "LineString":
          case "MultiLineString":
            return W = Xo(c, a.type === "LineString" ? 0 : 1, I), new qi(W, r);
          case "Polygon":
          case "MultiPolygon":
            return W = Xo(c, a.type === "Polygon" ? 1 : 2, I), new zs(W, r);
          case "GeometryCollection":
            for (te = 0, Ae = a.geometries.length; te < Ae; te++) {
              var Fe = yi({
                geometry: a.geometries[te],
                type: "Feature",
                properties: e.properties
              }, r);
              Fe && f.push(Fe);
            }
            return new Ar(f);
          case "FeatureCollection":
            for (te = 0, Ae = a.features.length; te < Ae; te++) {
              var st = yi(a.features[te], r);
              st && f.push(st);
            }
            return new Ar(f);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function za(e, r, a, c) {
        return e ? e(r, a) : new Jo(a, c && c.markersInheritOptions && c);
      }
      function Va(e) {
        return new Ue(e[1], e[0], e[2]);
      }
      function Xo(e, r, a) {
        for (var c = [], f = 0, y = e.length, I; f < y; f++)
          I = r ? Xo(e[f], r - 1, a) : (a || Va)(e[f]), c.push(I);
        return c;
      }
      function Wa(e, r) {
        return e = Pe(e), e.alt !== void 0 ? [O(e.lng, r), O(e.lat, r), O(e.alt, r)] : [O(e.lng, r), O(e.lat, r)];
      }
      function Qo(e, r, a, c) {
        for (var f = [], y = 0, I = e.length; y < I; y++)
          f.push(r ? Qo(e[y], Pi(e[y]) ? 0 : r - 1, a, c) : Wa(e[y], c));
        return !r && a && f.length > 0 && f.push(f[0].slice()), f;
      }
      function Vs(e, r) {
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
          return Vs(this, {
            type: "Point",
            coordinates: Wa(this.getLatLng(), e)
          });
        }
      };
      Jo.include(P), jo.include(P), $o.include(P), qi.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = Qo(this._latlngs, r ? 1 : 0, !1, e);
          return Vs(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a
          });
        }
      }), zs.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = r && !Pi(this._latlngs[0]), c = Qo(this._latlngs, a ? 2 : r ? 1 : 0, !0, e);
          return r || (c = [c]), Vs(this, {
            type: (a ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), jr.include({
        toMultiPoint: function(e) {
          var r = [];
          return this.eachLayer(function(a) {
            r.push(a.toGeoJSON(e).geometry.coordinates);
          }), Vs(this, {
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
          }), a ? Vs(this, {
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
      var H = $, Ce = qt.extend({
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
          this._url = e, this._bounds = le(r), G(this, a);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ze(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
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
          return this._bounds = le(e), this._map && this._reset(), this;
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
          var e = this._url.tagName === "IMG", r = this._image = e ? this._url : tt("img");
          if (Ze(r, "leaflet-image-layer"), this._zoomAnimated && Ze(r, "leaflet-zoom-animated"), this.options.className && Ze(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onload = g(this.fire, this, "load"), r.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
            this._url = r.src;
            return;
          }
          r.src = this._url, r.alt = this.options.alt;
        },
        _animateZoom: function(e) {
          var r = this._map.getZoomScale(e.zoom), a = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
          gs(this._image, a, r);
        },
        _reset: function() {
          var e = this._image, r = new ke(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), a = r.getSize();
          un(e, r.min), e.style.width = a.x + "px", e.style.height = a.y + "px";
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
      }), Je = function(e, r, a) {
        return new Ce(e, r, a);
      }, Tt = Ce.extend({
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
          var e = this._url.tagName === "VIDEO", r = this._image = e ? this._url : tt("video");
          if (Ze(r, "leaflet-image-layer"), this._zoomAnimated && Ze(r, "leaflet-zoom-animated"), this.options.className && Ze(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onloadeddata = g(this.fire, this, "load"), e) {
            for (var a = r.getElementsByTagName("source"), c = [], f = 0; f < a.length; f++)
              c.push(a[f].src);
            this._url = a.length > 0 ? c : [r.src];
            return;
          }
          Y(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(r.style, "objectFit") && (r.style.objectFit = "fill"), r.autoplay = !!this.options.autoplay, r.loop = !!this.options.loop, r.muted = !!this.options.muted, r.playsInline = !!this.options.playsInline;
          for (var y = 0; y < this._url.length; y++) {
            var I = tt("source");
            I.src = this._url[y], r.appendChild(I);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Ln(e, r, a) {
        return new Tt(e, r, a);
      }
      var Rt = Ce.extend({
        _initImage: function() {
          var e = this._image = this._url;
          Ze(e, "leaflet-image-layer"), this._zoomAnimated && Ze(e, "leaflet-zoom-animated"), this.options.className && Ze(e, this.options.className), e.onselectstart = w, e.onmousemove = w;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Za(e, r, a) {
        return new Rt(e, r, a);
      }
      var Cr = qt.extend({
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
          e && (e instanceof Ue || Y(e)) ? (this._latlng = Pe(e), G(this, r)) : (G(this, e), this._source = r), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Ni(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Ni(this._container, 1), this.bringToFront(), this.options.interactive && (Ze(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(e) {
          e._fadeAnimated ? (Ni(this._container, 0), this._removeTimeout = setTimeout(g(bt, void 0, this._container), 200)) : bt(this._container), this.options.interactive && (Ot(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = Pe(e), this._map && (this._updatePosition(), this._adjustPan()), this;
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
            var e = this._map.latLngToLayerPoint(this._latlng), r = Le(this.options.offset), a = this._getAnchor();
            this._zoomAnimated ? un(this._container, e.add(a)) : r = r.add(e).add(a);
            var c = this._containerBottom = -r.y, f = this._containerLeft = -Math.round(this._containerWidth / 2) + r.x;
            this._container.style.bottom = c + "px", this._container.style.left = f + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      gt.include({
        _initOverlay: function(e, r, a, c) {
          var f = r;
          return f instanceof e || (f = new e(c).setContent(r)), a && f.setLatLng(a), f;
        }
      }), qt.include({
        _initOverlay: function(e, r, a, c) {
          var f = a;
          return f instanceof e ? (G(f, c), f._source = this) : (f = r && !c ? r : new e(c, this), f.setContent(a)), f;
        }
      });
      var oi = Cr.extend({
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
          Cr.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Xr || this._source.on("preclick", ms));
        },
        onRemove: function(e) {
          Cr.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Xr || this._source.off("preclick", ms));
        },
        getEvents: function() {
          var e = Cr.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
        },
        _initLayout: function() {
          var e = "leaflet-popup", r = this._container = tt(
            "div",
            e + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), a = this._wrapper = tt("div", e + "-content-wrapper", r);
          if (this._contentNode = tt("div", e + "-content", a), ao(r), ba(this._contentNode), Xe(r, "contextmenu", ms), this._tipContainer = tt("div", e + "-tip-container", r), this._tip = tt("div", e + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = tt("a", e + "-close-button", r);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', Xe(c, "click", function(f) {
              nt(f), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var e = this._contentNode, r = e.style;
          r.width = "", r.whiteSpace = "nowrap";
          var a = e.offsetWidth;
          a = Math.min(a, this.options.maxWidth), a = Math.max(a, this.options.minWidth), r.width = a + 1 + "px", r.whiteSpace = "", r.height = "";
          var c = e.offsetHeight, f = this.options.maxHeight, y = "leaflet-popup-scrolled";
          f && c > f ? (r.height = f + "px", Ze(e, y)) : Ot(e, y), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), a = this._getAnchor();
          un(this._container, r.add(a));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var e = this._map, r = parseInt(nr(this._container, "marginBottom"), 10) || 0, a = this._container.offsetHeight + r, c = this._containerWidth, f = new de(this._containerLeft, -a - this._containerBottom);
            f._add(Fr(this._container));
            var y = e.layerPointToContainerPoint(f), I = Le(this.options.autoPanPadding), B = Le(this.options.autoPanPaddingTopLeft || I), W = Le(this.options.autoPanPaddingBottomRight || I), te = e.getSize(), Ae = 0, Fe = 0;
            y.x + c + W.x > te.x && (Ae = y.x + c - te.x + W.x), y.x - Ae - B.x < 0 && (Ae = y.x - B.x), y.y + a + W.y > te.y && (Fe = y.y + a - te.y + W.y), y.y - Fe - B.y < 0 && (Fe = y.y - B.y), (Ae || Fe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([Ae, Fe]));
          }
        },
        _getAnchor: function() {
          return Le(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), ea = function(e, r) {
        return new oi(e, r);
      };
      gt.mergeOptions({
        closePopupOnClick: !0
      }), gt.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(e, r, a) {
          return this._initOverlay(oi, e, r, a).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(e) {
          return e = arguments.length ? e : this._popup, e && e.close(), this;
        }
      }), qt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(e, r) {
          return this._popup = this._initOverlay(oi, this._popup, e, r), this._popupHandlersAdded || (this.on({
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
            Et(e);
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
      var ta = Cr.extend({
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
          this._contentNode = this._container = tt("div", r), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(e) {
          var r, a, c = this._map, f = this._container, y = c.latLngToContainerPoint(c.getCenter()), I = c.layerPointToContainerPoint(e), B = this.options.direction, W = f.offsetWidth, te = f.offsetHeight, Ae = Le(this.options.offset), Fe = this._getAnchor();
          B === "top" ? (r = W / 2, a = te) : B === "bottom" ? (r = W / 2, a = 0) : B === "center" ? (r = W / 2, a = te / 2) : B === "right" ? (r = 0, a = te / 2) : B === "left" ? (r = W, a = te / 2) : I.x < y.x ? (B = "right", r = 0, a = te / 2) : (B = "left", r = W + (Ae.x + Fe.x) * 2, a = te / 2), e = e.subtract(Le(r, a, !0)).add(Ae).add(Fe), Ot(f, "leaflet-tooltip-right"), Ot(f, "leaflet-tooltip-left"), Ot(f, "leaflet-tooltip-top"), Ot(f, "leaflet-tooltip-bottom"), Ze(f, "leaflet-tooltip-" + B), un(f, e);
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
      }), Ws = function(e, r) {
        return new ta(e, r);
      };
      gt.include({
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
      }), qt.include({
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
          r && (Xe(r, "focus", function() {
            this._tooltip._source = e, this.openTooltip();
          }, this), Xe(r, "blur", this.closeTooltip, this));
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
          if (a.html instanceof Element ? (ir(r), r.appendChild(a.html)) : r.innerHTML = a.html !== !1 ? a.html : "", a.bgPos) {
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
      var mt = qt.extend({
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
          this._removeAllTiles(), bt(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
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
          return e instanceof de ? e : new de(e, e);
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
            a && !this._noPrune && this._pruneTiles(), r && (Z(this._fadeFrame), this._fadeFrame = ae(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: w,
        _initContainer: function() {
          this._container || (this._container = tt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var e = this._tileZoom, r = this.options.maxZoom;
          if (e !== void 0) {
            for (var a in this._levels)
              a = Number(a), this._levels[a].el.children.length || a === e ? (this._levels[a].el.style.zIndex = r - Math.abs(e - a), this._onUpdateLevel(a)) : (bt(this._levels[a].el), this._removeTilesAtZoom(a), this._onRemoveLevel(a), delete this._levels[a]);
            var c = this._levels[e], f = this._map;
            return c || (c = this._levels[e] = {}, c.el = tt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = r, c.origin = f.project(f.unproject(f.getPixelOrigin()), e).round(), c.zoom = e, this._setZoomTransform(c, f.getCenter(), f.getZoom()), w(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
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
            bt(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(e, r, a, c) {
          var f = Math.floor(e / 2), y = Math.floor(r / 2), I = a - 1, B = new de(+f, +y);
          B.z = +I;
          var W = this._tileCoordsToKey(B), te = this._tiles[W];
          return te && te.active ? (te.retain = !0, !0) : (te && te.loaded && (te.retain = !0), I > c ? this._retainParent(f, y, I, c) : !1);
        },
        _retainChildren: function(e, r, a, c) {
          for (var f = 2 * e; f < 2 * e + 2; f++)
            for (var y = 2 * r; y < 2 * r + 2; y++) {
              var I = new de(f, y);
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
          me.any3d ? gs(e.el, f, c) : un(e.el, f);
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
          return new ke(f.subtract(y), f.add(y));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(e) {
          var r = this._map;
          if (r) {
            var a = this._clampZoom(r.getZoom());
            if (e === void 0 && (e = r.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(e), f = this._pxBoundsToTileRange(c), y = f.getCenter(), I = [], B = this.options.keepBuffer, W = new ke(
                f.getBottomLeft().subtract([B, -B]),
                f.getTopRight().add([B, -B])
              );
              if (!(isFinite(f.min.x) && isFinite(f.min.y) && isFinite(f.max.x) && isFinite(f.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var te in this._tiles) {
                var Ae = this._tiles[te].coords;
                (Ae.z !== this._tileZoom || !W.contains(new de(Ae.x, Ae.y))) && (this._tiles[te].current = !1);
              }
              if (Math.abs(a - this._tileZoom) > 1) {
                this._setView(e, a);
                return;
              }
              for (var Fe = f.min.y; Fe <= f.max.y; Fe++)
                for (var st = f.min.x; st <= f.max.x; st++) {
                  var _n = new de(st, Fe);
                  if (_n.z = this._tileZoom, !!this._isValidTile(_n)) {
                    var en = this._tiles[this._tileCoordsToKey(_n)];
                    en ? en.current = !0 : I.push(_n);
                  }
                }
              if (I.sort(function(Wn, sr) {
                return Wn.distanceTo(y) - sr.distanceTo(y);
              }), I.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Jn = document.createDocumentFragment();
                for (st = 0; st < I.length; st++)
                  this._addTile(I[st], Jn);
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
          return le(this.options.bounds).overlaps(c);
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
          var r = this._tileCoordsToNwSe(e), a = new Bt(r[0], r[1]);
          return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(e) {
          return e.x + ":" + e.y + ":" + e.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(e) {
          var r = e.split(":"), a = new de(+r[0], +r[1]);
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
          Ze(e, "leaflet-tile");
          var r = this.getTileSize();
          e.style.width = r.x + "px", e.style.height = r.y + "px", e.onselectstart = w, e.onmousemove = w, me.ielt9 && this.options.opacity < 1 && Ni(e, this.options.opacity);
        },
        _addTile: function(e, r) {
          var a = this._getTilePos(e), c = this._tileCoordsToKey(e), f = this.createTile(this._wrapCoords(e), g(this._tileReady, this, e));
          this._initTile(f), this.createTile.length < 2 && ae(g(this._tileReady, this, e, null, f)), un(f, a), this._tiles[c] = {
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
          a = this._tiles[c], a && (a.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ni(a.el, 0), Z(this._fadeFrame), this._fadeFrame = ae(this._updateOpacity, this)) : (a.active = !0, this._pruneTiles()), r || (Ze(a.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: a.el,
            coords: e
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), me.ielt9 || !this._map._fadeAnimated ? ae(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(e) {
          return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(e) {
          var r = new de(
            this._wrapX ? A(e.x, this._wrapX) : e.x,
            this._wrapY ? A(e.y, this._wrapY) : e.y
          );
          return r.z = e.z, r;
        },
        _pxBoundsToTileRange: function(e) {
          var r = this.getTileSize();
          return new ke(
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
      function hc(e) {
        return new mt(e);
      }
      var vs = mt.extend({
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
          return Xe(a, "load", g(this._tileOnLoad, this, r, a)), Xe(a, "error", g(this._tileOnError, this, r, a)), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (a.referrerPolicy = this.options.referrerPolicy), a.alt = "", a.src = this.getTileUrl(e), a;
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
              r.src = q;
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
            return r.el.setAttribute("src", q), mt.prototype._removeTile.call(this, e);
        },
        _tileReady: function(e, r, a) {
          if (!(!this._map || a && a.getAttribute("src") === q))
            return mt.prototype._tileReady.call(this, e, r, a);
        }
      });
      function go(e, r) {
        return new vs(e, r);
      }
      var Ql = vs.extend({
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
          this.wmsParams[r] = this._crs.code, vs.prototype.onAdd.call(this, e);
        },
        getTileUrl: function(e) {
          var r = this._tileCoordsToNwSe(e), a = this._crs, c = xt(a.project(r[0]), a.project(r[1])), f = c.min, y = c.max, I = (this._wmsVersion >= 1.3 && this._crs === Jl ? [f.y, f.x, y.y, y.x] : [f.x, f.y, y.x, y.y]).join(","), B = vs.prototype.getTileUrl.call(this, e);
          return B + X(this.wmsParams, B, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + I;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(e, r) {
          return d(this.wmsParams, e), r || this.redraw(), this;
        }
      });
      function dc(e, r) {
        return new Ql(e, r);
      }
      vs.WMS = Ql, go.wms = dc;
      var kr = qt.extend({
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
          this._container || (this._initContainer(), Ze(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          me.any3d ? gs(this._container, y, a) : un(this._container, y);
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
          this._bounds = new ke(a, a.add(r.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), _o = kr.extend({
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
          Xe(e, "mousemove", this._onMouseMove, this), Xe(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Xe(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
        },
        _destroyContainer: function() {
          Z(this._redrawRequest), delete this._ctx, bt(this._container), Ft(this._container), delete this._container;
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
            un(r, e.min), r.width = c * a.x, r.height = c * a.y, r.style.width = a.x + "px", r.style.height = a.y + "px", me.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
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
          this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || ae(this._redraw, this));
        },
        _extendRedrawBounds: function(e) {
          if (e._pxBounds) {
            var r = (e.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new ke(), this._redrawBounds.extend(e._pxBounds.min.subtract([r, r])), this._redrawBounds.extend(e._pxBounds.max.add([r, r]));
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
          r && (Ot(this._container, "leaflet-interactive"), this._fireEvent([r], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(e, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, c, f = this._drawFirst; f; f = f.next)
              a = f.layer, a.options.interactive && a._containsPoint(r) && (c = a);
            c !== this._hoveredLayer && (this._handleMouseOut(e), c && (Ze(this._container, "leaflet-interactive"), this._fireEvent([c], e, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(g(function() {
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
        return me.canvas ? new _o(e) : null;
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
          this._container = tt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (kr.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(e) {
          var r = e._container = es("shape");
          Ze(r, "leaflet-vml-shape " + (this.options.className || "")), r.coordsize = "1 1", e._path = es("path"), r.appendChild(e._path), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          var r = e._container;
          this._container.appendChild(r), e.options.interactive && e.addInteractiveTarget(r);
        },
        _removePath: function(e) {
          var r = e._container;
          bt(r), e.removeInteractiveTarget(r), delete this._layers[m(e)];
        },
        _updateStyle: function(e) {
          var r = e._stroke, a = e._fill, c = e.options, f = e._container;
          f.stroked = !!c.stroke, f.filled = !!c.fill, c.stroke ? (r || (r = e._stroke = es("stroke")), f.appendChild(r), r.weight = c.weight + "px", r.color = c.color, r.opacity = c.opacity, c.dashArray ? r.dashStyle = Y(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : r.dashStyle = "", r.endcap = c.lineCap.replace("butt", "flat"), r.joinstyle = c.lineJoin) : r && (f.removeChild(r), e._stroke = null), c.fill ? (a || (a = e._fill = es("fill")), f.appendChild(a), a.color = c.fillColor || c.color, a.opacity = c.fillOpacity) : a && (f.removeChild(a), e._fill = null);
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
      }, ys = me.vml ? es : Ut, Zs = kr.extend({
        _initContainer: function() {
          this._container = ys("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ys("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          bt(this._container), Ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            kr.prototype._update.call(this);
            var e = this._bounds, r = e.getSize(), a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) && (this._svgSize = r, a.setAttribute("width", r.x), a.setAttribute("height", r.y)), un(a, e.min), a.setAttribute("viewBox", [e.min.x, e.min.y, r.x, r.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(e) {
          var r = e._path = ys("path");
          e.options.className && Ze(r, e.options.className), e.options.interactive && Ze(r, "leaflet-interactive"), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
        },
        _removePath: function(e) {
          bt(e._path), e.removeInteractiveTarget(e._path), delete this._layers[m(e)];
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
      me.vml && Zs.include(eu);
      function Ha(e) {
        return me.svg || me.vml ? new Zs(e) : null;
      }
      gt.include({
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
          return this.options.preferCanvas && Ur(e) || Ha(e);
        }
      });
      var mo = zs.extend({
        initialize: function(e, r) {
          zs.prototype.initialize.call(this, this._boundsToLatLngs(e), r);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(e) {
          return this.setLatLngs(this._boundsToLatLngs(e));
        },
        _boundsToLatLngs: function(e) {
          return e = le(e), [
            e.getSouthWest(),
            e.getNorthWest(),
            e.getNorthEast(),
            e.getSouthEast()
          ];
        }
      });
      function tu(e, r) {
        return new mo(e, r);
      }
      Zs.create = ys, Zs.pointsToPath = zi, vi.geometryToLayer = yi, vi.coordsToLatLng = Va, vi.coordsToLatLngs = Xo, vi.latLngToCoords = Wa, vi.latLngsToCoords = Qo, vi.getFeature = Vs, vi.asFeature = Gr, gt.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Hs = Qt.extend({
        initialize: function(e) {
          this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
        },
        addHooks: function() {
          Xe(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          Ft(this._container, "mousedown", this._onMouseDown, this);
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
          this._clearDeferredResetState(), this._resetState(), _s(), wa(), this._startPoint = this._map.mouseEventToContainerPoint(e), Xe(document, {
            contextmenu: Et,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(e) {
          this._moved || (this._moved = !0, this._box = tt("div", "leaflet-zoom-box", this._container), Ze(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
          var r = new ke(this._point, this._startPoint), a = r.getSize();
          un(this._box, r.min), this._box.style.width = a.x + "px", this._box.style.height = a.y + "px";
        },
        _finish: function() {
          this._moved && (bt(this._box), Ot(this._container, "leaflet-crosshair")), Tr(), Vo(), Ft(document, {
            contextmenu: Et,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(e) {
          if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
            var r = new Bt(
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
      gt.addInitHook("addHandler", "boxZoom", Hs), gt.mergeOptions({
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
      gt.addInitHook("addHandler", "doubleClickZoom", ts), gt.mergeOptions({
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
      var vo = Qt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var e = this._map;
            this._draggable = new $r(e._mapPane, e._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
          }
          Ze(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
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
            var r = le(this._map.options.maxBounds);
            this._offsetLimit = xt(
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
            var f = this._lastPos.subtract(this._positions[0]), y = (this._lastTime - this._times[0]) / 1e3, I = a.easeLinearity, B = f.multiplyBy(I / y), W = B.distanceTo([0, 0]), te = Math.min(a.inertiaMaxSpeed, W), Ae = B.multiplyBy(te / W), Fe = te / (a.inertiaDeceleration * I), st = Ae.multiplyBy(-Fe / 2).round();
            !st.x && !st.y ? r.fire("moveend") : (st = r._limitOffset(st, r.options.maxBounds), ae(function() {
              r.panBy(st, {
                duration: Fe,
                easeLinearity: I,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      gt.addInitHook("addHandler", "dragging", vo), gt.mergeOptions({
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
          e.tabIndex <= 0 && (e.tabIndex = "0"), Xe(e, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), Ft(this._map._container, {
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
          Xe(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          Ft(document, "keydown", this._onKeyDown, this);
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
            Et(e);
          }
        }
      });
      gt.addInitHook("addHandler", "keyboard", nu), gt.mergeOptions({
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
          Xe(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          Ft(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
          var r = Vl(e), a = this._map.options.wheelDebounceTime;
          this._delta += r, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(a - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), c), Et(e);
        },
        _performZoom: function() {
          var e = this._map, r = e.getZoom(), a = this._map.options.zoomSnap || 0;
          e._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), f = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, y = a ? Math.ceil(f / a) * a : f, I = e._limitZoom(r + (this._delta > 0 ? y : -y)) - r;
          this._delta = 0, this._startTime = null, I && (e.options.scrollWheelZoom === "center" ? e.setZoom(r + I) : e.setZoomAround(this._lastMousePos, r + I));
        }
      });
      gt.addInitHook("addHandler", "scrollWheelZoom", iu);
      var fc = 600;
      gt.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: me.touchNative && me.safari && me.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var yo = Qt.extend({
        addHooks: function() {
          Xe(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          Ft(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
          if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
            var r = e.touches[0];
            this._startPos = this._newPos = new de(r.clientX, r.clientY), this._holdTimeout = setTimeout(g(function() {
              this._cancel(), this._isTapValid() && (Xe(document, "touchend", nt), Xe(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", r));
            }, this), fc), Xe(document, "touchend touchcancel contextmenu", this._cancel, this), Xe(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function e() {
          Ft(document, "touchend", nt), Ft(document, "touchend touchcancel", e);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), Ft(document, "touchend touchcancel contextmenu", this._cancel, this), Ft(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
          var r = e.touches[0];
          this._newPos = new de(r.clientX, r.clientY);
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
      gt.addInitHook("addHandler", "tapHold", yo), gt.mergeOptions({
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
      var Eo = Qt.extend({
        addHooks: function() {
          Ze(this._map._container, "leaflet-touch-zoom"), Xe(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Ot(this._map._container, "leaflet-touch-zoom"), Ft(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
          var r = this._map;
          if (!(!e.touches || e.touches.length !== 2 || r._animatingZoom || this._zooming)) {
            var a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = r.getSize()._divideBy(2), this._startLatLng = r.containerPointToLatLng(this._centerPoint), r.options.touchZoom !== "center" && (this._pinchStartLatLng = r.containerPointToLatLng(a.add(c)._divideBy(2))), this._startDist = a.distanceTo(c), this._startZoom = r.getZoom(), this._moved = !1, this._zooming = !0, r._stop(), Xe(document, "touchmove", this._onTouchMove, this), Xe(document, "touchend touchcancel", this._onTouchEnd, this), nt(e);
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
            this._moved || (r._moveStart(!0, !1), this._moved = !0), Z(this._animRequest);
            var I = g(r._move, r, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = ae(I, this, !0), nt(e);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, Z(this._animRequest), Ft(document, "touchmove", this._onTouchMove, this), Ft(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      gt.addInitHook("addHandler", "touchZoom", Eo), gt.BoxZoom = Hs, gt.DoubleClickZoom = ts, gt.Drag = vo, gt.Keyboard = nu, gt.ScrollWheelZoom = iu, gt.TapHold = yo, gt.TouchZoom = Eo, n.Bounds = ke, n.Browser = me, n.CRS = Ht, n.Canvas = _o, n.Circle = jo, n.CircleMarker = $o, n.Class = U, n.Control = Di, n.DivIcon = po, n.DivOverlay = Cr, n.DomEvent = rc, n.DomUtil = Gl, n.Draggable = $r, n.Evented = Ee, n.FeatureGroup = Ar, n.GeoJSON = vi, n.GridLayer = mt, n.Handler = Qt, n.Icon = ks, n.ImageOverlay = Ce, n.LatLng = Ue, n.LatLngBounds = Bt, n.Layer = qt, n.LayerGroup = jr, n.LineUtil = Ma, n.Map = gt, n.Marker = Jo, n.Mixin = sc, n.Path = Xr, n.Point = de, n.PolyUtil = Pa, n.Polygon = zs, n.Polyline = qi, n.Popup = oi, n.PosAnimation = La, n.Projection = Ga, n.Rectangle = mo, n.Renderer = kr, n.SVG = Zs, n.SVGOverlay = Rt, n.TileLayer = vs, n.Tooltip = ta, n.Transformation = Yn, n.Util = K, n.VideoOverlay = Tt, n.bind = g, n.bounds = xt, n.canvas = Ur, n.circle = Qr, n.circleMarker = Ua, n.control = rr, n.divIcon = na, n.extend = d, n.featureGroup = jl, n.geoJSON = $, n.geoJson = H, n.gridLayer = hc, n.icon = lc, n.imageOverlay = Je, n.latLng = Pe, n.latLngBounds = le, n.layerGroup = ho, n.map = Vn, n.marker = Us, n.point = Le, n.polygon = cc, n.polyline = uc, n.popup = ea, n.rectangle = tu, n.setOptions = G, n.stamp = m, n.svg = Ha, n.svgOverlay = Za, n.tileLayer = go, n.tooltip = Ws, n.transformation = Un, n.version = l, n.videoOverlay = Ln;
      var Ya = window.L;
      n.noConflict = function() {
        return window.L = Ya, this;
      }, window.L = n;
    }));
  })(ol, ol.exports)), ol.exports;
}
var fg = x1();
const fa = /* @__PURE__ */ dg(fg), F1 = /* @__PURE__ */ e1({
  __proto__: null,
  default: fa
}, [fg]);
class M1 {
  constructor() {
    this.id = "";
  }
  invoke() {
  }
  run() {
  }
}
function B1() {
  const o = _e(/* @__PURE__ */ new Map());
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
var cr = 63710088e-1, G1 = {
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
function Kh(o, i, n = {}) {
  const l = { type: "Feature" };
  return (n.id === 0 || n.id) && (l.id = n.id), n.bbox && (l.bbox = n.bbox), l.properties = i || {}, l.geometry = o, l;
}
function cl(o, i, n = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Qf(o[0]) || !Qf(o[1]))
    throw new Error("coordinates must contain numbers");
  return Kh({
    type: "Point",
    coordinates: o
  }, i, n);
}
function Yu(o, i = {}) {
  const n = { type: "FeatureCollection" };
  return i.id && (n.id = i.id), i.bbox && (n.bbox = i.bbox), n.features = o, n;
}
function k1(o, i = "kilometers") {
  const n = G1[i];
  if (!n)
    throw new Error(i + " units is invalid");
  return o * n;
}
function Nu(o) {
  return o % 360 * Math.PI / 180;
}
function Qf(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
function hl(o, i, n) {
  if (o !== null)
    for (var l, d, p, g, v, m, E, A = 0, w = 0, O, N = o.type, k = N === "FeatureCollection", G = N === "Feature", X = k ? o.features.length : 1, x = 0; x < X; x++) {
      E = k ? o.features[x].geometry : G ? o.geometry : o, O = E ? E.type === "GeometryCollection" : !1, v = O ? E.geometries.length : 1;
      for (var z = 0; z < v; z++) {
        var Y = 0, R = 0;
        if (g = O ? E.geometries[z] : E, g !== null) {
          m = g.coordinates;
          var q = g.type;
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
              for (l = 0; l < g.geometries.length; l++)
                if (hl(g.geometries[l], i) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function pg(o, i) {
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
  return hl(o, (l) => {
    n[0] > l[0] && (n[0] = l[0]), n[1] > l[1] && (n[1] = l[1]), n[2] < l[0] && (n[2] = l[0]), n[3] < l[1] && (n[3] = l[1]);
  }), n;
}
const Ns = 11102230246251565e-32, wi = 134217729, U1 = (3 + 8 * Ns) * Ns;
function dh(o, i, n, l, d) {
  let p, g, v, m, E = i[0], A = l[0], w = 0, O = 0;
  A > E == A > -E ? (p = E, E = i[++w]) : (p = A, A = l[++O]);
  let N = 0;
  if (w < o && O < n)
    for (A > E == A > -E ? (g = E + p, v = p - (g - E), E = i[++w]) : (g = A + p, v = p - (g - A), A = l[++O]), p = g, v !== 0 && (d[N++] = v); w < o && O < n; )
      A > E == A > -E ? (g = p + E, m = g - p, v = p - (g - m) + (E - m), E = i[++w]) : (g = p + A, m = g - p, v = p - (g - m) + (A - m), A = l[++O]), p = g, v !== 0 && (d[N++] = v);
  for (; w < o; )
    g = p + E, m = g - p, v = p - (g - m) + (E - m), E = i[++w], p = g, v !== 0 && (d[N++] = v);
  for (; O < n; )
    g = p + A, m = g - p, v = p - (g - m) + (A - m), A = l[++O], p = g, v !== 0 && (d[N++] = v);
  return (p !== 0 || N === 0) && (d[N++] = p), N;
}
function z1(o, i) {
  let n = i[0];
  for (let l = 1; l < o; l++) n += i[l];
  return n;
}
function Rl(o) {
  return new Float64Array(o);
}
const V1 = (3 + 16 * Ns) * Ns, W1 = (2 + 12 * Ns) * Ns, Z1 = (9 + 64 * Ns) * Ns * Ns, ca = Rl(4), ep = Rl(8), tp = Rl(12), np = Rl(16), Bi = Rl(4);
function H1(o, i, n, l, d, p, g) {
  let v, m, E, A, w, O, N, k, G, X, x, z, Y, R, q, fe, Se, Ie;
  const he = o - d, Oe = n - d, ae = i - p, Z = l - p;
  R = he * Z, O = wi * he, N = O - (O - he), k = he - N, O = wi * Z, G = O - (O - Z), X = Z - G, q = k * X - (R - N * G - k * G - N * X), fe = ae * Oe, O = wi * ae, N = O - (O - ae), k = ae - N, O = wi * Oe, G = O - (O - Oe), X = Oe - G, Se = k * X - (fe - N * G - k * G - N * X), x = q - Se, w = q - x, ca[0] = q - (x + w) + (w - Se), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - fe, w = Y - x, ca[1] = Y - (x + w) + (w - fe), Ie = z + x, w = Ie - z, ca[2] = z - (Ie - w) + (x - w), ca[3] = Ie;
  let K = z1(4, ca), U = W1 * g;
  if (K >= U || -K >= U || (w = o - he, v = o - (he + w) + (w - d), w = n - Oe, E = n - (Oe + w) + (w - d), w = i - ae, m = i - (ae + w) + (w - p), w = l - Z, A = l - (Z + w) + (w - p), v === 0 && m === 0 && E === 0 && A === 0) || (U = Z1 * g + U1 * Math.abs(K), K += he * A + Z * v - (ae * E + Oe * m), K >= U || -K >= U)) return K;
  R = v * Z, O = wi * v, N = O - (O - v), k = v - N, O = wi * Z, G = O - (O - Z), X = Z - G, q = k * X - (R - N * G - k * G - N * X), fe = m * Oe, O = wi * m, N = O - (O - m), k = m - N, O = wi * Oe, G = O - (O - Oe), X = Oe - G, Se = k * X - (fe - N * G - k * G - N * X), x = q - Se, w = q - x, Bi[0] = q - (x + w) + (w - Se), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - fe, w = Y - x, Bi[1] = Y - (x + w) + (w - fe), Ie = z + x, w = Ie - z, Bi[2] = z - (Ie - w) + (x - w), Bi[3] = Ie;
  const ie = dh(4, ca, 4, Bi, ep);
  R = he * A, O = wi * he, N = O - (O - he), k = he - N, O = wi * A, G = O - (O - A), X = A - G, q = k * X - (R - N * G - k * G - N * X), fe = ae * E, O = wi * ae, N = O - (O - ae), k = ae - N, O = wi * E, G = O - (O - E), X = E - G, Se = k * X - (fe - N * G - k * G - N * X), x = q - Se, w = q - x, Bi[0] = q - (x + w) + (w - Se), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - fe, w = Y - x, Bi[1] = Y - (x + w) + (w - fe), Ie = z + x, w = Ie - z, Bi[2] = z - (Ie - w) + (x - w), Bi[3] = Ie;
  const ne = dh(ie, ep, 4, Bi, tp);
  R = v * A, O = wi * v, N = O - (O - v), k = v - N, O = wi * A, G = O - (O - A), X = A - G, q = k * X - (R - N * G - k * G - N * X), fe = m * E, O = wi * m, N = O - (O - m), k = m - N, O = wi * E, G = O - (O - E), X = E - G, Se = k * X - (fe - N * G - k * G - N * X), x = q - Se, w = q - x, Bi[0] = q - (x + w) + (w - Se), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - fe, w = Y - x, Bi[1] = Y - (x + w) + (w - fe), Ie = z + x, w = Ie - z, Bi[2] = z - (Ie - w) + (x - w), Bi[3] = Ie;
  const Ee = dh(ne, tp, 4, Bi, np);
  return np[Ee - 1];
}
function Y1(o, i, n, l, d, p) {
  const g = (i - p) * (n - d), v = (o - d) * (l - p), m = g - v, E = Math.abs(g + v);
  return Math.abs(m) >= V1 * E ? m : -H1(o, i, n, l, d, p, E);
}
function q1(o, i) {
  var n, l, d = 0, p, g, v, m, E, A, w, O = o[0], N = o[1], k = i.length;
  for (n = 0; n < k; n++) {
    l = 0;
    var G = i[n], X = G.length - 1;
    if (A = G[0], A[0] !== G[X][0] && A[1] !== G[X][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (g = A[0] - O, v = A[1] - N, l; l < X; l++) {
      if (w = G[l + 1], m = w[0] - O, E = w[1] - N, v === 0 && E === 0) {
        if (m <= 0 && g >= 0 || g <= 0 && m >= 0)
          return 0;
      } else if (E >= 0 && v <= 0 || E <= 0 && v >= 0) {
        if (p = Y1(g, m, v, E, 0, 0), p === 0)
          return 0;
        (p > 0 && E > 0 && v <= 0 || p < 0 && E <= 0 && v > 0) && d++;
      }
      A = w, v = E, g = m;
    }
  }
  return d % 2 !== 0;
}
function K1(o) {
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
  const l = K1(o), d = J1(i), p = d.type, g = i.bbox;
  let v = d.coordinates;
  if (g && $1(l, g) === !1)
    return !1;
  p === "Polygon" && (v = [v]);
  let m = !1;
  for (var E = 0; E < v.length; ++E) {
    const A = q1(l, v[E]);
    if (A === 0) return !n.ignoreBoundary;
    A && (m = !0);
  }
  return m;
}
function $1(o, i) {
  return i[0] <= o[0] && i[1] <= o[1] && i[2] >= o[0] && i[3] >= o[1];
}
function Dh(o) {
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
function j1(o) {
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
function Rh(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function Tl(o, i, n = {}) {
  const l = Dh(o), d = j1(i);
  for (let p = 0; p < d.length - 1; p++) {
    let g = !1;
    if (n.ignoreEndVertices && (p === 0 && (g = "start"), p === d.length - 2 && (g = "end"), p === 0 && p + 1 === d.length - 1 && (g = "both")), X1(
      d[p],
      d[p + 1],
      l,
      g,
      typeof n.epsilon > "u" ? null : n.epsilon
    ))
      return !0;
  }
  return !1;
}
function X1(o, i, n, l, d) {
  const p = n[0], g = n[1], v = o[0], m = o[1], E = i[0], A = i[1], w = n[0] - v, O = n[1] - m, N = E - v, k = A - m, G = w * k - O * N;
  if (d !== null) {
    if (Math.abs(G) > d)
      return !1;
  } else if (G !== 0)
    return !1;
  if (Math.abs(N) === Math.abs(k) && Math.abs(N) === 0)
    return l ? !1 : n[0] === o[0] && n[1] === o[1];
  if (l) {
    if (l === "start")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v < p && p <= E : E <= p && p < v : k > 0 ? m < g && g <= A : A <= g && g < m;
    if (l === "end")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v <= p && p < E : E < p && p <= v : k > 0 ? m <= g && g < A : A < g && g <= m;
    if (l === "both")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v < p && p < E : E < p && p < v : k > 0 ? m < g && g < A : A < g && g < m;
  } else return Math.abs(N) >= Math.abs(k) ? N > 0 ? v <= p && p <= E : E <= p && p <= v : k > 0 ? m <= g && g <= A : A <= g && g <= m;
  return !1;
}
function Q1(o, i) {
  const n = Rh(o), l = Rh(i), d = n.type, p = l.type, g = n.coordinates, v = l.coordinates;
  switch (d) {
    case "Point":
      switch (p) {
        case "Point":
          return Jh(g, v);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPoint":
      switch (p) {
        case "Point":
          return tT(n, l);
        case "MultiPoint":
          return nT(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "LineString":
      switch (p) {
        case "Point":
          return Tl(l, n, { ignoreEndVertices: !0 });
        case "LineString":
          return sT(n, l);
        case "MultiPoint":
          return iT(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "Polygon":
      switch (p) {
        case "Point":
          return Pl(l, n, { ignoreBoundary: !0 });
        case "LineString":
          return oT(n, l);
        case "Polygon":
          return gg(n, l);
        case "MultiPoint":
          return rT(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPolygon":
      switch (p) {
        case "Polygon":
          return eT(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    default:
      throw new Error("feature1 " + d + " geometry not supported");
  }
}
function eT(o, i) {
  return o.coordinates.some(
    (n) => gg({ type: "Polygon", coordinates: n }, i)
  );
}
function tT(o, i) {
  let n, l = !1;
  for (n = 0; n < o.coordinates.length; n++)
    if (Jh(o.coordinates[n], i.coordinates)) {
      l = !0;
      break;
    }
  return l;
}
function nT(o, i) {
  for (const n of i.coordinates) {
    let l = !1;
    for (const d of o.coordinates)
      if (Jh(n, d)) {
        l = !0;
        break;
      }
    if (!l)
      return !1;
  }
  return !0;
}
function iT(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (Tl(l, o, { ignoreEndVertices: !0 }) && (n = !0), !Tl(l, o))
      return !1;
  return !!n;
}
function rT(o, i) {
  for (const n of i.coordinates)
    if (!Pl(n, o, { ignoreBoundary: !0 }))
      return !1;
  return !0;
}
function sT(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (Tl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !0
    }) && (n = !0), !Tl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !1
    }))
      return !1;
  return n;
}
function oT(o, i) {
  let n = !1, l = 0;
  const d = El(o), p = El(i);
  if (!_g(d, p))
    return !1;
  for (l; l < i.coordinates.length - 1; l++) {
    const g = aT(
      i.coordinates[l],
      i.coordinates[l + 1]
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
function gg(o, i) {
  if (o.type === "Feature" && o.geometry === null || i.type === "Feature" && i.geometry === null)
    return !1;
  const n = El(o), l = El(i);
  if (!_g(n, l))
    return !1;
  const d = Rh(i).coordinates;
  for (const p of d)
    for (const g of p)
      if (!Pl(g, o))
        return !1;
  return !0;
}
function _g(o, i) {
  return !(o[0] > i[0] || o[2] < i[2] || o[1] > i[1] || o[3] < i[3]);
}
function Jh(o, i) {
  return o[0] === i[0] && o[1] === i[1];
}
function aT(o, i) {
  return [(o[0] + i[0]) / 2, (o[1] + i[1]) / 2];
}
var lT = Q1;
function uT(o) {
  const i = [];
  return o.type === "FeatureCollection" ? pg(o, function(n) {
    hl(n, function(l) {
      i.push(cl(l, n.properties));
    });
  }) : o.type === "Feature" ? hl(o, function(n) {
    i.push(cl(n, o.properties));
  }) : hl(o, function(n) {
    i.push(cl(n));
  }), Yu(i);
}
function cT(o, i = {}) {
  const n = El(o), l = (n[0] + n[2]) / 2, d = (n[1] + n[3]) / 2;
  return cl([l, d], i.properties, i);
}
function hT(o) {
  if (!o)
    throw new Error("geojson is required");
  switch (o.type) {
    case "Feature":
      return mg(o);
    case "FeatureCollection":
      return dT(o);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return $h(o);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function mg(o) {
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
  }), i.properties = vg(o.properties), o.geometry == null ? i.geometry = null : i.geometry = $h(o.geometry), i;
}
function vg(o) {
  const i = {};
  return o && Object.keys(o).forEach((n) => {
    const l = o[n];
    typeof l == "object" ? l === null ? i[n] = null : Array.isArray(l) ? i[n] = l.map((d) => d) : i[n] = vg(l) : i[n] = l;
  }), i;
}
function dT(o) {
  const i = { type: "FeatureCollection" };
  return Object.keys(o).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        i[n] = o[n];
    }
  }), i.features = o.features.map((n) => mg(n)), i;
}
function $h(o) {
  const i = { type: o.type };
  return o.bbox && (i.bbox = o.bbox), o.type === "GeometryCollection" ? (i.geometries = o.geometries.map((n) => $h(n)), i) : (i.coordinates = yg(o.coordinates), i);
}
function yg(o) {
  const i = o;
  return typeof i[0] != "object" ? i.slice() : i.map((n) => yg(n));
}
function fT(o, i, n = {}) {
  var l = Dh(o), d = Dh(i), p = Nu(d[1] - l[1]), g = Nu(d[0] - l[0]), v = Nu(l[1]), m = Nu(d[1]), E = Math.pow(Math.sin(p / 2), 2) + Math.pow(Math.sin(g / 2), 2) * Math.cos(v) * Math.cos(m);
  return k1(
    2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E)),
    n.units
  );
}
var pT = Object.defineProperty, gT = Object.defineProperties, _T = Object.getOwnPropertyDescriptors, ip = Object.getOwnPropertySymbols, mT = Object.prototype.hasOwnProperty, vT = Object.prototype.propertyIsEnumerable, rp = (o, i, n) => i in o ? pT(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, sp = (o, i) => {
  for (var n in i || (i = {}))
    mT.call(i, n) && rp(o, n, i[n]);
  if (ip)
    for (var n of ip(i))
      vT.call(i, n) && rp(o, n, i[n]);
  return o;
}, op = (o, i) => gT(o, _T(i));
function yT(o, i, n = {}) {
  if (!o) throw new Error("targetPoint is required");
  if (!i) throw new Error("points is required");
  let l = 1 / 0, d = 0;
  pg(i, (g, v) => {
    const m = fT(o, g, n);
    m < l && (d = v, l = m);
  });
  const p = hT(i.features[d]);
  return op(sp({}, p), {
    properties: op(sp({}, p.properties), {
      featureIndex: d,
      distanceToPoint: l
    })
  });
}
function ET(o) {
  const i = TT(o), n = cT(i);
  let l = !1, d = 0;
  for (; !l && d < i.features.length; ) {
    const p = i.features[d].geometry;
    let g, v, m, E, A, w, O = !1;
    if (p.type === "Point")
      n.geometry.coordinates[0] === p.coordinates[0] && n.geometry.coordinates[1] === p.coordinates[1] && (l = !0);
    else if (p.type === "MultiPoint") {
      let N = !1, k = 0;
      for (; !N && k < p.coordinates.length; )
        n.geometry.coordinates[0] === p.coordinates[k][0] && n.geometry.coordinates[1] === p.coordinates[k][1] && (l = !0, N = !0), k++;
    } else if (p.type === "LineString") {
      let N = 0;
      for (; !O && N < p.coordinates.length - 1; )
        g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = p.coordinates[N][0], E = p.coordinates[N][1], A = p.coordinates[N + 1][0], w = p.coordinates[N + 1][1], ap(g, v, m, E, A, w) && (O = !0, l = !0), N++;
    } else if (p.type === "MultiLineString") {
      let N = 0;
      for (; N < p.coordinates.length; ) {
        O = !1;
        let k = 0;
        const G = p.coordinates[N];
        for (; !O && k < G.length - 1; )
          g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = G[k][0], E = G[k][1], A = G[k + 1][0], w = G[k + 1][1], ap(g, v, m, E, A, w) && (O = !0, l = !0), k++;
        N++;
      }
    } else (p.type === "Polygon" || p.type === "MultiPolygon") && Pl(n, p) && (l = !0);
    d++;
  }
  if (l)
    return n;
  {
    const p = Yu([]);
    for (let g = 0; g < i.features.length; g++)
      p.features = p.features.concat(
        uT(i.features[g]).features
      );
    return cl(yT(n, p).geometry.coordinates);
  }
}
function TT(o) {
  return o.type !== "FeatureCollection" ? o.type !== "Feature" ? Yu([Kh(o)]) : Yu([o]) : o;
}
function ap(o, i, n, l, d, p) {
  const g = Math.sqrt((d - n) * (d - n) + (p - l) * (p - l)), v = Math.sqrt((o - n) * (o - n) + (i - l) * (i - l)), m = Math.sqrt((d - o) * (d - o) + (p - i) * (p - i));
  return g === v + m;
}
var lp = ET;
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
const wT = /* @__PURE__ */ rt({
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
    return (i, n) => (V(!0), se(Me, null, En(o.styleIds, (l) => (V(), se(Me, { key: l }, [
      o.isPoint(o.geoJson) ? Ge("", !0) : (V(), je(j(Go), {
        key: 0,
        ref_for: !0,
        ref: "thingsLayer",
        geojson: o.filterFeatureCollection(o.geoJson, o.getStyleById(l)),
        options: o.layerOptions,
        "options-style": () => o.getStyleById(l)?.renderer.area
      }, null, 8, ["geojson", "options", "options-style"]))
    ], 64))), 128));
  }
}), ST = { class: "inner" }, AT = { class: "observation-slot" }, CT = { class: "inner" }, bT = { class: "observation-slot" }, OT = ["src"], LT = /* @__PURE__ */ rt({
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
    return (i, n) => (V(), se(Me, null, [
      o.renderAs === "icon" ? (V(), se("div", {
        key: 0,
        style: _a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: us(["pin", "icon", { round: o.isRound, solid: o.isSolid }])
      }, [
        ue("div", ST, [
          o.iconConfig ? (V(), je(j(Dp), {
            key: 0,
            configv: o.iconConfig
          }, null, 8, ["configv"])) : Ge("", !0)
        ]),
        ue("div", AT, [
          il(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Ge("", !0),
      o.renderAs === "prop" ? (V(), se("div", {
        key: 1,
        style: _a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: us(["pin", "contain", "marker", { round: o.isRound, solid: o.isSolid }])
      }, [
        ue("div", CT, Lt(o.propertyValue), 1),
        ue("div", bT, [
          il(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Ge("", !0),
      o.renderAs === "image" ? (V(), se(Me, { key: 2 }, [
        ue("div", {
          class: "image-marker",
          style: _a({
            width: `${o.imageSize}px`,
            height: `${o.imageSize}px`,
            background: o.isSelected ? o.selectionColor : void 0,
            borderRadius: o.isSelected ? "50%" : void 0,
            padding: o.isSelected ? "4px" : void 0
          })
        }, [
          o.imageUrl ? (V(), se("img", {
            key: 0,
            src: o.imageUrl,
            style: { width: "100%", height: "100%", objectFit: "contain" }
          }, null, 8, OT)) : Ge("", !0)
        ], 4),
        il(i.$slots, "observation", {}, void 0, !0)
      ], 64)) : Ge("", !0),
      o.renderAs === "none" ? il(i.$slots, "observation", { key: 3 }, void 0, !0) : Ge("", !0)
    ], 64));
  }
}), mr = (o, i) => {
  const n = o.__vccOpts || o;
  for (const [l, d] of i)
    n[l] = d;
  return n;
}, wl = /* @__PURE__ */ mr(LT, [["__scopeId", "data-v-dc572ab0"]]), IT = /* @__PURE__ */ rt({
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
    return (i, n) => (V(!0), se(Me, null, En(o.styleIds, (l) => (V(), se(Me, { key: l }, [
      (V(!0), se(Me, null, En(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), se(Me, {
        key: d.id
      }, [
        o.isPoint(d.geometry) ? Ge("", !0) : (V(), je(j(Go), {
          key: 0,
          ref_for: !0,
          ref: "geojsonLayer",
          geojson: d,
          options: o.layerOptions,
          "options-style": () => o.getStyleById(l)?.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])),
        o.getPoint(d.geometry) ? (V(), je(j(yl), {
          key: 1,
          "lat-lng": o.getPoint(d.geometry),
          options: { pane: o.markerPane }
        }, {
          default: De(() => [
            ce(j(vl), { "class-name": "someExtraClass" }, {
              default: De(() => [
                ce(wl, {
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
}), NT = /* @__PURE__ */ rt({
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
    return (i, n) => (V(!0), se(Me, null, En(o.styleIds, (l) => (V(), se(Me, { key: l }, [
      o.layerData && o.layerData.features ? (V(), se(Me, { key: 0 }, [
        (V(!0), se(Me, null, En(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), se(Me, {
          key: "area-" + d.id
        }, [
          d.geometry && !o.isPoint(d.geometry) ? (V(), je(j(Go), {
            key: 0,
            ref_for: !0,
            ref: "restGeojsonLayer",
            geojson: d,
            options: o.layerOptions,
            "options-style": () => o.getStyleById(l)?.renderer.area
          }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
        ], 64))), 128)),
        (V(!0), se(Me, null, En(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), se(Me, {
          key: "point-" + d.id
        }, [
          d.geometry && o.isPoint(d.geometry) && o.getPoint(d.geometry) ? (V(), je(j(yl), {
            key: 0,
            "lat-lng": o.getPoint(d.geometry),
            options: { pane: o.markerPane }
          }, {
            default: De(() => [
              ce(j(vl), { "class-name": "someExtraClass" }, {
                default: De(() => [
                  ce(wl, {
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
var Mo = /* @__PURE__ */ ((o) => (o.Thing = "Thing", o.OberservedArea = "OberservedArea", o))(Mo || {}), Rr = /* @__PURE__ */ ((o) => (o.equals = "eq", o.lessThen = "lt", o.greaterThen = "gt", o.lessThenEquals = "lte", o.greaterThenEquals = "gte", o.notEQuals = "neq", o))(Rr || {});
class we extends _r {
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
    return this._datasourceIds || (this._datasourceIds = Zu(this, this.eClass().getEStructuralFeature("datasourceIds"))), this._datasourceIds;
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
    return this._center || (this._center = Zu(this, this.eClass().getEStructuralFeature("center"))), this._center;
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
class be extends _r {
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
    return this._styleIds || (this._styleIds = Zu(this, this.eClass().getEStructuralFeature("styleIds"))), this._styleIds;
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
class Wt extends _r {
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
class Ke extends _r {
  constructor() {
    super(...arguments), this._iconColor = new uh();
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.CURRENT_ICON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.CURRENT_ICON,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.ICON_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.ICON_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.ICON_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.ICON_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.IS_ICON_FILLED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.IS_ICON_FILLED,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.STROKE_WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.STROKE_WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.OPTIC_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.OPTIC_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ke.GRADE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ke.GRADE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ke.CURRENT_ICON:
        return this.currentIcon;
      case Ke.ICON_COLOR:
        return this.iconColor;
      case Ke.ICON_SIZE:
        return this.iconSize;
      case Ke.IS_ICON_FILLED:
        return this.isIconFilled;
      case Ke.STROKE_WEIGHT:
        return this.strokeWeight;
      case Ke.OPTIC_SIZE:
        return this.opticSize;
      case Ke.GRADE:
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
      case Ke.CURRENT_ICON:
        this.currentIcon = n, super.eSet(i, n);
        break;
      case Ke.ICON_COLOR:
        this.iconColor = n, super.eSet(i, n);
        break;
      case Ke.ICON_SIZE:
        this.iconSize = n, super.eSet(i, n);
        break;
      case Ke.IS_ICON_FILLED:
        this.isIconFilled = n, super.eSet(i, n);
        break;
      case Ke.STROKE_WEIGHT:
        this.strokeWeight = n, super.eSet(i, n);
        break;
      case Ke.OPTIC_SIZE:
        this.opticSize = n, super.eSet(i, n);
        break;
      case Ke.GRADE:
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
      case Ke.CURRENT_ICON:
        return this._currentIcon !== void 0;
      case Ke.ICON_COLOR:
        return this._iconColor !== new uh();
      case Ke.ICON_SIZE:
        return this._iconSize !== void 0;
      case Ke.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case Ke.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case Ke.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case Ke.GRADE:
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
      case Ke.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      case Ke.ICON_COLOR:
        this._iconColor = new uh();
        return;
      case Ke.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case Ke.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case Ke.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case Ke.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case Ke.GRADE:
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
class Qi extends _r {
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
class Qe extends _r {
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.SHOW__SUB_ELEMENTS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.SHOW__SUB_ELEMENTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.POINT_RENDER_AS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.POINT_RENDER_AS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.POINT_PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.POINT_PROP,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.POINT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.POINT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.POINT_PIN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.POINT_PIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.AREA),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.AREA,
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
      getFeature: () => this.eClass().getEStructuralFeature(Qe.LABEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qe.LABEL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Qe.SHOW__SUB_ELEMENTS:
        return this.show_SubElements;
      case Qe.POINT_RENDER_AS:
        return this.point_render_as;
      case Qe.POINT_PROP:
        return this.point_prop;
      case Qe.POINT:
        return this.point;
      case Qe.POINT_PIN:
        return this.pointPin;
      case Qe.AREA:
        return this.area;
      case Qe.LABEL:
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
      case Qe.SHOW__SUB_ELEMENTS:
        this.show_SubElements = n, super.eSet(i, n);
        break;
      case Qe.POINT_RENDER_AS:
        this.point_render_as = n, super.eSet(i, n);
        break;
      case Qe.POINT_PROP:
        this.point_prop = n, super.eSet(i, n);
        break;
      case Qe.POINT:
        this.point = n, super.eSet(i, n);
        break;
      case Qe.POINT_PIN:
        this.pointPin = n, super.eSet(i, n);
        break;
      case Qe.AREA:
        this.area = n, super.eSet(i, n);
        break;
      case Qe.LABEL:
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
      case Qe.SHOW__SUB_ELEMENTS:
        return this._show_SubElements !== void 0;
      case Qe.POINT_RENDER_AS:
        return this._point_render_as !== void 0;
      case Qe.POINT_PROP:
        return this._point_prop !== void 0;
      case Qe.POINT:
        return this._point !== void 0;
      case Qe.POINT_PIN:
        return this._pointPin !== void 0;
      case Qe.AREA:
        return this._area !== void 0;
      case Qe.LABEL:
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
      case Qe.SHOW__SUB_ELEMENTS:
        this._show_SubElements = void 0;
        return;
      case Qe.POINT_RENDER_AS:
        this._point_render_as = void 0;
        return;
      case Qe.POINT_PROP:
        this._point_prop = void 0;
        return;
      case Qe.POINT:
        this._point = void 0;
        return;
      case Qe.POINT_PIN:
        this._pointPin = void 0;
        return;
      case Qe.AREA:
        this._area = void 0;
        return;
      case Qe.LABEL:
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
class wt extends _r {
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
      getFeature: () => this.eClass().getEStructuralFeature(wt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => wt.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(wt.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => wt.RENDERER,
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
      getFeature: () => this.eClass().getEStructuralFeature(wt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => wt.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(wt.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => wt.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case wt.NAME:
        return this.name;
      case wt.DATASTREAM:
        return this.datastream;
      case wt.OBSERVATIONS:
        return this.observations;
      case wt.RENDERER:
        return this.renderer;
      case wt.ID:
        return this.id;
      case wt.PLACEMENT:
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
      case wt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case wt.DATASTREAM:
        this.datastream.clear(), this.datastream.addAll(n), super.eSet(i, n);
        break;
      case wt.OBSERVATIONS:
        this.observations.clear(), this.observations.addAll(n), super.eSet(i, n);
        break;
      case wt.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case wt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case wt.PLACEMENT:
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
      case wt.NAME:
        return this._name !== void 0;
      case wt.DATASTREAM:
        return this._datastream !== void 0 && !this._datastream.isEmpty();
      case wt.OBSERVATIONS:
        return this._observations !== void 0 && !this._observations.isEmpty();
      case wt.RENDERER:
        return this._renderer !== void 0;
      case wt.ID:
        return this._id !== void 0;
      case wt.PLACEMENT:
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
      case wt.NAME:
        this._name = void 0;
        return;
      case wt.DATASTREAM:
        this._datastream && this._datastream.clear();
        return;
      case wt.OBSERVATIONS:
        this._observations && this._observations.clear();
        return;
      case wt.RENDERER:
        this._renderer = void 0;
        return;
      case wt.ID:
        this._id = void 0;
        return;
      case wt.PLACEMENT:
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
class Qs extends _r {
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
      getFeature: () => this.eClass().getEStructuralFeature(Qs.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qs.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Qs.PLACEMENT:
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
      case Qs.PLACEMENT:
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
      case Qs.PLACEMENT:
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
      case Qs.PLACEMENT:
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
class tn extends _r {
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
    return this._conditions || (this._conditions = ls(this, this.eClass().getEStructuralFeature("conditions"))), this._conditions;
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
class Bn extends _r {
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
        return this._comperator !== os.eq;
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
        this._comperator = os.eq;
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
class ct extends _r {
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
      getFeature: () => this.eClass().getEStructuralFeature(ct.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ct.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(ct.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ct.RENDERER,
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
      getFeature: () => this.eClass().getEStructuralFeature(ct.OBSERVATIONREFRESH_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ct.OBSERVATIONREFRESH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(ct.LAST_UPDATE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ct.LAST_UPDATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ct.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ct.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case ct.NAME:
        return this.name;
      case ct.THING:
        return this.thing;
      case ct.RENDERER:
        return this.renderer;
      case ct.DS_RENDERER:
        return this.ds_renderer;
      case ct.OBSERVATIONREFRESH_TIME:
        return this.ObservationrefreshTime;
      case ct.LAST_UPDATE:
        return this.lastUpdate;
      case ct.ID:
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
      case ct.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case ct.THING:
        this.thing.clear(), this.thing.addAll(n), super.eSet(i, n);
        break;
      case ct.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case ct.DS_RENDERER:
        this.ds_renderer.clear(), this.ds_renderer.addAll(n), super.eSet(i, n);
        break;
      case ct.OBSERVATIONREFRESH_TIME:
        this.ObservationrefreshTime = n, super.eSet(i, n);
        break;
      case ct.LAST_UPDATE:
        this.lastUpdate = n, super.eSet(i, n);
        break;
      case ct.ID:
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
      case ct.NAME:
        return this._name !== void 0;
      case ct.THING:
        return this._thing !== void 0 && !this._thing.isEmpty();
      case ct.RENDERER:
        return this._renderer !== void 0;
      case ct.DS_RENDERER:
        return this._ds_renderer !== void 0 && !this._ds_renderer.isEmpty();
      case ct.OBSERVATIONREFRESH_TIME:
        return this._ObservationrefreshTime !== void 0;
      case ct.LAST_UPDATE:
        return this._lastUpdate !== void 0;
      case ct.ID:
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
      case ct.NAME:
        this._name = void 0;
        return;
      case ct.THING:
        this._thing && this._thing.clear();
        return;
      case ct.RENDERER:
        this._renderer = void 0;
        return;
      case ct.DS_RENDERER:
        this._ds_renderer && this._ds_renderer.clear();
        return;
      case ct.OBSERVATIONREFRESH_TIME:
        this._ObservationrefreshTime = void 0;
        return;
      case ct.LAST_UPDATE:
        this._lastUpdate = void 0;
        return;
      case ct.ID:
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
class Ne extends _r {
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
class Dn extends _r {
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
class He extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature(He.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.THING_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.UNIT_OF_MEASUREMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.UNIT_OF_MEASUREMENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.OBSERVED_PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.LATEST_OBSERVATION_RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.LATEST_OBSERVATION_RESULT,
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
      getFeature: () => this.eClass().getEStructuralFeature(He.LATEST_OBSERVATION_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => He.LATEST_OBSERVATION_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case He.ID:
        return this.id;
      case He.NAME:
        return this.name;
      case He.THING_ID:
        return this.thingId;
      case He.UNIT_OF_MEASUREMENT:
        return this.unitOfMeasurement;
      case He.OBSERVED_PROPERTY:
        return this.observedProperty;
      case He.LATEST_OBSERVATION_RESULT:
        return this.latestObservationResult;
      case He.LATEST_OBSERVATION_TIME:
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
      case He.ID:
        this.id = n, super.eSet(i, n);
        break;
      case He.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case He.THING_ID:
        this.thingId = n, super.eSet(i, n);
        break;
      case He.UNIT_OF_MEASUREMENT:
        this.unitOfMeasurement = n, super.eSet(i, n);
        break;
      case He.OBSERVED_PROPERTY:
        this.observedProperty = n, super.eSet(i, n);
        break;
      case He.LATEST_OBSERVATION_RESULT:
        this.latestObservationResult = n, super.eSet(i, n);
        break;
      case He.LATEST_OBSERVATION_TIME:
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
      case He.ID:
        return this._id !== void 0;
      case He.NAME:
        return this._name !== void 0;
      case He.THING_ID:
        return this._thingId !== void 0;
      case He.UNIT_OF_MEASUREMENT:
        return this._unitOfMeasurement !== void 0;
      case He.OBSERVED_PROPERTY:
        return this._observedProperty !== void 0;
      case He.LATEST_OBSERVATION_RESULT:
        return this._latestObservationResult !== void 0;
      case He.LATEST_OBSERVATION_TIME:
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
      case He.ID:
        this._id = void 0;
        return;
      case He.NAME:
        this._name = void 0;
        return;
      case He.THING_ID:
        this._thingId = void 0;
        return;
      case He.UNIT_OF_MEASUREMENT:
        this._unitOfMeasurement = void 0;
        return;
      case He.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      case He.LATEST_OBSERVATION_RESULT:
        this._latestObservationResult = void 0;
        return;
      case He.LATEST_OBSERVATION_TIME:
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
class At extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature(At.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => At.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(At.DATASTREAM_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => At.DATASTREAM_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(At.PHENOMENON_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => At.PHENOMENON_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(At.RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => At.RESULT,
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
      getFeature: () => this.eClass().getEStructuralFeature(At.RESULT_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => At.RESULT_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case At.ID:
        return this.id;
      case At.DATASTREAM_ID:
        return this.datastreamId;
      case At.PHENOMENON_TIME:
        return this.phenomenonTime;
      case At.RESULT:
        return this.result;
      case At.RESULT_TIME:
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
      case At.ID:
        this.id = n, super.eSet(i, n);
        break;
      case At.DATASTREAM_ID:
        this.datastreamId = n, super.eSet(i, n);
        break;
      case At.PHENOMENON_TIME:
        this.phenomenonTime = n, super.eSet(i, n);
        break;
      case At.RESULT:
        this.result = n, super.eSet(i, n);
        break;
      case At.RESULT_TIME:
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
      case At.ID:
        return this._id !== void 0;
      case At.DATASTREAM_ID:
        return this._datastreamId !== void 0;
      case At.PHENOMENON_TIME:
        return this._phenomenonTime !== void 0;
      case At.RESULT:
        return this._result !== void 0;
      case At.RESULT_TIME:
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
      case At.ID:
        this._id = void 0;
        return;
      case At.DATASTREAM_ID:
        this._datastreamId = void 0;
        return;
      case At.PHENOMENON_TIME:
        this._phenomenonTime = void 0;
        return;
      case At.RESULT:
        this._result = void 0;
        return;
      case At.RESULT_TIME:
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
class Kt extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature(Kt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Kt.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Kt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Kt.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(Kt.GEOMETRY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Kt.GEOMETRY,
      merge: () => !1
    });
  }
  get thingIds() {
    return this._thingIds || (this._thingIds = Zu(this, this.eClass().getEStructuralFeature("thingIds"))), this._thingIds;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Kt.ID:
        return this.id;
      case Kt.NAME:
        return this.name;
      case Kt.GEOMETRY:
        return this.geometry;
      case Kt.THING_IDS:
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
      case Kt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Kt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Kt.GEOMETRY:
        this.geometry = n, super.eSet(i, n);
        break;
      case Kt.THING_IDS:
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
      case Kt.ID:
        return this._id !== void 0;
      case Kt.NAME:
        return this._name !== void 0;
      case Kt.GEOMETRY:
        return this._geometry !== void 0;
      case Kt.THING_IDS:
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
      case Kt.ID:
        this._id = void 0;
        return;
      case Kt.NAME:
        this._name = void 0;
        return;
      case Kt.GEOMETRY:
        this._geometry = void 0;
        return;
      case Kt.THING_IDS:
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
class jh extends qE {
  static get eINSTANCE() {
    return this._instance || (this._instance = new jh()), this._instance;
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
    return new be();
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
    return new Ke();
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
    return new Qe();
  }
  /**
   * Create a new DSRenderer instance
   */
  createDSRenderer() {
    return new wt();
  }
  /**
   * Create a new Placement instance
   */
  createPlacement() {
    return new Qs();
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
    return new ct();
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
    return new $e();
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
    return new He();
  }
  /**
   * Create a new ObservationClickPayload instance
   */
  createObservationClickPayload() {
    return new At();
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
    return new Kt();
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
  const i = Rp.INSTANCE.getEPackage(o);
  if (!i)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing MapSettingsPackage.`);
  return i;
}
class C extends KE {
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
    Rp.INSTANCE.set(C.eNS_URI, this), this.setEFactoryInstance(jh.eINSTANCE);
    const i = new Zn();
    i.setName("MapWidgetInterface"), i.setAbstract(!0), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), C.Literals.MAP_WIDGET_INTERFACE = i;
    const n = new Zn();
    n.setName("MapSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), C.Literals.MAP_SETTINGS = n;
    const l = new pe();
    l.setName("datasourceId"), l.setLowerBound(0), l.setUpperBound(1), n.getEStructuralFeatures().push(l), C.Literals.MAP_SETTINGS__DATASOURCE_ID = l;
    const d = new pe();
    d.setName("datasourceIds"), d.setLowerBound(0), d.setUpperBound(-1), n.getEStructuralFeatures().push(d), C.Literals.MAP_SETTINGS__DATASOURCE_IDS = d;
    const p = new pe();
    p.setName("baseMapUrl"), p.setLowerBound(0), p.setUpperBound(1), n.getEStructuralFeatures().push(p), C.Literals.MAP_SETTINGS__BASE_MAP_URL = p;
    const g = new pe();
    g.setName("zoom"), g.setLowerBound(0), g.setUpperBound(1), n.getEStructuralFeatures().push(g), C.Literals.MAP_SETTINGS__ZOOM = g;
    const v = new pe();
    v.setName("center"), v.setLowerBound(0), v.setUpperBound(-1), n.getEStructuralFeatures().push(v), C.Literals.MAP_SETTINGS__CENTER = v;
    const m = new pe();
    m.setName("attribution"), m.setLowerBound(0), m.setUpperBound(1), n.getEStructuralFeatures().push(m), C.Literals.MAP_SETTINGS__ATTRIBUTION = m;
    const E = new jn();
    E.setContainment(!0), E.setName("layers"), E.setLowerBound(0), E.setUpperBound(-1), n.getEStructuralFeatures().push(E), C.Literals.MAP_SETTINGS__LAYERS = E;
    const A = new jn();
    A.setContainment(!0), A.setName("styles"), A.setLowerBound(0), A.setUpperBound(-1), n.getEStructuralFeatures().push(A), C.Literals.MAP_SETTINGS__STYLES = A;
    const w = new jn();
    w.setContainment(!0), w.setName("OGCSstyles"), w.setLowerBound(0), w.setUpperBound(-1), n.getEStructuralFeatures().push(w), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES = w;
    const O = new jn();
    O.setContainment(!0), O.setName("services"), O.setLowerBound(0), O.setUpperBound(-1), n.getEStructuralFeatures().push(O), C.Literals.MAP_SETTINGS__SERVICES = O;
    const N = new pe();
    N.setName("fixed"), N.setLowerBound(0), N.setUpperBound(1), n.getEStructuralFeatures().push(N), C.Literals.MAP_SETTINGS__FIXED = N;
    const k = new pe();
    k.setName("enableClustering"), k.setLowerBound(0), k.setUpperBound(1), n.getEStructuralFeatures().push(k), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING = k;
    const G = new pe();
    G.setName("selectionHighlightColor"), G.setLowerBound(0), G.setUpperBound(1), n.getEStructuralFeatures().push(G), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR = G;
    const X = new pe();
    X.setName("selectedThingId"), X.setLowerBound(0), X.setUpperBound(1), n.getEStructuralFeatures().push(X), C.Literals.MAP_SETTINGS__SELECTED_THING_ID = X;
    const x = new Zn();
    x.setName("Layer"), x.setAbstract(!1), x.setInterface(!1), this.getEClassifiers().push(x), x.setEPackage(this), C.Literals.LAYER = x;
    const z = new pe();
    z.setName("datasourceId"), z.setLowerBound(0), z.setUpperBound(1), x.getEStructuralFeatures().push(z), C.Literals.LAYER__DATASOURCE_ID = z;
    const Y = new pe();
    Y.setName("service"), Y.setLowerBound(0), Y.setUpperBound(1), x.getEStructuralFeatures().push(Y), C.Literals.LAYER__SERVICE = Y;
    const R = new pe();
    R.setName("type"), R.setLowerBound(0), R.setUpperBound(1), x.getEStructuralFeatures().push(R), C.Literals.LAYER__TYPE = R;
    const q = new jn();
    q.setContainment(!0), q.setName("childs"), q.setLowerBound(0), q.setUpperBound(1), x.getEStructuralFeatures().push(q), C.Literals.LAYER__CHILDS = q;
    const fe = new pe();
    fe.setName("level"), fe.setLowerBound(0), fe.setUpperBound(1), x.getEStructuralFeatures().push(fe), C.Literals.LAYER__LEVEL = fe;
    const Se = new pe();
    Se.setName("styleIds"), Se.setLowerBound(0), Se.setUpperBound(-1), x.getEStructuralFeatures().push(Se), C.Literals.LAYER__STYLE_IDS = Se;
    const Ie = new pe();
    Ie.setName("name"), Ie.setLowerBound(0), Ie.setUpperBound(1), x.getEStructuralFeatures().push(Ie), C.Literals.LAYER__NAME = Ie;
    const he = new pe();
    he.setName("title"), he.setLowerBound(0), he.setUpperBound(1), x.getEStructuralFeatures().push(he), C.Literals.LAYER__TITLE = he;
    const Oe = new pe();
    Oe.setName("attribution"), Oe.setLowerBound(0), Oe.setUpperBound(1), x.getEStructuralFeatures().push(Oe), C.Literals.LAYER__ATTRIBUTION = Oe;
    const ae = new pe();
    ae.setName("geoJson"), ae.setLowerBound(0), ae.setUpperBound(1), x.getEStructuralFeatures().push(ae), C.Literals.LAYER__GEO_JSON = ae;
    const Z = new pe();
    Z.setName("wfs_service"), Z.setLowerBound(0), Z.setUpperBound(1), x.getEStructuralFeatures().push(Z), C.Literals.LAYER__WFS_SERVICE = Z;
    const K = new pe();
    K.setName("opacity"), K.setLowerBound(0), K.setUpperBound(1), x.getEStructuralFeatures().push(K), C.Literals.LAYER__OPACITY = K;
    const U = new Zn();
    U.setName("Service"), U.setAbstract(!1), U.setInterface(!1), this.getEClassifiers().push(U), U.setEPackage(this), C.Literals.SERVICE = U;
    const ie = new pe();
    ie.setName("type"), ie.setLowerBound(0), ie.setUpperBound(1), U.getEStructuralFeatures().push(ie), C.Literals.SERVICE__TYPE = ie;
    const ne = new pe();
    ne.setName("url"), ne.setLowerBound(0), ne.setUpperBound(1), U.getEStructuralFeatures().push(ne), C.Literals.SERVICE__URL = ne;
    const Ee = new pe();
    Ee.setName("service"), Ee.setLowerBound(0), Ee.setUpperBound(1), U.getEStructuralFeatures().push(Ee), C.Literals.SERVICE__SERVICE = Ee;
    const de = new pe();
    de.setName("id"), de.setLowerBound(0), de.setUpperBound(1), U.getEStructuralFeatures().push(de), C.Literals.SERVICE__ID = de;
    const yt = new Zn();
    yt.setName("IconSettings"), yt.setAbstract(!1), yt.setInterface(!1), this.getEClassifiers().push(yt), yt.setEPackage(this), C.Literals.ICON_SETTINGS = yt;
    const Le = new pe();
    Le.setName("currentIcon"), Le.setLowerBound(0), Le.setUpperBound(1), yt.getEStructuralFeatures().push(Le), C.Literals.ICON_SETTINGS__CURRENT_ICON = Le;
    const ke = new jn();
    ke.setContainment(!1), ke.setName("iconColor"), ke.setLowerBound(0), ke.setUpperBound(1), yt.getEStructuralFeatures().push(ke), C.Literals.ICON_SETTINGS__ICON_COLOR = ke;
    const xt = new pe();
    xt.setName("iconSize"), xt.setLowerBound(0), xt.setUpperBound(1), yt.getEStructuralFeatures().push(xt), C.Literals.ICON_SETTINGS__ICON_SIZE = xt;
    const Bt = new pe();
    Bt.setName("isIconFilled"), Bt.setLowerBound(0), Bt.setUpperBound(1), yt.getEStructuralFeatures().push(Bt), C.Literals.ICON_SETTINGS__IS_ICON_FILLED = Bt;
    const le = new pe();
    le.setName("strokeWeight"), le.setLowerBound(0), le.setUpperBound(1), yt.getEStructuralFeatures().push(le), C.Literals.ICON_SETTINGS__STROKE_WEIGHT = le;
    const Ue = new pe();
    Ue.setName("opticSize"), Ue.setLowerBound(0), Ue.setUpperBound(1), yt.getEStructuralFeatures().push(Ue), C.Literals.ICON_SETTINGS__OPTIC_SIZE = Ue;
    const Pe = new pe();
    Pe.setName("grade"), Pe.setLowerBound(0), Pe.setUpperBound(1), yt.getEStructuralFeatures().push(Pe), C.Literals.ICON_SETTINGS__GRADE = Pe;
    const Ht = new Zn();
    Ht.setName("PointPin"), Ht.setAbstract(!1), Ht.setInterface(!1), this.getEClassifiers().push(Ht), Ht.setEPackage(this), C.Literals.POINT_PIN = Ht;
    const $t = new pe();
    $t.setName("color"), $t.setLowerBound(0), $t.setUpperBound(1), Ht.getEStructuralFeatures().push($t), C.Literals.POINT_PIN__COLOR = $t;
    const Pn = new pe();
    Pn.setName("solid"), Pn.setLowerBound(0), Pn.setUpperBound(1), Ht.getEStructuralFeatures().push(Pn), C.Literals.POINT_PIN__SOLID = Pn;
    const sn = new Zn();
    sn.setName("PointAndAreaSettings"), sn.setAbstract(!1), sn.setInterface(!1), this.getEClassifiers().push(sn), sn.setEPackage(this), C.Literals.POINT_AND_AREA_SETTINGS = sn;
    const Yn = new pe();
    Yn.setName("show_SubElements"), Yn.setLowerBound(0), Yn.setUpperBound(1), sn.getEStructuralFeatures().push(Yn), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS = Yn;
    const Un = new pe();
    Un.setName("point_render_as"), Un.setLowerBound(0), Un.setUpperBound(1), sn.getEStructuralFeatures().push(Un), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS = Un;
    const Ui = new pe();
    Ui.setName("point_prop"), Ui.setLowerBound(0), Ui.setUpperBound(1), sn.getEStructuralFeatures().push(Ui), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP = Ui;
    const fn = new jn();
    fn.setContainment(!0), fn.setName("point"), fn.setLowerBound(0), fn.setUpperBound(1), sn.getEStructuralFeatures().push(fn), C.Literals.POINT_AND_AREA_SETTINGS__POINT = fn;
    const Ut = new jn();
    Ut.setContainment(!0), Ut.setName("pointPin"), Ut.setLowerBound(0), Ut.setUpperBound(1), sn.getEStructuralFeatures().push(Ut), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN = Ut;
    const zi = new jn();
    zi.setContainment(!0), zi.setName("area"), zi.setLowerBound(0), zi.setUpperBound(1), sn.getEStructuralFeatures().push(zi), C.Literals.POINT_AND_AREA_SETTINGS__AREA = zi;
    const on = new pe();
    on.setName("label"), on.setLowerBound(0), on.setUpperBound(1), sn.getEStructuralFeatures().push(on), C.Literals.POINT_AND_AREA_SETTINGS__LABEL = on;
    const an = new Zn();
    an.setName("DSRenderer"), an.setAbstract(!1), an.setInterface(!1), this.getEClassifiers().push(an), an.setEPackage(this), C.Literals.D_S_RENDERER = an;
    const vr = new pe();
    vr.setName("name"), vr.setLowerBound(0), vr.setUpperBound(1), an.getEStructuralFeatures().push(vr), C.Literals.D_S_RENDERER__NAME = vr;
    const qn = new jn();
    qn.setContainment(!0), qn.setName("datastream"), qn.setLowerBound(0), qn.setUpperBound(-1), an.getEStructuralFeatures().push(qn), C.Literals.D_S_RENDERER__DATASTREAM = qn;
    const jt = new jn();
    jt.setContainment(!0), jt.setName("observations"), jt.setLowerBound(0), jt.setUpperBound(-1), an.getEStructuralFeatures().push(jt), C.Literals.D_S_RENDERER__OBSERVATIONS = jt;
    const Xn = new jn();
    Xn.setContainment(!0), Xn.setName("renderer"), Xn.setLowerBound(0), Xn.setUpperBound(1), an.getEStructuralFeatures().push(Xn), C.Literals.D_S_RENDERER__RENDERER = Xn;
    const xn = new pe();
    xn.setName("id"), xn.setLowerBound(0), xn.setUpperBound(1), an.getEStructuralFeatures().push(xn), C.Literals.D_S_RENDERER__ID = xn;
    const Vi = new pe();
    Vi.setName("placement"), Vi.setLowerBound(0), Vi.setUpperBound(1), an.getEStructuralFeatures().push(Vi), C.Literals.D_S_RENDERER__PLACEMENT = Vi;
    const zn = new Zn();
    zn.setName("Placement"), zn.setAbstract(!1), zn.setInterface(!1), this.getEClassifiers().push(zn), zn.setEPackage(this), C.Literals.PLACEMENT = zn;
    const er = new pe();
    er.setName("placement"), er.setLowerBound(0), er.setUpperBound(1), zn.getEStructuralFeatures().push(er), C.Literals.PLACEMENT__PLACEMENT = er;
    const pn = new Zn();
    pn.setName("Observation"), pn.setAbstract(!1), pn.setInterface(!1), this.getEClassifiers().push(pn), pn.setEPackage(this), C.Literals.OBSERVATION = pn;
    const Qn = new pe();
    Qn.setName("setting"), Qn.setLowerBound(0), Qn.setUpperBound(1), pn.getEStructuralFeatures().push(Qn), C.Literals.OBSERVATION__SETTING = Qn;
    const bi = new pe();
    bi.setName("component"), bi.setLowerBound(0), bi.setUpperBound(1), pn.getEStructuralFeatures().push(bi), C.Literals.OBSERVATION__COMPONENT = bi;
    const Oi = new jn();
    Oi.setContainment(!0), Oi.setName("renderer"), Oi.setLowerBound(0), Oi.setUpperBound(1), pn.getEStructuralFeatures().push(Oi), C.Literals.OBSERVATION__RENDERER = Oi;
    const di = new jn();
    di.setContainment(!0), di.setName("conditions"), di.setLowerBound(0), di.setUpperBound(-1), pn.getEStructuralFeatures().push(di), C.Literals.OBSERVATION__CONDITIONS = di;
    const Fn = new Zn();
    Fn.setName("Condition"), Fn.setAbstract(!1), Fn.setInterface(!1), this.getEClassifiers().push(Fn), Fn.setEPackage(this), C.Literals.CONDITION = Fn;
    const Wi = new pe();
    Wi.setName("prop"), Wi.setLowerBound(0), Wi.setUpperBound(1), Fn.getEStructuralFeatures().push(Wi), C.Literals.CONDITION__PROP = Wi;
    const fi = new pe();
    fi.setName("comperator"), fi.setLowerBound(0), fi.setUpperBound(1), Fn.getEStructuralFeatures().push(fi), C.Literals.CONDITION__COMPERATOR = fi;
    const ei = new pe();
    ei.setName("value"), ei.setLowerBound(0), ei.setUpperBound(1), Fn.getEStructuralFeatures().push(ei), C.Literals.CONDITION__VALUE = ei;
    const An = new Zn();
    An.setName("Renderer"), An.setAbstract(!1), An.setInterface(!1), this.getEClassifiers().push(An), An.setEPackage(this), C.Literals.RENDERER = An;
    const ti = new pe();
    ti.setName("name"), ti.setLowerBound(0), ti.setUpperBound(1), An.getEStructuralFeatures().push(ti), C.Literals.RENDERER__NAME = ti;
    const Li = new jn();
    Li.setContainment(!0), Li.setName("thing"), Li.setLowerBound(0), Li.setUpperBound(-1), An.getEStructuralFeatures().push(Li), C.Literals.RENDERER__THING = Li;
    const Ii = new jn();
    Ii.setContainment(!0), Ii.setName("renderer"), Ii.setLowerBound(0), Ii.setUpperBound(1), An.getEStructuralFeatures().push(Ii), C.Literals.RENDERER__RENDERER = Ii;
    const ni = new jn();
    ni.setContainment(!0), ni.setName("ds_renderer"), ni.setLowerBound(0), ni.setUpperBound(-1), An.getEStructuralFeatures().push(ni), C.Literals.RENDERER__DS_RENDERER = ni;
    const tr = new pe();
    tr.setName("ObservationrefreshTime"), tr.setLowerBound(0), tr.setUpperBound(1), An.getEStructuralFeatures().push(tr), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME = tr;
    const Zi = new pe();
    Zi.setName("lastUpdate"), Zi.setLowerBound(0), Zi.setUpperBound(1), An.getEStructuralFeatures().push(Zi), C.Literals.RENDERER__LAST_UPDATE = Zi;
    const F = new pe();
    F.setName("id"), F.setLowerBound(0), F.setUpperBound(1), An.getEStructuralFeatures().push(F), C.Literals.RENDERER__ID = F;
    const oe = new Zn();
    oe.setName("MapProps"), oe.setAbstract(!1), oe.setInterface(!1), this.getEClassifiers().push(oe), oe.setEPackage(this), C.Literals.MAP_PROPS = oe;
    const J = new pe();
    J.setName("stroke"), J.setLowerBound(0), J.setUpperBound(1), oe.getEStructuralFeatures().push(J), C.Literals.MAP_PROPS__STROKE = J;
    const ve = new pe();
    ve.setName("color"), ve.setLowerBound(0), ve.setUpperBound(1), oe.getEStructuralFeatures().push(ve), C.Literals.MAP_PROPS__COLOR = ve;
    const Be = new pe();
    Be.setName("weight"), Be.setLowerBound(0), Be.setUpperBound(1), oe.getEStructuralFeatures().push(Be), C.Literals.MAP_PROPS__WEIGHT = Be;
    const xe = new pe();
    xe.setName("opacity"), xe.setLowerBound(0), xe.setUpperBound(1), oe.getEStructuralFeatures().push(xe), C.Literals.MAP_PROPS__OPACITY = xe;
    const et = new pe();
    et.setName("lineCap"), et.setLowerBound(0), et.setUpperBound(1), oe.getEStructuralFeatures().push(et), C.Literals.MAP_PROPS__LINE_CAP = et;
    const pt = new pe();
    pt.setName("dashOffset"), pt.setLowerBound(0), pt.setUpperBound(1), oe.getEStructuralFeatures().push(pt), C.Literals.MAP_PROPS__DASH_OFFSET = pt;
    const Nt = new pe();
    Nt.setName("fill"), Nt.setLowerBound(0), Nt.setUpperBound(1), oe.getEStructuralFeatures().push(Nt), C.Literals.MAP_PROPS__FILL = Nt;
    const Gt = new pe();
    Gt.setName("fillOpacity"), Gt.setLowerBound(0), Gt.setUpperBound(1), oe.getEStructuralFeatures().push(Gt), C.Literals.MAP_PROPS__FILL_OPACITY = Gt;
    const Xt = new pe();
    Xt.setName("fillColor"), Xt.setLowerBound(0), Xt.setUpperBound(1), oe.getEStructuralFeatures().push(Xt), C.Literals.MAP_PROPS__FILL_COLOR = Xt;
    const _t = new pe();
    _t.setName("className"), _t.setLowerBound(0), _t.setUpperBound(1), oe.getEStructuralFeatures().push(_t), C.Literals.MAP_PROPS__CLASS_NAME = _t;
    const me = new Zn();
    me.setName("ThingClickPayload"), me.setAbstract(!1), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), C.Literals.THING_CLICK_PAYLOAD = me;
    const ii = new pe();
    ii.setName("id"), ii.setLowerBound(0), ii.setUpperBound(1), me.getEStructuralFeatures().push(ii), C.Literals.THING_CLICK_PAYLOAD__ID = ii;
    const Hi = new pe();
    Hi.setName("name"), Hi.setLowerBound(0), Hi.setUpperBound(1), me.getEStructuralFeatures().push(Hi), C.Literals.THING_CLICK_PAYLOAD__NAME = Hi;
    const pi = new pe();
    pi.setName("description"), pi.setLowerBound(0), pi.setUpperBound(1), me.getEStructuralFeatures().push(pi), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION = pi;
    const yr = new pe();
    yr.setName("properties"), yr.setLowerBound(0), yr.setUpperBound(1), me.getEStructuralFeatures().push(yr), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES = yr;
    const Dt = new pe();
    Dt.setName("location"), Dt.setLowerBound(0), Dt.setUpperBound(1), me.getEStructuralFeatures().push(Dt), C.Literals.THING_CLICK_PAYLOAD__LOCATION = Dt;
    const Cn = new pe();
    Cn.setName("rendererId"), Cn.setLowerBound(0), Cn.setUpperBound(1), me.getEStructuralFeatures().push(Cn), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID = Cn;
    const lt = new jn();
    lt.setContainment(!0), lt.setName("datastreams"), lt.setLowerBound(0), lt.setUpperBound(-1), me.getEStructuralFeatures().push(lt), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS = lt;
    const zt = new Zn();
    zt.setName("DatastreamSummary"), zt.setAbstract(!1), zt.setInterface(!1), this.getEClassifiers().push(zt), zt.setEPackage(this), C.Literals.DATASTREAM_SUMMARY = zt;
    const bn = new pe();
    bn.setName("id"), bn.setLowerBound(0), bn.setUpperBound(1), zt.getEStructuralFeatures().push(bn), C.Literals.DATASTREAM_SUMMARY__ID = bn;
    const ri = new pe();
    ri.setName("name"), ri.setLowerBound(0), ri.setUpperBound(1), zt.getEStructuralFeatures().push(ri), C.Literals.DATASTREAM_SUMMARY__NAME = ri;
    const gn = new pe();
    gn.setName("observedProperty"), gn.setLowerBound(0), gn.setUpperBound(1), zt.getEStructuralFeatures().push(gn), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY = gn;
    const On = new Zn();
    On.setName("DatastreamClickPayload"), On.setAbstract(!1), On.setInterface(!1), this.getEClassifiers().push(On), On.setEPackage(this), C.Literals.DATASTREAM_CLICK_PAYLOAD = On;
    const si = new pe();
    si.setName("id"), si.setLowerBound(0), si.setUpperBound(1), On.getEStructuralFeatures().push(si), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID = si;
    const ln = new pe();
    ln.setName("name"), ln.setLowerBound(0), ln.setUpperBound(1), On.getEStructuralFeatures().push(ln), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME = ln;
    const Yt = new pe();
    Yt.setName("thingId"), Yt.setLowerBound(0), Yt.setUpperBound(1), On.getEStructuralFeatures().push(Yt), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID = Yt;
    const Kn = new pe();
    Kn.setName("unitOfMeasurement"), Kn.setLowerBound(0), Kn.setUpperBound(1), On.getEStructuralFeatures().push(Kn), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT = Kn;
    const Pr = new pe();
    Pr.setName("observedProperty"), Pr.setLowerBound(0), Pr.setUpperBound(1), On.getEStructuralFeatures().push(Pr), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY = Pr;
    const fs = new pe();
    fs.setName("latestObservationResult"), fs.setLowerBound(0), fs.setUpperBound(1), On.getEStructuralFeatures().push(fs), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT = fs;
    const ps = new pe();
    ps.setName("latestObservationTime"), ps.setLowerBound(0), ps.setUpperBound(1), On.getEStructuralFeatures().push(ps), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME = ps;
    const gi = new Zn();
    gi.setName("ObservationClickPayload"), gi.setAbstract(!1), gi.setInterface(!1), this.getEClassifiers().push(gi), gi.setEPackage(this), C.Literals.OBSERVATION_CLICK_PAYLOAD = gi;
    const Er = new pe();
    Er.setName("id"), Er.setLowerBound(0), Er.setUpperBound(1), gi.getEStructuralFeatures().push(Er), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID = Er;
    const Yi = new pe();
    Yi.setName("datastreamId"), Yi.setLowerBound(0), Yi.setUpperBound(1), gi.getEStructuralFeatures().push(Yi), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID = Yi;
    const Kr = new pe();
    Kr.setName("phenomenonTime"), Kr.setLowerBound(0), Kr.setUpperBound(1), gi.getEStructuralFeatures().push(Kr), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME = Kr;
    const Jr = new pe();
    Jr.setName("result"), Jr.setLowerBound(0), Jr.setUpperBound(1), gi.getEStructuralFeatures().push(Jr), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT = Jr;
    const nr = new pe();
    nr.setName("resultTime"), nr.setLowerBound(0), nr.setUpperBound(1), gi.getEStructuralFeatures().push(nr), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME = nr;
    const tt = new Zn();
    tt.setName("MapClickPayload"), tt.setAbstract(!1), tt.setInterface(!1), this.getEClassifiers().push(tt), tt.setEPackage(this), C.Literals.MAP_CLICK_PAYLOAD = tt;
    const bt = new pe();
    bt.setName("lat"), bt.setLowerBound(0), bt.setUpperBound(1), tt.getEStructuralFeatures().push(bt), C.Literals.MAP_CLICK_PAYLOAD__LAT = bt;
    const ir = new pe();
    ir.setName("lon"), ir.setLowerBound(0), ir.setUpperBound(1), tt.getEStructuralFeatures().push(ir), C.Literals.MAP_CLICK_PAYLOAD__LON = ir;
    const Mn = new Zn();
    Mn.setName("LocationClickPayload"), Mn.setAbstract(!1), Mn.setInterface(!1), this.getEClassifiers().push(Mn), Mn.setEPackage(this), C.Literals.LOCATION_CLICK_PAYLOAD = Mn;
    const _i = new pe();
    _i.setName("id"), _i.setLowerBound(0), _i.setUpperBound(1), Mn.getEStructuralFeatures().push(_i), C.Literals.LOCATION_CLICK_PAYLOAD__ID = _i;
    const xr = new pe();
    xr.setName("name"), xr.setLowerBound(0), xr.setUpperBound(1), Mn.getEStructuralFeatures().push(xr), C.Literals.LOCATION_CLICK_PAYLOAD__NAME = xr;
    const Ze = new pe();
    Ze.setName("geometry"), Ze.setLowerBound(0), Ze.setUpperBound(1), Mn.getEStructuralFeatures().push(Ze), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY = Ze;
    const Ot = new pe();
    Ot.setName("thingIds"), Ot.setLowerBound(0), Ot.setUpperBound(-1), Mn.getEStructuralFeatures().push(Ot), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS = Ot, C.Literals.MAP_WIDGET_INTERFACE.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), C.Literals.THING_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.DATASTREAM_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.OBSERVATION_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.LOCATION_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_SETTINGS__DATASOURCE_ID.setEType(ge().getEClassifier("EString")), C.Literals.MAP_SETTINGS__DATASOURCE_IDS.setEType(ge().getEClassifier("EString")), C.Literals.MAP_SETTINGS__BASE_MAP_URL.setEType(ge().getEClassifier("EString")), C.Literals.MAP_SETTINGS__ZOOM.setEType(ge().getEClassifier("EInt")), C.Literals.MAP_SETTINGS__CENTER.setEType(ge().getEClassifier("EDouble")), C.Literals.MAP_SETTINGS__ATTRIBUTION.setEType(ge().getEClassifier("EString")), C.Literals.MAP_SETTINGS__LAYERS.setEType(C.Literals.LAYER), C.Literals.MAP_SETTINGS__STYLES.setEType(C.Literals.D_S_RENDERER), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES.setEType(C.Literals.RENDERER), C.Literals.MAP_SETTINGS__SERVICES.setEType(C.Literals.SERVICE), C.Literals.MAP_SETTINGS__FIXED.setEType(ge().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING.setEType(ge().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR.setEType(ge().getEClassifier("EString")), C.Literals.MAP_SETTINGS__SELECTED_THING_ID.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__DATASOURCE_ID.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__SERVICE.setEType(ge().getEClassifier("EJavaObject")), C.Literals.LAYER__TYPE.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__CHILDS.setEType(C.Literals.LAYER), C.Literals.LAYER__LEVEL.setEType(ge().getEClassifier("EInt")), C.Literals.LAYER__STYLE_IDS.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__NAME.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__TITLE.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__ATTRIBUTION.setEType(ge().getEClassifier("EString")), C.Literals.LAYER__GEO_JSON.setEType(ge().getEClassifier("EJavaObject")), C.Literals.LAYER__WFS_SERVICE.setEType(ge().getEClassifier("EJavaObject")), C.Literals.LAYER__OPACITY.setEType(ge().getEClassifier("EDouble")), C.Literals.SERVICE__TYPE.setEType(ge().getEClassifier("EString")), C.Literals.SERVICE__URL.setEType(ge().getEClassifier("EString")), C.Literals.SERVICE__SERVICE.setEType(ge().getEClassifier("EJavaObject")), C.Literals.SERVICE__ID.setEType(ge().getEClassifier("EString")), C.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(ge().getEClassifier("EString")), C.Literals.ICON_SETTINGS__ICON_COLOR.setEType(No("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), C.Literals.ICON_SETTINGS__ICON_SIZE.setEType(ge().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(ge().getEClassifier("EBoolean")), C.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(ge().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(ge().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__GRADE.setEType(ge().getEClassifier("EInt")), C.Literals.POINT_PIN__COLOR.setEType(ge().getEClassifier("EString")), C.Literals.POINT_PIN__SOLID.setEType(ge().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS.setEType(ge().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS.setEType(ge().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP.setEType(ge().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT.setEType(C.Literals.ICON_SETTINGS), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN.setEType(C.Literals.POINT_PIN), C.Literals.POINT_AND_AREA_SETTINGS__AREA.setEType(C.Literals.MAP_PROPS), C.Literals.POINT_AND_AREA_SETTINGS__LABEL.setEType(ge().getEClassifier("EJavaObject")), C.Literals.D_S_RENDERER__NAME.setEType(ge().getEClassifier("EString")), C.Literals.D_S_RENDERER__DATASTREAM.setEType(C.Literals.CONDITION), C.Literals.D_S_RENDERER__OBSERVATIONS.setEType(C.Literals.OBSERVATION), C.Literals.D_S_RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.D_S_RENDERER__ID.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION__SETTING.setEType(ge().getEClassifier("EJavaObject")), C.Literals.OBSERVATION__COMPONENT.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.OBSERVATION__CONDITIONS.setEType(C.Literals.CONDITION), C.Literals.CONDITION__PROP.setEType(ge().getEClassifier("EString")), C.Literals.CONDITION__VALUE.setEType(ge().getEClassifier("EString")), C.Literals.RENDERER__NAME.setEType(ge().getEClassifier("EString")), C.Literals.RENDERER__THING.setEType(C.Literals.CONDITION), C.Literals.RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.RENDERER__DS_RENDERER.setEType(C.Literals.D_S_RENDERER), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME.setEType(ge().getEClassifier("EInt")), C.Literals.RENDERER__LAST_UPDATE.setEType(ge().getEClassifier("EInt")), C.Literals.RENDERER__ID.setEType(ge().getEClassifier("EString")), C.Literals.MAP_PROPS__STROKE.setEType(ge().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__COLOR.setEType(ge().getEClassifier("EString")), C.Literals.MAP_PROPS__WEIGHT.setEType(ge().getEClassifier("EInt")), C.Literals.MAP_PROPS__OPACITY.setEType(ge().getEClassifier("EDouble")), C.Literals.MAP_PROPS__LINE_CAP.setEType(ge().getEClassifier("EString")), C.Literals.MAP_PROPS__DASH_OFFSET.setEType(ge().getEClassifier("EString")), C.Literals.MAP_PROPS__FILL.setEType(ge().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__FILL_OPACITY.setEType(ge().getEClassifier("EDouble")), C.Literals.MAP_PROPS__FILL_COLOR.setEType(ge().getEClassifier("EString")), C.Literals.MAP_PROPS__CLASS_NAME.setEType(ge().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__ID.setEType(ge().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__NAME.setEType(ge().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION.setEType(ge().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES.setEType(ge().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__LOCATION.setEType(ge().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID.setEType(ge().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS.setEType(C.Literals.DATASTREAM_SUMMARY), C.Literals.DATASTREAM_SUMMARY__ID.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__NAME.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT.setEType(ge().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY.setEType(ge().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT.setEType(ge().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME.setEType(ge().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT.setEType(ge().getEClassifier("EJavaObject")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME.setEType(ge().getEClassifier("EString")), C.Literals.MAP_CLICK_PAYLOAD__LAT.setEType(ge().getEClassifier("EDouble")), C.Literals.MAP_CLICK_PAYLOAD__LON.setEType(ge().getEClassifier("EDouble")), C.Literals.LOCATION_CLICK_PAYLOAD__ID.setEType(ge().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__NAME.setEType(ge().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY.setEType(ge().getEClassifier("EJavaObject")), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS.setEType(ge().getEClassifier("EString"));
  }
}
class $e extends Sl {
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
      getFeature: () => this.eClass().getEStructuralFeature($e.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature($e.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature($e.DESCRIPTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.DESCRIPTION,
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
      getFeature: () => this.eClass().getEStructuralFeature($e.PROPERTIES),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature($e.LOCATION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.LOCATION,
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
      getFeature: () => this.eClass().getEStructuralFeature($e.RENDERER_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.RENDERER_ID,
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
      case $e.ID:
        return this.id;
      case $e.NAME:
        return this.name;
      case $e.DESCRIPTION:
        return this.description;
      case $e.PROPERTIES:
        return this.properties;
      case $e.LOCATION:
        return this.location;
      case $e.RENDERER_ID:
        return this.rendererId;
      case $e.DATASTREAMS:
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
      case $e.ID:
        this.id = n, super.eSet(i, n);
        break;
      case $e.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case $e.DESCRIPTION:
        this.description = n, super.eSet(i, n);
        break;
      case $e.PROPERTIES:
        this.properties = n, super.eSet(i, n);
        break;
      case $e.LOCATION:
        this.location = n, super.eSet(i, n);
        break;
      case $e.RENDERER_ID:
        this.rendererId = n, super.eSet(i, n);
        break;
      case $e.DATASTREAMS:
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
      case $e.ID:
        return this._id !== void 0;
      case $e.NAME:
        return this._name !== void 0;
      case $e.DESCRIPTION:
        return this._description !== void 0;
      case $e.PROPERTIES:
        return this._properties !== void 0;
      case $e.LOCATION:
        return this._location !== void 0;
      case $e.RENDERER_ID:
        return this._rendererId !== void 0;
      case $e.DATASTREAMS:
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
      case $e.ID:
        this._id = void 0;
        return;
      case $e.NAME:
        this._name = void 0;
        return;
      case $e.DESCRIPTION:
        this._description = void 0;
        return;
      case $e.PROPERTIES:
        this._properties = void 0;
        return;
      case $e.LOCATION:
        this._location = void 0;
        return;
      case $e.RENDERER_ID:
        this._rendererId = void 0;
        return;
      case $e.DATASTREAMS:
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
const DT = /* @__PURE__ */ rt({
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
    const i = JE.createLogger("daanse:maps:click"), n = o, l = _e({}), d = St(Np.TINY_EMITTER), p = Tn(() => {
      const z = [], Y = [];
      for (const R of n.renderers)
        for (const q of n.locations) {
          const fe = q.things ?? [];
          for (const Se of fe) {
            if (!n.compareThing(Se, R)) continue;
            const Ie = Se["@iot.id"] || Se.iotId || "", he = q["@iot.id"] || "", Oe = n.getPoint(q.location), ae = n.isFeatureCollection(q.location), Z = n.isPoint(q.location);
            z.push({
              key: `${R.id}-${he}-${Ie}`,
              thing: Se,
              location: q,
              renderer: R,
              point: Oe,
              geoJson: ae && !Z ? q.location : null,
              isArea: ae && !Z
            });
            const K = Se.datastreams ?? [];
            for (const U of K) {
              const ie = U.iotId || "";
              for (const ne of R.ds_renderer) {
                if (!n.compareDatastream(U, ne)) continue;
                const Ee = U.observedArea ? n.transformToGeoJson(U.observedArea) : null, de = ne.placement === Mo.Thing ? Oe : Ee ? n.getPointformArea(Ee) : null, yt = ne.observations?.some(
                  (ke) => !n.getById(ke.component)?.isLayerRenderer
                ), Le = (ne.renderer.point_render_as !== "none" || yt) && !!de;
                Y.push({
                  key: `${R.id}-${ne.id}-${ie}`,
                  datastream: U,
                  thing: Se,
                  location: q,
                  renderer: R,
                  subrenderer: ne,
                  point: de,
                  observedAreaGeoJson: Ee,
                  showMarker: Le
                });
              }
            }
          }
        }
      return { things: z, datastreams: Y };
    }), g = (z, Y, R) => {
      if (!n.widgetId) return;
      const q = new $e();
      q.id = (z["@iot.id"] || z.iotId) ?? "", q.name = z.name ?? "", q.description = z.description ?? "", q.properties = z.properties, q.location = Y.location, q.rendererId = R.id ?? "";
      const fe = z.datastreams || z.Datastreams || [];
      for (const Ie of fe) {
        const he = new Dn();
        he.id = Ie["@iot.id"] || Ie.iotId || "", he.name = Ie.name ?? "", he.observedProperty = Ie.ObservedProperty?.name || Ie.observedProperty?.name || "", q.datastreams.add(he);
      }
      const Se = {
        type: "widget:MapWidget:click_on_thing",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      };
      console.log("🗺️ Map Widget: Emitting thing click event", Se), d.emit("widget:MapWidget:click_on_thing", Se);
    }, v = (z, Y, R) => {
      if (i("Emitting datastream click, widgetId: %s", n.widgetId), !n.widgetId) {
        i("⚠️ widgetId is undefined, not emitting event");
        return;
      }
      const q = new He();
      q.id = (z.iotId || z["@iot.id"]) ?? "", q.name = z.name ?? "", q.thingId = (Y["@iot.id"] || Y.iotId) ?? "", q.unitOfMeasurement = z.unitOfMeasurement ?? "", q.observedProperty = z.observedProperty?.name ?? "";
      const fe = z.observations || [];
      if (fe.length > 0) {
        const Se = fe[fe.length - 1];
        q.latestObservationResult = Se.result ?? "", q.latestObservationTime = Se.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:click_on_datastream", {
        type: "widget:MapWidget:click_on_datastream",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      });
    }, m = (z, Y, R) => {
      i("🖱️ Thing clicked: %o", z), l.value[z.iotId ?? "null"] = !l.value[z.iotId ?? "null"], g(z, Y, R);
    }, E = (z, Y, R) => {
      i("🖱️ Datastream marker clicked: %o", z), v(z, Y);
    }, A = (z, Y, R) => {
      if (!n.widgetId) return;
      const q = new $e();
      q.id = (z["@iot.id"] || z.iotId) ?? "", q.name = z.name ?? "", q.description = z.description ?? "", q.properties = z.properties, q.location = Y.location, q.rendererId = R.id ?? "", d.emit("widget:MapWidget:hover_on_thing", {
        type: "widget:MapWidget:hover_on_thing",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      });
    }, w = (z, Y) => {
      if (!n.widgetId) return;
      const R = new He();
      R.id = (z.iotId || z["@iot.id"]) ?? "", R.name = z.name ?? "", R.thingId = (Y["@iot.id"] || Y.iotId) ?? "", R.unitOfMeasurement = z.unitOfMeasurement ?? "", R.observedProperty = z.observedProperty?.name ?? "";
      const q = z.observations || [];
      if (q.length > 0) {
        const fe = q[q.length - 1];
        R.latestObservationResult = fe.result ?? "", R.latestObservationTime = fe.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:hover_on_datastream", {
        type: "widget:MapWidget:hover_on_datastream",
        widgetId: n.widgetId,
        payload: R,
        timestamp: Date.now()
      });
    }, O = (z) => n.tooltipThingId ? (z["@iot.id"] || z.iotId) === n.tooltipThingId : !1, N = (z) => O(z) && n.tooltipContent || null, k = (z) => z.name || z.description || z.iotId || "", G = (z, Y) => {
      const R = [];
      Y.name && R.push(Y.name), z.name && R.push(z.name);
      const q = z.observations || [];
      if (q.length > 0) {
        const fe = q[q.length - 1], Se = z.unitOfMeasurement?.symbol || "";
        R.push(`${fe.result} ${Se}`);
      }
      return R.join(" - ");
    }, X = (z) => n.selectedThingId ? (z["@iot.id"] || z.iotId) === n.selectedThingId : !1, x = Tn(() => n.selectionHighlightColor || "#ff0000");
    return (z, Y) => (V(), se(Me, null, [
      (V(!0), se(Me, null, En(p.value.things, (R) => (V(), se(Me, {
        key: R.key + "area"
      }, [
        R.isArea ? (V(), je(j(Go), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.location.location,
          options: o.layerOptions,
          "options-style": () => X(R.thing) ? { ...R.renderer.renderer.area, fillColor: x.value, color: x.value, fillOpacity: 0.5, weight: 3 } : R.renderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), se(Me, null, En(p.value.things, (R) => (V(), se(Me, {
        key: R.key + "marker"
      }, [
        R.point ? (V(), je(j(yl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (q) => m(R.thing, R.location, R.renderer),
          onMouseenter: (q) => A(R.thing, R.location, R.renderer)
        }, {
          default: De(() => [
            ce(j(vl), { "class-name": "someExtraClass" }, {
              default: De(() => [
                ce(wl, {
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
            ce(j($f), {
              options: {
                permanent: O(R.thing),
                direction: "top",
                offset: [0, -20]
              }
            }, {
              default: De(() => [
                hn(Lt(N(R.thing) || k(R.thing)), 1)
              ]),
              _: 2
            }, 1032, ["options"])
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), se(Me, null, En(p.value.datastreams, (R) => (V(), se(Me, {
        key: R.key + "dsarea"
      }, [
        R.observedAreaGeoJson ? (V(), je(j(Go), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.observedAreaGeoJson,
          options: { ...o.layerOptions, pane: o.areaPane || "overlayPane" },
          "options-style": () => R.subrenderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), se(Me, null, En(p.value.datastreams, (R) => (V(), se(Me, {
        key: R.key + "dslayer"
      }, [
        R.subrenderer.observations && R.datastream.observations ? (V(!0), se(Me, { key: 0 }, En(R.subrenderer.observations, (q) => (V(), se(Me, {
          key: q.component
        }, [
          o.getById(q.component)?.isLayerRenderer ? (V(!0), se(Me, { key: 0 }, En(R.datastream.observations, (fe) => (V(), se(Me, {
            key: fe.iotId
          }, [
            o.getById(q.component) && fe.result ? (V(), je(Oh(o.getById(q.component)?.component), {
              key: 0,
              config: q.setting,
              data: fe.result,
              "marker-size": 0
            }, null, 8, ["config", "data"])) : Ge("", !0)
          ], 64))), 128)) : Ge("", !0)
        ], 64))), 128)) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), se(Me, null, En(p.value.datastreams, (R) => (V(), se(Me, {
        key: R.key + "dsmarker"
      }, [
        R.showMarker ? (V(), je(j(yl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (q) => E(R.datastream, R.thing, R.subrenderer),
          onMouseenter: (q) => w(R.datastream, R.thing)
        }, {
          default: De(() => [
            ce(j($f), null, {
              default: De(() => [
                hn(Lt(G(R.datastream, R.thing)), 1)
              ]),
              _: 2
            }, 1024),
            ce(j(vl), { "class-name": "someExtraClass" }, {
              default: De(() => [
                ce(wl, {
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
                  observation: De(() => [
                    R.datastream.observations ? (V(!0), se(Me, { key: 0 }, En(R.subrenderer.observations, (q) => (V(), se(Me, {
                      key: q.component
                    }, [
                      o.getById(q.component) && !o.getById(q.component)?.isLayerRenderer ? (V(), je(Oh(o.getById(q.component)?.component), {
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
}), RT = /* @__PURE__ */ rt({
  __name: "RouteLayer",
  props: {
    datasourceId: {}
  },
  setup(o) {
    const i = o, n = _e(null);
    let l = null;
    const d = Tn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "LineString"
    ) : []), p = Tn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "Point"
    ) : []), g = Tn(() => d.value.length === 0 ? null : {
      type: "FeatureCollection",
      features: d.value
    });
    function v(w) {
      const [O, N] = w.geometry.coordinates;
      return [N, O];
    }
    function m(w) {
      const O = w.properties?.role;
      return O === "start" ? "#4caf50" : O === "end" ? "#f44336" : "#2196f3";
    }
    const E = () => ({
      color: "#c45e00",
      weight: 5,
      opacity: 0.8
    });
    async function A() {
      if (i.datasourceId)
        try {
          const O = St(Is).getDatasource(
            i.datasourceId
          ), N = await O.getData("object");
          n.value = N, l && l(), l = O.subscribe(async () => {
            const k = await O.getData("object");
            n.value = k;
          });
        } catch (w) {
          console.warn("RouteLayer: Could not load route data:", w);
        }
    }
    return Zt(() => {
      A();
    }), ki(
      () => i.datasourceId,
      () => A()
    ), Cl(() => {
      l && l();
    }), (w, O) => (V(), se(Me, null, [
      g.value ? (V(), je(j(Go), {
        key: 0,
        geojson: g.value,
        "options-style": E
      }, null, 8, ["geojson"])) : Ge("", !0),
      (V(!0), se(Me, null, En(p.value, (N, k) => (V(), je(j(o1), {
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
}), Eg = () => {
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
      const k = E.querySelector(N);
      if (k) {
        const G = k.querySelector("DCPType > HTTP > Get > OnlineResource");
        if (G) {
          const X = G.getAttribute("xlink:href") || G.getAttribute("href");
          X && (v._operationUrls[N] = X);
        }
      }
    }), v._operationUrls.GetMap || (v._operationUrls.GetMap = g.split("?")[0]);
    const A = (O, N = []) => {
      O.querySelectorAll(":scope > Layer").forEach((G) => {
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
      const O = (N) => {
        const k = [];
        return N.forEach((G) => {
          k.push(G), G.children && G.children.length > 0 && k.push(...O(G.children));
        }), k;
      };
      return O(v._layers);
    }, v.getOperationUrl = (O) => v._operationUrls[O] || v._operationUrls.GetMap || g.split("?")[0], v;
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
        const O = A.documentElement;
        if (!O.tagName.includes("Capabilities") && O.tagName !== "WMT_MS_Capabilities")
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
var Ru = { exports: {} }, fh, up;
function PT() {
  if (up) return fh;
  up = 1;
  var o = 1e3, i = o * 60, n = i * 60, l = n * 24, d = l * 7, p = l * 365.25;
  fh = function(A, w) {
    w = w || {};
    var O = typeof A;
    if (O === "string" && A.length > 0)
      return g(A);
    if (O === "number" && isFinite(A))
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
        var O = parseFloat(w[1]), N = (w[2] || "ms").toLowerCase();
        switch (N) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return O * p;
          case "weeks":
          case "week":
          case "w":
            return O * d;
          case "days":
          case "day":
          case "d":
            return O * l;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return O * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return O * i;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return O * o;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return O;
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
  function E(A, w, O, N) {
    var k = w >= O * 1.5;
    return Math.round(A / O) + " " + N + (k ? "s" : "");
  }
  return fh;
}
var ph, cp;
function xT() {
  if (cp) return ph;
  cp = 1;
  function o(i) {
    l.debug = l, l.default = l, l.coerce = E, l.disable = v, l.enable = p, l.enabled = m, l.humanize = PT(), l.destroy = A, Object.keys(i).forEach((w) => {
      l[w] = i[w];
    }), l.names = [], l.skips = [], l.formatters = {};
    function n(w) {
      let O = 0;
      for (let N = 0; N < w.length; N++)
        O = (O << 5) - O + w.charCodeAt(N), O |= 0;
      return l.colors[Math.abs(O) % l.colors.length];
    }
    l.selectColor = n;
    function l(w) {
      let O, N = null, k, G;
      function X(...x) {
        if (!X.enabled)
          return;
        const z = X, Y = Number(/* @__PURE__ */ new Date()), R = Y - (O || Y);
        z.diff = R, z.prev = O, z.curr = Y, O = Y, x[0] = l.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
        let q = 0;
        x[0] = x[0].replace(/%([a-zA-Z%])/g, (Se, Ie) => {
          if (Se === "%%")
            return "%";
          q++;
          const he = l.formatters[Ie];
          if (typeof he == "function") {
            const Oe = x[q];
            Se = he.call(z, Oe), x.splice(q, 1), q--;
          }
          return Se;
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
    function d(w, O) {
      const N = l(this.namespace + (typeof O > "u" ? ":" : O) + w);
      return N.log = this.log, N;
    }
    function p(w) {
      l.save(w), l.namespaces = w, l.names = [], l.skips = [];
      const O = (typeof w == "string" ? w : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const N of O)
        N[0] === "-" ? l.skips.push(N.slice(1)) : l.names.push(N);
    }
    function g(w, O) {
      let N = 0, k = 0, G = -1, X = 0;
      for (; N < w.length; )
        if (k < O.length && (O[k] === w[N] || O[k] === "*"))
          O[k] === "*" ? (G = k, X = N, k++) : (N++, k++);
        else if (G !== -1)
          k = G + 1, X++, N = X;
        else
          return !1;
      for (; k < O.length && O[k] === "*"; )
        k++;
      return k === O.length;
    }
    function v() {
      const w = [
        ...l.names,
        ...l.skips.map((O) => "-" + O)
      ].join(",");
      return l.enable(""), w;
    }
    function m(w) {
      for (const O of l.skips)
        if (g(w, O))
          return !1;
      for (const O of l.names)
        if (g(w, O))
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
  return ph = o, ph;
}
var hp;
function FT() {
  return hp || (hp = 1, (function(o, i) {
    var n = {};
    i.formatArgs = d, i.save = p, i.load = g, i.useColors = l, i.storage = v(), i.destroy = /* @__PURE__ */ (() => {
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
      let w = 0, O = 0;
      E[0].replace(/%[a-zA-Z%]/g, (N) => {
        N !== "%%" && (w++, N === "%c" && (O = w));
      }), E.splice(O, 0, A);
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
    o.exports = xT()(i);
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
var MT = FT();
const ro = /* @__PURE__ */ dg(MT);
ro.log = console.log.bind(console);
const Gu = localStorage.getItem("debug");
console.log("[Maps Widget] Logger module loaded. localStorage.debug =", Gu);
console.log("[Maps Widget] debug.enable exists:", typeof ro.enable);
Gu && (ro.enable(Gu), console.log("[Maps Widget] Called debug.enable with:", Gu));
const hr = ro("daanse:maps:map"), Nr = ro("daanse:maps:datasource"), gh = ro("daanse:maps:observations"), kn = ro("daanse:maps:services"), BT = ro("daanse:maps:tasks");
class Tg extends RE {
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
const GT = {
  id: "mapholder",
  class: "holder",
  style: { height: "100%" }
}, kT = /* @__PURE__ */ rt({
  __name: "MapsWidget",
  props: /* @__PURE__ */ kh({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: i }) {
    const n = (F) => {
      const oe = F;
      return typeof oe?.toArray == "function" ? oe.toArray() : Array.isArray(oe) ? oe : [];
    }, l = (F) => F ?? void 0, d = o, { datasourceId: p, id: g } = bl(d), m = $E().params.pageid || "", E = gr(o, "configv"), A = _e(null), w = new we(), O = [50.93115286, 11.60392726];
    function N() {
      if (E.value.center.size() === 0)
        for (const F of O) E.value.center.add(F);
    }
    const k = St(PE), G = St(Np.TINY_EMITTER);
    function X(F) {
      if (!g?.value) return;
      const { lat: oe, lng: J } = F.latlng, ve = new Ai();
      ve.lat = oe, ve.lon = J, G.emit("widget:MapWidget:click_on_map", {
        type: "widget:MapWidget:click_on_map",
        widgetId: g.value,
        payload: ve,
        timestamp: Date.now()
      });
    }
    const { filterFeatureCollection: x, compareDatastream: z, compareThing: Y } = D1(), { isPoint: R, isFeatureCollection: q, transformToGeoJson: fe, isFeature: Se } = R1(), { createServiceWMS: Ie, createServiceWFS: he } = Eg(), Oe = _e({}), ae = _e(/* @__PURE__ */ new Map()), Z = _e(!1), K = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Map(), Ee = B1(), de = /* @__PURE__ */ new WeakMap();
    let yt = [], Le = 0;
    const ke = async () => {
      const F = ++Le, oe = [], J = nl(Oe.value), ve = nl(ae.value), Be = [];
      J?.datastreams && Be.push([p.value, J.datastreams]);
      for (const [pt, Nt] of ve.entries()) {
        const Gt = nl(Nt);
        Gt?.datastreams && Be.push([pt, Gt.datastreams]);
      }
      const xe = 4;
      let et = performance.now();
      for (const [pt, Nt] of Be)
        for (let Gt = 0; Gt < Nt.length; Gt++) {
          if (performance.now() - et > xe) {
            if (F !== Le) return;
            await new Promise((me) => setTimeout(me, 0)), et = performance.now();
          }
          const _t = Nt[Gt];
          if (_t.observedArea)
            de.has(_t.observedArea) || de.set(_t.observedArea, fe(nl(_t.observedArea))), oe.push({ lng: 0, lat: 0, dsId: pt, dataStream: _t, geoJsonFeature: de.get(_t.observedArea) });
          else if (_t.thing?.locations?.[0]) {
            const me = _t.thing.locations[0].location, ii = An(me);
            ii ? oe.push({ lng: ii[0], lat: ii[1], dsId: pt, dataStream: _t, geoJsonFeature: null }) : (de.has(me) || de.set(me, fe(me)), oe.push({ lng: 0, lat: 0, dsId: pt, dataStream: _t, geoJsonFeature: de.get(me) }));
          }
        }
      F === Le && (yt = oe, hr("Spatial index built:", oe.length, "entries"));
    }, xt = Tn(() => {
      try {
        return p.value && St(Is).getDatasource(p.value).type || "ogcsta";
      } catch (F) {
        return Nr("Could not detect datasource type:", F), "ogcsta";
      }
    }), Bt = {
      rest: "object",
      ogcsta: "OGCSTAData",
      "OGC Composer": "OGCSTAData"
    }, le = Tn(() => Bt[xt.value] || "OGCSTAData"), { update: Ue, callEvent: Pe } = HE(p, le.value, Oe), Ht = async (F) => {
      if (F) {
        if (ie.has(F)) {
          Nr("Datasource", F, "is already loading, skipping");
          return;
        }
        ie.add(F);
        try {
          const oe = St(Is), J = oe.getDatasource(F), ve = oe.getDatasourceType(F), Be = Bt[ve] || "OGCSTAData";
          if (J && typeof J.getData == "function") {
            const xe = await J.getData(Be);
            if (ae.value.set(F, xe), !K.has(F) && typeof J.subscribe == "function") {
              K.add(F);
              const et = async () => {
                const Nt = await J.getData(Be);
                ae.value.set(F, Nt);
              }, pt = J.subscribe(et);
              typeof pt == "function" && U.set(F, pt);
            }
          }
        } catch (oe) {
          Nr("Could not get datasource data for", F, oe);
        } finally {
          ie.delete(F);
        }
      }
    };
    ki(() => [E.value?.datasourceIds, E.value?.layers], async () => {
      const F = /* @__PURE__ */ new Set();
      E.value?.datasourceIds && E.value.datasourceIds.forEach((J) => F.add(J)), E.value?.layers && E.value.layers.forEach((J) => {
        J.datasourceId && J.datasourceId !== p.value && F.add(J.datasourceId);
      });
      let oe = !1;
      for (const J of F)
        ae.value.has(J) || (await Ht(J), oe = !0);
      oe && A.value && (await ke(), Ii());
    }, { deep: !0, immediate: !0 }), ki(p, (F, oe, J) => {
      Ue(F, oe);
    }), ki(() => E.value?.OGCSstyles, (F, oe, J) => {
      Ii(), vr();
    }, { deep: !0 });
    const { getById: $t } = dl();
    _e({});
    const Pn = _e(E.value?.selectedThingId ?? null), sn = _e(null), Yn = _e(null), Un = _e(null), Ui = _e("#c45e00"), fn = _e(5);
    let Ut = null;
    ki(Pn, (F) => {
      E.value && (E.value.selectedThingId = F ?? void 0);
    }), _e(!1);
    let zi = !1;
    const on = (F) => {
      if (F.datasourceId) {
        const oe = ae.value.get(F.datasourceId);
        return oe || (Ht(F.datasourceId), {});
      }
      return Oe.value;
    };
    Zt(async () => {
      if (E.value) {
        if (Object.assign(E.value, {
          ...Yf(w),
          ...Yf(E.value)
        }), N(), E.value.services) {
          for (const J of E.value.services)
            if (J.type === "WMS") {
              if (!(typeof l(J.service)?.getLayers == "function") && J.url) {
                kn("Reconstructing WMS service from URL: %s", J.url);
                try {
                  J.service = await Ie(J.url), kn("WMS service reconstructed successfully"), J.reconstructionFailed = !1;
                } catch (Be) {
                  kn("Could not reconstruct WMS service: %o", Be), J.reconstructionFailed = !0;
                }
              }
            } else if (J.type === "WFS" && !(typeof l(J.service)?.getFeatureTypes == "function") && J.url) {
              kn("Reconstructing WFS service from URL: %s", J.url);
              try {
                J.service = await he(J.url), kn("WFS service reconstructed successfully"), J.reconstructionFailed = !1;
              } catch (Be) {
                kn("Could not reconstruct WFS service: %o", Be), J.reconstructionFailed = !0;
              }
            }
        }
        if (E.value.layers) {
          const J = [];
          for (const ve of E.value.layers)
            if (ve.type === "WMSLayer" && ve.service && !l(ve.service)?.getOperationUrl) {
              const Be = l(ve.service)?._capabilitiesUrl || l(ve.service)?.url || l(ve.service)?.serviceUrl;
              if (Be)
                try {
                  const xe = await Ie(Be);
                  J.push({ ...ve, service: xe, reconstructionFailed: !1 });
                } catch (xe) {
                  kn("Could not reconstruct WMS service for layer %s: %o", ve.name, xe), J.push({ ...ve, reconstructionFailed: !0 });
                }
              else
                kn("WMS layer missing service URL: %s", ve.name), J.push({ ...ve, reconstructionFailed: !0 });
            } else if (ve.type === "WFSLayer" && ve.wfs_service)
              if (typeof l(ve.wfs_service)?.fetch != "function") {
                const Be = l(ve.wfs_service)?.url;
                if (Be)
                  try {
                    const xe = (await Promise.resolve().then(() => Zw)).default, et = new xe(Be);
                    await et.fetch(), J.push({ ...ve, wfs_service: et, reconstructionFailed: !1 });
                  } catch (xe) {
                    kn("Could not reconstruct WFS service for layer %s: %o", ve.name, xe), J.push({ ...ve, reconstructionFailed: !0 });
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
        Z.value = !0;
      }
      const F = document.getElementById("mapholder"), oe = new ResizeObserver(() => {
        A.value && A.value.leafletObject && A.value.leafletObject.invalidateSize();
      });
      F && oe.observe(F);
    });
    let an = 0;
    ki(() => Oe.value?.locations?.length || 0, async (F) => {
      an === 0 && F > 0 && (await ke(), Ii(), vr()), an = F;
    });
    const vr = () => {
      if (!E.value?.OGCSstyles || E.value.OGCSstyles.length === 0) {
        gh("No OGCSTA styles configured, skipping historical locations load");
        return;
      }
      const F = /* @__PURE__ */ new Map(), oe = Oe.value?.things || [];
      for (const ve of oe)
        if (!(!ve || !ve.iotId)) {
          for (const Be of E.value.OGCSstyles)
            if (Y(ve, Be)) {
              F.set(ve.iotId, ve);
              break;
            }
        }
      for (const [ve, Be] of ae.value.entries()) {
        const xe = Be?.things || [];
        for (const et of xe)
          if (!(!et || !et.iotId)) {
            for (const pt of E.value.OGCSstyles)
              if (Y(et, pt)) {
                F.set(et.iotId, et);
                break;
              }
          }
      }
      const J = Array.from(F.values());
      if (J.length > 0) {
        gh(`Setting historical locations filter for ${J.length} matching things`), Pe(ua, { historicalLocations: J }, !1);
        for (const ve of ae.value.keys())
          try {
            const xe = St(Is).getDatasource(ve);
            xe && typeof xe.callEvent == "function" && xe.callEvent(ua, { historicalLocations: J }, !1);
          } catch (Be) {
            Nr("Could not call event on datasource", ve, Be);
          }
      } else
        gh("No things match the configured style filters");
    }, qn = () => {
      try {
        const F = A.value.leafletObject;
        E.value.fixed ? (F.dragging.disable(), F.scrollWheelZoom.disable(), F.doubleClickZoom.disable(), F.touchZoom.disable(), F.keyboard.disable(), F.zoomControl.remove()) : (F.dragging.enable(), F.scrollWheelZoom.enable(), F.doubleClickZoom.disable(), F.touchZoom.enable(), F.keyboard.enable(), F.zoomControl.addTo(F));
      } catch (F) {
        hr("Error in setFixed:", F);
      }
    };
    ki(() => E.value.fixed, (F, oe, J) => {
      qn();
    }), Tn(() => Oe.value?.locations ?? []);
    const jt = (F) => (on(F)?.locations ?? []).filter((ve) => ve && (ve["@iot.id"] || ve.iotId));
    Tn(() => (F) => N1(E, "value", "renderer", 0, "renderer", "point") ? E.value?.renderer?.[0]?.renderer?.area ?? {} : {});
    const Xn = Tn(() => ({
      pointToLayer: (F, oe) => fa.circleMarker(oe, {
        radius: 0,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    })), xn = (F) => E.value.layers.findIndex((oe) => oe === F), Vi = (F) => {
      const oe = xn(F);
      return {
        ...Xn.value,
        pane: `layer-pane-${oe}`
      };
    }, zn = (F) => `layer-pane-${xn(F)}`, er = (F) => F ? `layer-area-pane-${xn(F)}` : "overlayPane", pn = _e(0), Qn = Tn(() => {
      pn.value;
      const F = /* @__PURE__ */ new Map();
      if (E.value?.styles)
        for (const oe of E.value.styles)
          oe.id && F.set(oe.id, oe);
      return F;
    }), bi = (F) => Qn.value.get(F), Oi = () => {
      pn.value++;
    };
    let di = "";
    ki(() => E.value?.styles, (F) => {
      if (!F) return;
      const oe = JSON.stringify(F);
      oe !== di && (di = oe, Oi());
    }, { deep: !0 });
    let Fn = !1;
    const Wi = () => {
      zi = !0, hr("map ready"), qn(), fi();
      const F = A.value?.leafletObject;
      F && (F.on("movestart", () => {
        Fn = !0, Li++;
      }), F.on("moveend", () => {
        Fn = !1;
      }));
    }, fi = () => {
      const F = A.value?.leafletObject;
      !F || !E.value.layers || E.value.layers.forEach((oe, J) => {
        const ve = `layer-pane-${J}`;
        let Be = F.getPane(ve);
        Be || (Be = F.createPane(ve));
        const xe = 400 + (E.value.layers.length - J) * 2;
        Be.style.zIndex = String(xe);
        const et = `layer-area-pane-${J}`;
        let pt = F.getPane(et);
        pt || (pt = F.createPane(et)), pt.style.zIndex = String(xe - 1);
      });
    };
    ki(() => E.value.layers, () => {
      zi && fi();
    }, { deep: !0 });
    const ei = (F) => [F[1], F[0]], An = (F) => F ? F.type === "Point" && Array.isArray(F.coordinates) ? F.coordinates : F.type === "Feature" && F.geometry?.type === "Point" && Array.isArray(F.geometry.coordinates) ? F.geometry.coordinates : null : null, ti = sl.debounce(() => {
      if (Fn) return;
      const F = A.value?.leafletObject;
      if (F) {
        const oe = F.getCenter();
        E.value.center.clear(), E.value.center.add(oe.lat), E.value.center.add(oe.lng), E.value.zoom = F.getZoom();
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
      const oe = ++Li, J = F._southWest.lng, ve = F._southWest.lat, Be = F._northEast.lng, xe = F._northEast.lat;
      let et = null;
      const pt = () => (et || (et = Kh({
        type: "Polygon",
        coordinates: [[[Be, xe], [Be, ve], [J, ve], [J, xe], [Be, xe]]]
      })), et), Nt = nl(E.value.OGCSstyles), Gt = /* @__PURE__ */ new Map();
      for (const Dt of Nt) {
        const Cn = Dt.ObservationrefreshTime !== void 0 && Dt.ObservationrefreshTime !== null ? Dt.ObservationrefreshTime : 0;
        Gt.has(Cn) || Gt.set(Cn, []);
        for (const lt of Dt.ds_renderer)
          Gt.get(Cn).push({ renderer: Dt, subrender: lt });
      }
      const Xt = {}, _t = yt, me = 4;
      let ii = performance.now();
      for (let Dt = 0; Dt < _t.length; Dt++) {
        if (performance.now() - ii > me) {
          if (oe !== Li || Fn)
            return;
          await new Promise((gn) => setTimeout(gn, 0)), ii = performance.now();
        }
        const lt = _t[Dt];
        let zt;
        if (lt.geoJsonFeature ? zt = lT(pt(), lt.geoJsonFeature) : zt = lt.lng >= J && lt.lng <= Be && lt.lat >= ve && lt.lat <= xe, !zt) continue;
        const { dsId: bn, dataStream: ri } = lt;
        for (const [gn, On] of Gt.entries()) {
          let si = !1;
          for (const { renderer: ln, subrender: Yt } of On) {
            const Kn = z(ri, Yt), Pr = ri.thing ? Y(ri.thing, ln) : !0;
            if (Kn && Pr) {
              si = !0;
              break;
            }
          }
          si && (Xt[gn] || (Xt[gn] = {}), Xt[gn][bn] || (Xt[gn][bn] = []), Xt[gn][bn].push(ri));
        }
      }
      if (oe !== Li) {
        hr("Session invalidated after chunked processing, aborting");
        return;
      }
      const Hi = [];
      for (const [Dt, Cn] of Object.entries(Xt))
        for (const [lt, zt] of Object.entries(Cn)) {
          const bn = sl.uniqBy(zt, "iotId");
          if (bn.length > 0) {
            const ri = lt === p.value;
            let gn = 0;
            for (const ln of bn) {
              const Yt = String(ln.iotId || ln["@iot.id"] || "");
              for (let Kn = 0; Kn < Yt.length; Kn++)
                gn = (gn << 5) - gn + Yt.charCodeAt(Kn) | 0;
            }
            const On = `obs-${lt}-${Dt}-${bn.length}-${gn >>> 0}`, si = new class extends M1 {
              constructor() {
                super(...arguments), this.id = On;
              }
              invoke() {
                window.clearInterval(this.handle);
              }
              async run() {
                if (ri)
                  Pe(ua, { observations: bn }, !1);
                else
                  try {
                    const Yt = St(Is).getDatasource(lt);
                    Yt && typeof Yt.callEvent == "function" && Yt.callEvent(ua, { observations: bn }, !1);
                  } catch (ln) {
                    Nr("Could not call event on datasource", lt, ln);
                  }
                parseInt(Dt) !== 0 && (this.handle = window.setInterval(async () => {
                  if (ri)
                    Pe(ua, { observations: bn }, !1);
                  else
                    try {
                      const Yt = St(Is).getDatasource(lt);
                      Yt && typeof Yt.callEvent == "function" && Yt.callEvent(ua, { observations: bn }, !1);
                    } catch (ln) {
                      Nr("Could not call event on datasource", lt, ln);
                    }
                }, parseInt(Dt) * 1e3));
              }
            }();
            Hi.push(si), ne.set(si.id, si);
          }
        }
      hr("Created", Hi.length, "tasks to invoke"), Ee.addTasksAndIvnoke(Hi);
      const pi = /* @__PURE__ */ new Map();
      for (const [Dt, Cn] of Object.entries(Xt))
        for (const [lt, zt] of Object.entries(Cn))
          pi.has(lt) || pi.set(lt, []), pi.get(lt).push(...zt);
      const yr = pi.get(p.value) || [];
      Pe(Zf, { observations: sl.uniqBy(yr, "iotId") });
      for (const Dt of ae.value.keys()) {
        const Cn = pi.get(Dt) || [];
        try {
          const zt = St(Is).getDatasource(Dt);
          zt && typeof zt.callEvent == "function" && zt.callEvent(Zf, { observations: sl.uniqBy(Cn, "iotId") });
        } catch (lt) {
          Nr("Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource", Dt, lt);
        }
      }
    }, ni = (F) => {
      if (R(F))
        return ei(F.coordinates);
      if (q(F) || Se(F))
        try {
          let oe = lp(F);
          return ei(oe.geometry.coordinates);
        } catch {
          return null;
        }
      return null;
    }, tr = (F) => {
      if (R(F))
        return ei(F.coordinates);
      if (q(F) || Se(F))
        try {
          let oe = lp(F);
          return ei(oe.geometry.coordinates);
        } catch {
          return null;
        }
    };
    let Zi = new class extends Tg {
      constructor() {
        super(...arguments), this.zoomToThing = (F, oe = 16, J = 1e3) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map instance not available. Cannot zoom to thing.");
            return;
          }
          let ve = (Oe.value?.things || []).find((Nt) => Nt.iotId === F || Nt["@iot.id"] === F);
          if (!ve) {
            for (const [Nt, Gt] of ae.value.entries())
              if (ve = (Gt?.things || []).find((_t) => _t.iotId === F || _t["@iot.id"] === F), ve) break;
          }
          if (!ve) {
            console.warn(`Thing with ID "${F}" not found.`);
            return;
          }
          if (!ve.locations || !ve.locations[0]) {
            console.warn(`Thing with ID "${F}" has no location.`);
            return;
          }
          const Be = ve.locations[0].location, xe = fe(Be), et = ni(xe);
          if (!et) {
            console.warn("Could not extract coordinates from thing location.");
            return;
          }
          A.value.leafletObject.flyTo(et, oe, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          });
        }, this.selectThingById = (F) => {
          hr("selectThingById called with:", F), Pn.value === F ? (Pn.value = null, hr("Thing deselected")) : (Pn.value = F, hr("Thing selected:", F));
        }, this.zoomToLocation = async (F, oe = 16, J = 1e3) => {
          console.log("🎯 zoomToLocation called with:", { location: F, zoom: oe, duration: J });
          let ve = 0;
          for (; (!A.value || !A.value.leafletObject) && ve < 3e3; )
            console.log("🎯 Waiting for map to be ready..."), await new Promise((pt) => setTimeout(pt, 100)), ve += 100;
          if (!A.value || !A.value.leafletObject) {
            console.warn("🎯 Map instance not available after waiting. Cannot zoom to location.");
            return;
          }
          if (!F) {
            console.warn("🎯 zoomToLocation called without location");
            return;
          }
          console.log("🎯 Location type:", typeof F, "value:", F);
          const Be = fe(F);
          console.log("🎯 Transformed GeoJSON:", Be);
          const xe = ni(Be);
          if (console.log("🎯 Extracted point:", xe), !xe) {
            console.warn("🎯 Could not extract coordinates from location. GeoJSON was:", Be);
            return;
          }
          const et = A.value.leafletObject;
          console.log("🎯 Flying to", xe, "with zoom", oe, "duration", J), et.flyTo(xe, oe, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          }), console.log("🎯 flyTo called successfully");
        }, this.showTooltip = (F, oe) => {
          sn.value = F, Yn.value = oe || null;
        }, this.hideTooltip = () => {
          sn.value = null, Yn.value = null;
        }, this.displayRoute = (F, oe = "#c45e00", J = 5) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map not ready. Cannot display route.");
            return;
          }
          const ve = A.value.leafletObject;
          if (Ut && (ve.removeLayer(Ut), Ut = null), !F || !F.features) return;
          Ut = fa.layerGroup();
          for (const xe of F.features)
            if (xe.geometry.type === "LineString") {
              const et = xe.geometry.coordinates.map(
                (Nt) => [Nt[1], Nt[0]]
              ), pt = fa.polyline(et, {
                color: oe,
                weight: J,
                opacity: 0.8
              });
              Ut.addLayer(pt);
            } else if (xe.geometry.type === "Point") {
              const [et, pt] = xe.geometry.coordinates, Nt = xe.properties?.role;
              let Gt = "#2196f3";
              Nt === "start" ? Gt = "#4caf50" : Nt === "end" && (Gt = "#f44336");
              const Xt = fa.circleMarker([pt, et], {
                radius: 8,
                fillColor: Gt,
                color: "#fff",
                weight: 2,
                fillOpacity: 1
              });
              xe.properties?.name && Xt.bindTooltip(xe.properties.name), Ut.addLayer(Xt);
            }
          Ut.addTo(ve);
          const Be = F.features.filter(
            (xe) => xe.geometry.type === "LineString"
          );
          if (Be.length > 0) {
            const xe = Be.flatMap(
              (et) => et.geometry.coordinates.map(
                (pt) => [pt[1], pt[0]]
              )
            );
            xe.length > 0 && ve.fitBounds(fa.latLngBounds(xe), {
              padding: [50, 50]
            });
          }
          Un.value = F, Ui.value = oe, fn.value = J;
        }, this.clearRoute = () => {
          Ut && A.value && A.value.leafletObject && (A.value.leafletObject.removeLayer(Ut), Ut = null), Un.value = null;
        };
      }
    }();
    return i(Zi), Zt(() => {
      k.registerInstance(g.value, Zi, "MapWidget", m), hr("Registered instance with EventActionsRegistry:", g.value, "on page:", m);
    }), Cl(() => {
      k.unregisterInstance(g.value), hr("Unregistered instance from EventActionsRegistry:", g.value);
      for (const [F, oe] of ne.entries())
        try {
          oe.invoke();
        } catch (J) {
          BT("Error stopping task interval:", J);
        }
      Ee.clearAll(), ne.clear();
      try {
        Pe(Hf, {});
      } catch (F) {
        Nr("Could not unsubscribe from MQTT for primary datasource on unmount:", F);
      }
      for (const F of ae.value.keys())
        try {
          const J = St(Is).getDatasource(F);
          J && typeof J.callEvent == "function" && J.callEvent(Hf, {});
        } catch (oe) {
          Nr("Could not unsubscribe from MQTT for datasource", F, "on unmount:", oe);
        }
      for (const [F, oe] of U.entries())
        try {
          oe();
        } catch (J) {
          Nr(`Error unsubscribing from datasource ${F}:`, J);
        }
      U.clear(), K.clear(), ae.value.clear();
    }), (F, oe) => (V(), se("div", GT, [
      E.value.baseMapUrl ? (V(), je(j(Zh), {
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
        onMoveend: j(ti),
        onReady: Wi,
        onClick: X,
        dragging: !E.value.fixed
      }, {
        default: De(() => [
          ce(j(qh), {
            attribution: E.value.attribution,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: E.value.baseMapUrl
          }, null, 8, ["attribution", "url"]),
          (V(!0), se(Me, null, En([...E.value.layers].reverse(), (J, ve) => (V(), se(Me, {
            key: `${J.name}-${xn(J)}`
          }, [
            J.type == "WMSLayer" && J.service && typeof l(J.service)?.getOperationUrl == "function" ? (V(), je(j(O1), {
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
            }, null, 8, ["attribution", "layers", "name", "opacity", "url", "visible", "z-index", "options"])) : Ge("", !0),
            J.type == "WFSLayer" ? (V(), je(wT, {
              key: 1,
              "geo-json": l(J.wfs_service)?.geoJson,
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "filter-feature-collection": j(x),
              "get-style-by-id": bi,
              "is-point": j(R)
            }, null, 8, ["geo-json", "style-ids", "layer-options", "filter-feature-collection", "is-point"])) : Ge("", !0),
            J.type == "GEOJSON" ? (V(), je(IT, {
              key: 2,
              "layer-data": on(J),
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "filter-feature-collection": j(x),
              "get-style-by-id": bi,
              "is-point": j(R),
              "get-point": ni
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Ge("", !0),
            J.type == "REST-GEOJSON" ? (V(), je(NT, {
              key: 3,
              "layer-data": on(J),
              "style-ids": n(J.styleIds),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "filter-feature-collection": j(x),
              "get-style-by-id": bi,
              "is-point": j(R),
              "get-point": ni
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Ge("", !0),
            J.type == "ROUTE" && J.datasourceId ? (V(), je(RT, {
              key: 4,
              "datasource-id": J.datasourceId
            }, null, 8, ["datasource-id"])) : Ge("", !0),
            J.type == "OGCSTA" ? (V(), je(DT, {
              key: 5,
              locations: jt(J),
              renderers: n(E.value.OGCSstyles),
              "layer-options": Vi(J),
              "marker-pane": zn(J),
              "area-pane": er(J),
              "widget-id": j(g),
              "compare-thing": j(Y),
              "compare-datastream": j(z),
              "is-feature-collection": j(q),
              "is-point": j(R),
              "get-point": ni,
              "get-pointform-area": tr,
              "transform-to-geo-json": j(fe),
              "get-by-id": j($t),
              "selected-thing-id": Pn.value,
              "selection-highlight-color": E.value.selectionHighlightColor ?? "#ff0000",
              "tooltip-thing-id": sn.value,
              "tooltip-content": Yn.value
            }, null, 8, ["locations", "renderers", "layer-options", "marker-pane", "area-pane", "widget-id", "compare-thing", "compare-datastream", "is-feature-collection", "is-point", "transform-to-geo-json", "get-by-id", "selected-thing-id", "selection-highlight-color", "tooltip-thing-id", "tooltip-content"])) : Ge("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["center", "zoom", "onMoveend", "dragging"])) : Ge("", !0)
    ]));
  }
}), dp = /* @__PURE__ */ mr(kT, [["__scopeId", "data-v-0a207de4"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function fp(o, i) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    i && (l = l.filter(function(d) {
      return Object.getOwnPropertyDescriptor(o, d).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function hs(o) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? fp(Object(n), !0).forEach(function(l) {
      UT(o, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : fp(Object(n)).forEach(function(l) {
      Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return o;
}
function ku(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ku = function(i) {
    return typeof i;
  } : ku = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, ku(o);
}
function UT(o, i, n) {
  return i in o ? Object.defineProperty(o, i, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[i] = n, o;
}
function Ps() {
  return Ps = Object.assign || function(o) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (o[l] = n[l]);
    }
    return o;
  }, Ps.apply(this, arguments);
}
function zT(o, i) {
  if (o == null) return {};
  var n = {}, l = Object.keys(o), d, p;
  for (p = 0; p < l.length; p++)
    d = l[p], !(i.indexOf(d) >= 0) && (n[d] = o[d]);
  return n;
}
function VT(o, i) {
  if (o == null) return {};
  var n = zT(o, i), l, d;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(o);
    for (d = 0; d < p.length; d++)
      l = p[d], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(o, l) && (n[l] = o[l]);
  }
  return n;
}
var WT = "1.14.0";
function Ds(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var xs = Ds(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), xl = Ds(/Edge/i), pp = Ds(/firefox/i), fl = Ds(/safari/i) && !Ds(/chrome/i) && !Ds(/android/i), wg = Ds(/iP(ad|od|hone)/i), ZT = Ds(/chrome/i) && Ds(/android/i), Sg = {
  capture: !1,
  passive: !1
};
function It(o, i, n) {
  o.addEventListener(i, n, !xs && Sg);
}
function Ct(o, i, n) {
  o.removeEventListener(i, n, !xs && Sg);
}
function qu(o, i) {
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
function HT(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function as(o, i, n, l) {
  if (o) {
    n = n || document;
    do {
      if (i != null && (i[0] === ">" ? o.parentNode === n && qu(o, i) : qu(o, i)) || l && o === n)
        return o;
      if (o === n) break;
    } while (o = HT(o));
  }
  return null;
}
var gp = /\s+/g;
function dr(o, i, n) {
  if (o && i)
    if (o.classList)
      o.classList[n ? "add" : "remove"](i);
    else {
      var l = (" " + o.className + " ").replace(gp, " ").replace(" " + i + " ", " ");
      o.className = (l + (n ? " " + i : "")).replace(gp, " ");
    }
}
function Ye(o, i, n) {
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
      var l = Ye(o, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!i && (o = o.parentNode));
  var d = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return d && new d(n);
}
function Ag(o, i, n) {
  if (o) {
    var l = o.getElementsByTagName(i), d = 0, p = l.length;
    if (n)
      for (; d < p; d++)
        n(l[d], d);
    return l;
  }
  return [];
}
function cs() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function Hn(o, i, n, l, d) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var p, g, v, m, E, A, w;
    if (o !== window && o.parentNode && o !== cs() ? (p = o.getBoundingClientRect(), g = p.top, v = p.left, m = p.bottom, E = p.right, A = p.height, w = p.width) : (g = 0, v = 0, m = window.innerHeight, E = window.innerWidth, A = window.innerHeight, w = window.innerWidth), (i || n) && o !== window && (d = d || o.parentNode, !xs))
      do
        if (d && d.getBoundingClientRect && (Ye(d, "transform") !== "none" || n && Ye(d, "position") !== "static")) {
          var O = d.getBoundingClientRect();
          g -= O.top + parseInt(Ye(d, "border-top-width")), v -= O.left + parseInt(Ye(d, "border-left-width")), m = g + p.height, E = v + p.width;
          break;
        }
      while (d = d.parentNode);
    if (l && o !== window) {
      var N = va(d || o), k = N && N.a, G = N && N.d;
      N && (g /= G, v /= k, w /= k, A /= G, m = g + A, E = v + w);
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
function _p(o, i, n) {
  for (var l = no(o, !0), d = Hn(o)[i]; l; ) {
    var p = Hn(l)[n], g = void 0;
    if (g = d >= p, !g) return l;
    if (l === cs()) break;
    l = no(l, !1);
  }
  return !1;
}
function ya(o, i, n, l) {
  for (var d = 0, p = 0, g = o.children; p < g.length; ) {
    if (g[p].style.display !== "none" && g[p] !== qe.ghost && (l || g[p] !== qe.dragged) && as(g[p], n.draggable, o, !1)) {
      if (d === i)
        return g[p];
      d++;
    }
    p++;
  }
  return null;
}
function Xh(o, i) {
  for (var n = o.lastElementChild; n && (n === qe.ghost || Ye(n, "display") === "none" || i && !qu(n, i)); )
    n = n.previousElementSibling;
  return n || null;
}
function Dr(o, i) {
  var n = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== qe.clone && (!i || qu(o, i)) && n++;
  return n;
}
function mp(o) {
  var i = 0, n = 0, l = cs();
  if (o)
    do {
      var d = va(o), p = d.a, g = d.d;
      i += o.scrollLeft * p, n += o.scrollTop * g;
    } while (o !== l && (o = o.parentNode));
  return [i, n];
}
function YT(o, i) {
  for (var n in o)
    if (o.hasOwnProperty(n)) {
      for (var l in i)
        if (i.hasOwnProperty(l) && i[l] === o[n][l]) return Number(n);
    }
  return -1;
}
function no(o, i) {
  if (!o || !o.getBoundingClientRect) return cs();
  var n = o, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var d = Ye(n);
      if (n.clientWidth < n.scrollWidth && (d.overflowX == "auto" || d.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (d.overflowY == "auto" || d.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return cs();
        if (l || i) return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return cs();
}
function qT(o, i) {
  if (o && i)
    for (var n in i)
      i.hasOwnProperty(n) && (o[n] = i[n]);
  return o;
}
function _h(o, i) {
  return Math.round(o.top) === Math.round(i.top) && Math.round(o.left) === Math.round(i.left) && Math.round(o.height) === Math.round(i.height) && Math.round(o.width) === Math.round(i.width);
}
var pl;
function Cg(o, i) {
  return function() {
    if (!pl) {
      var n = arguments, l = this;
      n.length === 1 ? o.call(l, n[0]) : o.apply(l, n), pl = setTimeout(function() {
        pl = void 0;
      }, i);
    }
  };
}
function KT() {
  clearTimeout(pl), pl = void 0;
}
function bg(o, i, n) {
  o.scrollLeft += i, o.scrollTop += n;
}
function Og(o) {
  var i = window.Polymer, n = window.jQuery || window.Zepto;
  return i && i.dom ? i.dom(o).cloneNode(!0) : n ? n(o).clone(!0)[0] : o.cloneNode(!0);
}
var pr = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function JT() {
  var o = [], i;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(d) {
          if (!(Ye(d, "display") === "none" || d === qe.ghost)) {
            o.push({
              target: d,
              rect: Hn(d)
            });
            var p = hs({}, o[o.length - 1].rect);
            if (d.thisAnimationDuration) {
              var g = va(d, !0);
              g && (p.top -= g.f, p.left -= g.e);
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
      o.splice(YT(o, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var d = this;
      if (!this.options.animation) {
        clearTimeout(i), typeof l == "function" && l();
        return;
      }
      var p = !1, g = 0;
      o.forEach(function(v) {
        var m = 0, E = v.target, A = E.fromRect, w = Hn(E), O = E.prevFromRect, N = E.prevToRect, k = v.rect, G = va(E, !0);
        G && (w.top -= G.f, w.left -= G.e), E.toRect = w, E.thisAnimationDuration && _h(O, w) && !_h(A, w) && // Make sure animatingRect is on line between toRect & fromRect
        (k.top - w.top) / (k.left - w.left) === (A.top - w.top) / (A.left - w.left) && (m = jT(k, O, N, d.options)), _h(w, A) || (E.prevFromRect = A, E.prevToRect = w, m || (m = d.options.animation), d.animate(E, k, w, m)), m && (p = !0, g = Math.max(g, m), clearTimeout(E.animationResetTimer), E.animationResetTimer = setTimeout(function() {
          E.animationTime = 0, E.prevFromRect = null, E.fromRect = null, E.prevToRect = null, E.thisAnimationDuration = null;
        }, m), E.thisAnimationDuration = m);
      }), clearTimeout(i), p ? i = setTimeout(function() {
        typeof l == "function" && l();
      }, g) : typeof l == "function" && l(), o = [];
    },
    animate: function(l, d, p, g) {
      if (g) {
        Ye(l, "transition", ""), Ye(l, "transform", "");
        var v = va(this.el), m = v && v.a, E = v && v.d, A = (d.left - p.left) / (m || 1), w = (d.top - p.top) / (E || 1);
        l.animatingX = !!A, l.animatingY = !!w, Ye(l, "transform", "translate3d(" + A + "px," + w + "px,0)"), this.forRepaintDummy = $T(l), Ye(l, "transition", "transform " + g + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ye(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          Ye(l, "transition", ""), Ye(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, g);
      }
    }
  };
}
function $T(o) {
  return o.offsetWidth;
}
function jT(o, i, n, l) {
  return Math.sqrt(Math.pow(i.top - o.top, 2) + Math.pow(i.left - o.left, 2)) / Math.sqrt(Math.pow(i.top - n.top, 2) + Math.pow(i.left - n.left, 2)) * l.animation;
}
var ha = [], mh = {
  initializeByDefault: !0
}, Fl = {
  mount: function(i) {
    for (var n in mh)
      mh.hasOwnProperty(n) && !(n in i) && (i[n] = mh[n]);
    ha.forEach(function(l) {
      if (l.pluginName === i.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(i.pluginName, " more than once");
    }), ha.push(i);
  },
  pluginEvent: function(i, n, l) {
    var d = this;
    this.eventCanceled = !1, l.cancel = function() {
      d.eventCanceled = !0;
    };
    var p = i + "Global";
    ha.forEach(function(g) {
      n[g.pluginName] && (n[g.pluginName][p] && n[g.pluginName][p](hs({
        sortable: n
      }, l)), n.options[g.pluginName] && n[g.pluginName][i] && n[g.pluginName][i](hs({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(i, n, l, d) {
    ha.forEach(function(v) {
      var m = v.pluginName;
      if (!(!i.options[m] && !v.initializeByDefault)) {
        var E = new v(i, n, i.options);
        E.sortable = i, E.options = i.options, i[m] = E, Ps(l, E.defaults);
      }
    });
    for (var p in i.options)
      if (i.options.hasOwnProperty(p)) {
        var g = this.modifyOption(i, p, i.options[p]);
        typeof g < "u" && (i.options[p] = g);
      }
  },
  getEventProperties: function(i, n) {
    var l = {};
    return ha.forEach(function(d) {
      typeof d.eventProperties == "function" && Ps(l, d.eventProperties.call(n[d.pluginName], i));
    }), l;
  },
  modifyOption: function(i, n, l) {
    var d;
    return ha.forEach(function(p) {
      i[p.pluginName] && p.optionListeners && typeof p.optionListeners[n] == "function" && (d = p.optionListeners[n].call(i[p.pluginName], l));
    }), d;
  }
};
function XT(o) {
  var i = o.sortable, n = o.rootEl, l = o.name, d = o.targetEl, p = o.cloneEl, g = o.toEl, v = o.fromEl, m = o.oldIndex, E = o.newIndex, A = o.oldDraggableIndex, w = o.newDraggableIndex, O = o.originalEvent, N = o.putSortable, k = o.extraEventProperties;
  if (i = i || n && n[pr], !!i) {
    var G, X = i.options, x = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !xs && !xl ? G = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (G = document.createEvent("Event"), G.initEvent(l, !0, !0)), G.to = g || n, G.from = v || n, G.item = d || n, G.clone = p, G.oldIndex = m, G.newIndex = E, G.oldDraggableIndex = A, G.newDraggableIndex = w, G.originalEvent = O, G.pullMode = N ? N.lastPutMode : void 0;
    var z = hs(hs({}, k), Fl.getEventProperties(l, i));
    for (var Y in z)
      G[Y] = z[Y];
    n && n.dispatchEvent(G), X[x] && X[x].call(i, G);
  }
}
var QT = ["evt"], Xi = function(i, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = l.evt, p = VT(l, QT);
  Fl.pluginEvent.bind(qe)(i, n, hs({
    dragEl: ye,
    parentEl: vn,
    ghostEl: ot,
    rootEl: nn,
    nextEl: Po,
    lastDownEl: Uu,
    cloneEl: yn,
    cloneHidden: to,
    dragStarted: al,
    putSortable: ui,
    activeSortable: qe.active,
    originalEvent: d,
    oldIndex: ga,
    oldDraggableIndex: gl,
    newIndex: fr,
    newDraggableIndex: eo,
    hideGhostForTarget: Dg,
    unhideGhostForTarget: Rg,
    cloneNowHidden: function() {
      to = !0;
    },
    cloneNowShown: function() {
      to = !1;
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
  XT(hs({
    putSortable: ui,
    cloneEl: yn,
    targetEl: ye,
    rootEl: nn,
    oldIndex: ga,
    oldDraggableIndex: gl,
    newIndex: fr,
    newDraggableIndex: eo
  }, o));
}
var ye, vn, ot, nn, Po, Uu, yn, to, ga, fr, gl, eo, Pu, ui, pa = !1, Ku = !1, Ju = [], Do, Hr, vh, yh, vp, yp, al, da, _l, ml = !1, xu = !1, zu, Si, Eh = [], Ph = !1, $u = [], nc = typeof document < "u", Fu = wg, Ep = xl || xs ? "cssFloat" : "float", ew = nc && !ZT && !wg && "draggable" in document.createElement("div"), Lg = (function() {
  if (nc) {
    if (xs)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
})(), Ig = function(i, n) {
  var l = Ye(i), d = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), p = ya(i, 0, n), g = ya(i, 1, n), v = p && Ye(p), m = g && Ye(g), E = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + Hn(p).width, A = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Hn(g).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (p && v.float && v.float !== "none") {
    var w = v.float === "left" ? "left" : "right";
    return g && (m.clear === "both" || m.clear === w) ? "vertical" : "horizontal";
  }
  return p && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || E >= d && l[Ep] === "none" || g && l[Ep] === "none" && E + A > d) ? "vertical" : "horizontal";
}, tw = function(i, n, l) {
  var d = l ? i.left : i.top, p = l ? i.right : i.bottom, g = l ? i.width : i.height, v = l ? n.left : n.top, m = l ? n.right : n.bottom, E = l ? n.width : n.height;
  return d === v || p === m || d + g / 2 === v + E / 2;
}, nw = function(i, n) {
  var l;
  return Ju.some(function(d) {
    var p = d[pr].options.emptyInsertThreshold;
    if (!(!p || Xh(d))) {
      var g = Hn(d), v = i >= g.left - p && i <= g.right + p, m = n >= g.top - p && n <= g.bottom + p;
      if (v && m)
        return l = d;
    }
  }), l;
}, Ng = function(i) {
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
      var O = (g ? v : m).options.group.name;
      return p === !0 || typeof p == "string" && p === O || p.join && p.indexOf(O) > -1;
    };
  }
  var l = {}, d = i.group;
  (!d || ku(d) != "object") && (d = {
    name: d
  }), l.name = d.name, l.checkPull = n(d.pull, !0), l.checkPut = n(d.put), l.revertClone = d.revertClone, i.group = l;
}, Dg = function() {
  !Lg && ot && Ye(ot, "display", "none");
}, Rg = function() {
  !Lg && ot && Ye(ot, "display", "");
};
nc && document.addEventListener("click", function(o) {
  if (Ku)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), Ku = !1, !1;
}, !0);
var Ro = function(i) {
  if (ye) {
    i = i.touches ? i.touches[0] : i;
    var n = nw(i.clientX, i.clientY);
    if (n) {
      var l = {};
      for (var d in i)
        i.hasOwnProperty(d) && (l[d] = i[d]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[pr]._onDragOver(l);
    }
  }
}, iw = function(i) {
  ye && ye.parentNode[pr]._isOutsideThisEl(i.target);
};
function qe(o, i) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = i = Ps({}, i), o[pr] = this;
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
      return Ig(o, this.options);
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
    supportPointer: qe.supportPointer !== !1 && "PointerEvent" in window && !fl,
    emptyInsertThreshold: 5
  };
  Fl.initializePlugins(this, o, n);
  for (var l in n)
    !(l in i) && (i[l] = n[l]);
  Ng(i);
  for (var d in this)
    d.charAt(0) === "_" && typeof this[d] == "function" && (this[d] = this[d].bind(this));
  this.nativeDraggable = i.forceFallback ? !1 : ew, this.nativeDraggable && (this.options.touchStartThreshold = 1), i.supportPointer ? It(o, "pointerdown", this._onTapStart) : (It(o, "mousedown", this._onTapStart), It(o, "touchstart", this._onTapStart)), this.nativeDraggable && (It(o, "dragover", this), It(o, "dragenter", this)), Ju.push(this.el), i.store && i.store.get && this.sort(i.store.get(this) || []), Ps(this, JT());
}
qe.prototype = /** @lends Sortable.prototype */
{
  constructor: qe,
  _isOutsideThisEl: function(i) {
    !this.el.contains(i) && i !== this.el && (da = null);
  },
  _getDirection: function(i, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, i, n, ye) : this.options.direction;
  },
  _onTapStart: function(i) {
    if (i.cancelable) {
      var n = this, l = this.el, d = this.options, p = d.preventOnFilter, g = i.type, v = i.touches && i.touches[0] || i.pointerType && i.pointerType === "touch" && i, m = (v || i).target, E = i.target.shadowRoot && (i.path && i.path[0] || i.composedPath && i.composedPath()[0]) || m, A = d.filter;
      if (hw(l), !ye && !(/mousedown|pointerdown/.test(g) && i.button !== 0 || d.disabled) && !E.isContentEditable && !(!this.nativeDraggable && fl && m && m.tagName.toUpperCase() === "SELECT") && (m = as(m, d.draggable, l, !1), !(m && m.animated) && Uu !== m)) {
        if (ga = Dr(m), gl = Dr(m, d.draggable), typeof A == "function") {
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
          if (w = as(E, w.trim(), l, !1), w)
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
        d.handle && !as(E, d.handle, l, !1) || this._prepareDragStart(i, v, m);
      }
    }
  },
  _prepareDragStart: function(i, n, l) {
    var d = this, p = d.el, g = d.options, v = p.ownerDocument, m;
    if (l && !ye && l.parentNode === p) {
      var E = Hn(l);
      if (nn = p, ye = l, vn = ye.parentNode, Po = ye.nextSibling, Uu = l, Pu = g.group, qe.dragged = ye, Do = {
        target: ye,
        clientX: (n || i).clientX,
        clientY: (n || i).clientY
      }, vp = Do.clientX - E.left, yp = Do.clientY - E.top, this._lastX = (n || i).clientX, this._lastY = (n || i).clientY, ye.style["will-change"] = "all", m = function() {
        if (Xi("delayEnded", d, {
          evt: i
        }), qe.eventCanceled) {
          d._onDrop();
          return;
        }
        d._disableDelayedDragEvents(), !pp && d.nativeDraggable && (ye.draggable = !0), d._triggerDragStart(i, n), Gi({
          sortable: d,
          name: "choose",
          originalEvent: i
        }), dr(ye, g.chosenClass, !0);
      }, g.ignore.split(",").forEach(function(A) {
        Ag(ye, A.trim(), Th);
      }), It(v, "dragover", Ro), It(v, "mousemove", Ro), It(v, "touchmove", Ro), It(v, "mouseup", d._onDrop), It(v, "touchend", d._onDrop), It(v, "touchcancel", d._onDrop), pp && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Xi("delayStart", this, {
        evt: i
      }), g.delay && (!g.delayOnTouchOnly || n) && (!this.nativeDraggable || !(xl || xs))) {
        if (qe.eventCanceled) {
          this._onDrop();
          return;
        }
        It(v, "mouseup", d._disableDelayedDrag), It(v, "touchend", d._disableDelayedDrag), It(v, "touchcancel", d._disableDelayedDrag), It(v, "mousemove", d._delayedDragTouchMoveHandler), It(v, "touchmove", d._delayedDragTouchMoveHandler), g.supportPointer && It(v, "pointermove", d._delayedDragTouchMoveHandler), d._dragStartTimer = setTimeout(m, g.delay);
      } else
        m();
    }
  },
  _delayedDragTouchMoveHandler: function(i) {
    var n = i.touches ? i.touches[0] : i;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && Th(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var i = this.el.ownerDocument;
    Ct(i, "mouseup", this._disableDelayedDrag), Ct(i, "touchend", this._disableDelayedDrag), Ct(i, "touchcancel", this._disableDelayedDrag), Ct(i, "mousemove", this._delayedDragTouchMoveHandler), Ct(i, "touchmove", this._delayedDragTouchMoveHandler), Ct(i, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(i, n) {
    n = n || i.pointerType == "touch" && i, !this.nativeDraggable || n ? this.options.supportPointer ? It(document, "pointermove", this._onTouchMove) : n ? It(document, "touchmove", this._onTouchMove) : It(document, "mousemove", this._onTouchMove) : (It(ye, "dragend", this), It(nn, "dragstart", this._onDragStart));
    try {
      document.selection ? Vu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(i, n) {
    if (pa = !1, nn && ye) {
      Xi("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && It(document, "dragover", iw);
      var l = this.options;
      !i && dr(ye, l.dragClass, !1), dr(ye, l.ghostClass, !0), qe.active = this, i && this._appendGhost(), Gi({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Hr) {
      this._lastX = Hr.clientX, this._lastY = Hr.clientY, Dg();
      for (var i = document.elementFromPoint(Hr.clientX, Hr.clientY), n = i; i && i.shadowRoot && (i = i.shadowRoot.elementFromPoint(Hr.clientX, Hr.clientY), i !== n); )
        n = i;
      if (ye.parentNode[pr]._isOutsideThisEl(i), n)
        do {
          if (n[pr]) {
            var l = void 0;
            if (l = n[pr]._onDragOver({
              clientX: Hr.clientX,
              clientY: Hr.clientY,
              target: i,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          i = n;
        } while (n = n.parentNode);
      Rg();
    }
  },
  _onTouchMove: function(i) {
    if (Do) {
      var n = this.options, l = n.fallbackTolerance, d = n.fallbackOffset, p = i.touches ? i.touches[0] : i, g = ot && va(ot, !0), v = ot && g && g.a, m = ot && g && g.d, E = Fu && Si && mp(Si), A = (p.clientX - Do.clientX + d.x) / (v || 1) + (E ? E[0] - Eh[0] : 0) / (v || 1), w = (p.clientY - Do.clientY + d.y) / (m || 1) + (E ? E[1] - Eh[1] : 0) / (m || 1);
      if (!qe.active && !pa) {
        if (l && Math.max(Math.abs(p.clientX - this._lastX), Math.abs(p.clientY - this._lastY)) < l)
          return;
        this._onDragStart(i, !0);
      }
      if (ot) {
        g ? (g.e += A - (vh || 0), g.f += w - (yh || 0)) : g = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: A,
          f: w
        };
        var O = "matrix(".concat(g.a, ",").concat(g.b, ",").concat(g.c, ",").concat(g.d, ",").concat(g.e, ",").concat(g.f, ")");
        Ye(ot, "webkitTransform", O), Ye(ot, "mozTransform", O), Ye(ot, "msTransform", O), Ye(ot, "transform", O), vh = A, yh = w, Hr = p;
      }
      i.cancelable && i.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ot) {
      var i = this.options.fallbackOnBody ? document.body : nn, n = Hn(ye, !0, Fu, !0, i), l = this.options;
      if (Fu) {
        for (Si = i; Ye(Si, "position") === "static" && Ye(Si, "transform") === "none" && Si !== document; )
          Si = Si.parentNode;
        Si !== document.body && Si !== document.documentElement ? (Si === document && (Si = cs()), n.top += Si.scrollTop, n.left += Si.scrollLeft) : Si = cs(), Eh = mp(Si);
      }
      ot = ye.cloneNode(!0), dr(ot, l.ghostClass, !1), dr(ot, l.fallbackClass, !0), dr(ot, l.dragClass, !0), Ye(ot, "transition", ""), Ye(ot, "transform", ""), Ye(ot, "box-sizing", "border-box"), Ye(ot, "margin", 0), Ye(ot, "top", n.top), Ye(ot, "left", n.left), Ye(ot, "width", n.width), Ye(ot, "height", n.height), Ye(ot, "opacity", "0.8"), Ye(ot, "position", Fu ? "absolute" : "fixed"), Ye(ot, "zIndex", "100000"), Ye(ot, "pointerEvents", "none"), qe.ghost = ot, i.appendChild(ot), Ye(ot, "transform-origin", vp / parseInt(ot.style.width) * 100 + "% " + yp / parseInt(ot.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(i, n) {
    var l = this, d = i.dataTransfer, p = l.options;
    if (Xi("dragStart", this, {
      evt: i
    }), qe.eventCanceled) {
      this._onDrop();
      return;
    }
    Xi("setupClone", this), qe.eventCanceled || (yn = Og(ye), yn.draggable = !1, yn.style["will-change"] = "", this._hideClone(), dr(yn, this.options.chosenClass, !1), qe.clone = yn), l.cloneId = Vu(function() {
      Xi("clone", l), !qe.eventCanceled && (l.options.removeCloneOnHide || nn.insertBefore(yn, ye), l._hideClone(), Gi({
        sortable: l,
        name: "clone"
      }));
    }), !n && dr(ye, p.dragClass, !0), n ? (Ku = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (Ct(document, "mouseup", l._onDrop), Ct(document, "touchend", l._onDrop), Ct(document, "touchcancel", l._onDrop), d && (d.effectAllowed = "move", p.setData && p.setData.call(l, d, ye)), It(document, "drop", l), Ye(ye, "transform", "translateZ(0)")), pa = !0, l._dragStartId = Vu(l._dragStarted.bind(l, n, i)), It(document, "selectstart", l), al = !0, fl && Ye(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(i) {
    var n = this.el, l = i.target, d, p, g, v = this.options, m = v.group, E = qe.active, A = Pu === m, w = v.sort, O = ui || E, N, k = this, G = !1;
    if (Ph) return;
    function X(de, yt) {
      Xi(de, k, hs({
        evt: i,
        isOwner: A,
        axis: N ? "vertical" : "horizontal",
        revert: g,
        dragRect: d,
        targetRect: p,
        canSort: w,
        fromSortable: O,
        target: l,
        completed: z,
        onMove: function(ke, xt) {
          return Mu(nn, n, ye, d, ke, Hn(ke), i, xt);
        },
        changed: Y
      }, yt));
    }
    function x() {
      X("dragOverAnimationCapture"), k.captureAnimationState(), k !== O && O.captureAnimationState();
    }
    function z(de) {
      return X("dragOverCompleted", {
        insertion: de
      }), de && (A ? E._hideClone() : E._showClone(k), k !== O && (dr(ye, ui ? ui.options.ghostClass : E.options.ghostClass, !1), dr(ye, v.ghostClass, !0)), ui !== k && k !== qe.active ? ui = k : k === qe.active && ui && (ui = null), O === k && (k._ignoreWhileAnimating = l), k.animateAll(function() {
        X("dragOverAnimationComplete"), k._ignoreWhileAnimating = null;
      }), k !== O && (O.animateAll(), O._ignoreWhileAnimating = null)), (l === ye && !ye.animated || l === n && !l.animated) && (da = null), !v.dragoverBubble && !i.rootEl && l !== document && (ye.parentNode[pr]._isOutsideThisEl(i.target), !de && Ro(i)), !v.dragoverBubble && i.stopPropagation && i.stopPropagation(), G = !0;
    }
    function Y() {
      fr = Dr(ye), eo = Dr(ye, v.draggable), Gi({
        sortable: k,
        name: "change",
        toEl: n,
        newIndex: fr,
        newDraggableIndex: eo,
        originalEvent: i
      });
    }
    if (i.preventDefault !== void 0 && i.cancelable && i.preventDefault(), l = as(l, v.draggable, n, !0), X("dragOver"), qe.eventCanceled) return G;
    if (ye.contains(i.target) || l.animated && l.animatingX && l.animatingY || k._ignoreWhileAnimating === l)
      return z(!1);
    if (Ku = !1, E && !v.disabled && (A ? w || (g = vn !== nn) : ui === this || (this.lastPutMode = Pu.checkPull(this, E, ye, i)) && m.checkPut(this, E, ye, i))) {
      if (N = this._getDirection(i, l) === "vertical", d = Hn(ye), X("dragOverValid"), qe.eventCanceled) return G;
      if (g)
        return vn = nn, x(), this._hideClone(), X("revert"), qe.eventCanceled || (Po ? nn.insertBefore(ye, Po) : nn.appendChild(ye)), z(!0);
      var R = Xh(n, v.draggable);
      if (!R || aw(i, N, this) && !R.animated) {
        if (R === ye)
          return z(!1);
        if (R && n === i.target && (l = R), l && (p = Hn(l)), Mu(nn, n, ye, d, l, p, i, !!l) !== !1)
          return x(), n.appendChild(ye), vn = n, Y(), z(!0);
      } else if (R && ow(i, N, this)) {
        var q = ya(n, 0, v, !0);
        if (q === ye)
          return z(!1);
        if (l = q, p = Hn(l), Mu(nn, n, ye, d, l, p, i, !1) !== !1)
          return x(), n.insertBefore(ye, q), vn = n, Y(), z(!0);
      } else if (l.parentNode === n) {
        p = Hn(l);
        var fe = 0, Se, Ie = ye.parentNode !== n, he = !tw(ye.animated && ye.toRect || d, l.animated && l.toRect || p, N), Oe = N ? "top" : "left", ae = _p(l, "top", "top") || _p(ye, "top", "top"), Z = ae ? ae.scrollTop : void 0;
        da !== l && (Se = p[Oe], ml = !1, xu = !he && v.invertSwap || Ie), fe = lw(i, l, p, N, he ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, xu, da === l);
        var K;
        if (fe !== 0) {
          var U = Dr(ye);
          do
            U -= fe, K = vn.children[U];
          while (K && (Ye(K, "display") === "none" || K === ot));
        }
        if (fe === 0 || K === l)
          return z(!1);
        da = l, _l = fe;
        var ie = l.nextElementSibling, ne = !1;
        ne = fe === 1;
        var Ee = Mu(nn, n, ye, d, l, p, i, ne);
        if (Ee !== !1)
          return (Ee === 1 || Ee === -1) && (ne = Ee === 1), Ph = !0, setTimeout(sw, 30), x(), ne && !ie ? n.appendChild(ye) : l.parentNode.insertBefore(ye, ne ? ie : l), ae && bg(ae, 0, Z - ae.scrollTop), vn = ye.parentNode, Se !== void 0 && !xu && (zu = Math.abs(Se - Hn(l)[Oe])), Y(), z(!0);
      }
      if (n.contains(ye))
        return z(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ct(document, "mousemove", this._onTouchMove), Ct(document, "touchmove", this._onTouchMove), Ct(document, "pointermove", this._onTouchMove), Ct(document, "dragover", Ro), Ct(document, "mousemove", Ro), Ct(document, "touchmove", Ro);
  },
  _offUpEvents: function() {
    var i = this.el.ownerDocument;
    Ct(i, "mouseup", this._onDrop), Ct(i, "touchend", this._onDrop), Ct(i, "pointerup", this._onDrop), Ct(i, "touchcancel", this._onDrop), Ct(document, "selectstart", this);
  },
  _onDrop: function(i) {
    var n = this.el, l = this.options;
    if (fr = Dr(ye), eo = Dr(ye, l.draggable), Xi("drop", this, {
      evt: i
    }), vn = ye && ye.parentNode, fr = Dr(ye), eo = Dr(ye, l.draggable), qe.eventCanceled) {
      this._nulling();
      return;
    }
    pa = !1, xu = !1, ml = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), xh(this.cloneId), xh(this._dragStartId), this.nativeDraggable && (Ct(document, "drop", this), Ct(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), fl && Ye(document.body, "user-select", ""), Ye(ye, "transform", ""), i && (al && (i.cancelable && i.preventDefault(), !l.dropBubble && i.stopPropagation()), ot && ot.parentNode && ot.parentNode.removeChild(ot), (nn === vn || ui && ui.lastPutMode !== "clone") && yn && yn.parentNode && yn.parentNode.removeChild(yn), ye && (this.nativeDraggable && Ct(ye, "dragend", this), Th(ye), ye.style["will-change"] = "", al && !pa && dr(ye, ui ? ui.options.ghostClass : this.options.ghostClass, !1), dr(ye, this.options.chosenClass, !1), Gi({
      sortable: this,
      name: "unchoose",
      toEl: vn,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: i
    }), nn !== vn ? (fr >= 0 && (Gi({
      rootEl: vn,
      name: "add",
      toEl: vn,
      fromEl: nn,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "remove",
      toEl: vn,
      originalEvent: i
    }), Gi({
      rootEl: vn,
      name: "sort",
      toEl: vn,
      fromEl: nn,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: vn,
      originalEvent: i
    })), ui && ui.save()) : fr !== ga && fr >= 0 && (Gi({
      sortable: this,
      name: "update",
      toEl: vn,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: vn,
      originalEvent: i
    })), qe.active && ((fr == null || fr === -1) && (fr = ga, eo = gl), Gi({
      sortable: this,
      name: "end",
      toEl: vn,
      originalEvent: i
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Xi("nulling", this), nn = ye = vn = ot = Po = yn = Uu = to = Do = Hr = al = fr = eo = ga = gl = da = _l = ui = Pu = qe.dragged = qe.ghost = qe.clone = qe.active = null, $u.forEach(function(i) {
      i.checked = !0;
    }), $u.length = vh = yh = 0;
  },
  handleEvent: function(i) {
    switch (i.type) {
      case "drop":
      case "dragend":
        this._onDrop(i);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(i), rw(i));
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
    for (var i = [], n, l = this.el.children, d = 0, p = l.length, g = this.options; d < p; d++)
      n = l[d], as(n, g.draggable, this.el, !1) && i.push(n.getAttribute(g.dataIdAttr) || cw(n));
    return i;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(i, n) {
    var l = {}, d = this.el;
    this.toArray().forEach(function(p, g) {
      var v = d.children[g];
      as(v, this.options.draggable, d, !1) && (l[p] = v);
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
    var d = Fl.modifyOption(this, i, n);
    typeof d < "u" ? l[i] = d : l[i] = n, i === "group" && Ng(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Xi("destroy", this);
    var i = this.el;
    i[pr] = null, Ct(i, "mousedown", this._onTapStart), Ct(i, "touchstart", this._onTapStart), Ct(i, "pointerdown", this._onTapStart), this.nativeDraggable && (Ct(i, "dragover", this), Ct(i, "dragenter", this)), Array.prototype.forEach.call(i.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ju.splice(Ju.indexOf(this.el), 1), this.el = i = null;
  },
  _hideClone: function() {
    if (!to) {
      if (Xi("hideClone", this), qe.eventCanceled) return;
      Ye(yn, "display", "none"), this.options.removeCloneOnHide && yn.parentNode && yn.parentNode.removeChild(yn), to = !0;
    }
  },
  _showClone: function(i) {
    if (i.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (to) {
      if (Xi("showClone", this), qe.eventCanceled) return;
      ye.parentNode == nn && !this.options.group.revertClone ? nn.insertBefore(yn, ye) : Po ? nn.insertBefore(yn, Po) : nn.appendChild(yn), this.options.group.revertClone && this.animate(ye, yn), Ye(yn, "display", ""), to = !1;
    }
  }
};
function rw(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Mu(o, i, n, l, d, p, g, v) {
  var m, E = o[pr], A = E.options.onMove, w;
  return window.CustomEvent && !xs && !xl ? m = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (m = document.createEvent("Event"), m.initEvent("move", !0, !0)), m.to = i, m.from = o, m.dragged = n, m.draggedRect = l, m.related = d || i, m.relatedRect = p || Hn(i), m.willInsertAfter = v, m.originalEvent = g, o.dispatchEvent(m), A && (w = A.call(E, m, g)), w;
}
function Th(o) {
  o.draggable = !1;
}
function sw() {
  Ph = !1;
}
function ow(o, i, n) {
  var l = Hn(ya(n.el, 0, n.options, !0)), d = 10;
  return i ? o.clientX < l.left - d || o.clientY < l.top && o.clientX < l.right : o.clientY < l.top - d || o.clientY < l.bottom && o.clientX < l.left;
}
function aw(o, i, n) {
  var l = Hn(Xh(n.el, n.options.draggable)), d = 10;
  return i ? o.clientX > l.right + d || o.clientX <= l.right && o.clientY > l.bottom && o.clientX >= l.left : o.clientX > l.right && o.clientY > l.top || o.clientX <= l.right && o.clientY > l.bottom + d;
}
function lw(o, i, n, l, d, p, g, v) {
  var m = l ? o.clientY : o.clientX, E = l ? n.height : n.width, A = l ? n.top : n.left, w = l ? n.bottom : n.right, O = !1;
  if (!g) {
    if (v && zu < E * d) {
      if (!ml && (_l === 1 ? m > A + E * p / 2 : m < w - E * p / 2) && (ml = !0), ml)
        O = !0;
      else if (_l === 1 ? m < A + zu : m > w - zu)
        return -_l;
    } else if (m > A + E * (1 - d) / 2 && m < w - E * (1 - d) / 2)
      return uw(i);
  }
  return O = O || g, O && (m < A + E * p / 2 || m > w - E * p / 2) ? m > A + E / 2 ? 1 : -1 : 0;
}
function uw(o) {
  return Dr(ye) < Dr(o) ? 1 : -1;
}
function cw(o) {
  for (var i = o.tagName + o.className + o.src + o.href + o.textContent, n = i.length, l = 0; n--; )
    l += i.charCodeAt(n);
  return l.toString(36);
}
function hw(o) {
  $u.length = 0;
  for (var i = o.getElementsByTagName("input"), n = i.length; n--; ) {
    var l = i[n];
    l.checked && $u.push(l);
  }
}
function Vu(o) {
  return setTimeout(o, 0);
}
function xh(o) {
  return clearTimeout(o);
}
nc && It(document, "touchmove", function(o) {
  (qe.active || pa) && o.cancelable && o.preventDefault();
});
qe.utils = {
  on: It,
  off: Ct,
  css: Ye,
  find: Ag,
  is: function(i, n) {
    return !!as(i, n, i, !1);
  },
  extend: qT,
  throttle: Cg,
  closest: as,
  toggleClass: dr,
  clone: Og,
  index: Dr,
  nextTick: Vu,
  cancelNextTick: xh,
  detectDirection: Ig,
  getChild: ya
};
qe.get = function(o) {
  return o[pr];
};
qe.mount = function() {
  for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
    i[n] = arguments[n];
  i[0].constructor === Array && (i = i[0]), i.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (qe.utils = hs(hs({}, qe.utils), l.utils)), Fl.mount(l);
  });
};
qe.create = function(o, i) {
  return new qe(o, i);
};
qe.version = WT;
var Gn = [], ll, Fh, Mh = !1, wh, Sh, ju, ul;
function dw() {
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
      this.sortable.nativeDraggable ? Ct(document, "dragover", this._handleAutoScroll) : (Ct(document, "pointermove", this._handleFallbackAutoScroll), Ct(document, "touchmove", this._handleFallbackAutoScroll), Ct(document, "mousemove", this._handleFallbackAutoScroll)), Tp(), Wu(), KT();
    },
    nulling: function() {
      ju = Fh = ll = Mh = ul = wh = Sh = null, Gn.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var d = this, p = (n.touches ? n.touches[0] : n).clientX, g = (n.touches ? n.touches[0] : n).clientY, v = document.elementFromPoint(p, g);
      if (ju = n, l || this.options.forceAutoScrollFallback || xl || xs || fl) {
        Ah(n, this.options, v, l);
        var m = no(v, !0);
        Mh && (!ul || p !== wh || g !== Sh) && (ul && Tp(), ul = setInterval(function() {
          var E = no(document.elementFromPoint(p, g), !0);
          E !== m && (m = E, Wu()), Ah(n, d.options, E, l);
        }, 10), wh = p, Sh = g);
      } else {
        if (!this.options.bubbleScroll || no(v, !0) === cs()) {
          Wu();
          return;
        }
        Ah(n, this.options, no(v, !1), !1);
      }
    }
  }, Ps(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Wu() {
  Gn.forEach(function(o) {
    clearInterval(o.pid);
  }), Gn = [];
}
function Tp() {
  clearInterval(ul);
}
var Ah = Cg(function(o, i, n, l) {
  if (i.scroll) {
    var d = (o.touches ? o.touches[0] : o).clientX, p = (o.touches ? o.touches[0] : o).clientY, g = i.scrollSensitivity, v = i.scrollSpeed, m = cs(), E = !1, A;
    Fh !== n && (Fh = n, Wu(), ll = i.scroll, A = i.scrollFn, ll === !0 && (ll = no(n, !0)));
    var w = 0, O = ll;
    do {
      var N = O, k = Hn(N), G = k.top, X = k.bottom, x = k.left, z = k.right, Y = k.width, R = k.height, q = void 0, fe = void 0, Se = N.scrollWidth, Ie = N.scrollHeight, he = Ye(N), Oe = N.scrollLeft, ae = N.scrollTop;
      N === m ? (q = Y < Se && (he.overflowX === "auto" || he.overflowX === "scroll" || he.overflowX === "visible"), fe = R < Ie && (he.overflowY === "auto" || he.overflowY === "scroll" || he.overflowY === "visible")) : (q = Y < Se && (he.overflowX === "auto" || he.overflowX === "scroll"), fe = R < Ie && (he.overflowY === "auto" || he.overflowY === "scroll"));
      var Z = q && (Math.abs(z - d) <= g && Oe + Y < Se) - (Math.abs(x - d) <= g && !!Oe), K = fe && (Math.abs(X - p) <= g && ae + R < Ie) - (Math.abs(G - p) <= g && !!ae);
      if (!Gn[w])
        for (var U = 0; U <= w; U++)
          Gn[U] || (Gn[U] = {});
      (Gn[w].vx != Z || Gn[w].vy != K || Gn[w].el !== N) && (Gn[w].el = N, Gn[w].vx = Z, Gn[w].vy = K, clearInterval(Gn[w].pid), (Z != 0 || K != 0) && (E = !0, Gn[w].pid = setInterval(function() {
        l && this.layer === 0 && qe.active._onTouchMove(ju);
        var ie = Gn[this.layer].vy ? Gn[this.layer].vy * v : 0, ne = Gn[this.layer].vx ? Gn[this.layer].vx * v : 0;
        typeof A == "function" && A.call(qe.dragged.parentNode[pr], ne, ie, o, ju, Gn[this.layer].el) !== "continue" || bg(Gn[this.layer].el, ne, ie);
      }.bind({
        layer: w
      }), 24))), w++;
    } while (i.bubbleScroll && O !== m && (O = no(O, !1)));
    Mh = E;
  }
}, 30), Pg = function(i) {
  var n = i.originalEvent, l = i.putSortable, d = i.dragEl, p = i.activeSortable, g = i.dispatchSortableEvent, v = i.hideGhostForTarget, m = i.unhideGhostForTarget;
  if (n) {
    var E = l || p;
    v();
    var A = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, w = document.elementFromPoint(A.clientX, A.clientY);
    m(), E && !E.el.contains(w) && (g("spill"), this.onSpill({
      dragEl: d,
      putSortable: l
    }));
  }
};
function Qh() {
}
Qh.prototype = {
  startIndex: null,
  dragStart: function(i) {
    var n = i.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var d = ya(this.sortable.el, this.startIndex, this.options);
    d ? this.sortable.el.insertBefore(n, d) : this.sortable.el.appendChild(n), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Pg
};
Ps(Qh, {
  pluginName: "revertOnSpill"
});
function ed() {
}
ed.prototype = {
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable, d = l || this.sortable;
    d.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), d.animateAll();
  },
  drop: Pg
};
Ps(ed, {
  pluginName: "removeOnSpill"
});
qe.mount(new dw());
qe.mount(ed, Qh);
var fw = Object.defineProperty, pw = Object.defineProperties, gw = Object.getOwnPropertyDescriptors, wp = Object.getOwnPropertySymbols, _w = Object.prototype.hasOwnProperty, mw = Object.prototype.propertyIsEnumerable, Sp = (o, i, n) => i in o ? fw(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, io = (o, i) => {
  for (var n in i || (i = {}))
    _w.call(i, n) && Sp(o, n, i[n]);
  if (wp)
    for (var n of wp(i))
      mw.call(i, n) && Sp(o, n, i[n]);
  return o;
}, Xu = (o, i) => pw(o, gw(i));
function Ch(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function Ap(o, i, n) {
  const l = n === 0 ? o.children[0] : o.children[n - 1].nextSibling;
  o.insertBefore(i, l);
}
function vw() {
  return typeof window < "u" ? window.console : global.console;
}
const yw = vw();
function Ew(o) {
  const i = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return i[l] || (i[l] = o(l));
  };
}
const Tw = /-(\w)/g, ww = Ew((o) => o.replace(Tw, (i, n) => n.toUpperCase())), xg = ["Start", "Add", "Remove", "Update", "End"], Fg = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Mg = ["Move"], Sw = [Mg, xg, Fg].flatMap((o) => o).map((o) => `on${o}`), Bh = {
  manage: Mg,
  manageAndEmit: xg,
  emit: Fg
};
function Aw(o) {
  return Sw.indexOf(o) !== -1;
}
const Cw = [
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
  return Cw.includes(o);
}
function Ow(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function Bg(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function Gg(o) {
  return o.reduce((i, [n, l]) => (i[n] = l, i), {});
}
function Lw({ $attrs: o, componentData: i = {} }) {
  const n = Gg(Object.entries(o).filter(([l, d]) => Bg(l)));
  return io(io({}, n), i);
}
function Iw({ $attrs: o, callBackBuilder: i }) {
  const n = Gg(kg(o));
  Object.entries(i).forEach(([d, p]) => {
    Bh[d].forEach((g) => {
      n[`on${g}`] = p(g);
    });
  });
  const l = `[data-draggable]${n.draggable || ""}`;
  return Xu(io({}, n), {
    draggable: l
  });
}
function kg(o) {
  return Object.entries(o).filter(([i, n]) => !Bg(i)).map(([i, n]) => [ww(i), n]).filter(([i, n]) => !Aw(i));
}
const Cp = (o) => {
  const i = o.el || Array.isArray(o.children) && o.children[0].el.parentNode;
  return i || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), i || {};
}, Nw = (o, i) => o.__draggable_context = i, bp = (o) => o.__draggable_context;
class Dw {
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
      Nw(Cp(l), {
        element: n[d],
        index: d
      });
    });
  }
  getUnderlyingVm(i) {
    return bp(i);
  }
  getVmIndexFromDomIndex(i, n) {
    const { defaultNodes: l } = this, { length: d } = l, p = n.children, g = p.item(i);
    if (g === null)
      return d;
    const v = bp(g);
    if (v)
      return v.index;
    if (d === 0)
      return 0;
    const m = Cp(l[0]), E = [...p].findIndex((A) => A === m);
    return i < E ? 0 : d;
  }
}
function Rw(o, i) {
  const n = o[i];
  return n ? n() : [];
}
function Pw({ $slots: o, realList: i, getKey: n }) {
  const l = i || [], [d, p] = ["header", "footer"].map((m) => Rw(o, m)), { item: g } = o;
  if (!g)
    throw new Error("draggable element must have an item slot");
  const v = l.flatMap((m, E) => g({ element: m, index: E }).map((A) => (A.key = n(m), A.props = Xu(io({}, A.props || {}), { "data-draggable": !0 }), A)));
  if (v.length !== l.length)
    throw new Error("Item slot must have only one child");
  return {
    header: d,
    footer: p,
    default: v
  };
}
function xw(o) {
  const i = Ow(o), n = !bw(o) && !i;
  return {
    transition: i,
    externalComponent: n,
    tag: n ? ci(o) : i ? zE : o
  };
}
function Fw({ $slots: o, tag: i, realList: n, getKey: l }) {
  const d = Pw({ $slots: o, realList: n, getKey: l }), p = xw(i);
  return new Dw({ nodes: d, root: p, realList: n });
}
function Ug(o, i) {
  Jt(() => this.$emit(o.toLowerCase(), i));
}
function zg(o) {
  return (i, n) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](i, n);
  };
}
function Mw(o) {
  const i = zg.call(this, o);
  return (n, l) => {
    i.call(this, n, l), Ug.call(this, o, n);
  };
}
let bh = null;
const Bw = {
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
}, Gw = [
  "update:modelValue",
  "change",
  ...[...Bh.manageAndEmit, ...Bh.emit].map((o) => o.toLowerCase())
], kw = rt({
  name: "draggable",
  inheritAttrs: !1,
  props: Bw,
  emits: Gw,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: i, tag: n, componentData: l, realList: d, getKey: p } = this, g = Fw({
        $slots: o,
        tag: n,
        realList: d,
        getKey: p
      });
      this.componentStructure = g;
      const v = Lw({ $attrs: i, componentData: l });
      return g.render(Rs, v);
    } catch (o) {
      return this.error = !0, Rs("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && yw.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: i, componentStructure: n } = this;
    n.updated();
    const l = Iw({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (p) => Mw.call(this, p),
        emit: (p) => Ug.bind(this, p),
        manage: (p) => zg.call(this, p)
      }
    }), d = i.nodeType === 1 ? i : i.parentElement;
    this._sortable = new qe(d, l), this.targetDomElement = d, d.__draggable_component__ = this;
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
        i && kg(o).forEach(([n, l]) => {
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
        return io(io({}, p), d);
      }
      return d;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(o, this.targetDomElement);
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), bh = o.item;
    },
    onDragAdd(o) {
      const i = o.item._underlying_vm_;
      if (i === void 0)
        return;
      Ch(o.item);
      const n = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(n, 0, i);
      const l = { element: i, newIndex: n };
      this.emitChanges({ added: l });
    },
    onDragRemove(o) {
      if (Ap(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        Ch(o.clone);
        return;
      }
      const { index: i, element: n } = this.context;
      this.spliceList(i, 1);
      const l = { element: n, oldIndex: i };
      this.emitChanges({ removed: l });
    },
    onDragUpdate(o) {
      Ch(o.item), Ap(o.from, o.item, o.oldIndex);
      const i = this.context.index, n = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(i, n);
      const l = { element: this.context.element, oldIndex: i, newIndex: n };
      this.emitChanges({ moved: l });
    },
    computeFutureIndex(o, i) {
      if (!o.element)
        return 0;
      const n = [...i.to.children].filter((g) => g.style.display !== "none"), l = n.indexOf(i.related), d = o.component.getVmIndexFromDomIndex(l);
      return n.indexOf(bh) !== -1 || !i.willInsertAfter ? d : d + 1;
    },
    onDragMove(o, i) {
      const { move: n, realList: l } = this;
      if (!n || !l)
        return !0;
      const d = this.getRelatedContextFromMoveEvent(o), p = this.computeFutureIndex(d, o), g = Xu(io({}, this.context), {
        futureIndex: p
      }), v = Xu(io({}, o), {
        relatedContext: d,
        draggedContext: g
      });
      return n(v, i);
    },
    onDragEnd() {
      bh = null;
    }
  }
}), li = [];
for (let o = 0; o < 256; ++o)
  li.push((o + 256).toString(16).slice(1));
function Uw(o, i = 0) {
  return (li[o[i + 0]] + li[o[i + 1]] + li[o[i + 2]] + li[o[i + 3]] + "-" + li[o[i + 4]] + li[o[i + 5]] + "-" + li[o[i + 6]] + li[o[i + 7]] + "-" + li[o[i + 8]] + li[o[i + 9]] + "-" + li[o[i + 10]] + li[o[i + 11]] + li[o[i + 12]] + li[o[i + 13]] + li[o[i + 14]] + li[o[i + 15]]).toLowerCase();
}
const zw = new Uint8Array(16);
function Vw() {
  return crypto.getRandomValues(zw);
}
function Yr(o, i, n) {
  return crypto.randomUUID ? crypto.randomUUID() : Ww(o);
}
function Ww(o, i, n) {
  o = o || {};
  const l = o.random ?? o.rng?.() ?? Vw();
  if (l.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, Uw(l);
}
class Vg {
  constructor(i) {
    this.geoJson = {}, this.url = i;
  }
  async fetch() {
    return this.geoJson = await (await fetch(this.url)).json(), this.geoJson;
  }
}
const Zw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vg
}, Symbol.toStringTag, { value: "Module" })), Hw = { class: "table-crud__slot" }, Yw = { class: "p-1" }, qw = { class: "p-1" }, Kw = { class: "p-1" }, Jw = { class: "p-1" }, $w = { class: "table-inline__cell" }, jw = ["onClick"], Xw = { class: "table-inline__cell" }, Qw = ["onClick"], e2 = { class: "table-inline__cell" }, t2 = ["onClick"], Gh = /* @__PURE__ */ rt({
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
    const i = gr(o, "modelValue"), n = _e(), l = _e(), d = _e({
      text: "==",
      selector: Rr.equals
    }), p = gr(o, "thingProps"), g = [
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
      const O = ci("VaSelect"), N = ci("VaInput"), k = ci("VaButton"), G = ci("VaValue"), X = ci("VaDataTable");
      return V(), je(X, {
        columns: v,
        items: i.value,
        class: "table-crud ds prop",
        striped: "",
        id: "proptableConditions"
      }, {
        headerAppend: De(() => [
          ue("tr", Hw, [
            ue("th", Yw, [
              ce(O, {
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
            ue("th", qw, [
              ce(O, {
                width: "230px",
                modelValue: d.value,
                "onUpdate:modelValue": w[2] || (w[2] = (x) => d.value = x),
                options: g,
                "track-by": (x) => x.selector
              }, null, 8, ["modelValue", "track-by"])
            ]),
            ue("th", Kw, [
              p.value.find((x) => x.selector == n.value?.selector)?.suggestions ? (V(), je(O, {
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
              }, null, 8, ["modelValue", "options", "track-by"])) : (V(), je(N, {
                key: 1,
                modelValue: l.value,
                "onUpdate:modelValue": w[5] || (w[5] = (x) => l.value = x),
                width: "230px",
                placeholder: "Enter value"
              }, null, 8, ["modelValue"]))
            ]),
            ue("th", Jw, [
              ce(k, {
                disabled: !n.value || !l.value,
                block: "",
                style: { "min-width": "40px", float: "right" },
                onClick: E
              }, {
                default: De(() => [...w[6] || (w[6] = [
                  hn(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ]),
        "cell(actions)": De(({ rowIndex: x }) => [
          ce(k, {
            class: "ml-3",
            icon: "delete",
            preset: "plain",
            style: { "min-width": "40px", float: "right" },
            onClick: () => {
              i.value.splice(x, 1);
            }
          }, null, 8, ["onClick"])
        ]),
        "cell(prop)": De(({ value: x, row: z }) => [
          ue("div", $w, [
            ce(G, null, {
              default: De((Y) => [
                Y.value ? (V(), je(O, {
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
                }, null, 8, ["model-value", "options", "track-by", "onCreateNew", "onUpdate:modelValue"])) : (V(), se("span", {
                  key: 1,
                  class: us([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, Lt(x), 11, jw))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(comperator)": De(({ value: x, row: z }) => [
          ue("div", Xw, [
            ce(G, null, {
              default: De((Y) => [
                Y.value ? (V(), je(O, {
                  key: 0,
                  "model-value": { text: g.filter((R) => R.selector == x)[0].text, selector: x },
                  options: g,
                  "track-by": (R) => R.selector,
                  "onUpdate:modelValue": (R) => {
                    z.rowData.comperator = R.selector, Y.value = !1;
                  }
                }, null, 8, ["model-value", "track-by", "onUpdate:modelValue"])) : (V(), se("span", {
                  key: 1,
                  class: us([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, Lt(g.filter((R) => R.selector == x)[0].text), 11, Qw))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(value)": De(({ value: x, row: z }) => [
          ue("div", e2, [
            ce(G, null, {
              default: De((Y) => [
                Y.value ? (V(), je(N, {
                  key: 0,
                  "model-value": x,
                  onBlur: (R) => Y.value = !1,
                  onChange: (R) => {
                    z.rowData.value = R.target.value, Y.value = !1;
                  }
                }, null, 8, ["model-value", "onBlur", "onChange"])) : (V(), se("span", {
                  key: 1,
                  class: us([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, Lt(x), 11, t2))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        _: 1
      }, 8, ["items"]);
    };
  }
}), n2 = { class: "pmap_container" }, i2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", r2 = 5, s2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', o2 = /* @__PURE__ */ rt({
  __name: "MapPreviewPoint",
  setup(o) {
    const i = [50.93115286, 11.60392726], n = _e(null);
    return Zt(() => {
      n.value && n.value.leafletObject && n.value.leafletObject.invalidateSize();
    }), (l, d) => (V(), se("div", n2, [
      ce(j(Zh), {
        id: "map_t",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: r2,
        style: { height: "100%" }
      }, {
        default: De(() => [
          ce(j(qh), {
            attribution: s2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: i2
          }),
          il(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["center"])
    ]));
  }
}), a2 = /* @__PURE__ */ mr(o2, [["__scopeId", "data-v-c72cb17a"]]), l2 = { class: "flex flex-col md6 pa-3" }, u2 = { class: "flex flex-col md6 pa-3" }, c2 = { class: "inner" }, h2 = { class: "inner" }, d2 = ["src"], f2 = {
  key: 1,
  class: "placeholder"
}, p2 = /* @__PURE__ */ rt({
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
    VE((d) => ({
      v4eedf852: i.value.pointPin.color
    }));
    const i = gr(o, "modelValue"), n = [
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
    return (d, p) => (V(), se(Me, null, [
      ue("div", l2, [
        ce(j(Pp), {
          modelValue: i.value.point_render_as,
          "onUpdate:modelValue": p[0] || (p[0] = (g) => i.value.point_render_as = g),
          options: l,
          "value-key": "value",
          "label-key": "label",
          label: "render point as",
          inline: ""
        }, null, 8, ["modelValue"]),
        i.value.point_render_as == "icon" ? (V(), je(j(YE), {
          key: 0,
          modelValue: i.value.point,
          "onUpdate:modelValue": p[1] || (p[1] = (g) => i.value.point = g)
        }, null, 8, ["modelValue"])) : Ge("", !0),
        i.value.point_render_as == "prop" ? (V(), je(j(jE), {
          key: 1,
          modelValue: i.value.point_prop,
          "onUpdate:modelValue": p[2] || (p[2] = (g) => i.value.point_prop = g),
          options: n,
          label: "DataStream Prop",
          placeholder: "Select an option",
          "label-key": "text",
          "value-key": "selector"
        }, null, 8, ["modelValue"])) : Ge("", !0),
        i.value.point_render_as == "image" ? (V(), se(Me, { key: 2 }, [
          ce(j(Fo), {
            modelValue: i.value.point_image_url,
            "onUpdate:modelValue": p[3] || (p[3] = (g) => i.value.point_image_url = g),
            label: "Image URL",
            placeholder: "https://example.com/image.png"
          }, null, 8, ["modelValue"]),
          ce(j(Fo), {
            modelValue: i.value.point_image_size,
            "onUpdate:modelValue": p[4] || (p[4] = (g) => i.value.point_image_size = g),
            modelModifiers: { number: !0 },
            type: "number",
            label: "Image Size",
            suffix: "px",
            placeholder: "32"
          }, null, 8, ["modelValue"])
        ], 64)) : Ge("", !0),
        i.value.point_render_as != "none" ? (V(), se(Me, { key: 3 }, [
          ce(j(xp), { class: "mb15" }),
          ce(j(Lh), {
            modelValue: i.value.pointPin.color,
            "onUpdate:modelValue": p[5] || (p[5] = (g) => i.value.pointPin.color = g),
            class: "pin-color",
            label: "Pin colour"
          }, null, 8, ["modelValue"]),
          ce(j(Ih), {
            modelValue: i.value.pointPin.solid,
            "onUpdate:modelValue": p[6] || (p[6] = (g) => i.value.pointPin.solid = g),
            label: "Solid"
          }, null, 8, ["modelValue"])
        ], 64)) : Ge("", !0)
      ]),
      ue("div", u2, [
        ce(a2, Bu({ ref: "MapPrev2" }, i.value.point), {
          default: De(() => [
            ce(j(yl), { "lat-lng": [50.92828047934907, 11.587408017353823] }, {
              default: De(() => [
                ce(j(vl), { "class-name": "someExtraClass" }, {
                  default: De(() => [
                    i.value.point_render_as == "icon" ? (V(), se("div", {
                      key: 0,
                      class: us(["pin", "icon", { solid: i.value.pointPin.solid }])
                    }, [
                      ue("div", c2, [
                        ce(j(Dp), {
                          config: i.value.point,
                          configv: i.value.point,
                          "onUpdate:configv": p[7] || (p[7] = (g) => i.value.point = g)
                        }, null, 8, ["config", "configv"])
                      ])
                    ], 2)) : Ge("", !0),
                    i.value.point_render_as == "prop" ? (V(), se("div", {
                      key: 1,
                      class: us(["pin", "contain", "marker", { solid: i.value.pointPin.solid }])
                    }, [
                      ue("div", h2, Lt(i.value.point_prop), 1)
                    ], 2)) : Ge("", !0),
                    i.value.point_render_as == "image" ? (V(), se("div", {
                      key: 2,
                      class: "image-marker",
                      style: _a({ width: (i.value.point_image_size || 32) + "px", height: (i.value.point_image_size || 32) + "px" })
                    }, [
                      i.value.point_image_url ? (V(), se("img", {
                        key: 0,
                        src: i.value.point_image_url,
                        style: { width: "100%", height: "100%", objectFit: "contain" }
                      }, null, 8, d2)) : (V(), se("div", f2, "No Image"))
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
    ], 64));
  }
}), Wg = /* @__PURE__ */ mr(p2, [["__scopeId", "data-v-e554de3e"]]), g2 = "FeatureCollection", _2 = /* @__PURE__ */ JSON.parse('[{"type":"Feature","id":0,"properties":{"ID_0":86,"ISO":"DEU","NAME_ENGLI":"Germany","NAME_ISO":"GERMANY","NAME_FAO":"Germany","NAME_LOCAL":"Deutschland","NAME_OBSOL":null,"NAME_VARIA":"Germany","NAME_NONLA":null,"NAME_FRENC":"Allemagne","NAME_SPANI":"Alemania","NAME_RUSSI":"????????","NAME_ARABI":"???????","NAME_CHINE":"??","WASPARTOF":null,"CONTAINS":"East Germany|West Germany|DDR","SOVEREIGN":"Germany","ISO2":"DE","WWW":null,"FIPS":"GM","ISON":276,"VALIDFR":"Unknown","VALIDTO":"Present","EUmember":1},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.407297932191138,55.04395228653645],[8.442500114441145,55.0159721374514],[8.353609085083235,54.967361450195654],[8.366944313049544,54.90236282348644],[8.429720878601302,54.87763977050787],[8.812039375305233,54.9167366027832],[9.224779129028263,54.85595321655279],[9.282591819763411,54.80223464965832],[9.408679962158317,54.841171264648494],[9.435277938842773,54.788471221923885],[9.613611221313704,54.87597274780296],[9.603055953979776,54.83152770996105],[9.84305572509794,54.756248474121094],[9.955279350281046,54.780139923095646],[10.034722328186263,54.67235946655285],[9.983054161071891,54.701248168945426],[9.963891689870369,54.67303628596345],[10.034166336059798,54.66986083984375],[10.02750015258789,54.55041503906284],[9.840277671813965,54.46736145019537],[10.199167251587141,54.45597076416027],[10.13194561004633,54.311248779296875],[10.228056907653865,54.413471221923885],[10.318612098693961,54.43569564819353],[10.704722404479924,54.304862976074276],[10.928610801696777,54.381805419922216],[11.128055572509766,54.39069366455084],[11.058609962463436,54.35430526733438],[11.093610763550032,54.19791793823248],[10.75416564941412,54.05486297607433],[10.890831947326603,53.955696105956974],[11.179167747497502,54.01569366455084],[11.258610725403116,53.98485946655296],[11.258610725403116,53.93402862548851],[11.335276603698844,53.95847320556646],[11.45472240447998,53.900417327881144],[11.483610153198242,53.968471527099666],[11.378055572509936,53.997360229492244],[11.492501258850325,54.02291488647472],[11.490279197693042,53.968193054199276],[11.62583255767845,54.08958435058588],[11.525277137756348,54.07180404663086],[11.682498931884766,54.15319442749018],[12.087498664856184,54.18319320678711],[12.124721527099894,54.150138854980526],[12.09527778625494,54.18097305297857],[12.339165687561263,54.2979164123538],[12.519721031188965,54.484306335449276],[12.962499618530387,54.437637329101676],[12.68351455577495,54.40644354068151],[12.715277671814022,54.404304504394474],[12.678054809570312,54.37014007568371],[12.786945343017862,54.3962516784668],[12.810278892517147,54.3451385498048],[13.019721984863338,54.43902587890659],[13.093609809875716,54.366806030273665],[13.105833053588867,54.281806945800895],[13.286388397216797,54.235137939453296],[13.346388816833723,54.18041610717819],[13.318054199219034,54.15986251831066],[13.415834426880224,54.17514038085943],[13.382498741150187,54.14236068725586],[13.456945419311523,54.090694427490234],[13.696389198303223,54.17180633544956],[13.806944847107104,54.10319519042969],[13.74416637420677,54.029304504394645],[13.914167404174805,53.92235946655302],[13.824722290039404,53.866249084473],[13.937500953674316,53.90847396850597],[13.90583419799816,53.98986053466797],[13.965278625488452,53.99013900756853],[13.959721565246582,53.93402862548851],[14.042499542236555,53.942081451416016],[14.046944618225268,53.99652862548845],[14.00347855685085,54.0366769060455],[14.221389770507926,53.93013763427729],[14.186329841613997,53.91558074951217],[14.2173366546632,53.865417480469205],[13.806388854980412,53.85819625854492],[14.038612365722884,53.75513839721674],[14.2830562591555,53.73875045776384],[14.215276718139592,53.70264053344738],[14.273162841796875,53.69930648803711],[14.324908256530762,53.61864852905296],[14.302708625793684,53.54261016845703],[14.448929786682186,53.26163864135748],[14.378918647766113,53.204158782958984],[14.345703125000057,53.052917480468864],[14.142452239990291,52.961112976074276],[14.121270179748649,52.84027099609369],[14.639061927795638,52.58003234863287],[14.600604057312069,52.53302383422857],[14.631249427795638,52.499130249023665],[14.528908729553166,52.39641189575218],[14.570899963378906,52.2895622253418],[14.699570655822868,52.24108886718756],[14.669348716736067,52.12155151367199],[14.741278648376522,52.07339096069347],[14.70477771759056,51.94266128540062],[14.586701393127385,51.823604583740234],[14.738728523254622,51.66687011718744],[14.698139190673942,51.55850982666027],[14.933858871460018,51.482269287109375],[14.967818260192928,51.3544158935548],[15.028479576110897,51.30979919433605],[14.930111885070744,50.99140548706072],[14.8050794601441,50.828918457031534],[14.710870742797965,50.826759338379134],[14.611928939819393,50.85478210449219],[14.651672363281364,50.93264007568365],[14.560112953186092,50.92348480224615],[14.595055580139274,50.988510131836165],[14.501680374145508,51.05150604248075],[14.39741039276123,51.00828170776373],[14.29401683807373,51.05416488647461],[14.246868133545036,50.97320175170904],[14.400946617126465,50.94234848022472],[14.372268676757926,50.88858032226568],[13.954609870910872,50.80371093750006],[13.850809097290096,50.71820068359375],[13.548975944519043,50.713214874267635],[13.465190887451229,50.59648895263689],[13.374910354614315,50.643661499023665],[13.326787948608512,50.581813812255916],[13.248618125915641,50.59226989746088],[13.195990562439079,50.500591278076286],[13.0332670211792,50.50854873657232],[12.977046012878645,50.41427230834961],[12.828769683837834,50.45862197875988],[12.705128669738826,50.39775848388672],[12.51611328125,50.40008544921898],[12.364088058471737,50.27642440795904],[12.32758998870844,50.17972946166998],[12.282715797424373,50.18267822265631],[12.194091796874943,50.32287597656256],[12.085860252380428,50.25535202026384],[12.198919296264876,50.19562149047863],[12.19906044006359,50.11182022094732],[12.256030082702637,50.062278747558594],[12.547736167907715,49.92714309692383],[12.472072601318473,49.79027175903349],[12.402890205383244,49.75516128540045],[12.527859687805176,49.68775939941435],[12.588051795959473,49.54399871826166],[12.645830154418945,49.53105926513672],[12.661074638366813,49.43216705322294],[12.78410530090332,49.35190582275402],[13.033589363098258,49.30863952636736],[13.180210113525618,49.144439697265625],[13.403729438781738,49.05178070068382],[13.401620864868221,48.98391342163103],[13.63125991821289,48.95058059692383],[13.835957527160701,48.7750511169433],[13.78705883026123,48.721511840820426],[13.809944152832088,48.590904235840014],[13.721092224121207,48.51679229736334],[13.503158569335938,48.59651184082037],[13.435749053955078,48.564682006835994],[13.410618782043514,48.377738952636776],[13.285719871520996,48.30517196655279],[12.868214607238826,48.20366668701183],[12.753028869628963,48.11729049682623],[13.00114727020275,47.8522300720216],[12.91126728057867,47.73124313354498],[13.043539047241325,47.720989227295206],[13.105588912963867,47.639202117920036],[13.013463973999023,47.46576690673845],[12.799818038940373,47.561462402343864],[12.826677322387695,47.61626052856451],[12.782772064209098,47.675922393799055],[12.605334281921444,47.67924880981457],[12.506064414978141,47.62885284423828],[12.43596267700218,47.70073318481451],[12.258779525756836,47.67621994018549],[12.254279136657772,47.739990234375114],[12.17435169219982,47.698875427246094],[12.2092800140382,47.60120010375982],[11.636343955993766,47.598270416259766],[11.58102035522461,47.51182174682634],[11.437379837036133,47.51325988769548],[11.388031959533805,47.47192382812523],[11.424080848693961,47.44562149047846],[11.341606140136776,47.45182418823248],[11.27390003204357,47.391010284423885],[11.224139213562012,47.391269683837834],[11.246058464050293,47.43478012084961],[10.977520942687931,47.39611053466808],[10.926508903503532,47.478080749511776],[10.862998962402344,47.47803115844738],[10.91859436035162,47.51609420776373],[10.883132934570426,47.53810501098644],[10.772025108337402,47.516143798828125],[10.600060462951888,47.57365036010742],[10.561381340026912,47.53593063354498],[10.432245254516829,47.58555984497076],[10.471569061279524,47.43306350708008],[10.433580398559798,47.378719329833984],[10.170168876648177,47.26990127563522],[10.226869583130338,47.3929176330567],[10.095960617065373,47.3548698425293],[10.090755462646598,47.45659255981451],[9.997338294983138,47.48622512817394],[9.971186637878759,47.55048370361328],[9.87366962432867,47.53071975708008],[9.774218559265364,47.59680175781267],[9.688732147217138,47.543983459472656],[9.044014930725098,47.82368850708008],[9.221139907837028,47.66815185546875],[9.164094924927213,47.65358352661133],[8.99164009094244,47.747985839844034],[8.941365242004451,47.731822967529354],[9.006369590759277,47.69509124755882],[8.891834259033374,47.65522384643566],[8.808216094970987,47.74168014526367],[8.771158218383846,47.71976852416992],[8.79814815521263,47.67990875244152],[8.727890014648608,47.696842193603686],[8.730445861816634,47.766109466552734],[8.56799125671381,47.8143768310548],[8.404397964477653,47.680049896240405],[8.473678588867188,47.64335632324219],[8.607149124145621,47.675994873046875],[8.584686279296875,47.60031127929693],[8.520914077758846,47.63809585571306],[8.458548545837402,47.60595703125017],[8.488503456115836,47.581394195556754],[8.379540443420467,47.570251464843864],[8.202873229980526,47.62615585327154],[8.087834358215446,47.56288528442394],[7.944071769714355,47.549701690673885],[7.820772171020621,47.5946998596192],[7.669493198394889,47.53711700439453],[7.632383823394775,47.5624237060548],[7.670560836792106,47.59326171875006],[7.607770919799862,47.580959320068416],[7.512126922607479,47.696090698242244],[7.62215709686285,47.97365951538109],[7.568590164184684,48.0363388061524],[7.577859401702995,48.121391296386776],[7.745231628417969,48.32982635498047],[7.733546733856315,48.39868545532238],[7.835922718048039,48.63367462158203],[8.087015151977653,48.802013397217024],[8.22887897491455,48.97063064575218],[7.937040328979435,49.05623245239258],[7.635286331176815,49.05416870117199],[7.445586204528809,49.184024810791016],[7.293400287628174,49.115158081054744],[7.098150730133057,49.15433120727545],[7.05802440643356,49.112586975097656],[7.033706188201904,49.18826293945324],[6.924295425415494,49.223075866699276],[6.840444087982178,49.21423339843767],[6.834462642669791,49.15137863159214],[6.737987518310831,49.16456985473633],[6.53541898727417,49.434162139892635],[6.35482120513916,49.46498489379883],[6.363647937774658,49.57404708862322],[6.516485214233398,49.724178314208984],[6.528252124786377,49.808570861816406],[6.312281131744612,49.83549880981457],[6.098370075225944,50.05990982055687],[6.189638137817383,50.189464569091854],[6.170382022857893,50.23625564575207],[6.408339977264632,50.33306884765619],[6.33975791931158,50.37989425659174],[6.374671936035213,50.44594955444336],[6.330028057098446,50.49364471435558],[6.172194004059065,50.55051422119158],[6.278378963470516,50.61639785766596],[6.173087120056209,50.62143325805687],[6.118731975555477,50.708736419677905],[5.963199138641357,50.79505157470703],[6.0738401412965,50.846858978271484],[6.082940101623649,50.921798706054744],[6.015170097351074,50.93315887451172],[6.030001163482893,50.98336410522472],[5.903690814971924,50.978271484375284],[5.872058868408317,51.04341125488281],[5.969543933868522,51.034469604492415],[6.171799182891846,51.15293121337896],[6.144780158996809,51.17371749877941],[6.193139076233138,51.19166183471674],[6.091834068298397,51.175292968750284],[6.078186035156193,51.2447128295899],[6.231968879699764,51.36598205566412],[6.220355987548942,51.50917053222656],[6.090958118438778,51.605220794677734],[6.118769168853703,51.6604576110841],[5.964007854461727,51.74161148071289],[6.004777908325309,51.76816940307623],[5.964649200439453,51.824409484863395],[6.168982028961295,51.84503173828142],[6.107149124145565,51.88898849487299],[6.158889770507812,51.905384063720646],[6.417467117309798,51.82563400268566],[6.402299880981388,51.87480163574219],[6.742709159851131,51.89905166625988],[6.835361003875846,51.99552917480486],[6.698178768157959,52.040119171142805],[6.700688838958968,52.07379150390648],[7.069309234619254,52.23925399780296],[7.029718875884953,52.29431915283209],[7.07911586761486,52.38272476196295],[7.006279945373649,52.469501495361385],[6.950539112091064,52.43696975708002],[6.764862060546875,52.464931488037166],[6.683791160583496,52.55606460571312],[6.768260955810604,52.56516647338867],[6.724298000335807,52.59061050415045],[6.743810176849422,52.64709091186529],[7.051859855651912,52.63584899902344],[7.094276905059871,52.84645080566429],[7.26148796081543,52.997539520263615],[7.226968765258846,53.124462127685604],[7.284560203552189,53.19956970214872],[7.205277919769514,53.23880767822271],[7.249166965484562,53.32986068725586],[6.998610973358154,53.361251831054915],[7.034166812896729,53.53319549560558],[7.13361120223999,53.53236007690424],[7.09027719497675,53.57652664184576],[7.158053874969539,53.627918243408146],[7.316944122314794,53.683471679687614],[8.015831947326944,53.71069335937506],[8.172499656677246,53.554584503173885],[8.155276298523177,53.513748168945426],[8.06472206115734,53.50597381591797],[8.073611259460677,53.46486282348633],[8.252499580383244,53.399028778076115],[8.316389083862418,53.46625137329124],[8.316389083862418,53.5220832824707],[8.230832099914778,53.52041625976574],[8.271943092346419,53.609859466552734],[8.516389846801701,53.55625152587902],[8.556944847106877,53.52569580078131],[8.519721984863338,53.50097274780279],[8.570834159851074,53.51819610595703],[8.483611106872786,53.69430541992193],[8.608056068420467,53.87874984741228],[8.883610725402946,53.82791519165045],[9.09972286224371,53.86291503906256],[8.963610649109114,53.894584655761776],[8.819722175598258,54.02152633666998],[8.98250007629423,54.04652786254911],[8.927499771118164,54.131805419921875],[8.85916709899908,54.12263870239269],[8.807498931884709,54.173194885253906],[8.83583259582548,54.251804351806584],[8.951944351196516,54.31289291381836],[8.846387863159237,54.26291656494169],[8.580278396606559,54.30402755737316],[8.60416603088413,54.357917785644645],[8.685832023620605,54.35708236694347],[8.608610153198185,54.38624954223644],[8.893611907959212,54.41208267211914],[9.02361106872587,54.472637176513786],[8.989167213440396,54.519306182861385],[8.903610229492188,54.46069335937506],[8.806388854980526,54.47041702270508],[8.890276908874682,54.59263992309582],[8.813055992126749,54.597362518311],[8.822500228881836,54.64597320556675],[8.687498092651595,54.72986221313516],[8.590276718139762,54.885139465331974],[8.41638755798374,54.84708404541021],[8.310277938842887,54.874305725097656],[8.279722213745174,54.75180435180687],[8.298054695129508,54.909305572509766],[8.407297932191138,55.04395228653645]],[[12.645990473625632,54.40224791003495],[12.435832977295036,54.378749847412166],[12.363612174987793,54.26597213745117],[12.460276603699072,54.24847412109369],[12.409167289733887,54.27986145019537],[12.645990473625632,54.40224791003495]],[[9.941296802167107,54.63977103947349],[9.933056831359806,54.627639770507926],[9.859076590154903,54.5913954629662],[9.938055038452319,54.62347412109392],[9.941296802167107,54.63977103947349]],[[9.740505208965892,54.53330511971416],[9.7124996185305,54.519584655761946],[9.545277595520133,54.5093040466308],[9.574166297912711,54.475139617920036],[9.624165534973372,54.51152801513672],[9.714722633362271,54.49124908447277],[9.740505208965892,54.53330511971416]]],[[[13.94762775222483,54.063982999902095],[13.910832405090275,54.064304351806754],[13.862501144409407,53.99930572509771],[13.858055114746207,54.04847335815441],[13.7691659927371,54.01902770996128],[13.812499046325684,54.09902954101568],[13.749167442322118,54.159027099609716],[13.803610801696834,54.17847061157232],[13.870834350586051,54.10152816772478],[13.94762775222483,54.063982999902095]]],[[[8.411785232872631,55.04948306636195],[8.417499542236328,55.05652618408209],[8.463055610656681,55.04569625854492],[8.411785232872631,55.04948306636195]]],[[[13.406170966791661,54.596560494420075],[13.3702783584597,54.61458206176752],[13.243055343628384,54.55875015258789],[13.2830562591555,54.64625167846674],[13.160833358764933,54.55902862548828],[13.249724388122615,54.659862518310945],[13.42916679382347,54.68458175659174],[13.37583255767845,54.63513946533203],[13.406170966791661,54.596560494420075]]],[[[13.446298879365024,54.57641239394589],[13.679720878601302,54.56263732910156],[13.569721221924112,54.46180725097662],[13.76694393157959,54.34152603149454],[13.72527885437006,54.27347183227545],[13.646389007568416,54.296527862548885],[13.70416736602806,54.326248168945426],[13.610832214355753,54.31624984741222],[13.68305587768566,54.34930419921881],[13.58083438873291,54.35291671752947],[13.352499008178768,54.26958465576217],[13.41805553436285,54.25485992431646],[13.393610000610408,54.22097396850586],[13.290279388427791,54.25125122070318],[13.335277557373274,54.278194427490234],[13.139166831970158,54.2823600769043],[13.18472290039091,54.30097198486328],[13.114721298217717,54.331806182861555],[13.127499580383471,54.37125015258789],[13.261943817138842,54.38291549682657],[13.149722099304313,54.42902755737305],[13.26805686950695,54.47930526733427],[13.158611297607422,54.504028320312614],[13.143611907959041,54.54680633544922],[13.305277824402083,54.51402664184582],[13.29749870300293,54.55236053466797],[13.368612289428881,54.57930374145502],[13.338055610656681,54.54875183105469],[13.377498626709098,54.55902862548828],[13.413056373596476,54.49375152587885],[13.506387710571403,54.480972290039006],[13.501943588257006,54.548473358154695],[13.446298879365024,54.57641239394589]]],[[[13.184166908264217,54.49430465698282],[13.226943969726733,54.468750000000114],[13.120834350586222,54.44235992431646],[13.184166908264217,54.49430465698282]]],[[[13.125168920038526,54.58240134124839],[13.13638877868675,54.6051406860351],[13.158054351806868,54.57930374145502],[13.125168920038526,54.58240134124839]]],[[[11.069721221924055,54.53470230102539],[11.23416805267334,54.5068054199221],[11.31360912322998,54.402084350586335],[11.00916671752924,54.44124984741211],[11.069721221924055,54.53470230102539]]],[[[8.691945075988713,54.557083129882756],[8.671944618225154,54.49458312988281],[8.589166641235579,54.51180648803711],[8.691945075988713,54.557083129882756]]],[[[8.539723396301383,54.75569534301769],[8.595276832580623,54.71958160400385],[8.56694316864025,54.6798629760745],[8.396944999694881,54.70569610595703],[8.539723396301383,54.75569534301769]]],[[[8.551387786865234,54.57958221435541],[8.573056221008358,54.55875015258789],[8.50916671752941,54.57402801513683],[8.551387786865234,54.57958221435541]]],[[[8.476387977600098,54.47652816772461],[8.52583217620861,54.433471679687614],[8.470277786254883,54.42180633544933],[8.476387977600098,54.47652816772461]]],[[[8.483055114746321,54.58458328247116],[8.501387596130428,54.55819320678711],[8.455277442932186,54.55875015258789],[8.483055114746321,54.58458328247116]]],[[[8.356944084167594,54.71152877807617],[8.395278930664062,54.61208343505899],[8.292498588561955,54.66708374023466],[8.356944084167594,54.71152877807617]]],[[[7.895833015442065,53.79402923584007],[7.968054771423567,53.774860382080305],[7.846387863159464,53.78680419921881],[7.895833015442065,53.79402923584007]]],[[[7.706388950348241,53.77958297729492],[7.805832862854288,53.774581909179744],[7.666944026947249,53.7587509155274],[7.706388950348241,53.77958297729492]]],[[[7.573610782623518,53.757362365722656],[7.627499103546597,53.74847412109381],[7.467502117157153,53.727085113525504],[7.573610782623518,53.757362365722656]]],[[[7.394165992737044,53.73458480834961],[7.429722785949707,53.725139617920206],[7.360278129577864,53.72680664062494],[7.394165992737044,53.73458480834961]]],[[[7.058610916137638,53.68458175659197],[7.095833778381348,53.680694580078125],[6.854722023010595,53.66125106811535],[7.058610916137638,53.68458175659197]]],[[[6.761944770812988,53.61875152587896],[6.811388969421671,53.60263824462885],[6.721387863159407,53.583751678466854],[6.749722003937052,53.55680465698242],[6.630833148956526,53.59791564941406],[6.761944770812988,53.61875152587896]]]]}}]'), m2 = {
  type: g2,
  features: _2
}, v2 = { class: "pmap_container" }, y2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", E2 = 5, T2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', w2 = /* @__PURE__ */ rt({
  __name: "MapPreview",
  props: {
    config: {}
  },
  setup(o) {
    const i = [50.93115286, 11.60392726], n = _e(null), l = o, { config: d } = bl(l), p = (g) => d.value;
    return ki(() => d, () => {
      n.value.leafletObject?.eachLayer((g) => {
        try {
          g.setStyle(p);
        } catch (v) {
          console.log(v);
        }
      });
    }, { deep: !0 }), (g, v) => (V(), se("div", v2, [
      ce(j(Zh), {
        id: "map",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: E2,
        style: { height: "100%" }
      }, {
        default: De(() => [
          ce(j(qh), {
            attribution: T2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: y2
          }),
          ce(j(Go), {
            geojson: j(m2),
            optionsStyle: p
          }, null, 8, ["geojson", "optionsStyle"])
        ]),
        _: 1
      }, 8, ["center"])
    ]));
  }
}), S2 = /* @__PURE__ */ mr(w2, [["__scopeId", "data-v-77cbf15c"]]), A2 = {
  class: "settings-section",
  "data-section": "Style settings"
}, C2 = { class: "settings-container" }, b2 = /* @__PURE__ */ rt({
  __name: "MapSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = gr(o, "modelValue");
    return (n, l) => (V(), se("section", A2, [
      ue("div", C2, [
        ce(j(Ih), {
          modelValue: i.value.stroke,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value.stroke = d),
          label: "stroke"
        }, null, 8, ["modelValue"]),
        ce(j(Lh), {
          modelValue: i.value.color,
          "onUpdate:modelValue": l[1] || (l[1] = (d) => i.value.color = d),
          label: "line colour"
        }, null, 8, ["modelValue"]),
        ce(j(Fo), {
          modelValue: i.value.weight,
          "onUpdate:modelValue": l[2] || (l[2] = (d) => i.value.weight = d),
          type: "number",
          label: "line size",
          suffix: "px"
        }, null, 8, ["modelValue"]),
        ce(j(Nh), {
          modelValue: i.value.opacity,
          "onUpdate:modelValue": l[3] || (l[3] = (d) => i.value.opacity = d),
          min: 0,
          max: 1,
          step: 0.01,
          label: "line opacity"
        }, null, 8, ["modelValue"]),
        ce(j(Ih), {
          modelValue: i.value.fill,
          "onUpdate:modelValue": l[4] || (l[4] = (d) => i.value.fill = d),
          label: "fill"
        }, null, 8, ["modelValue"]),
        ce(j(Nh), {
          modelValue: i.value.fillOpacity,
          "onUpdate:modelValue": l[5] || (l[5] = (d) => i.value.fillOpacity = d),
          min: 0,
          max: 1,
          step: 0.01,
          label: "fill opacity"
        }, null, 8, ["modelValue"]),
        ce(j(Lh), {
          modelValue: i.value.fillColor,
          "onUpdate:modelValue": l[6] || (l[6] = (d) => i.value.fillColor = d),
          label: "fill colour"
        }, null, 8, ["modelValue"]),
        ce(j(Fo), {
          modelValue: i.value.className,
          "onUpdate:modelValue": l[7] || (l[7] = (d) => i.value.className = d),
          label: "class name"
        }, null, 8, ["modelValue"])
      ])
    ]));
  }
}), O2 = /* @__PURE__ */ mr(b2, [["__scopeId", "data-v-b31840f8"]]), L2 = { class: "flex flex-col md6 pa-3" }, I2 = { class: "flex flex-col md6 pa-3" }, Zg = /* @__PURE__ */ rt({
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
    const i = gr(o, "modelValue");
    return (n, l) => (V(), se(Me, null, [
      ue("div", L2, [
        ce(O2, {
          modelValue: i.value,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value = d)
        }, null, 8, ["modelValue"])
      ]),
      ue("div", I2, [
        ce(S2, {
          ref: "MapPrev",
          config: i.value
        }, null, 8, ["config"])
      ])
    ], 64));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const N2 = () => {
};
function Hg(o, i, n) {
  var l;
  let d;
  Ip(n) ? d = { evaluating: n } : d = n || {};
  const { lazy: p = !1, flush: g = "sync", evaluating: v = void 0, shallow: m = !0, onError: E = (l = globalThis.reportError) !== null && l !== void 0 ? l : N2 } = d, A = kf(!p), w = m ? kf(i) : _e(i);
  let O = 0;
  return WE(async (N) => {
    if (!A.value) return;
    O++;
    const k = O;
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
      k === O && (w.value = X);
    } catch (X) {
      E(X);
    } finally {
      v && k === O && (v.value = !1), G = !0;
    }
  }, { flush: g }), p ? Tn(() => (A.value = !0, w.value)) : w;
}
const D2 = /* @__PURE__ */ rt({
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
    const i = gr(o, "modelValue");
    return (n, l) => (V(), se(Me, null, [
      ue("div", null, [
        ce(j(Pp), {
          modelValue: i.value.placement,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value.placement = d),
          options: [j(Mo).Thing, j(Mo).OberservedArea],
          label: "render within",
          stacked: ""
        }, null, 8, ["modelValue", "options"])
      ]),
      l[1] || (l[1] = ue("div", null, null, -1))
    ], 64));
  }
}), R2 = { class: "auto-update-settings" }, P2 = { class: "refresh-setting" }, x2 = { class: "refresh-info" }, F2 = { class: "info-item" }, M2 = { class: "value" }, B2 = {
  key: 0,
  class: "info-item"
}, G2 = { class: "value" }, k2 = /* @__PURE__ */ rt({
  __name: "AutoUpdateSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = gr(o, "modelValue");
    let n = null;
    const l = (g) => {
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
    return (g, v) => (V(), se("div", R2, [
      v[3] || (v[3] = ue("h3", null, "Auto-update Configuration", -1)),
      ue("div", P2, [
        ue("label", null, "Observation Refresh Time: " + Lt(d(i.value.ObservationrefreshTime || 0)), 1),
        ce(j(Nh), {
          "model-value": i.value.ObservationrefreshTime || 0,
          "onUpdate:modelValue": l,
          min: 0,
          max: 30,
          step: 1,
          suffix: "s",
          class: "refresh-slider"
        }, null, 8, ["model-value"]),
        v[0] || (v[0] = ue("div", { class: "slider-labels" }, [
          ue("span", null, "Never"),
          ue("span", null, "1s"),
          ue("span", null, "15s"),
          ue("span", null, "30s")
        ], -1))
      ]),
      ue("div", x2, [
        ue("div", F2, [
          v[1] || (v[1] = ue("span", { class: "label" }, "Current Setting:", -1)),
          ue("span", M2, Lt(d(i.value.ObservationrefreshTime || 0)), 1)
        ]),
        i.value.lastUpdate ? (V(), se("div", B2, [
          v[2] || (v[2] = ue("span", { class: "label" }, "Last Update:", -1)),
          ue("span", G2, Lt(p(i.value.lastUpdate)), 1)
        ])) : Ge("", !0)
      ])
    ]));
  }
}), U2 = /* @__PURE__ */ mr(k2, [["__scopeId", "data-v-c7aa1779"]]), z2 = { class: "tree_detail" }, V2 = { class: "tree" }, W2 = { class: "menu" }, Z2 = { class: "menuitem" }, H2 = { class: "checked" }, Y2 = ["onClick"], q2 = ["onClick"], K2 = { class: "icon" }, J2 = { class: "marked" }, $2 = { class: "text" }, j2 = ["onUpdate:modelValue"], X2 = ["onClick"], Q2 = { class: "options" }, eS = {
  key: 0,
  class: "childs"
}, tS = ["onClick"], nS = { class: "icon" }, iS = { class: "marked" }, rS = { class: "text" }, sS = ["onUpdate:modelValue"], oS = ["onClick"], aS = { class: "options" }, lS = {
  key: 0,
  class: "childs"
}, uS = ["onClick"], cS = { class: "icon" }, hS = { class: "marked" }, dS = { class: "text" }, fS = { class: "options" }, pS = { class: "detail" }, gS = {
  key: 0,
  class: "content"
}, _S = { class: "scroller" }, mS = {
  key: 0,
  class: "full"
}, vS = {
  key: 0,
  class: "rowlayout"
}, yS = {
  key: 1,
  class: "full rowlayout"
}, ES = {
  key: 2,
  class: "full"
}, TS = {
  key: 3,
  class: "full"
}, wS = {
  key: 1,
  class: "content center"
}, SS = { class: "prose" }, AS = { style: { margin: "10px 0", "padding-left": "20px" } }, CS = { class: "prose" }, bS = { class: "choices" }, OS = { class: "choice__text" }, LS = { class: "choice__name" }, IS = { class: "choice__what" }, NS = /* @__PURE__ */ rt({
  __name: "RendererModal",
  props: /* @__PURE__ */ kh({
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
    const i = gr(o, "modelValue"), n = gr(o, "show"), l = gr(o, "layer"), d = o, { services: p, allLayers: g } = bl(d);
    _e([]);
    const v = _e(0), m = _e(void 0), E = _e(!1), A = _e(null), w = _e([]), O = _e(!1), N = _e(null), { getAll: k, getById: G } = dl(), X = (K) => g?.value ? g.value.filter(
      (U) => U.styleIds?.includes(K)
    ) : [], x = (K) => {
      const U = X(K.id);
      U.length > 0 ? (A.value = K, w.value = U, E.value = !0) : z(K);
    }, z = (K) => {
      w.value.forEach((ie) => {
        const ne = ie.styleIds?.indexOf(K.id);
        ne !== void 0 && ne !== -1 && ie.styleIds?.splice(ne, 1);
      });
      const U = i.value.indexOf(K);
      U !== -1 && (i.value.splice(U, 1), m.value?.id === K.id && (m.value = void 0)), E.value = !1, A.value = null, w.value = [];
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
          point: Object.assign(new Ke(), {
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
            comperator: Rr.equals,
            value: "*"
          }
        ],
        placement: Mo.Thing,
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new Ke(), {
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
        id: Yr()
      });
    }, fe = (K) => {
      N.value = K, O.value = !0;
    }, Se = (K) => {
      if (!N.value) return;
      const U = G(K), ie = {
        component: K
      };
      U?.isLayerRenderer ? ie.setting = {
        conditions: [],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new Ke(), {
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
      } : ie.setting = {}, N.value.observations || (N.value.observations = []), N.value.observations.push(ie), O.value = !1, N.value = null;
    }, Ie = Hg(async () => {
      const K = l.value;
      if (!K) return [];
      if (K.type == "WFSLayer")
        try {
          const ie = await p.value.find((ne) => ne.id == K.service)?.service?.getFeatureTypePropDetails(K.name ?? "");
          return console.log(ie), Object.entries(ie).map(
            (ne) => ({ text: ne[0], selector: ne[0], suggestions: ne[1].uniqueValues.map((Ee) => Ee.value) })
          );
        } catch (U) {
          return console.log(U), [];
        }
      else if (K.type == "GEOJSON" && K.geoJson)
        try {
          const U = K.geoJson;
          if (!U?.features || U.features.length === 0)
            return [];
          const ie = /* @__PURE__ */ new Map();
          for (const ne of U.features)
            if (ne.properties)
              for (const [Ee, de] of Object.entries(ne.properties))
                ie.has(Ee) || ie.set(Ee, /* @__PURE__ */ new Set()), ie.get(Ee)?.add(de);
          return Array.from(ie.entries()).map(([ne, Ee]) => ({
            text: ne,
            selector: ne,
            suggestions: Array.from(Ee)
          }));
        } catch (U) {
          return console.log(U), [];
        }
      else
        return [];
    }, []);
    ki(n, (K) => {
      K && (m.value = void 0);
    }), ki(m, () => {
      v.value = 0;
    });
    const he = _e(void 0), Oe = Tn(() => {
      const K = m.value;
      return K ? K.component && !K.datastream ? ["Settings"] : l.value?.type === "OGCSTA" ? K.thing ? ["Conditions", "Points", "Areas", "Auto-update"] : ["Conditions", "Points", "Areas", "Placement"] : ["Conditions", "Points", "Areas"] : [];
    }), ae = Tn(() => Oe.value.map((K) => ({ id: K, label: K }))), Z = Tn({
      get: () => Oe.value[v.value] ?? Oe.value[0] ?? "",
      set: (K) => {
        const U = Oe.value.indexOf(K);
        v.value = U >= 0 ? U : 0;
      }
    });
    return (K, U) => (V(), se(Me, null, [
      ce(j(ch), {
        modelValue: n.value,
        "onUpdate:modelValue": U[14] || (U[14] = (ie) => n.value = ie),
        size: "lg",
        title: "Styles"
      }, {
        actions: De(() => [
          ce(j(ss), {
            onClick: U[13] || (U[13] = (ie) => n.value = !1)
          }, {
            default: De(() => [...U[24] || (U[24] = [
              hn("Close", -1)
            ])]),
            _: 1
          })
        ]),
        default: De(() => [
          ue("div", z2, [
            ue("div", V2, [
              ue("div", W2, [
                ue("div", Z2, [
                  ue("div", H2, [
                    ce(j(ss), {
                      intent: "quiet",
                      title: "Add style",
                      onClick: R
                    }, {
                      default: De(() => [
                        ce(j(Zr), {
                          name: "add",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                ce(j(xp)),
                (V(!0), se(Me, null, En(i.value, (ie) => (V(), se("div", {
                  key: ie.id
                }, [
                  ue("div", {
                    class: us([{ active: ie.id == m.value?.id }, "menuitem"]),
                    onClick: (ne) => m.value = ie
                  }, [
                    ue("div", {
                      class: "checked",
                      onClick: () => {
                        const ne = l.value?.styleIds?.indexOf(ie.id);
                        ne != -1 ? l.value?.styleIds?.splice(ne, 1) : l.value?.styleIds?.push(ie.id);
                      }
                    }, [
                      ce(j(Zr), {
                        name: "check",
                        size: "sm",
                        tone: l.value?.styleIds?.includes(ie.id) ? "color-accent" : "color-divider"
                      }, null, 8, ["tone"])
                    ], 8, q2),
                    ue("div", K2, [
                      ue("span", J2, [
                        ce(j(Zr), {
                          name: "style",
                          size: "sm"
                        }),
                        U[18] || (U[18] = ue("span", { class: "marked__tag" }, "Th", -1))
                      ])
                    ]),
                    ue("div", $2, [
                      he.value === ie.id ? Uf((V(), se("input", {
                        key: 0,
                        "onUpdate:modelValue": (ne) => ie.name = ne,
                        class: "item__input",
                        onBlur: U[0] || (U[0] = (ne) => he.value = void 0),
                        onKeyup: U[1] || (U[1] = zf((ne) => he.value = void 0, ["enter"]))
                      }, null, 40, j2)), [
                        [Vf, ie.name]
                      ]) : (V(), se("span", {
                        key: 1,
                        onClick: (ne) => he.value = ie.id
                      }, Lt(ie.name), 9, X2))
                    ]),
                    ue("div", Q2, [
                      l.value?.type == "OGCSTA" && ie?.thing ? (V(), je(j(ss), {
                        key: 0,
                        intent: "quiet",
                        title: "Add datastream style",
                        onClick: q
                      }, {
                        default: De(() => [
                          ce(j(Zr), {
                            name: "add",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      })) : Ge("", !0),
                      ce(j(ss), {
                        intent: "quiet",
                        title: "Delete style",
                        onClick: (ne) => x(ie)
                      }, {
                        default: De(() => [
                          ce(j(Zr), {
                            name: "delete",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ], 10, Y2),
                  ie?.thing ? (V(), se("div", eS, [
                    (V(!0), se(Me, null, En(ie?.ds_renderer, (ne) => (V(), se("div", {
                      key: ne.id,
                      class: us([{ active: ne.id == m.value?.id }, "menuitem"]),
                      onClick: (Ee) => m.value = ne
                    }, [
                      U[20] || (U[20] = ue("div", null, null, -1)),
                      ue("div", nS, [
                        ue("span", iS, [
                          ce(j(Zr), {
                            name: "settings",
                            size: "sm"
                          }),
                          U[19] || (U[19] = ue("span", { class: "marked__tag" }, "DS", -1))
                        ])
                      ]),
                      ue("div", rS, [
                        he.value === ne.id ? Uf((V(), se("input", {
                          key: 0,
                          "onUpdate:modelValue": (Ee) => ne.name = Ee,
                          class: "item__input",
                          onBlur: U[2] || (U[2] = (Ee) => he.value = void 0),
                          onKeyup: U[3] || (U[3] = zf((Ee) => he.value = void 0, ["enter"]))
                        }, null, 40, sS)), [
                          [Vf, ne.name]
                        ]) : (V(), se("span", {
                          key: 1,
                          onClick: (Ee) => he.value = ne.id
                        }, Lt(ne.name), 9, oS))
                      ]),
                      ue("div", aS, [
                        ce(j(ss), {
                          intent: "quiet",
                          title: "Add observation",
                          onClick: (Ee) => fe(ne)
                        }, {
                          default: De(() => [
                            ce(j(Zr), {
                              name: "add",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        ce(j(ss), {
                          intent: "quiet",
                          title: "Delete datastream style",
                          onClick: () => {
                            const Ee = ie, de = Ee.ds_renderer.indexOf(ne);
                            de !== -1 && (Ee.ds_renderer.splice(de, 1), m.value?.id === ne.id && (m.value = void 0));
                          }
                        }, {
                          default: De(() => [
                            ce(j(Zr), {
                              name: "delete",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ], 10, tS))), 128)),
                    (V(!0), se(Me, null, En(ie?.ds_renderer, (ne) => (V(), se(Me, {
                      key: "obs-parent-" + ne.id
                    }, [
                      ne.observations && ne.observations.length > 0 ? (V(), se("div", lS, [
                        (V(!0), se(Me, null, En(ne.observations, (Ee, de) => (V(), se("div", {
                          key: "obs-" + ne.id + "-" + de,
                          class: us([{ active: Ee === m.value }, "menuitem"]),
                          onClick: (yt) => m.value = Ee
                        }, [
                          U[22] || (U[22] = ue("div", null, null, -1)),
                          ue("div", cS, [
                            ue("span", hS, [
                              ce(j(Zr), {
                                name: "visibility",
                                size: "sm"
                              }),
                              U[21] || (U[21] = ue("span", { class: "marked__tag" }, "Obs", -1))
                            ])
                          ]),
                          ue("div", dS, Lt(Ee.component || "Observation"), 1),
                          ue("div", fS, [
                            ce(j(ss), {
                              intent: "quiet",
                              title: "Delete observation",
                              onClick: () => {
                                if (!ne.observations) return;
                                const yt = ne.observations.indexOf(Ee);
                                yt !== -1 && (ne.observations.splice(yt, 1), m.value === Ee && (m.value = void 0));
                              }
                            }, {
                              default: De(() => [
                                ce(j(Zr), {
                                  name: "delete",
                                  size: "sm"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ], 10, uS))), 128))
                      ])) : Ge("", !0)
                    ], 64))), 128))
                  ])) : Ge("", !0)
                ]))), 128))
              ])
            ]),
            ue("div", pS, [
              ce(j(XE), {
                modelValue: Z.value,
                "onUpdate:modelValue": U[4] || (U[4] = (ie) => Z.value = ie),
                tabs: ae.value,
                label: "Renderer settings"
              }, null, 8, ["modelValue", "tabs"]),
              m.value ? (V(), se("div", gS, [
                ue("div", _S, [
                  m.value?.component && !m.value?.datastream ? (V(), se("div", mS, [
                    j(G)(m.value.component)?.setupComponent ? (V(), je(Oh(j(G)(m.value.component)?.setupComponent), {
                      key: 0,
                      modelValue: m.value.setting,
                      "onUpdate:modelValue": U[5] || (U[5] = (ie) => m.value.setting = ie)
                    }, null, 8, ["modelValue"])) : Ge("", !0)
                  ])) : (V(), se(Me, { key: 1 }, [
                    v.value == 1 || v.value == 2 ? (V(), se("div", vS, [
                      v.value == 1 ? (V(), je(Wg, {
                        key: 0,
                        modelValue: m.value.renderer,
                        "onUpdate:modelValue": U[6] || (U[6] = (ie) => m.value.renderer = ie)
                      }, null, 8, ["modelValue"])) : Ge("", !0),
                      v.value == 2 ? (V(), je(Zg, {
                        key: 1,
                        modelValue: m.value.renderer.area,
                        "onUpdate:modelValue": U[7] || (U[7] = (ie) => m.value.renderer.area = ie)
                      }, null, 8, ["modelValue"])) : Ge("", !0)
                    ])) : Ge("", !0),
                    v.value == 3 && l.value?.type == "OGCSTA" && !m.value.thing ? (V(), se("div", yS, [
                      ce(D2, {
                        modelValue: m.value,
                        "onUpdate:modelValue": U[8] || (U[8] = (ie) => m.value = ie)
                      }, null, 8, ["modelValue"])
                    ])) : v.value == 3 && l.value?.type == "OGCSTA" && m.value.thing ? (V(), se("div", ES, [
                      ce(U2, {
                        modelValue: m.value,
                        "onUpdate:modelValue": U[9] || (U[9] = (ie) => m.value = ie)
                      }, null, 8, ["modelValue"])
                    ])) : (V(), se("div", TS, [
                      l.value?.type == "OGCSTA" && m.value.thing ? (V(), se(Me, { key: 0 }, [
                        v.value == 0 ? (V(), je(Gh, {
                          key: 0,
                          modelValue: m.value.thing,
                          "onUpdate:modelValue": U[10] || (U[10] = (ie) => m.value.thing = ie)
                        }, null, 8, ["modelValue"])) : Ge("", !0)
                      ], 64)) : (V(), se(Me, { key: 1 }, [
                        v.value == 0 ? (V(), je(Gh, {
                          key: 0,
                          modelValue: m.value.datastream,
                          "onUpdate:modelValue": U[11] || (U[11] = (ie) => m.value.datastream = ie),
                          "thing-props": j(Ie),
                          "onUpdate:thingProps": U[12] || (U[12] = (ie) => Ip(Ie) ? Ie.value = ie : null)
                        }, null, 8, ["modelValue", "thing-props"])) : Ge("", !0)
                      ], 64))
                    ]))
                  ], 64))
                ])
              ])) : (V(), se("div", wS, [
                ce(j(Zr), {
                  name: "style",
                  size: "lg",
                  class: "empty__icon"
                }),
                ue("span", null, [
                  ue("span", {
                    class: "underline blue",
                    onClick: R
                  }, "create"),
                  U[23] || (U[23] = hn(" or select Sytle to edit", -1))
                ])
              ]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ce(j(ch), {
        modelValue: E.value,
        "onUpdate:modelValue": U[16] || (U[16] = (ie) => E.value = ie),
        title: "Delete style",
        size: "sm",
        onCancel: Y
      }, {
        actions: De(() => [
          ce(j(ss), {
            intent: "quiet",
            onClick: Y
          }, {
            default: De(() => [...U[28] || (U[28] = [
              hn("Cancel", -1)
            ])]),
            _: 1
          }),
          ce(j(ss), {
            intent: "danger",
            onClick: U[15] || (U[15] = (ie) => z(A.value))
          }, {
            default: De(() => [...U[29] || (U[29] = [
              hn("Delete", -1)
            ])]),
            _: 1
          })
        ]),
        default: De(() => [
          ue("div", SS, [
            ue("p", null, [
              U[25] || (U[25] = ue("strong", null, "Warning:", -1)),
              hn(' This style "' + Lt(A.value?.name) + '" is used by ' + Lt(w.value.length) + " layer(s):", 1)
            ]),
            ue("ul", AS, [
              (V(!0), se(Me, null, En(w.value, (ie, ne) => (V(), se("li", { key: ne }, Lt(ie.name || ie.title || "Unnamed Layer"), 1))), 128))
            ]),
            U[26] || (U[26] = ue("p", null, "If you delete this style, it will be removed from all these layers.", -1)),
            U[27] || (U[27] = ue("p", null, [
              ue("strong", null, "Do you want to continue?")
            ], -1))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ce(j(ch), {
        modelValue: O.value,
        "onUpdate:modelValue": U[17] || (U[17] = (ie) => O.value = ie),
        title: "Select observation renderer",
        size: "md"
      }, {
        default: De(() => [
          ue("div", CS, [
            U[30] || (U[30] = ue("p", null, "Choose which type of renderer to use for observations:", -1)),
            ue("div", bS, [
              (V(!0), se(Me, null, En(j(k)(), ([ie, ne]) => (V(), je(j(ss), {
                key: ie,
                class: "choice",
                onClick: (Ee) => Se(ie)
              }, {
                default: De(() => [
                  ue("span", OS, [
                    ue("span", LS, Lt(ne.name), 1),
                    ue("span", IS, Lt(ne.description), 1)
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
}), DS = /* @__PURE__ */ mr(NS, [["__scopeId", "data-v-ec924328"]]), RS = { class: "va-modal__message" }, PS = { class: "m-0" }, xS = { class: "settings-container" }, FS = { key: 0 }, MS = { key: 1 }, BS = { style: { "margin-top": "10px", "font-size": "12px", color: "#666" } }, GS = { class: "va-modal__message" }, kS = {
  class: "va-h3",
  style: { color: "#ff6b6b", display: "flex", "align-items": "center", gap: "8px" }
}, US = { style: { "margin-top": "16px", color: "#333" } }, zS = {
  key: 0,
  class: "empty"
}, VS = { class: "list-group-item" }, WS = { class: "row dragIcon" }, ZS = {
  key: 3,
  style: { color: "#ff6b6b", "font-size": "0.85em", "margin-left": "8px" }
}, HS = { class: "row nhidden options" }, YS = ["id"], qS = { style: { "min-width": "150px" } }, KS = { key: 0 }, JS = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, $S = {
  key: 0,
  class: "empty"
}, jS = { key: 2 }, XS = { key: 3 }, QS = ["onClick"], eA = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, tA = { class: "settings-container" }, nA = /* @__PURE__ */ rt({
  __name: "MapsWidgetSettings",
  props: /* @__PURE__ */ kh({
    dataSources: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    ZE();
    const i = o, n = _e({
      widgetSectionLayer: !0,
      widgetSection: !1,
      widgetServiceSection: !0,
      storeSection: !1,
      widgetMapSection: !1
    }), l = gr(o, "modelValue"), d = _e(!1), p = _e(!1), g = _e(!1), v = _e(""), m = Eg(), E = _e(!1), A = _e([]);
    ki(A, (ae) => {
      kn("Selected nodes changed:", ae);
    });
    const w = Tn(() => ({
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), O = _e(""), N = async () => {
      console.log("addService called with URL:", O.value), p.value = !0;
      let ae = null, Z = null, K = !1;
      try {
        console.log("Trying WMS...");
        const U = await m.createServiceWMS(O.value);
        console.log("WMS result:", U), U && (l.value.services.push({
          service: U,
          url: O.value,
          type: "WMS",
          id: Yr()
        }), K = !0);
      } catch (U) {
        console.log("WMS error:", U), ae = U;
      }
      try {
        console.log("Trying WFS...");
        const U = await m.createServiceWFS(O.value);
        console.log("WFS result:", U), U && (l.value.services.push({
          service: U,
          url: O.value,
          type: "WFS",
          id: Yr()
        }), K = !0);
      } catch (U) {
        console.log("WFS error:", U), Z = U;
      }
      if (K)
        d.value = !1, O.value = "";
      else {
        const U = ae || Z;
        v.value = U?.message || "Failed to load service. The URL is not a valid WMS or WFS service.", g.value = !0;
      }
      p.value = !1;
    }, k = (ae, Z) => {
      const K = [];
      return ae && ae.forEach((U) => {
        K.push({
          id: Yr(),
          opacity: 1,
          service: Z,
          type: "WMSLayer",
          name: U.name,
          title: U.title,
          attribution: U.attribution,
          childs: k(U.children, Z)
        });
      }), K;
    }, G = _e(/* @__PURE__ */ new Map()), X = Hg(async () => {
      kn("Computing services async");
      const ae = [];
      for (let K of l.value.services) {
        if (kn("Service:", K), !!K.reconstructionFailed) {
          kn("Service failed reconstruction:", K.url), ae.push({
            service: { _info: { title: `${K.url} (failed)`, name: K.url } },
            type: K.type,
            level: 0,
            childs: [],
            failed: !0
          });
          continue;
        }
        if (K.type == "WFS")
          kn("Processing WFS service"), K.service && typeof K.service.getFeatureTypes == "function" ? ae.push({
            service: K.service,
            type: "WFS",
            level: 0,
            childs: K.service.getFeatureTypes().map(
              (ie) => ({
                id: Yr(),
                opacity: 1,
                service: K.id,
                wfs_service: new Vg(K.service.getFeatureUrl(ie.name, { outputCrs: "EPSG:4326", asJson: !0, maxFeatures: 100 })),
                geoJson: {},
                type: "WFSLayer",
                name: ie.name,
                title: ie.title,
                attribution: ""
              })
            )
          }) : kn("WFS service missing getFeatureTypes method");
        else if (kn("Processing WMS service"), console.log("[MapsWidgetSettings] WMS service object:", K), console.log("[MapsWidgetSettings] service.service:", K.service), console.log("[MapsWidgetSettings] service.service._info:", K.service?._info), console.log("[MapsWidgetSettings] getLayers type:", typeof K.service?.getLayers), K.service && typeof K.service.getLayers == "function") {
          const ie = K.service.getLayers();
          console.log("[MapsWidgetSettings] WMS layers:", ie), ae.push({
            service: K.service,
            type: "WMS",
            childs: k(ie, K.service),
            level: 0
          }), kn("WMS service added to tree"), console.log("[MapsWidgetSettings] ret after adding WMS:", JSON.parse(JSON.stringify(ae)));
        } else
          kn("WMS service missing getLayers method");
      }
      const Z = [l.value.datasourceId, ...l.value.datasourceIds].filter(Boolean);
      for (const K of Z) {
        if (!K) continue;
        const U = St(Is);
        try {
          const ie = U.getDatasource(K);
          Nr("Datasource type:", U.getDatasourceType(K));
          const ne = U.getDatasourceType(K);
          if (!G.value.has(K)) {
            let de;
            ne == "OGC Composer" ? de = {
              id: Yr(),
              opacity: 1,
              service: ie,
              geoJson: {},
              type: "GEOJSON",
              name: "GEOJSON",
              title: "GEOJSON",
              attribution: "",
              datasourceId: K
            } : ne == "valhalla" ? de = {
              id: Yr(),
              opacity: 1,
              service: ie,
              geoJson: {},
              type: "ROUTE",
              name: "Route",
              title: "Valhalla Route",
              attribution: "",
              datasourceId: K
            } : ne == "rest" ? de = {
              id: Yr(),
              opacity: 1,
              service: ie,
              geoJson: {},
              type: "REST-GEOJSON",
              name: "REST-GEOJSON",
              title: "REST GeoJSON",
              attribution: "",
              datasourceId: K
            } : de = {
              id: Yr(),
              opacity: 1,
              service: ie,
              geoJson: {},
              type: "OGCSTA",
              name: "OGCSTA",
              title: "OGCSTA",
              attribution: "",
              datasourceId: K
            }, G.value.set(K, de);
          }
          const Ee = G.value.get(K);
          ne == "OGC Composer" ? ae.push({
            service: { _info: { title: K + "[Composer]", name: K } },
            type: "GEOJSON",
            level: 0,
            childs: [Ee]
          }) : ne == "valhalla" ? ae.push({
            service: { _info: { title: K + "[Valhalla Route]", name: K } },
            type: "ROUTE",
            level: 0,
            childs: [Ee]
          }) : ne == "rest" ? ae.push({
            service: { _info: { title: K + "[REST]", name: K } },
            type: "REST-GEOJSON",
            level: 0,
            childs: [Ee]
          }) : ae.push({
            service: { _info: { title: K + "[OGCSTA]", name: K } },
            type: "OGCSTA",
            childs: [Ee],
            level: 0
          });
        } catch {
          Nr("Service not supported for datasource:", K);
        }
      }
      return console.log("[MapsWidgetSettings] Final services array:", ae), console.log("[MapsWidgetSettings] Final services length:", ae.length), ae;
    });
    _e(0.5);
    const x = _e(!1), z = async (ae) => {
      const Z = { ...ae, checked: !0, styleIds: [] };
      if (Z.type == "WFSLayer") {
        const K = await Z.wfs_service.fetch();
        kn("WFS data fetched:", K);
      }
      l.value.layers.push(Z);
    }, Y = (ae) => {
      const Z = l.value.layers.indexOf(ae);
      Z > -1 && l.value.layers.splice(Z, 1);
    }, R = _e(void 0), q = Tn(() => R.value?.type == "OGCSTA" ? l.value.OGCSstyles : l.value.styles), fe = _e("wms_wfs"), Se = _e(""), Ie = Tn(() => i.dataSources ? i.dataSources.filter((ae) => ae.type === "ogcsta" || ae.type === "OGC Composer" || ae.type === "rest" || ae.type === "valhalla").map((ae) => ({
      text: `${ae.name} (${ae.type})`,
      value: ae.uid
    })) : []), he = () => {
      Se.value && !l.value.datasourceIds.includes(Se.value) && (l.value.datasourceIds.push(Se.value), Se.value = "", d.value = !1);
    }, Oe = (ae) => {
      const Z = l.value.datasourceIds.indexOf(ae);
      Z > -1 && (l.value.datasourceIds.splice(Z, 1), G.value.delete(ae));
    };
    return (ae, Z) => {
      const K = ci("VaRadio"), U = ci("va-input"), ie = ci("VaSelect"), ne = ci("VaModal"), Ee = ci("VaIcon"), de = ci("VaSlider"), yt = ci("VaButton"), Le = ci("va-collapse"), ke = ci("VaTreeView"), xt = ci("va-checkbox"), Bt = ci("va-color-input");
      return V(), se(Me, null, [
        ce(ne, {
          modelValue: d.value,
          "onUpdate:modelValue": Z[5] || (Z[5] = (le) => d.value = le),
          "ok-text": fe.value === "wms_wfs" ? "Add" : "Add Datasource",
          size: "small",
          onOk: Z[6] || (Z[6] = (le) => fe.value === "wms_wfs" ? N() : he())
        }, {
          default: De(() => [
            ue("div", RS, [
              Z[22] || (Z[22] = ue("h3", { class: "va-h3" }, " Add Service ", -1)),
              ue("div", PS, [
                ue("div", xS, [
                  ce(K, {
                    modelValue: fe.value,
                    "onUpdate:modelValue": Z[0] || (Z[0] = (le) => fe.value = le),
                    option: "wms_wfs",
                    label: "WMS/WFS Service",
                    style: { "margin-bottom": "10px" }
                  }, null, 8, ["modelValue"]),
                  ce(K, {
                    modelValue: fe.value,
                    "onUpdate:modelValue": Z[1] || (Z[1] = (le) => fe.value = le),
                    option: "datasource",
                    label: "Datasource",
                    style: { "margin-bottom": "15px" }
                  }, null, 8, ["modelValue"]),
                  fe.value === "wms_wfs" ? (V(), se("div", FS, [
                    ce(U, {
                      modelValue: O.value,
                      "onUpdate:modelValue": Z[2] || (Z[2] = (le) => O.value = le),
                      placeholder: "https://[serviceurl]"
                    }, null, 8, ["modelValue"])
                  ])) : (V(), se("div", MS, [
                    Ie.value.length > 0 ? (V(), je(ie, {
                      key: 0,
                      modelValue: Se.value,
                      "onUpdate:modelValue": Z[3] || (Z[3] = (le) => Se.value = le),
                      options: Ie.value,
                      label: "Select Datasource",
                      placeholder: "Choose a datasource",
                      "text-by": "text",
                      "value-by": "value"
                    }, null, 8, ["modelValue", "options"])) : (V(), je(U, {
                      key: 1,
                      modelValue: Se.value,
                      "onUpdate:modelValue": Z[4] || (Z[4] = (le) => Se.value = le),
                      placeholder: "Enter Datasource ID",
                      label: "Datasource ID"
                    }, null, 8, ["modelValue"])),
                    ue("div", BS, [
                      Z[21] || (Z[21] = hn(" Primary datasource: ", -1)),
                      ue("strong", null, Lt(l.value.datasourceId), 1)
                    ])
                  ]))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "ok-text"]),
        ce(ne, {
          modelValue: g.value,
          "onUpdate:modelValue": Z[7] || (Z[7] = (le) => g.value = le),
          "ok-text": "OK",
          size: "small",
          "hide-default-actions": !1,
          "cancel-text": ""
        }, {
          default: De(() => [
            ue("div", GS, [
              ue("h3", kS, [
                ce(Ee, { class: "material-icons" }, {
                  default: De(() => [...Z[23] || (Z[23] = [
                    hn("error", -1)
                  ])]),
                  _: 1
                }),
                Z[24] || (Z[24] = hn(" Service Error ", -1))
              ]),
              ue("div", US, Lt(v.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        ce(DS, {
          modelValue: q.value,
          "onUpdate:modelValue": Z[8] || (Z[8] = (le) => q.value = le),
          layer: R.value,
          "onUpdate:layer": Z[9] || (Z[9] = (le) => R.value = le),
          show: x.value,
          "onUpdate:show": Z[10] || (Z[10] = (le) => x.value = le),
          services: l.value.services,
          "all-layers": l.value.layers
        }, null, 8, ["modelValue", "layer", "show", "services", "all-layers"]),
        ce(Le, {
          modelValue: n.value.widgetSectionLayer,
          "onUpdate:modelValue": Z[14] || (Z[14] = (le) => n.value.widgetSectionLayer = le),
          header: "Layers",
          icon: "layers"
        }, {
          default: De(() => [
            l.value.layers.length == 0 ? (V(), se("span", zS, " No Layers here ")) : (V(), je(j(kw), Bu({
              key: 1,
              modelValue: l.value.layers,
              "onUpdate:modelValue": Z[11] || (Z[11] = (le) => l.value.layers = le),
              animation: 150,
              "component-data": {
                tag: "ul",
                type: "transition-group",
                name: E.value ? null : "flip-list"
              },
              class: "list-group",
              "item-key": "id"
            }, w.value, {
              onEnd: Z[12] || (Z[12] = (le) => E.value = !1),
              onStart: Z[13] || (Z[13] = (le) => E.value = !0)
            }), {
              item: De(({ element: le }) => [
                ue("li", VS, [
                  ue("div", WS, [
                    le.reconstructionFailed ? (V(), je(Ee, {
                      key: 0,
                      class: "material-icons",
                      style: { color: "#ff6b6b" }
                    }, {
                      default: De(() => [...Z[25] || (Z[25] = [
                        hn(" error ", -1)
                      ])]),
                      _: 1
                    })) : le.checked ? (V(), je(Ee, {
                      key: 1,
                      class: "material-icons",
                      onClick: (Ue) => le.checked = !1
                    }, {
                      default: De(() => [...Z[26] || (Z[26] = [
                        hn(" layers ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : (V(), je(Ee, {
                      key: 2,
                      class: "material-icons",
                      onClick: (Ue) => le.checked = !0
                    }, {
                      default: De(() => [...Z[27] || (Z[27] = [
                        hn(" layers_clear ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    hn(" " + Lt(le.title) + " ", 1),
                    le.reconstructionFailed ? (V(), se("span", ZS, "(failed)")) : Ge("", !0)
                  ]),
                  ue("div", HS, [
                    ce(Ee, { class: "material-icons" }, {
                      default: De(() => [...Z[28] || (Z[28] = [
                        hn(" opacity ", -1)
                      ])]),
                      _: 1
                    }),
                    ue("div", {
                      id: le.id,
                      class: "slider nhidden sliderPopOver"
                    }, [
                      ue("div", qS, [
                        ce(de, {
                          modelValue: le.opacity,
                          "onUpdate:modelValue": (Ue) => le.opacity = Ue,
                          max: 1,
                          min: 0,
                          step: 0.01,
                          color: "#555"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ], 8, YS),
                    le.type == "WFSLayer" || le.type == "OGCSTA" || le.type == "GEOJSON" || le.type == "REST-GEOJSON" ? (V(), se("div", KS, [
                      ce(yt, {
                        icon: "settings",
                        preset: "secondary",
                        round: "",
                        onClick: () => {
                          R.value = le, x.value = !0;
                        }
                      }, null, 8, ["onClick"])
                    ])) : Ge("", !0),
                    ce(yt, {
                      icon: "delete",
                      preset: "secondary",
                      round: "",
                      color: "danger",
                      onClick: Wf((Ue) => Y(le), ["stop"])
                    }, null, 8, ["onClick"])
                  ])
                ])
              ]),
              _: 1
            }, 16, ["modelValue", "component-data"]))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        ce(Le, {
          modelValue: n.value.widgetServiceSection,
          "onUpdate:modelValue": Z[16] || (Z[16] = (le) => n.value.widgetServiceSection = le),
          class: "bottomframe",
          header: "Services",
          icon: "home"
        }, {
          header: De(({ value: le, attrs: Ue, iconAttrs: Pe, text: Ht }) => [
            ue("div", JS, [
              ce(Ee, { class: "material-icons" }, {
                default: De(() => [...Z[29] || (Z[29] = [
                  hn("cable ", -1)
                ])]),
                _: 1
              }),
              Z[30] || (Z[30] = ue("div", { class: "va-collapse__header__text" }, "Services", -1)),
              ce(yt, {
                loading: p.value,
                icon: "add_circle",
                preset: "secondary",
                round: "",
                onClick: Z[15] || (Z[15] = ($t) => {
                  $t.stopImmediatePropagation(), d.value = !0;
                })
              }, null, 8, ["loading"]),
              ce(Ee, Bu({
                class: le ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, Pe), null, 16, ["class"])
            ])
          ]),
          body: De(() => [
            j(X) && j(X).length == 0 ? (V(), se("span", $S, " No Services here ")) : Ge("", !0),
            j(X) && j(X).length > 0 ? (V(), je(ke, {
              nodes: j(X),
              key: j(X).length,
              childrenBy: "childs"
            }, {
              content: De((le) => [
                le.level == 0 ? (V(), se(Me, { key: 0 }, [
                  le.failed ? (V(), je(Ee, {
                    key: 0,
                    class: "material-icons",
                    style: { color: "#ff6b6b" }
                  }, {
                    default: De(() => [...Z[31] || (Z[31] = [
                      hn(" error ", -1)
                    ])]),
                    _: 1
                  })) : (V(), je(Ee, {
                    key: 1,
                    class: "material-icons"
                  }, {
                    default: De(() => [...Z[32] || (Z[32] = [
                      hn(" cable ", -1)
                    ])]),
                    _: 1
                  })),
                  le.service._info.title ? (V(), se("b", jS, Lt(le.service._info.title), 1)) : (V(), se("b", XS, Lt(le.service._info.name), 1)),
                  (le.type === "OGCSTA" || le.type === "GEOJSON" || le.type === "REST-GEOJSON") && l.value.datasourceIds.includes(le.service._info.name) ? (V(), je(yt, {
                    key: 4,
                    class: "mt4",
                    icon: "delete",
                    preset: "plain",
                    size: "small",
                    onClick: Wf((Ue) => Oe(le.service._info.name), ["stop"]),
                    style: { "margin-left": "10px" }
                  }, null, 8, ["onClick"])) : Ge("", !0)
                ], 64)) : (V(), se("span", {
                  key: 1,
                  onClick: () => z(le)
                }, [
                  ce(Ee, { class: "material-icons nsee" }, {
                    default: De(() => [...Z[33] || (Z[33] = [
                      hn(" layers ", -1)
                    ])]),
                    _: 1
                  }),
                  ce(Ee, { class: "material-icons nhidden" }, {
                    default: De(() => [...Z[34] || (Z[34] = [
                      hn(" add ", -1)
                    ])]),
                    _: 1
                  }),
                  hn(" " + Lt(le.title), 1)
                ], 8, QS))
              ]),
              _: 1
            }, 8, ["nodes"])) : Ge("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        ce(Le, {
          modelValue: n.value.widgetMapSection,
          "onUpdate:modelValue": Z[20] || (Z[20] = (le) => n.value.widgetMapSection = le),
          class: "bottomframe",
          header: "Services",
          icon: "map"
        }, {
          header: De(({ value: le, attrs: Ue, iconAttrs: Pe, text: Ht }) => [
            ue("div", eA, [
              ce(Ee, { class: "material-icons" }, {
                default: De(() => [...Z[35] || (Z[35] = [
                  hn("map ", -1)
                ])]),
                _: 1
              }),
              Z[36] || (Z[36] = ue("div", { class: "va-collapse__header__text" }, "Map", -1)),
              ce(Ee, Bu({
                class: le ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, Pe), null, 16, ["class"])
            ])
          ]),
          body: De(() => [
            ue("div", tA, [
              ce(U, {
                modelValue: l.value.baseMapUrl,
                "onUpdate:modelValue": Z[17] || (Z[17] = (le) => l.value.baseMapUrl = le),
                label: "Base Map URL",
                placeholder: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              }, {
                prepend: De(() => [
                  ce(Ee, { name: "public" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              Z[37] || (Z[37] = ue("p", { class: "hint-text" }, " Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates. ", -1)),
              ce(xt, {
                modelValue: l.value.fixed,
                "onUpdate:modelValue": Z[18] || (Z[18] = (le) => l.value.fixed = le),
                label: "Map fixed"
              }, null, 8, ["modelValue"]),
              ce(Bt, {
                modelValue: l.value.selectionHighlightColor,
                "onUpdate:modelValue": Z[19] || (Z[19] = (le) => l.value.selectionHighlightColor = le),
                label: "Selection Highlight Color"
              }, null, 8, ["modelValue"]),
              Z[38] || (Z[38] = ue("p", { class: "hint-text" }, " Color used to highlight selected Things on the map. ", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), Op = /* @__PURE__ */ mr(nA, [["__scopeId", "data-v-5f2599d9"]]), iA = {
  key: 0,
  class: "datapoint tlc"
}, rA = /* @__PURE__ */ rt({
  __name: "TLCDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 45 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: d } = bl(i);
    return (p, g) => (V(), se("div", {
      class: "datapoint-wrapper",
      style: _a({ width: (j(d) || 45) + "px", height: (j(d) || 45) + "px" })
    }, [
      j(l) ? (V(), se("div", iA, Lt(j(l)), 1)) : Ge("", !0)
    ], 4));
  }
}), sA = /* @__PURE__ */ mr(rA, [["__scopeId", "data-v-2eb55b7f"]]), oA = {};
function aA(o, i) {
  return " empty ";
}
const lA = /* @__PURE__ */ mr(oA, [["render", aA], ["__scopeId", "data-v-ca2b9f21"]]);
class uA {
  constructor() {
    this.component = sA, this.setupComponent = lA, this.description = "renders a Trafic Light DataPoint", this.name = "Traffic Light Data Point Renderer", this.qualifiedName = "tlc", this.namespace = "tlc", this.example = " 🟢⚪⚪";
  }
}
const cA = {
  key: 0,
  class: "datapoint"
}, hA = {
  key: 1,
  class: "datapoint"
}, dA = /* @__PURE__ */ rt({
  __name: "ValueUnitDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: d } = bl(i);
    return n.value && !n.value.unit && (n.value.unit = ""), n.value && !n.value.prefix && (n.value.prefix = ""), n.value && !n.value.suffix && (n.value.suffix = ""), (p, g) => (V(), se("div", {
      class: "datapoint-wrapper",
      style: _a({ width: (j(d) || 0) + "px", height: (j(d) || 0) + "px" })
    }, [
      j(l) ? (V(), se("div", cA, Lt(j(n).prefix) + Lt(j(l)) + " " + Lt(j(n).unit) + " " + Lt(j(n).suffix), 1)) : (V(), se("div", hA, Lt(j(n).prefix) + " -- " + Lt(j(n).unit) + " " + Lt(j(n).suffix), 1))
    ], 4));
  }
}), fA = /* @__PURE__ */ mr(dA, [["__scopeId", "data-v-a78b518d"]]), pA = {
  class: "settings-section",
  "data-section": "Style settings"
}, gA = { class: "settings-container" }, _A = /* @__PURE__ */ rt({
  __name: "ValueUnitDataLabelRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = gr(o, "modelValue");
    return (n, l) => (V(), se("section", pA, [
      ue("div", gA, [
        ce(j(Fo), {
          modelValue: i.value.unit,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value.unit = d),
          label: "unit"
        }, null, 8, ["modelValue"]),
        ce(j(Fo), {
          modelValue: i.value.prefix,
          "onUpdate:modelValue": l[1] || (l[1] = (d) => i.value.prefix = d),
          label: "Prefix"
        }, null, 8, ["modelValue"]),
        ce(j(Fo), {
          modelValue: i.value.suffix,
          "onUpdate:modelValue": l[2] || (l[2] = (d) => i.value.suffix = d),
          label: "suffix"
        }, null, 8, ["modelValue"])
      ])
    ]));
  }
}), mA = /* @__PURE__ */ mr(_A, [["__scopeId", "data-v-98e6b38b"]]);
class vA {
  constructor() {
    this.component = fA, this.setupComponent = mA, this.description = "Renders a value and unit", this.name = "Value and Unit Data Point Renderer", this.namespace = "general", this.qualifiedName = "ValueUnitDataPointRenderer", this.example = " 15";
  }
}
const yA = [
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
    payloadType: $e
  },
  {
    name: "Datastream Clicked",
    type: "click_on_datastream",
    description: "Triggered when a Datastream is clicked on the map",
    payloadType: He
  },
  {
    name: "Observation Clicked",
    type: "click_on_observation",
    description: "Triggered when an Observation is clicked on the map",
    payloadType: At
  },
  {
    name: "Location Clicked",
    type: "click_on_location",
    description: "Triggered when a Location is clicked on the map",
    payloadType: Kt
  },
  {
    name: "Thing Hovered",
    type: "hover_on_thing",
    description: "Triggered when hovering over a Thing marker on the map",
    payloadType: $e
  },
  {
    name: "Datastream Hovered",
    type: "hover_on_datastream",
    description: "Triggered when hovering over a Datastream marker on the map",
    payloadType: He
  }
], EA = `<?xml version="1.0" encoding="UTF-8"?>
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
var TA = Object.defineProperty, wA = Object.getOwnPropertyDescriptor, td = (o, i, n, l) => {
  for (var d = l > 1 ? void 0 : l ? wA(i, n) : i, p = o.length - 1, g; p >= 0; p--)
    (g = o[p]) && (d = (l ? g(i, n, d) : g(d)) || d);
  return l && d && TA(i, n, d), d;
}, Lp = (o, i) => (n, l) => i(n, l, o);
const xo = "MapWidget";
let Qu = class {
  constructor(o, i) {
    this.events = o, this.actions = i, this.type = xo, this.component = dp, this.settingsComponent = Op, this.supportedDSTypes = ["ogcsta", "OGC Composer", "rest", "valhalla"], this.icon = t1, this.name = "Map";
  }
  register() {
    dl().registerDataPointRenderer(new uA()), dl().registerDataPointRenderer(new vA()), this.events.registerWidget(xo, yA), this.actions.registerActionsFromEcoreString(xo, EA, "widget", "model.ecore").catch(() => {
      this.actions.registerWidgetType(xo, Tg, "widget");
    }), kE().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.map",
      {
        MapsWidget: dp,
        MapsWidgetSettings: Op,
        useDataPointRegistry: dl,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker: wl,
        ConditionSettings: Gh,
        PointStyler: Wg,
        AreaStyler: Zg
      },
      "0.0.1-next.1",
      "ui.vue.widget.map"
    );
  }
  unregister() {
    this.events.unregisterWidget(xo), this.actions.unregisterWidgetType(xo);
  }
};
td([
  ME()
], Qu.prototype, "register", 1);
td([
  BE()
], Qu.prototype, "unregister", 1);
Qu = td([
  GE({
    service: [QE],
    properties: { "widget.type": xo }
  }),
  Lp(0, Gf(xE)),
  Lp(1, Gf(FE))
], Qu);
export {
  Zg as AreaStyler,
  Gh as ConditionSettings,
  wl as MapMarker,
  Qu as MapWidgetProvider,
  dp as MapsWidget,
  Op as MapsWidgetSettings,
  Wg as PointStyler,
  dl as useDataPointRegistry
};
