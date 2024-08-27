"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[73692],{25415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453);const a={id:"execution-context-in-api-fortress",title:"Execution Context in API Fortress",sidebar_label:"Execution Context in API Fortress",keywords:["api","api-fortress","execution"]},r=void 0,o={id:"api-testing/on-prem/reference/execution-context-in-api-fortress",title:"Execution Context in API Fortress",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/reference/execution-context-in-api-fortress.md",sourceDirName:"api-testing/on-prem/reference",slug:"/api-testing/on-prem/reference/execution-context-in-api-fortress",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/reference/execution-context-in-api-fortress",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/reference/execution-context-in-api-fortress.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"execution-context-in-api-fortress",title:"Execution Context in API Fortress",sidebar_label:"Execution Context in API Fortress",keywords:["api","api-fortress","execution"]},sidebar:"apif",previous:{title:"Connecting to Testrail",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/reference/connecting-to-testrail"},next:{title:"Expression",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/reference/expression"}},l={},c=[{value:"Preamble: The Nature of Fields",id:"preamble-the-nature-of-fields",level:2},{value:"Data Manipulation in Evaluated Fields",id:"data-manipulation-in-evaluated-fields",level:2},{value:"Expression Language Extensions",id:"expression-language-extensions",level:2},{value:"Language specific functions",id:"language-specific-functions",level:3},{value:"The SET lang Component",id:"the-set-lang-component",level:3},{value:"Appendix: <code>string</code> vs <code>number</code> Dichotomy",id:"appendix-string-vs-number-dichotomy",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"preamble-the-nature-of-fields",children:"Preamble: The Nature of Fields"}),"\n",(0,t.jsx)(n.p,{children:"Among the pieces of information you introduce in an API Fortress test some are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Taken statically, as strings"}),". These are ingested as they are in the system. Examples:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.strong,{children:"var"})," field in the SET component (the name of the variable itself)"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"type"})," field in an ASSERT-IS component"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Evaluated as expressions"}),". This means that whatever you put in there, it\u2019ll be considered a \u201cpiece of code\u201d, something to be evaluated as a logical expression. Examples:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"expression"})," field in all assertions"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"data"})," or ",(0,t.jsx)(n.strong,{children:"object"})," field in the SET component"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Most of the times, they are selectors, as in payload.person.age"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Evaluated as string templates"}),". These are ingested as static strings unless variables are present in it. When variables are present, these get replaced with the values taken from the scope. Examples:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The content of the COMMENT component"}),"\n",(0,t.jsx)(n.li,{children:"The body of the postBody component"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"They are generally used to print a string with variable content as in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n   "person":{\n      "age": ${age}\n   }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"data-manipulation-in-evaluated-fields",children:"Data Manipulation in Evaluated Fields"}),"\n",(0,t.jsx)(n.p,{children:"Every evaluated field, such as expressions and variable references in templates, allow data manipulation operations. This means that you\u2019re not limited to just selection of data, but you can manipulate the data to make it what works for your needs."}),"\n",(0,t.jsx)(n.p,{children:"To do that, you can leverage multiple functions."}),"\n",(0,t.jsx)(n.h2,{id:"expression-language-extensions",children:"Expression Language Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["These extensions are unique in the API Fortress engine, and allow you to perform various operations that come handy in your daily work. The full reference is here: ",(0,t.jsx)(n.a,{href:"/api-testing/on-prem/reference/expression-language-extensions",children:"https://apifortress.com/doc/expression-language-extensions/"})]}),"\n",(0,t.jsx)(n.p,{children:"Here are a few examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["I need to create a payload that contains a date in milliseconds, that is certainly in the future compared to the current moment. It also needs a unique ID for the request: ",(0,t.jsx)(n.code,{children:"{ \u201cfutureDate\u201d: ${D.plusDays(D.nowMillis(),3), \u201cid\u201d: \u201d${WSCrypto.genUUID()}\u201d }"})]}),"\n",(0,t.jsxs)(n.li,{children:["I need to pick one random item from an array, and store it in a variable for later use: ",(0,t.jsx)(n.code,{children:"<set var=\u201dmy_item\u201d object=\u201dpayload.myarray.pick()\u201d/>"})]}),"\n",(0,t.jsxs)(n.li,{children:["I need to put my randomly picked item an a JSON payload, in JSON format: ",(0,t.jsx)(n.code,{children:"{ \u201citem\u201d:${my_item.asJSON()} }"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"language-specific-functions",children:"Language specific functions"}),"\n",(0,t.jsx)(n.p,{children:"While the extensions can be seen as useful functions for API related tasks, other times you may be in need to perform less specific operations, in a more programmer-like fashion."}),"\n",(0,t.jsx)(n.p,{children:"Splitting, cutting, searching strings is quite a common thing, as much as accessing specific items in arrays, and so on."}),"\n",(0,t.jsx)(n.p,{children:"For all these general purpose tasks, API Fortress allows you to use the Groovy programming language in all evaluated fields."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"On the cloud, just a subset of these commands are available, while on-prem you get the full language coverage, unless set otherwise in the configuration."})}),"\n",(0,t.jsxs)(n.p,{children:["The full semantics documentation is located here: ",(0,t.jsx)(n.a,{href:"http://groovy-lang.org/semantics.html",children:"http://groovy-lang.org/semantics.html"})]}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s a few typical use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Take a certain integer from a payload, and store it multiplied by 10: ",(0,t.jsx)(n.code,{children:"<set var=\u201ditem\u201d object=\u201dpayload.counter+10\u201d/>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Append a suffix to a variable already set: ",(0,t.jsx)(n.code,{children:"<set var=\u201ditem\u201d value=\u201d${item+\u2019-foobar\u2019}\u201d/>"})," But this would also work: ",(0,t.jsx)(n.code,{children:"<set var=\u201ditem\u201d value=\u201d${item}-foobar\u201d/>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Split a string on the comma, and iterate on it with an EACH component: ",(0,t.jsx)(n.code,{children:"<each expression=\u201dpayload.the\\_string.split(\u2018,\u2019)\u201d>"})]}),"\n",(0,t.jsxs)(n.li,{children:["Make sure that the prefix (before the - dash) of a certain piece of data is an integer (as in: ",(0,t.jsx)(n.code,{children:"\u201c123-foobar\u201d"}),"): ",(0,t.jsx)(n.code,{children:"<assert-is expression=\u201dpayload.id\\[0..id.indexOf('-')-1\\]\u201d type=\u201dinteger\u201d/>"})," ",(0,t.jsxs)(n.em,{children:["Reads: substring ",(0,t.jsx)(n.code,{children:"payload.id"})," from index zero to the index before the first occurence of ",(0,t.jsx)(n.code,{children:"'-'"})]})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"the-set-lang-component",children:"The SET lang Component"}),"\n",(0,t.jsx)(n.p,{children:"The SET component also has a special mode that allows you to write a little Groovy snippet when stuff get rough. It can be accessed by choosing the \u201cLanguage\u201d mode, and it allows you to write logic like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"def items = \\[\\]\n\n10.times{ it->\n\n items += it\n\n}\n\nreturn items\n"})}),"\n",(0,t.jsx)(n.p,{children:"The assigned variable will contain an array of integers initialized with the numbers from 0 to 9."}),"\n",(0,t.jsxs)(n.h2,{id:"appendix-string-vs-number-dichotomy",children:["Appendix: ",(0,t.jsx)(n.code,{children:"string"})," vs ",(0,t.jsx)(n.code,{children:"number"})," Dichotomy"]}),"\n",(0,t.jsx)(n.p,{children:"In API Fortress, most built in data structures are strings, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The variables from the vault"}),"\n",(0,t.jsx)(n.li,{children:"The variables from the input sets"}),"\n",(0,t.jsx)(n.li,{children:"The environments"}),"\n",(0,t.jsx)(n.li,{children:"The variables passed in an API Run call"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"But also everything generated by the evaluation of a template string, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The comments (obviously)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The request payloads (obviously)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["*",(0,t.jsx)(n.strong,{children:"*The value fields**"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is why the SET operation has both a ",(0,t.jsx)(n.strong,{children:"value"})," field and an ",(0,t.jsx)(n.strong,{children:"object (Data)"})," field."]}),"\n",(0,t.jsx)(n.p,{children:"Assuming I\u2019ve set 2 variables like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<set var=\u201ddata1\u201d value=\u201d5\u201d/>\n\n<set var=\u201ddata2\u201d object=\u201d5\u201d/>\n"})}),"\n",(0,t.jsx)(n.p,{children:"And I had to create a third variable incrementing the previous variable by two:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WRONG"}),": ",(0,t.jsx)(n.code,{children:"<set var=\u201ddata3\u201d object=\u201ddata1+2\u201d/>"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"data3"})," is ",(0,t.jsx)(n.code,{children:"52"})," as ",(0,t.jsx)(n.code,{children:"data1"})," is a ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OK"}),": ",(0,t.jsx)(n.code,{children:"<set var=\u201ddata3\u201d object=\u201ddata2+2/\u201d>"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"data3"})," is ",(0,t.jsx)(n.code,{children:"7"})," as ",(0,t.jsx)(n.code,{children:"data2"})," is an ",(0,t.jsx)(n.code,{children:"integer"})]}),"\n",(0,t.jsx)(n.p,{children:"For the very same reason:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<set var=\u201ddata3\u201d value=\u201d${data2+2}\u201d/>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"data3"})," would indeed store ",(0,t.jsx)(n.code,{children:"7"}),", but as a ",(0,t.jsx)(n.code,{children:"string"}),", not a ",(0,t.jsx)(n.code,{children:"number"}),". Which may be OK in most cases, unless you need to manipulate the number more."]}),"\n",(0,t.jsxs)(n.p,{children:["So what if I wanted to increment ",(0,t.jsx)(n.code,{children:"data1"})," by ",(0,t.jsx)(n.code,{children:"2"})," then?"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<set var=\u201ddata3\u201d object=\u201ddata1.toInteger()+2\u201d/>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toInteger()"})," method is always there to help you. And if unsure whether a piece of data is already an integer or not, the ",(0,t.jsx)(n.code,{children:"toInteger()"})," method won\u2019t complain if the data is an integer already."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);