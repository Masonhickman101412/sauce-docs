"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[73460],{81574:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(74848),i=t(28453);const r={id:"assert-exists",title:"Assert Exists",sidebar_label:"Assert Exists",description:"This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion."},o=void 0,d={id:"api-testing/on-prem/assertion-components/assert-exists",title:"Assert Exists",description:"This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-exists.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-exists",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/assertion-components/assert-exists",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-exists.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"assert-exists",title:"Assert Exists",sidebar_label:"Assert Exists",description:"This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion."},sidebar:"apif",previous:{title:"Assert Equals",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/assertion-components/assert-equals"},next:{title:"Assert Greater",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/assertion-components/assert-greater"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Code View Examples",id:"code-view-examples",level:2}];function l(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion."}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type/Value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Expression"}),(0,n.jsx)(s.td,{children:"Expression"}),(0,n.jsx)(s.td,{children:"Yes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Mode"}),(0,n.jsx)(s.td,{children:"'all' or 'one'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Level"}),(0,n.jsx)(s.td,{children:"'error' or 'warning'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modifier"}),(0,n.jsx)(s.td,{children:"'not'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Stop test if fails"}),(0,n.jsx)(s.td,{children:"'true' or 'false'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Comment"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Expression"}),": The path to the element we want to operate on (e.g., ",(0,n.jsx)(s.code,{children:"payload.ProductID"}),"). See ",(0,n.jsx)(s.a,{href:"/api-testing/on-prem/reference/expression/",children:"Expression"})," for more details."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Mode"}),": Specify if all the same elements in the payload should match the assertion (\u2018all\u2019) or if only one element (\u2018one\u2019) is enough."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Level"}),": Specify if the assertion fails whether it should be considered an \u2018error\u2019 or just a \u2018warning\u2019."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Modifier"}),": The assertion is considered verified if it does not pass."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Stop test if fails"}),": The test will be immediately stopped if the assertion fails."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Comment"}),": Add comment messages in the form of a string data type."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.strong,{children:"warning"})," will not trigger alerts (such as email or text messages)."]})}),"\n",(0,n.jsx)(s.h2,{id:"code-view-examples",children:"Code View Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-exists expression="\u201ddata.id\u201d" />\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>d});var n=t(96540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);