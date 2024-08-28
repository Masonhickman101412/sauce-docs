"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[64172],{44659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(74848),a=n(28453);n(11470),n(19365),n(86025);const o={id:"snapshots",title:"Snapshot Generation",sidebar_label:"Snapshot Generation",description:"Generate snapshots by calling Backtrace."},s=void 0,i={id:"error-reporting/advanced/snapshots",title:"Snapshot Generation",description:"Generate snapshots by calling Backtrace.",source:"@site/docs/error-reporting/advanced/snapshots.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/snapshots",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/snapshots.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"snapshots",title:"Snapshot Generation",sidebar_label:"Snapshot Generation",description:"Generate snapshots by calling Backtrace."},sidebar:"backtrace",previous:{title:"DWARF",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/dwarf"},next:{title:"Error Processing Modifiers",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/error-processing-modifiers"}},c={},l=[{value:"Submitting a Snapshot to Coroner",id:"submitting-a-snapshot-to-coroner",level:2},{value:"Script to Generate and Submit Snapshot",id:"script-to-generate-and-submit-snapshot",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["You generate the snapshot by calling ",(0,r.jsx)(t.code,{children:"/opt/backtrace/bin/ptrace"}),". The most basic form of this call is ",(0,r.jsx)(t.code,{children:"/opt/backtrace/bin/ptrace"}),", but in practice, you want to include the flags ",(0,r.jsx)(t.code,{children:"--application="}),", ",(0,r.jsx)(t.code,{children:"--kv="}),", and ",(0,r.jsx)(t.code,{children:"-O"})," to specify the output location."]}),"\n",(0,r.jsx)(t.h2,{id:"submitting-a-snapshot-to-coroner",children:"Submitting a Snapshot to Coroner"}),"\n",(0,r.jsx)(t.p,{children:"The basic format for submitting snapshots to Coroner via curl/https is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl --data-binary @/path/to/snapshot.btt https://yourcompany.sp.backtrace.io:6098/post?token=your_submission_token\n"})}),"\n",(0,r.jsx)(t.h2,{id:"script-to-generate-and-submit-snapshot",children:"Script to Generate and Submit Snapshot"}),"\n",(0,r.jsx)(t.p,{children:"You need to customize this script to populate:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Endpoint (for example, ",(0,r.jsx)(t.a,{href:"https://yourcompany.sp.backtrace.io:6098",children:"https://yourcompany.sp.backtrace.io:6098"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"Application name"}),"\n",(0,r.jsx)(t.li,{children:"Submission token"}),"\n",(0,r.jsx)(t.li,{children:"Attributes (using dc and version as examples)"}),"\n",(0,r.jsx)(t.li,{children:"btt_prefix and btt (folder and name where the .btt snapshot is temporarily saved)."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'#!/bin/bash\n\nexport LD_LIBRARY_PATH="/opt/backtrace/lib64:/opt/backtrace/lib:$LD_LIBRARY_PATH:/usr/local/lib:/usr/lib:/usr/lib64:/lib:/usr/local/lib64/"\nexport PATH="/opt/backtrace/bin:$PATH"\n\n# Customize these for your endpoint and application\nENDPOINT="https://yourcompany.sp.backtrace.io:6098"\nAPPLICATION="yourapp"\nTOKEN="yourtoken" # your submission token\n\n# Gather your KVs here\nDC="datacenter_name"\nVERSION="version"\nKV="dc:${DC},version:${VERSION}"\n\nBTT_PREFIX="/var/backtrace/${APPLICATION}"\nBTT="${BTT_PREFIX}/${APPLICATION}"\nPTRACE=/opt/backtrace/bin/ptrace\n# Make core directory\nmkdir -p ${BTT_PREFIX}\nif [ $? -ne 0 ] ; then\n   echo "Failed to create ${BTT_PREFIX}"\n   exit 1\nfi\n\nFILE=`$PTRACE --load= --application=${APPLICATION} --kv=${KV} -O ${BTT} ${1}`\nRT="$?"\n\nif test "$RT" = "0" && test -f "$FILE"; then\n      curl --data-binary @${FILE} ${ENDPOINT}/post?token=${TOKEN}\n      rm -f ${FILE}\nelse\n      echo "Unknown crash condition"\nfi\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),i=n(205),c=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=l??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function T(e){const t=(0,f.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);