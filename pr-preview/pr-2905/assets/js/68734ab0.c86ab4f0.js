"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42164],{4640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=t(74848),r=t(28453),i=t(86025);t(11470),t(19365);const o={id:"specifications",title:"Sauce Connect Proxy Specifications",sidebar_label:"Specifications"},c=void 0,a={id:"secure-connections/sauce-connect/advanced/specifications",title:"Sauce Connect Proxy Specifications",description:"If you're a security or network administrator, you may find it useful to review the Sauce Connect Proxy security specifications to better evaluate its security.",source:"@site/docs/secure-connections/sauce-connect/advanced/specifications.md",sourceDirName:"secure-connections/sauce-connect/advanced",slug:"/secure-connections/sauce-connect/advanced/specifications",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect/advanced/specifications",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/advanced/specifications.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"specifications",title:"Sauce Connect Proxy Specifications",sidebar_label:"Specifications"},sidebar:"docs",previous:{title:"KGP Protocol",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect/advanced/kgp"},next:{title:"Troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2905/secure-connections/sauce-connect/troubleshooting"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Security Specifications",id:"security-specifications",level:2},{value:"Timeout Values",id:"timeout-values",level:2},{value:"Start Timeouts",id:"start-timeouts",level:3},{value:"Timeouts Summary",id:"timeouts-summary",level:3},{value:"Supported Browsers and Ports",id:"supported-browsers-and-ports",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"If you're a security or network administrator, you may find it useful to review the Sauce Connect Proxy security specifications to better evaluate its security.\nIf you use Sauce Connect Proxy as part of your CI/CD pipeline, you may find it useful to review timeout values to better configure CI/CD success/failure parameters."}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels",children:"Using Sauce Connect Proxy Tunnels"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-specifications",children:"Security Specifications"}),"\n",(0,s.jsx)(n.p,{children:"Sauce Connect Proxy Tunnel connection TLS specifications"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Value"})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"SC Versions"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Supported TLS Versions"}),(0,s.jsx)("td",{children:"1.2, 1.3"}),(0,s.jsx)("td",{children:"4.8.x, 4.9.x"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Sauce Connect Proxy client OpenSSL Version"}),(0,s.jsx)("td",{children:"1.1.1k"}),(0,s.jsx)("td",{children:"4.8.x, 4.9.x"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Sauce Connect Proxy client-supported ciphers"}),(0,s.jsx)("td",{children:(0,s.jsxs)("small",{children:[(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES256-GCM-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES256-GCM-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-CHACHA20-POLY1305"}),(0,s.jsx)("p",{children:"ECDHE-RSA-CHACHA20-POLY1305"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES128-GCM-SHA256"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES128-GCM-SHA256"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES256-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES256-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES128-SHA256"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES128-SHA256"})]})}),(0,s.jsx)("td",{children:"4.8.x, 4.9.x"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Sauce Connect Proxy server-supported ciphers"}),(0,s.jsx)("td",{children:(0,s.jsxs)("small",{children:[(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES256-GCM-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES256-GCM-SHA384"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-CHACHA20-POLY1305"}),(0,s.jsx)("p",{children:"ECDHE-RSA-CHACHA20-POLY1305"}),(0,s.jsx)("p",{children:"ECDHE-ECDSA-AES128-GCM-SHA256"}),(0,s.jsx)("p",{children:"ECDHE-RSA-AES128-GCM-SHA256"})]})}),(0,s.jsx)("td",{})]})]}),"\n",(0,s.jsx)(n.h2,{id:"timeout-values",children:"Timeout Values"}),"\n",(0,s.jsx)(n.h3,{id:"start-timeouts",children:"Start Timeouts"}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/sauce-connect/timeout-values.png"),alt:"Sauce Connect download file contents",width:"550"}),"\n",(0,s.jsx)(n.h3,{id:"timeouts-summary",children:"Timeouts Summary"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Name"})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Value"})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Notes"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:['"REST API GET ',(0,s.jsx)(n.code,{children:"/USER/tunnels/ID"}),'" timeout']}),(0,s.jsx)("td",{children:"5 seconds"}),(0,s.jsx)("td",{children:'Sauce Connect Proxy "HTTP long polling" (each 5 seconds) requests to get the backend status.'})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:['"REST API POST ',(0,s.jsx)(n.code,{children:"/USER/tunnels/ID"}),'" timeout']}),(0,s.jsx)("td",{children:"10 seconds"}),(0,s.jsx)("td",{children:'Sauce Connect Proxy "HTTP long polling" (each 30 seconds) requests to update the client status.'})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'"Tunnel provisioning" timeout'}),(0,s.jsx)("td",{children:"45 seconds"}),(0,s.jsx)("td",{children:"Tunnel provisioning may take anywhere from 3 to 45 seconds, depending on the load and the tunnel features."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'"Initial tunnel connection" timeout'}),(0,s.jsx)("td",{children:"15 seconds"}),(0,s.jsx)("td",{children:"Sauce Connect Proxy tunnel must be established within this timeout after the server is provisioned."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'"Tunnel disconnected" timeout'}),(0,s.jsx)("td",{children:"60 seconds"}),(0,s.jsx)("td",{children:"Sauce Connect Proxy client may disconnect from the server (after establishing the initial connection) for up to 60 seconds."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:'"Jobs wait" timeout'}),(0,s.jsx)("td",{children:"3 hours"}),(0,s.jsx)("td",{children:'On receiving a "tunnel shutdown" request, Sauce Labs REST API would wait for, at most, 3 hours for jobs, using the tunnel, to finish. Jobs that require longer time to complete may fail after the tunnel is terminated.'})]})]}),"\n",(0,s.jsx)(n.h2,{id:"supported-browsers-and-ports",children:"Supported Browsers and Ports"}),"\n",(0,s.jsx)(n.p,{children:"The following commonly used browsers and ports are subject to change as new versions are released."}),"\n",(0,s.jsx)(n.p,{children:"Microsoft Edge, Chrome 71+, and the Safari browser on OS X 10.10+ and mobile iOS 8+ proxy these common ports:"}),"\n",(0,s.jsx)(n.p,{children:"443, 888,\n2000, 2001, 2020, 2109, 2222, 2310,\n3000, 3001, 3010, 3030, 3210, 3333,\n4000, 4001, 4201, 4040, 4321, 4502, 4503, 4567,\n5000, 5001, 5002, 5050, 5555, 5432,\n6000, 6001, 6060, 6666, 6543,\n7000, 7070, 7774, 7777,\n8000, 8001, 8003, 8031, 8080, 8081, 8443, 8765, 8777, 8888,\n9000, 9001, 9031, 9080, 9081, 9090, 9191, 9876, 9877, 9999,\n49221, 53106, 55001"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"On Android devices, ports 5555 and 8080 cannot be used with Sauce Connect Proxy."})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.mdxAdmonitionTitle,{children:["Using ",(0,s.jsx)(n.code,{children:".local"})," domains"]}),(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/bonjour",children:"Bonjour / ZeroConf"})," for hostnames on a local network does not work on Safari 15 and above."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>C});var s=t(96540),r=t(18215),i=t(23104),o=t(56347),c=t(205),a=t(57485),l=t(31682),u=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,d]=x({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),j=(()=>{const e=l??m;return p({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{j&&a(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),r=c[t].value;r!==s&&(l(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,S.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,S.jsx)(b,{...e,...n}),(0,S.jsx)(v,{...e,...n})]})}function C(e){const n=(0,f.A)();return(0,S.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);