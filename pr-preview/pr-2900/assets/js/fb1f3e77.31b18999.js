"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20568],{41298:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(74848),t=n(28453);const r={id:"assert-is",title:"Assert Is",sidebar_label:"Assert Is",description:"This assertion is used to check if the value of the element defined by the expression belongs to a specific type."},o=void 0,l={id:"api-testing/on-prem/assertion-components/assert-is",title:"Assert Is",description:"This assertion is used to check if the value of the element defined by the expression belongs to a specific type.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-is.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-is",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/assertion-components/assert-is",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-is.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"assert-is",title:"Assert Is",sidebar_label:"Assert Is",description:"This assertion is used to check if the value of the element defined by the expression belongs to a specific type."},sidebar:"apif",previous:{title:"Assert In",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/assertion-components/assert-in"},next:{title:"Assert Less",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/assertion-components/assert-less"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Code View Example",id:"code-view-example",level:2}];function c(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is\xa0one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth."}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Name"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Type/Value"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Required"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Expression"}),(0,i.jsx)(s.td,{children:"Expression"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Type"}),(0,i.jsx)(s.td,{children:"'integer', 'float', 'url', 'boolean', 'phone', 'email', 'map', 'array'"}),(0,i.jsx)(s.td,{children:"Yes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Mode"}),(0,i.jsx)(s.td,{children:"'all' or 'one'"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Level"}),(0,i.jsx)(s.td,{children:"'error' or 'warning'"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modifier"}),(0,i.jsx)(s.td,{children:"'not'"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Execute if item exists"}),(0,i.jsx)(s.td,{children:"'true' or 'false'"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Stop test if fails"}),(0,i.jsx)(s.td,{children:"'true' or 'false'"}),(0,i.jsx)(s.td,{children:"No"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Comment"}),(0,i.jsx)(s.td,{children:"String"}),(0,i.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Expression"}),": The path to the element we want to operate on (e.g., ",(0,i.jsx)(s.code,{children:"payload.ProductID"}),"). See ",(0,i.jsx)(s.a,{href:"/api-testing/on-prem/reference/expression/",children:"Expression"})," for more details."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Type"}),": The data type of the value. The possible values are:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"integer"}),": checks if field is an integer value;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"float"}),": checks if field is a decimal value;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"url"}),": checks if the field is a well formatted url;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"boolean"}),": checks if field is a boolean value;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"phone"}),": checks if field contains a valid phone number format;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"email"}),": checks if field is a valid email format;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"map"}),": checks if field is a map type;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"array"}),": checks if the field is an array."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Mode"}),": Specify if all the same elements in the payload should match the assertion (\u2018all\u2019) or if only one element (\u2018one\u2019) is enough."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Level"}),": Specify if the assertion fails whether it should be considered an \u2018error\u2019 or just a \u2018warning\u2019."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Modifier"}),": The assertion is considered verified if it does not pass."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Execute if item exists"}),": The assertion is evaluated only if the element exists. This is useful when the element does not always exist."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Stop test if fails"}),": The test will be immediately stopped if the assertion fails."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Comment"}),": Add comment messages in the form of a string data type."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"warning"})," will not trigger alerts (such as email or text messages)."]})}),"\n",(0,i.jsx)(s.h2,{id:"code-view-example",children:"Code View Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<assert-is expression="\u201ddata.id\u201d" type="\u201dinteger\u201d" />\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);