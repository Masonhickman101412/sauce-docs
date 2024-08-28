"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[57786],{55479:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=r(74848),o=r(28453);r(11470),r(19365),r(86025);const s={id:"server-advanced",title:"Coroner Server Advanced",sidebar_label:"Server Advanced",description:"Display additional histograms in the web UI."},a=void 0,c={id:"error-reporting/advanced/coroner/server-advanced",title:"Coroner Server Advanced",description:"Display additional histograms in the web UI.",source:"@site/docs/error-reporting/advanced/coroner/server-advanced.md",sourceDirName:"error-reporting/advanced/coroner",slug:"/error-reporting/advanced/coroner/server-advanced",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/server-advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/coroner/server-advanced.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"server-advanced",title:"Coroner Server Advanced",sidebar_label:"Server Advanced",description:"Display additional histograms in the web UI."},sidebar:"backtrace",previous:{title:"Server Setup",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/server-setup"},next:{title:"Client Getting Started",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/client-getting-started"}},i={},l=[{value:"Disable SSL",id:"disable-ssl",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["If you are using a hosted version of ",(0,t.jsx)(n.code,{children:"coronerd"}),", reach out to us to display additional histograms in the web UI. If you are using an on-premise version of ",(0,t.jsx)(n.code,{children:"coronerd"}),", you'll need to complete the following steps to display additional histograms in the web UI:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"/etc/coronerd/coronerd.conf"})," on the ",(0,t.jsx)(n.code,{children:"coronerd"})," machine."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In this configuration file, find the ",(0,t.jsx)(n.code,{children:"http-console"})," object. Inside the ",(0,t.jsx)(n.code,{children:"http-console"})," object, locate the ",(0,t.jsx)(n.code,{children:"columns"})," object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"http-console" : {\n    "columns" : {\n        "expand" : [\n            "hostname",\n            "application",\n            "version",\n            "dc"\n        ],\n\n        "list" : [\n            "application",\n            "version",\n            "dc"\n        ]\n    },\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"columns"})," object contains two JSON arrays: ",(0,t.jsx)(n.code,{children:"expand"})," and ",(0,t.jsx)(n.code,{children:"list"}),". The elements in the ",(0,t.jsx)(n.code,{children:"list"})," array are displayed on the project page. It is recommended to add any histograms you'd like to search for across error groups to this array. The elements in the ",(0,t.jsx)(n.code,{children:"expand"})," array are displayed on the group page. It is recommended to add any histograms you'd like to view on a per-error basis to this array."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After updating the configuration, restart the ",(0,t.jsx)(n.code,{children:"coronerd"})," service:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /etc/init.d/coronerd restart\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now you see the added histograms on the relevant pages."}),"\n",(0,t.jsx)(n.h2,{id:"disable-ssl",children:"Disable SSL"}),"\n",(0,t.jsxs)(n.p,{children:["By default, ",(0,t.jsx)(n.code,{children:"coronerd"})," is configured to encrypt traffic. If you are using a hosted version of ",(0,t.jsx)(n.code,{children:"coronerd"}),", reach out to us to disable SSL. If you wish to turn off SSL on an on-premise version of ",(0,t.jsx)(n.code,{children:"coronerd"}),", follow these steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Remove any relevant ",(0,t.jsx)(n.code,{children:"ssl"})," sections in ",(0,t.jsx)(n.code,{children:"/etc/coronerd/coronerd.conf"}),". You'll find ",(0,t.jsx)(n.code,{children:"ssl"})," objects in the following JSON objects in the configuration file:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"read"})," object in the ",(0,t.jsx)(n.code,{children:"listener"})," object: The interface used to pull down snapshots."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"write"})," object in the ",(0,t.jsx)(n.code,{children:"listener"})," object: The interface used to submit snapshots."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"http-console"}),": The web interface."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "console" : {\n        "path" : "/var/run/coronerd/coronerd.socket",\n        "bind" : {\n            "hostname" : "0.0.0.0",\n            "service" : "9040"\n        },\n        "backlog" : 16,\n        "ssl" : {\n            "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n            "key" : "/etc/coronerd/ssl/key.pem"\n        }\n    },\n    "listener" : {\n        "write" : {\n            "http_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6097",\n                    "concurrency" : 2000\n                }\n            ],\n            "https_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6098",\n                    "concurrency" : 2000\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        },\n        "read" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "4097"\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        },\n        "http-console" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "443",\n                    "concurrency" : 1000\n                }\n            ],\n            "columns" : {\n        //...\n            },\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        }\n    }\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart ",(0,t.jsx)(n.code,{children:"coronerd"})," after every configuration change."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/etc/init.d/coronerd restart\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When configuring the ",(0,t.jsx)(n.code,{children:"coroner"})," client, refer to the ",(0,t.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-getting-started/#configuration-for-unsecured-communications",children:"Client Install Configuration | Unsecured Communications"})," documentation for instructions on how to configure the ",(0,t.jsx)(n.code,{children:"universe"})," section."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),o=r(34164),s=r(23104),a=r(56347),c=r(205),i=r(57485),l=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,u]=f({queryString:r,groupId:o}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),b=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),o=c[r].value;o!==t&&(l(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);