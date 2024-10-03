"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33731],{286988:(e,t,n)=>{n.d(t,{Z:()=>r,v:()=>a});let a=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function r(){if(!a())return[];try{return await navigator.getInstalledRelatedApps()}catch(e){return[]}}},344064:(e,t,n)=>{n.d(t,{o$:()=>a,ty:()=>r,vE:()=>i});let{Provider:a,MaybeConsumer:r,useMaybeHook:i}=(0,n(342513).Z)("inviteContext")},870526:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(667294),r=n(883119),i=n(490166),l=n(785893);let p=40,o=70,s={__style:{borderRadius:"4px",padding:"10px 14px"}},d={__style:{borderWidth:"1px",borderStyle:"solid",borderColor:"white"}},u={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},c=e=>({__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...e}}),_=e=>"transparent"===e||"dark"===e?"inverse":"primary"===e?"light":"default",m=({color:e,icon:t})=>t?u:"transparent"===e?{__style:{...s.__style,...d.__style}}:s,w=({accessibilityLabel:e,color:t,customStyles:n,forwardedRef:s,icon:d,inline:u=!1,minHeight:w=p,minWidth:h=o,onTouch:f,pressState:y,shape:v,text:g})=>{let[x,k]=(0,a.useState)(!1),b=_(t),Z=m({color:t,icon:d}),j=(0,l.jsx)(r.xu,{onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),position:"relative",children:(0,l.jsx)(r.xu,{color:"primary"===t&&x?"errorBase":t,dangerouslySetInlineStyle:"pill"===v?c(n):Z,display:u?"inlineBlock":"flex",justifyContent:"center",minHeight:w,minWidth:h,children:(0,l.jsxs)(r.kC,{alignItems:"center",justifyContent:"center",children:[d&&(0,l.jsx)(r.xu,{paddingX:"check"===d?2:0,children:(0,l.jsx)(r.JO,{accessibilityLabel:e,color:b,icon:d,inline:!0,size:"check"===d?16:20})}),(0,l.jsx)(r.xv,{color:b,inline:!0,lineClamp:1,size:"300",weight:"bold",children:g})]})})});return f?(0,l.jsx)(i.Z,{onTouch:f,pressState:y||"none",rounding:"pill"===v?"pill":2,children:(0,l.jsx)(r.xu,{ref:s,children:j})}):j}},233731:(e,t,n)=>{n.d(t,{MZ:()=>D,di:()=>U,Ai:()=>T});var a=n(667294),r=n(616550),i=n(883119),l=n(286988),p=n(587703),o=n(422210),s=n(741983),d=n(805783),u=n(5859),c=n(191313),_=n(573810),m=n(217058),w=n(149722),h=n(757293),f=n(773616),y=n(870526),v=n(460270),g=n(979606),x=n(931090),k=n(862249),b=n(171966);let Z=({children:e,external:t,externalQueryParams:n,target:a,href:i,features:l})=>{let p=(0,r.k6)();if(!i)return null;let o=(0,v.Z)(i);return e({navigate:e=>{e.preventDefault(),(0,k.Z)({url:o})||t?"undefined"!=typeof window&&window.Windows?(0,b.Z)(o):(0,x.Z)(o,{queryParams:n,features:l}):(0,g.Z)({event:e,href:i,history:p,target:"blank"===a?"blank":null})}})};var j=n(785893),P=n(86264),A=n(669177),S=n(386008);let L=(0,a.lazy)(()=>Promise.all([n.e(97270),n.e(35239)]).then(n.bind(n,547010))),C=e=>"string"==typeof e?e:`${e.pathname||""}${e.search?`?${e.search}`:""}`,R=(e,t=!1)=>function({isAppUpsellDisabled:n,...y}){let{children:v,clientTrackingParams:g,deeplinkUri:x,external:k,onTouch:b,refresh:Z,to:R,viewParameter:D,viewType:T}=y,U=(0,f.Z)(),[B,W]=(0,a.useState)(!1),[I,N]=(0,a.useState)(!1),[$,O]=(0,a.useState)(!1),{isAuth:E}=(0,w.Z)(),{userAgent:{platform:q},locale:M}=(0,u.B)(),F=(0,S.Tt)(),H=(0,p.Z)(),z=(0,r.TH)();(0,a.useEffect)(()=>{(async function(){(0,l.v)()&&(O(!0),(await (0,l.Z)()).length>0&&N(!0))})()},[]),(0,a.useEffect)(()=>{E||"true"===(0,_.qn)("hasAppInstalledWasLogged")||((0,m.My)(`unauth.app_upsell.has_app.${I.toString()}`),(0,_.Nh)("hasAppInstalledWasLogged","true"))},[I,E]);let G=()=>{H({event_type:1701,view_type:T,view_parameter:D}),B&&W(!1)};return(0,j.jsxs)(i.xu,{"data-test-id":"deeplink-wrapper",children:[B&&(0,j.jsx)(a.Suspense,{children:(0,j.jsx)(L,{app_upsell_type:"deep-link-app-upsell-modal",clientTrackingParams:g,deepLinkUri:x,isOpen:!0,onDismiss:()=>{H({component:14157,element:10308,event_type:10220,view_type:T||202,view_parameter:D,aux_data:{app_upsell_type:"deep-link-app-upsell-modal"}})},onOpenInApp:()=>{(0,c.Nh)("deeplinkBehavior","branchfallback"),G()},shouldTrackDismiss:!0,to:R,viewParameter:D,viewType:T})}),(0,j.jsx)(P.Z,{children:a=>(0,j.jsx)(e,{...y,onTouch:e=>{let r=U&&!n&&E&&!k&&!Z&&!(0,d.FP)(window)&&!("ios"===q&&(M||"").startsWith("ar"))&&(0,A.kp)((0,o.Z)(F?.created_at));if(r){let t=!0,n=!1;"string"==typeof x&&(x||"").startsWith("/pin/")&&((0,s.uM)(z)||(0,s.am)(z)||(0,s.C$)(z))?$&&I&&x&&"android"===q&&(t=!1):(t=!1,n=!0),t?(e.stopPropagation(),e.preventDefault(),W(!0)):n||(e.stopPropagation(),e.preventDefault(),H({component:14347,element:13582,event_type:3830,view_type:20,view_parameter:3844,aux_data:{upsell_reason:"deep-link-app-upsell-modal"}}),a(x??(0,h.Z)(z,"android"===q),"deep-link-app-upsell-modal"))}else"branchfallback"!==(0,c.qn)("deeplinkBehavior")||(0,_.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,_.Nh)("fallbackAttempt",1),a(x,"deep-link-app-upsell-modal",`${window.location.origin}${C(R)}`),G());!(t&&r)&&b&&b(e)},children:v})})]})},D=R(({accessibilityLabel:e,children:t,external:n,externalQueryParams:a,features:r,inline:l=!1,newTab:p,nofollow:o,onTouch:s,onBlur:d,onFocus:u,pressState:c,rounding:_,to:m})=>(0,j.jsx)(Z,{external:n,externalQueryParams:a,features:r,href:m,target:p?"blank":null,children:({navigate:n})=>(0,j.jsx)(i.rU,{accessibilityLabel:e,display:l?"inlineBlock":"block",href:(0,v.Z)(m),onBlur:d?({event:e})=>d(e):void 0,onClick:({event:e,dangerouslyDisableOnNavigation:t})=>{t(),s?.(e),e.defaultPrevented||n(e)},onFocus:u?({event:e})=>u(e):void 0,rel:o?"nofollow":"none",rounding:_,tapStyle:(Array.isArray(c)?c:[c]).includes("compress")?"compress":"none",underline:"none",children:t})})),T=R(({external:e,externalQueryParams:t,newTab:n,onTouch:a,to:r,...i})=>(0,j.jsx)(Z,{external:e,externalQueryParams:t,href:r,target:n?"blank":null,children:({navigate:e})=>(0,j.jsx)(y.Z,{onTouch:t=>{a?.(t),t.defaultPrevented||e(t)},...i})})),U=R(y.Z,!0)},86264:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(214877),r=n(340523),i=n(5859),l=n(344064),p=n(669177),o=n(286988),s=n(624797),d=n(953565);let u="http://play.google.com/store/apps/details?id=com.pinterest",c=["access_token","new_password","new_password_confirm","password","next"],_=(e,t)=>t?(0,s.ru)(e,{invite_code:t}):e,m=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?_(e,n):"ios"===t||"ipad"===t?_(e.iOS,n):"android"===t?_(e.android,n):null},w=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:a,unauthId:r,app_upsell_type:i})=>({deeplink_path:m(e,n,t),current_page_url:(0,s.Gw)("undefined"!=typeof window?window.location.href:"",c),install_id:r,utm_source:140,utm_medium:2152,app_upsell_type:i,...a?{af_r:a}:null}),h=({deeplinkUri:e,invite_code:t,platform:n,unauthId:a,app_upsell_type:r})=>{let i=JSON.stringify({deeplink_path:m(e,n,t),current_page_url:(0,s.Gw)("undefined"!=typeof window?window.location.href:"",c),install_id:a});return{referrer:(0,s.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:i,app_upsell_type:r})}},f=({unauthId:e,app_upsell_type:t})=>({referrer:encodeURI((0,s.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t}))}),y=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:a,logContextEvent:r,platform:i,redirectToLite:l,unauthId:p,userAgent:c,app_upsell_type:_})=>{if(r?.({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),t){let m=w({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:a,platform:i,unauthId:p,userAgent:c,app_upsell_type:_});if((0,d.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:i}}),a&&(0,d.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,d.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!p}}),l){(0,d.nP)("mweb.deeplink.lite_link",{sampleRate:1}),r?.({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}});let e=f({unauthId:p,app_upsell_type:_});window.location.href=(0,s.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===i){let e=h({deeplinkUri:t,invite_code:a,platform:i,unauthId:p,app_upsell_type:_});(0,o.v)()?(0,o.Z)().then(n=>{if(n.length>0){let e=window.location.href.endsWith("/login")?window.location.href.replace("/login","string"==typeof t?t:t.android):window.location.href,n=(0,s.ru)(e,m);r?.({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.open(n)||r?.({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}})}else r?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,s.ru)(u,e)}).catch(()=>{(0,d.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(r?.({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,s.ru)(u,e))}else{if((0,d.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===i&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,s.ru)("https://pinterest.com/pinterest-predicts",m);return}r?.({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:_}}),window.location.href=(0,s.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",m)}}};var v=n(785893);function g({children:e,invite_code:t}){let{isAuthenticated:n,isBot:l,unauthId:o,userAgent:{platform:s,raw:d}}=(0,i.B)(),{logContextEvent:u}=(0,a.v)(),{checkExperiment:c}=(0,r.F)();return e(async(e,a,r)=>{u({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:a}}),y({isAuthenticated:n,checkExperiment:c,deeplinkUri:e,fallbackUrl:r,invite_code:t,logContextEvent:u,platform:s,redirectToLite:(0,p.Rp)({isBot:l,platform:s,userAgent:d}),unauthId:o,userAgent:d,app_upsell_type:a})})}let x=e=>(0,v.jsx)(l.ty,{children:t=>(0,v.jsx)(g,{...e,invite_code:t})});x.displayName="DeepLinkNavigator";let k=x},757293:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(741983);function r(e,t){return"/"===e.pathname?"/":(0,a.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1)}},773616:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(545007);let r=()=>(0,a.v9)(({session:{canUseNativeApp:e}})=>e)},669177:(e,t,n)=>{n.d(t,{G3:()=>d,Rp:()=>s,kp:()=>p});var a=n(188349),r=n(191313),i=n(573810);let l=14*a.F4,p=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,r.qn)("appUpsell"));return{currentTime:e,firstUpsellTime:Number((0,r.qn)("firstUpsellTime")),lastUpsellTime:t,showedAppUpsellCurrentSession:!!(0,i.qn)("showedAppUpsellCurrentSession")}}();return e?function(e,t,n){let{currentTime:a,firstUpsellTime:i,lastUpsellTime:p,showedAppUpsellCurrentSession:o}=e;return(n=n||l,!i||a<i+t)?!o:a-p>n&&((0,r.L_)("firstUpsellTime"),!0)}(n,a.F4):function(e,t){let{currentTime:n,lastUpsellTime:a}=e;return t=t||l,!a||n-a>t}(n,t)},o=e=>{let t=(e=e.toLowerCase()).match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},s=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(o(n))}catch(e){return!1}},d=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/33731-e8db3b98f9a1deca.mjs.map