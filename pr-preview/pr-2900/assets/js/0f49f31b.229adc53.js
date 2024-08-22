"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[54640],{47424:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(74848),a=n(28453),r=n(86025);const s={id:"downloader-101",title:"Downloader 101",sidebar_label:"Downloader 101",keywords:["api-testing","downloader"]},i=void 0,l={id:"api-testing/on-prem/learn-more/downloader-101",title:"Downloader 101",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/learn-more/downloader-101.md",sourceDirName:"api-testing/on-prem/learn-more",slug:"/api-testing/on-prem/learn-more/downloader-101",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/learn-more/downloader-101",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/learn-more/downloader-101.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"downloader-101",title:"Downloader 101",sidebar_label:"Downloader 101",keywords:["api-testing","downloader"]},sidebar:"apif",previous:{title:"SSO / SAML 2.0 (beta)",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/integrations/single-sign-on-with-saml-2-0-beta"},next:{title:"Improving Your Metrics",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/learn-more/improving-your-metrics"}},d={},c=[{value:"What is the Downloader?",id:"what-is-the-downloader",level:2},{value:"Local (Hybrid) Use of Downloader",id:"local-hybrid-use-of-downloader",level:2},{value:"The Downloader Is Configurable",id:"the-downloader-is-configurable",level:2}];function h(e){const o={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(o.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(o.h2,{id:"what-is-the-downloader",children:"What is the Downloader?"}),"\n",(0,t.jsx)(o.p,{children:"The API Fortress Downloader is the agent that retrieves the resources (payloads) to be tested. For cloud customers, we have various downloaders already available to you such as US East, US West, and Europe."}),"\n",(0,t.jsx)(o.p,{children:"For self hosted (on-premises) customers it is important that you deploy the Downloaders along with the API Fortress Dashboard. Without at least one Downloader, the dashboard doesn\u2019t have the ability to make the API call and get the response. You can deploy multiple Downloaders in various locations, so factors such as latency and download time can be measured more precisely."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/03/APIF_Downloader_Docs@4x.png"),alt:"APIF Downloader Pic"}),"\n",(0,t.jsx)(o.h2,{id:"local-hybrid-use-of-downloader",children:"Local (Hybrid) Use of Downloader"}),"\n",(0,t.jsx)(o.p,{children:"The API Fortress Remote Download Agent can also sit inside of your infrastructure to allow the cloud (SaaS) platform to test systems that are not exposed externally. It will listen to an HTTPS port for jobs requested by an API Fortress engine. The agent will perform an HTTP(S) request to an endpoint as described in the job, and once completed will serialize the data back to the engine, adding contextual information such as the metrics. No data is retained in the agent memory after job completion. The agent will use the DNS settings provided by the machine it\u2019s installed on."}),"\n",(0,t.jsx)(o.h2,{id:"the-downloader-is-configurable",children:"The Downloader Is Configurable"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["You may ",(0,t.jsx)(o.a,{href:"/api-testing/on-prem/how-to/disable-ssl-validation",children:"disable SSL validation"})]}),"\n",(0,t.jsxs)(o.li,{children:["It can be configured to ",(0,t.jsx)(o.a,{href:"/api-testing/on-prem/self-hosted/proxy-settings-in-downloader",children:"go through a proxy"}),":"]}),"\n",(0,t.jsxs)(o.li,{children:["The Downloader (aka: RemoteDownloadAgent) receives inbound HTTPS connections from the dashboard, encrypting everything with its own certificate","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["You can also install ",(0,t.jsx)(o.a,{href:"/api-testing/on-prem/how-to/keystores-for-downloader",children:"an actual certificate to a RemoteDownloadAgent"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);