!function(i){"use strict";t=i(window).width();var t,e={init:function(){},load:function(){n(),a(),s(),r(),o(),l(),u(),h(),c(),p(),d(),f(),m(),w(),g(),b(),x(),C(),y(),v(),_(),Q()},resize:function(){n(),a(),s(),r(),o(),l(),u(),h(),c(),p(),d(),f(),m(),w(),g(),b(),x(),C(),y(),v(),_(),Q()}};function n(){var e;t<=768&&(e=0,e=500<=t?250:300,jQuery(".chartlist-chart").css("min-width",e-31))}function a(){var e=new Chartist.Line("#smil-animations",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},{low:0,plugins:[Chartist.plugins.tooltip()]}),a=0,s=80,r=500;e.on("created",function(){a=0}),e.on("draw",function(e){var t,n,i;a++,"line"===e.type?e.element.animate({opacity:{begin:a*s+1e3,dur:r,from:0,to:1}}):"label"===e.type&&"x"===e.axis?e.element.animate({y:{begin:a*s,dur:r,from:e.y+100,to:e.y,easing:"easeOutQuart"}}):"label"===e.type&&"y"===e.axis?e.element.animate({x:{begin:a*s,dur:r,from:e.x-100,to:e.x,easing:"easeOutQuart"}}):"point"===e.type?e.element.animate({x1:{begin:a*s,dur:r,from:e.x-10,to:e.x,easing:"easeOutQuart"},x2:{begin:a*s,dur:r,from:e.x-10,to:e.x,easing:"easeOutQuart"},opacity:{begin:a*s,dur:r,from:0,to:1,easing:"easeOutQuart"}}):"grid"===e.type&&(t={begin:a*s,dur:r,from:e[e.axis.units.pos+"1"]-30,to:e[e.axis.units.pos+"1"],easing:"easeOutQuart"},n={begin:a*s,dur:r,from:e[e.axis.units.pos+"2"]-100,to:e[e.axis.units.pos+"2"],easing:"easeOutQuart"},(i={})[e.axis.units.pos+"1"]=t,i[e.axis.units.pos+"2"]=n,i.opacity={begin:a*s,dur:r,from:0,to:1,easing:"easeOutQuart"},e.element.animate(i))}),e.on("created",function(){window.__exampleAnimateTimeout&&(clearTimeout(window.__exampleAnimateTimeout),window.__exampleAnimateTimeout=null),window.__exampleAnimateTimeout=setTimeout(e.update.bind(e),12e3)})}function s(){function e(e){return Array.apply(null,new Array(e))}var t=e(52).map(Math.random).reduce(function(e,t,n){return e.labels.push(n+1),e.series.forEach(function(e){e.push(100*Math.random())}),e},{labels:[],series:e(4).map(function(){return new Array})});new Chartist.Line("#scatter-diagram",t,{showLine:!1,axisX:{labelInterpolationFnc:function(e,t){return t%13==0?"W"+e:null}}},[["screen and (min-width: 640px)",{axisX:{labelInterpolationFnc:function(e,t){return t%4==0?"W"+e:null}}}]])}function r(){new Chartist.Line("#simple-line-chart",{labels:["Mon","Tue","Wed","Thu","Fri"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},{fullWidth:!0,chartPadding:{right:40},plugins:[Chartist.plugins.tooltip()]})}function o(){new Chartist.Line("#line-chart-tooltips",{labels:["1","2","3","4","5","6"],series:[{name:"Fibonacci sequence",data:[1,2,3,5,8,13]},{name:"Golden section",data:[1,1.618,2.618,4.236,6.854,11.09]}]},{plugins:[Chartist.plugins.tooltip()]});var e=i("#line-chart-tooltips"),n=e.append('<div class="tooltip"></div>').find(".tooltip").hide();e.on("mouseenter",".ct-point",function(){var e=i(this),t=e.attr("ct:value"),e=e.parent().attr("ct:series-name");n.html(e+"<br>"+t).show()}),e.on("mouseleave",".ct-point",function(){n.hide()}),e.on("mousemove",function(e){n.css({left:(e.offsetX||e.originalEvent.layerX)-n.width()/2-10,top:(e.offsetY||e.originalEvent.layerY)-n.height()-40})})}function l(){new Chartist.Line("#chart-with-area",{labels:[1,2,3,4,5,6,7,8],series:[[5,9,7,8,5,3,5,4]]},{low:0,showArea:!0,fullWidth:!0,plugins:[Chartist.plugins.tooltip()]})}function u(){new Chartist.Line("#bi-polar-line",{labels:[1,2,3,4,5,6,7,8],series:[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,.5,1,.5,-1,-2.5]]},{high:3,low:-3,showArea:!0,showLine:!1,showPoint:!1,fullWidth:!0,axisX:{showLabel:!1,showGrid:!1},plugins:[Chartist.plugins.tooltip()]})}function h(){new Chartist.Line("#svg-animation",{labels:["Mon","Tue","Wed","Thu","Fri","Sat"],series:[[1,5,2,5,4,3],[2,3,4,8,1,2],[5,4,3,2,1,.5]]},{low:0,showArea:!0,showPoint:!1}).on("draw",function(e){"line"!==e.type&&"area"!==e.type||e.element.animate({d:{begin:2e3*e.index,dur:2e3,from:e.path.clone().scale(1,0).translate(0,e.chartRect.height()).stringify(),to:e.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}})})}function c(){new Chartist.Line("#line-smoothing",{labels:[1,2,3,4,5],series:[[1,5,10,0,1],[10,15,0,1,2]]},{lineSmooth:Chartist.Interpolation.simple({divisor:2}),fullWidth:!0,chartPadding:{right:20},low:0})}function p(){var e={high:10,low:-10,axisX:{labelInterpolationFnc:function(e,t){return t%2==0?e:null}},plugins:[Chartist.plugins.tooltip()]};new Chartist.Bar("#bi-polar-bar",{labels:["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]},e)}function d(){new Chartist.Bar("#overlapping-bars",{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[5,4,3,7,5,10,3,4,8,10,6,8],[3,2,9,5,4,6,4,6,7,8,7,4]]},{seriesBarDistance:10},[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(e){return e[0]}}}]])}function f(){new Chartist.Bar("#multi-line-chart",{labels:["First quarter of the year","Second quarter of the year","Third quarter of the year","Fourth quarter of the year"],series:[[6e4,4e4,8e4,7e4],[4e4,3e4,7e4,65e3],[8e3,3e3,1e4,6e3]]},{seriesBarDistance:10,axisX:{offset:60},axisY:{offset:80,labelInterpolationFnc:function(e){return e+" CHF"},scaleMinSpace:15},plugins:[Chartist.plugins.tooltip()]})}function m(){new Chartist.Bar("#stacked-bar-chart",{labels:["Q1","Q2","Q3","Q4"],series:[[8e5,12e5,14e5,13e5],[2e5,4e5,5e5,3e5],[16e4,29e4,41e4,6e5]]},{stackBars:!0,axisY:{labelInterpolationFnc:function(e){return e/1e3+"k"}},plugins:[Chartist.plugins.tooltip()]}).on("draw",function(e){"bar"===e.type&&e.element.attr({style:"stroke-width: 30px"})})}function w(){new Chartist.Bar("#horizontal-bar-chart",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:70},plugins:[Chartist.plugins.tooltip()]})}function g(){new Chartist.Bar("#extreme-chart",{labels:["Quarter 1","Quarter 2","Quarter 3","Quarter 4"],series:[[5,4,3,7],[3,2,9,5],[1,5,8,4],[2,3,4,6],[4,1,2,1]]},{stackBars:!0,axisX:{labelInterpolationFnc:function(e){return e.split(/\s+/).map(function(e){return e[0]}).join("")}},axisY:{offset:20},plugins:[Chartist.plugins.tooltip()]},[["screen and (min-width: 400px)",{reverseData:!0,horizontalBars:!0,axisX:{labelInterpolationFnc:Chartist.noop},axisY:{offset:60}}],["screen and (min-width: 800px)",{stackBars:!1,seriesBarDistance:10}],["screen and (min-width: 1000px)",{reverseData:!1,horizontalBars:!1,seriesBarDistance:15}]])}function b(){new Chartist.Bar("#label-placement-chart",{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{axisX:{position:"start"},axisY:{position:"end"},plugins:[Chartist.plugins.tooltip()]})}function x(){var e=new Chartist.Pie("#animating-donut",{series:[10,20,50,20,5,50,15],labels:[1,2,3,4,5,6,7]},{donut:!0,showLabel:!1,plugins:[Chartist.plugins.tooltip()]});e.on("draw",function(e){var t,n;"slice"===e.type&&(t=e.element._node.getTotalLength(),e.element.attr({"stroke-dasharray":t+"px "+t+"px"}),n={"stroke-dashoffset":{id:"anim"+e.index,dur:1e3,from:-t+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}},0!==e.index&&(n["stroke-dashoffset"].begin="anim"+(e.index-1)+".end"),e.element.attr({"stroke-dashoffset":-t+"px"}),e.element.animate(n,!1))}),e.on("created",function(){window.__anim21278907124&&(clearTimeout(window.__anim21278907124),window.__anim21278907124=null),window.__anim21278907124=setTimeout(e.update.bind(e),1e4)})}function C(){function t(e,t){return e+t}var n={series:[5,3,4]};new Chartist.Pie("#simple-pie",n,{labelInterpolationFnc:function(e){return Math.round(e/n.series.reduce(t)*100)+"%"}})}function y(){new Chartist.Pie("#pie-chart",{labels:["35%","55%","10%"],series:[20,15,40]},{labelInterpolationFnc:function(e){return e[0]}},[["screen and (min-width: 640px)",{chartPadding:30,donut:!0,labelOffset:100,donutWidth:60,labelDirection:"explode",labelInterpolationFnc:function(e){return e}}],["screen and (min-width: 1024px)",{labelOffset:60,chartPadding:20}]])}function v(){new Chartist.Pie("#gauge-chart",{series:[20,10,30,40]},{donut:!0,donutWidth:60,startAngle:270,total:200,showLabel:!1,plugins:[Chartist.plugins.tooltip()]})}function _(){new Chartist.Line("#different-series",{labels:["1","2","3","4","5","6","7","8"],series:[{name:"series-1",data:[5,2,-4,2,0,-2,5,-3]},{name:"series-2",data:[4,3,5,3,1,3,6,4]},{name:"series-3",data:[2,4,3,1,4,5,3,2]}]},{fullWidth:!0,series:{"series-1":{lineSmooth:Chartist.Interpolation.step()},"series-2":{lineSmooth:Chartist.Interpolation.simple(),showArea:!0},"series-3":{showPoint:!1}},plugins:[Chartist.plugins.tooltip()]},[["screen and (max-width: 320px)",{series:{"series-1":{lineSmooth:Chartist.Interpolation.none()},"series-2":{lineSmooth:Chartist.Interpolation.none(),showArea:!1},"series-3":{lineSmooth:Chartist.Interpolation.none(),showPoint:!0}}}]])}function Q(){var e=new Chartist.Line("#svg-dot-animation",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,4,2,8,5,4,6,2,3,3,4,6],[4,8,9,3,7,2,10,5,8,1,7,10]]},{low:0,showLine:!1,axisX:{showLabel:!1,offset:0},axisY:{showLabel:!1,offset:0},plugins:[Chartist.plugins.tooltip()]}),t=0;e.on("created",function(){t=0}),e.on("draw",function(e){"point"===e.type&&e.element.animate({opacity:{begin:80*t++,dur:500,from:0,to:1},x1:{begin:80*t++,dur:500,from:e.x-100,to:e.x,easing:Chartist.Svg.Easing.easeOutQuart}})}),e.on("created",function(){window.__anim0987432598723&&(clearTimeout(window.__anim0987432598723),window.__anim0987432598723=null),window.__anim0987432598723=setTimeout(e.update.bind(e),8e3)})}jQuery(document).ready(function(){}),jQuery(window).on("load",function(){setTimeout(function(){e.resize()},1e3)}),jQuery(window).on("resize",function(){setTimeout(function(){e.resize()},1e3)})}(jQuery);