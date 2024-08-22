"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[61147],{39649:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(74848),n=t(28453);t(11470),t(19365),t(86025);const o={id:"minidump",title:"Configuring Backtrace for Minidump",sidebar_label:"Minidump",description:"Configure Backtrace for Minidump."},i=void 0,s={id:"error-reporting/platform-integrations/minidump",title:"Configuring Backtrace for Minidump",description:"Configure Backtrace for Minidump.",source:"@site/docs/error-reporting/platform-integrations/minidump.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/minidump",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/minidump",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/minidump.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"minidump",title:"Configuring Backtrace for Minidump",sidebar_label:"Minidump",description:"Configure Backtrace for Minidump."},sidebar:"backtrace",previous:{title:"Apache Traffic Server",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/apache"},next:{title:"File Attachments",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/file-attachments"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Overview",id:"overview",level:2},{value:"Hang Detection",id:"hang-detection",level:3},{value:"Crash Dump Context",id:"crash-dump-context",level:3},{value:"Breakpad",id:"breakpad",level:2},{value:"Crashpad",id:"crashpad",level:2},{value:"Electron",id:"electron",level:2},{value:"HTTP",id:"http",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["The minidump format is the standard crash format for Windows. With the help of open source libraries such as ",(0,a.jsx)(r.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/",children:"Breakpad"})," or ",(0,a.jsx)(r.a,{href:"https://chromium.googlesource.com/crashpad/crashpad/",children:"Crashpad"}),", it is possible to generate crash reports in the minidump format for Mac OS, Android, and iOS."]}),"\n",(0,a.jsx)(r.p,{children:"This article indexes the mechanisms to integrate minidump submission into your Backtrace instance."}),"\n",(0,a.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["A Backtrace account (",(0,a.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,a.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,a.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,a.jsxs)(r.li,{children:["A Backtrace project and a ",(0,a.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(r.p,{children:"Some applications implement a watchdog thread whose job is to perform internal application liveness checking. When these checks fail, the thread triggers a crash report. This has implications for the report's content that may require accounting for."}),"\n",(0,a.jsx)(r.h3,{id:"hang-detection",children:"Hang Detection"}),"\n",(0,a.jsx)(r.p,{children:"Crash reports normally include an indicator of the culpable thread that triggered the report, usually because they faulted or raised an unhandled exception. Watchdog threads often generate reports when they detect that some part of the application has stopped making forward progress. In such cases, the report needs to explicitly call out the triggering thread."}),"\n",(0,a.jsxs)(r.p,{children:["For reports made using the JSON format, you can adjust the ",(0,a.jsx)(r.code,{children:"mainThread"})," parameter to specify the triggering thread. Refer to the ",(0,a.jsx)(r.a,{href:"https://api.backtrace.io/",children:"API documentation"})," for more information on this. In the case of other report types, such as minidumps, the watchdog can send a signal (for example., SIGABRT) to the affected thread to set the context appropriately."]}),"\n",(0,a.jsx)(r.h3,{id:"crash-dump-context",children:"Crash Dump Context"}),"\n",(0,a.jsx)(r.p,{children:"When a crash report is generated, it is crucial to ensure that the crash context accurately reflects the context of the guilty thread, rather than the reporting thread or any other context."}),"\n",(0,a.jsx)(r.h2,{id:"breakpad",children:"Breakpad"}),"\n",(0,a.jsxs)(r.p,{children:["Firefox and a wide variety of desktop applications use the popular open source crash reporting framework. See the ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/breakpad",children:"Integration Guide"})," for more information."]}),"\n",(0,a.jsx)(r.h2,{id:"crashpad",children:"Crashpad"}),"\n",(0,a.jsxs)(r.p,{children:["The popular open source crash reporting framework used by Chrome, Slack, and more. It is the successor to Breakpad. See the ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/crashpad",children:"Integration Guide"})," for more information."]}),"\n",(0,a.jsx)(r.h2,{id:"electron",children:"Electron"}),"\n",(0,a.jsxs)(r.p,{children:["This popular framework allows you to build cross-platform desktop applications with JavaScript and HTML. Discord, Visual Studio, Slack, and more use it. See the ",(0,a.jsx)(r.a,{href:"/error-reporting/language-integrations/electron",children:"Integration Guide"})," for more information."]}),"\n",(0,a.jsx)(r.h2,{id:"http",children:"HTTP"}),"\n",(0,a.jsxs)(r.p,{children:["Submit crash dumps directly over HTTP and HTTPS. For more information see the ",(0,a.jsx)(r.a,{href:"/error-reporting/platform-integrations/http-submission",children:"HTTP Submission"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var a=t(18215);const n={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>y});var a=t(96540),n=t(18215),o=t(23104),i=t(56347),s=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[c,d]=m({queryString:t,groupId:n}),[f,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),b=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:r,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),n=s[t].value;n!==a&&(c(r),i(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function j(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...r}),(0,v.jsx)(k,{...e,...r})]})}function y(e){const r=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var a=t(96540);const n={},o=a.createContext(n);function i(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);