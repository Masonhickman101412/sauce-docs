"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98617],{47456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(74848),s=t(28453);const i={id:"on-prem-platform",title:"Introduction to the Self-Hosted Platform",sidebar_label:"Introduction",keywords:["api","api-fortress","onpremises","selfhosted"]},r=void 0,a={id:"api-testing/on-prem/self-hosted/on-prem-platform",title:"Introduction to the Self-Hosted Platform",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/on-prem-platform.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/on-prem-platform",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/self-hosted/on-prem-platform",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/on-prem-platform.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"on-prem-platform",title:"Introduction to the Self-Hosted Platform",sidebar_label:"Introduction",keywords:["api","api-fortress","onpremises","selfhosted"]},sidebar:"apif",previous:{title:"Example Security Tests",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/security-testing/example-security-tests"},next:{title:"Self-Hosted System Requirements",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/self-hosted/on-premises-requirements"}},l={},d=[{value:"What Is It?",id:"what-is-it",level:2},{value:"Why?",id:"why",level:2},{value:"Customization",id:"customization",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Operations",id:"operations",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"what-is-it",children:"What Is It?"}),"\n",(0,o.jsx)(n.p,{children:"API Fortress can be deployed in nearly any manner that works for you - whether hosted cloud, self-hosted/on-premises, or hybrid."}),"\n",(0,o.jsxs)(n.p,{children:["Our most popular is self-hosted/on-premises, which means the ",(0,o.jsx)(n.em,{children:"entire"})," platform lives in your environment behind your firewall, or in your VPC."]}),"\n",(0,o.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,o.jsx)(n.p,{children:"There are multiple reasons for having an on-prem engine, and these are some of the most common:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Satisfies Any Security Requirements"}),"\n",(0,o.jsx)(n.li,{children:"Complete Data Ownership"}),"\n",(0,o.jsxs)(n.li,{children:["Access to Private Staging Environments, Click here to learn more about the ",(0,o.jsx)(n.a,{href:"https://apifortress.com/doc/downloader-101/",children:"Downloaders"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Mocking"}),"\n",(0,o.jsx)(n.li,{children:"Load Testing"}),"\n",(0,o.jsx)(n.li,{children:"Unlimited Use"}),"\n",(0,o.jsx)(n.li,{children:"Customization"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsxs)(n.p,{children:["API Fortress is extremely ",(0,o.jsx)(n.strong,{children:"modular,"})," and most functionalities can be enhanced with extensions and integrations. Some use cases are:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Forwarding the results of the tests in a dedicated platform for further analysis, another database, or an object storage."}),"\n",(0,o.jsx)(n.li,{children:"Customizing the chain of alerts with internal tools."}),"\n",(0,o.jsx)(n.li,{children:"Storing the code of the tests in a location that is not the API Fortress cloud."}),"\n",(0,o.jsx)(n.li,{children:"Adding the ability to ingest and analyze exotic data types."}),"\n",(0,o.jsx)(n.li,{children:"Adding functionalities provided by 3rd party libraries"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"All this is done with a few lines of Java/Groovy that we can help you with."}),"\n",(0,o.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsxs)(n.p,{children:["A simple ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/self-hosted/deployment-docker",children:"Docker"})," / ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/self-hosted/deployment-kubernetes",children:"Kubernetes"})," / ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/self-hosted/red-hat-openshift",children:"Open Shift"})," deployment."]}),"\n",(0,o.jsxs)(n.p,{children:["We ask a handful of questions, setup a configuration file for you, and then you deploy with your preferred container. The system requirements ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/self-hosted/on-premises-requirements",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you would like to trial API Fortress on-premises, simply ",(0,o.jsx)(n.a,{href:"https://apifortress.com/doc/on-premises-questionnaire/",children:"fill out this survey"})," and we will work on a configuration file for you."]}),"\n",(0,o.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,o.jsx)(n.p,{children:"The engine operates exactly the same way API Fortress does in the cloud. Self-hosted/on-premises actually offers even more features which we discussed above under Customizations."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);