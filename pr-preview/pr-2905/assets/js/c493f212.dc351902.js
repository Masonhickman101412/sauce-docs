"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4383],{32514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={id:"composer-snippets",title:"Composer Snippets",sidebar_label:"Composer Snippets",keywords:["api","api-fortress","composer-snippets"]},r=void 0,a={id:"api-testing/on-prem/reference/composer-snippets",title:"Composer Snippets",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/reference/composer-snippets.md",sourceDirName:"api-testing/on-prem/reference",slug:"/api-testing/on-prem/reference/composer-snippets",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/reference/composer-snippets",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/reference/composer-snippets.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"composer-snippets",title:"Composer Snippets",sidebar_label:"Composer Snippets",keywords:["api","api-fortress","composer-snippets"]},sidebar:"apif",previous:{title:"Company Settings",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/reference/company-settings"},next:{title:"Connecting to Testrail",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/reference/connecting-to-testrail"}},p={},c=[{value:"Create a Snippet",id:"create-a-snippet",level:2},{value:"Snippet Actions",id:"snippet-actions",level:3},{value:"Update a Snippet",id:"update-a-snippet",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A snippet is a fragment of test, stored in ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/quick-start/the-vault",children:"the Vault"}),", that can be reused in multiple tests."]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-snippet",children:"Create a Snippet"}),"\n",(0,s.jsx)(n.p,{children:"To create a snippet,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Click on the first component"})," you want to include in the fragment."]}),"\n",(0,s.jsxs)(n.li,{children:["Then, hold down the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"[SHIFT]"})})," key and click on the last component you want to include. The selection will be highlighted."]}),"\n",(0,s.jsxs)(n.li,{children:["Click the ",(0,s.jsx)(n.strong,{children:"+ button"})," in the snippets section of the Vault panel, choose if you want to make it available only for the current project or for all the projects in the company and fill the Name and Description fields."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"That is it! The fragment of the code is created and ready to be use in every test of the project."}),"\n",(0,s.jsx)(n.h3,{id:"snippet-actions",children:"Snippet Actions"}),"\n",(0,s.jsx)(n.p,{children:"For each snippet, two actions are available:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Paste Snippet"}),": Allows you to paste the entire component inside the test, allowing you to edit as needed. The pasted components will lose any reference to the original snippet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Invoke Snippet"}),": This creates a ",(0,s.jsx)(n.strong,{children:"Call"})," component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"update-a-snippet",children:"Update a Snippet"}),"\n",(0,s.jsx)(n.p,{children:"In order to update a snippet,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Open the Snippet from ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/quick-start/the-vault",children:"the Vault"})]}),"\n",(0,s.jsx)(n.li,{children:"Click on any of the fields and begin typing to edit the details"}),"\n",(0,s.jsx)(n.li,{children:"Changes are saved automagically."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);