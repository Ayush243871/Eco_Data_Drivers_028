"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[6575],{922719:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>o,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},775089:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(667294),i=n(883119),r=n(214877),o=n(103322);function s(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let l={};function m(e){let t=l[e];return t&&t.screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth}),l[e]}let u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){s(this,"idMap",new Map),s(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=u(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var d=n(401111),c=n(547643),h=n(667677),_=n(213377),f=n(406893),y=n(340523),x=n(5859),b=n(554786),g=n(953565),w=n(84768),v=n(785893);function M({analyticsData:e,children:t,idx:n,isMeasuring:i,masonryV2ExpName:r,masonryV2ExpGroup:s}){let l=(0,b.ZP)(),{isAuthenticated:m}=(0,x.B)(),u=(0,w.MM)();return(0,a.useEffect)(()=>{if(e.current[n]){let{fetchTimestamp:t,measureTimestamp:a,hasRendered:o,pageCount:p}=e.current[n]??{},d={deviceType:l,experimentName:r,experimentGroup:s,handlerId:u,isAuthenticated:m,pageCount:p};i&&!a&&(e.current[n].measureTimestamp=Date.now(),(0,g.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),i||o||((0,g.LY)("webapp.masonry.itemRenderStart",Date.now()-a,{tags:d}),e.current[n].hasRendered=!0)}},[i]),(0,v.jsx)(o.Z,{name:"MasonryItem",children:t})}function C(e){let{align:t,cacheKey:n,id:s,isGridCentered:l=!0,items:u,layout:C,loadItems:$,masonryRef:S,optOutFluidGridExperiment:j=!1,renderItem:E,scrollContainerRef:k,virtualize:I=!0,_getColumnSpanConfig:R,_dynamicHeights:W,useLoadingState:A}=e,D=(0,b.ZP)(),{isAuthenticated:L,isRTL:N}=(0,x.B)(),{logContextEvent:Z}=(0,r.v)(),F=(0,y.F)(),P="desktop"===D,T=(0,w.MM)(),B=(0,a.useRef)(u.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),{_loadingStateItems:O,_renderLoadingStateItems:z}=(0,h.Z)({useLoadingState:A}),{experimentalColumnWidth:G,experimentalGutter:V,anyEnabled:H}=(0,d.Z)("flexible"!==C&&!j),X=e.serverRender??!!P,Y="flexible"===C||"desktop"!==D||H,K=X?"serverRenderedFlexible":"flexible",Q=e.columnWidth??G??_.yF;Y&&(Q=Math.floor(Q));let U=e.gutterWidth??V??(P?_.oX:1),q=e.minCols??_.yc,J=(0,a.useRef)(0),ee=Q+U,et=function(e){if(null==e)return;let t=m(e);return t.positionCache||(t.positionCache=new p),t.positionCache}(n),en=function(e){if(null==e)return;let t=m(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(n),ea=(0,a.useCallback)(()=>k?.current||window,[k]),ei=(0,a.useRef)(!0),{anyEnabled:er}=F.checkExperiment("web_masonry_ssr_container_query"),eo=l&&ei.current?"centered":"",{className:es,styles:el}=function(e){let t=`m_${Object.keys(e).reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:s,items:l,_getColumnSpanConfig:m}=e,u=m?l.map((e,t)=>({index:t,columnSpanConfig:m(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=r+a,d=Array.from({length:o+1-s},(e,t)=>t+s).map(e=>{let l=e===s?0:e*p,m=e===o?null:(e+1)*p-.01,{styles:d,numberOfVisibleItems:c}=u.reduce((i,o)=>{let{columnSpanConfig:s}=o,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:s}),e),m=null!=o.index&&i.numberOfVisibleItems>=l+o.index,u=n?100/e*l:r*l+a*(l-1),{numberOfVisibleItems:p}=i;return m?p-=l-1:o.index<p&&(p+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:s,visible:m,width:u,flexible:n})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:l,maxWidth:m,styles:`
      .${t} .static:nth-child(-n+${c}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${h}

      ${d}
    `}}),c=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),_=e.enableContainerQuery?`
    ${c.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `:h.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${_}
  `}}({gutterWidth:U,flexible:Y,items:u,isRTL:N,itemWidth:Q,maxColumns:e.maxColumns??Math.max(u.length,_.g5),minColumns:q,enableContainerQuery:er||H,_getColumnSpanConfig:R}),em=`${eo} ${es}`.trim(),{anyEnabled:eu,expName:ep,group:ed,isMeasureAllEnabled:ec}=(0,c.Z)(),eh=(0,a.useMemo)(()=>!en||u.every(e=>!en.has(e)),[]),e_=ed&&eh,ef=(0,a.useRef)(),ey=(0,a.useRef)(u.length),ex=(0,a.useRef)(0);(0,a.useEffect)(()=>{e_&&u.forEach((e,t)=>{B.current[t]||(B.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:ex.current})}),ey.current=u.length,ex.current+=1},[u]),(0,a.useEffect)(()=>{ei.current&&(ei.current=!1)},[]),(0,a.useEffect)(()=>{let e=()=>J.current+=1;return e_&&(ef.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(e_){let t=B.current;window.removeEventListener("scroll",e);let n=t.filter(e=>!!e.measureTimestamp).length,a=t.filter(e=>e.hasRendered).length,i=ey.current,r={deviceType:D,experimentName:ep,experimentGroup:ed,handlerId:T,isAuthenticated:L};(0,g.LY)("webapp.masonry.timeSpent",ef.current?Date.now()-ef.current:0,{tags:r}),(0,g.S0)("webapp.masonry.itemsFetched",i,{tags:r}),(0,g.S0)("webapp.masonry.itemsMeasured",n,{tags:r}),(0,g.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(n/i*100),{tags:r}),(0,g.S0)("webapp.masonry.itemsRendered",a,{tags:r}),(0,g.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(a/i*100),{tags:r}),(0,g.S0)("webapp.masonry.scrollCount",J.current,{tags:r})}}},[]);let eb=(0,a.useCallback)(e=>e_?(0,v.jsx)(M,{analyticsData:B,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ed,masonryV2ExpName:ep,children:(0,v.jsx)(o.Z,{name:"MasonryItem",children:E(e)})}):(0,v.jsx)(o.Z,{name:"MasonryItem",children:E(e)}),[E]);return(0,v.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:s,style:H?{padding:`0 ${U/2}px`}:void 0,children:(0,v.jsxs)("div",{className:em,children:[X&&ei.current?(0,v.jsx)(f.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:el}):null,(0,v.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ee*e.maxColumns:void 0,children:eu?(0,v.jsx)(i.GX,{ref:e=>{S&&(S.current=e)},_dynamicHeights:W,_getColumnSpanConfig:R,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,g.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:Q,minCols:q}}),Z({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),Z({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),Z({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(e=>{e>=50&&Z({event_type:16261,component:14468}),e>=100&&Z({event_type:16262,component:14468})})},_measureAll:ec,align:t,columnWidth:Q,gutterWidth:U,items:u,layout:Y?K:C??"basic",loadItems:$,measurementStore:en,minCols:q,positionStore:et,renderItem:eb,scrollContainer:ea,virtualBufferFactor:.3,virtualize:I}):(0,v.jsx)(i.Rk,{ref:e=>{S&&(S.current=e)},_dynamicHeights:W,_getColumnSpanConfig:R,_loadingStateItems:O,_logTwoColWhitespace:e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,g.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:Q,minCols:q}}),Z({event_type:15878,component:14468,aux_data:{total_whitespace_px:t,average_whitespace_px:n,max_whitespace_px:Math.max(...e),min_whitespace_px:Math.min(...e)}})},_renderLoadingStateItems:z,align:t,columnWidth:Q,gutterWidth:U,items:u,layout:Y?K:C??"basic",loadItems:$,measurementStore:en,minCols:q,positionStore:et,renderItem:eb,scrollContainer:ea,virtualBufferFactor:.3,virtualize:I})})]})})}},401111:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(340523),i=n(5859),r=n(554786);function o(e=!0){let t=(0,r.ZP)(),{isAuthenticated:n}=(0,i.B)(),s=(0,a.F)(),{group:l,anyEnabled:m}="desktop"===t&&e?s.checkExperiment(n?"web_fluid_grid_desktop_auth":"web_fluid_grid_desktop_unauth"):{group:"",anyEnabled:!1},u=l.match(/enabled_([\d]+)_([\d]+)/),p=u?parseInt(u[1],10):void 0,d=u?parseInt(u[2],10):void 0,c=d?Math.floor(d/4):void 0;return{anyEnabled:m,group:l,experimentalColumnWidth:p,experimentalGutter:d,experimentalGutterBoints:c}}},547643:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(340523),i=n(5859),r=n(84768);function o(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:o,group:s}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:s,isMeasureAllEnabled:"enabled_measure_all"===s||"enabled_measure_all_impression_fix"===s,isImpressionFixEnabled:"control_impression_fix"===s||"enabled_impression_fix"===s||"enabled_measure_all_impression_fix"===s}}},667677:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(667294),i=n(883119),r=n(876594),o=n(922719),s=n(406893),l=n(785893);let m=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,u={backgroundColor:r._VP,animation:"pulsing 2s ease-out 0.5s infinite",borderRadius:r.Ev2};function p({data:e}){let{height:t}=e;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(s.Z,{unsafeCSS:(0,o.Ll)([m])}),(0,l.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:u},"data-test-id":"skeleton-pin",children:(0,l.jsx)(i.xu,{height:t})})]})}function d({useLoadingState:e,numOfPins:t=50}){let n=(0,a.useMemo)(()=>Array.from({length:t}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236}],[]),[t]);return{_loadingStateItems:e?n:void 0,_renderLoadingStateItems:e?({data:e})=>(0,l.jsx)(p,{data:e}):void 0}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/6575-a9ba390dd4321ded.mjs.map