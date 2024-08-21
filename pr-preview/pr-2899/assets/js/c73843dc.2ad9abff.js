"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[87652],{93557:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=t(74848),r=t(28453);const i={id:"assert-matches",title:"Assert Matches",sidebar_label:"Assert Matches",description:"This assertion is used to check if the element value described by the expression matches a knowledge base of some kind."},o=void 0,c={id:"api-testing/on-prem/assertion-components/assert-matches",title:"Assert Matches",description:"This assertion is used to check if the element value described by the expression matches a knowledge base of some kind.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-matches.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-matches",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/assertion-components/assert-matches",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-matches.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"assert-matches",title:"Assert Matches",sidebar_label:"Assert Matches",description:"This assertion is used to check if the element value described by the expression matches a knowledge base of some kind."},sidebar:"apif",previous:{title:"Assert Less",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/assertion-components/assert-less"},next:{title:"Assert Valid JSON Schema",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/assertion-components/assert-valid-json-schema"}},d={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Code View Examples",id:"code-view-examples",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["This assertion is used to check if the element value described by the expression matches a knowledge base of some kind. For example a ",(0,n.jsx)(s.em,{children:"US Zipcode"})," or a ",(0,n.jsx)(s.em,{children:"State"}),". This also gives you the ability to write your own regex (regular expression)."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Name"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Type/Value"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Required"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Expression"}),(0,n.jsx)(s.td,{children:"Expression"}),(0,n.jsx)(s.td,{children:"Yes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Type"}),(0,n.jsx)(s.td,{children:"'regex' or 'US Zipcode' or 'USState' or 'credit card' or 'country codes' or 'currency codes'"}),(0,n.jsx)(s.td,{children:"Yes"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Regex value"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"Yes, if type is 'regex'"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Mode"}),(0,n.jsx)(s.td,{children:"'all' or 'one'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Level"}),(0,n.jsx)(s.td,{children:"'error' or 'warning'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Modifier"}),(0,n.jsx)(s.td,{children:"'not'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Execute if item exists"}),(0,n.jsx)(s.td,{children:"'true' or 'false'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Stop test if fails"}),(0,n.jsx)(s.td,{children:"'true' or 'false'"}),(0,n.jsx)(s.td,{children:"No"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Comment"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"No"})]})]})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Expression"}),": The path to the element we want to operate on (e.g., ",(0,n.jsx)(s.code,{children:"payload.ProductID"}),"). See ",(0,n.jsx)(s.a,{href:"/api-testing/on-prem/reference/expression/",children:"Expression"})," for more details."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Type"}),": The data type of the value. The possible values are:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"regex"}),": if you want to evaluate the field as a regular expression (specified in regex value);"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"US Zipcode"}),": checks if the field is a valid US Zipcode;"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"US State"}),": checks if the field is a valid US State (i.e. 'NY');"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"credit card"}),": checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX);"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"country codes"}),": checks if the field contains a valid country code (i.e. 'US', 'FR', 'DK');"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"currency codes"}),": checks if the fields is a valid currency (i.e. 'USD', 'EUR');"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Regex value"}),": Specify the regular expression you want to use for checking the expression."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Mode"}),": Specify if all the same elements in the payload should match the assertion (\u2018all\u2019) or if only one element (\u2018one\u2019) is enough."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Level"}),": Specify if the assertion fails whether it should be considered an \u2018error\u2019 or just a \u2018warning\u2019."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Modifier"}),": The assertion is considered verified if it does not pass."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Execute if item exists"}),": The assertion is evaluated only if the element exists. This is useful when the element does not always exist."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Stop test if fails"}),": The test will be immediately stopped if the assertion fails."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Comment"}),": Add comment messages in the form of a string data type."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"code-view-examples",children:"Code View Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.zipcode\u201d" type="\u201dus_zipcodes\u201d" />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.state\u201d" type="\u201dus_states\u201d" />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.name\u201d" type="\u201dregex\u201d" value="\u201d[hc]?at\u201d" />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.credit\u201d" type="\u201dcreditCard\u201d" />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.country\u201d" type="country_codes\u201d" />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-html",children:'<assert-matches expression="\u201ddata.code\u201d" type="\u201dcurrency_codes\u201d" />\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(96540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);