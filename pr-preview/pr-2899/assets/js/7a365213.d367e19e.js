"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[45653],{37532:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453),t=(n(11470),n(19365),n(86025));const l={id:"assertion-components",title:"Assertion Test Components",sidebar_label:"Assertion Components",description:"Learn to write test assertions in the Sauce Labs API Testing Composer."},a=void 0,o={id:"api-testing/composer/assertion-components",title:"Assertion Test Components",description:"Learn to write test assertions in the Sauce Labs API Testing Composer.",source:"@site/docs/api-testing/composer/assertion-components.md",sourceDirName:"api-testing/composer",slug:"/api-testing/composer/assertion-components",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/composer/assertion-components",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/composer/assertion-components.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"assertion-components",title:"Assertion Test Components",sidebar_label:"Assertion Components",description:"Learn to write test assertions in the Sauce Labs API Testing Composer."},sidebar:"docs",previous:{title:"I/O Components",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/composer/io-components"},next:{title:"Logical Components",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/composer/logical-components"}},d={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Assert Compares",id:"assert-compares",level:2},{value:"Assert Contains",id:"assert-contains",level:2},{value:"Assert Equals",id:"assert-equals",level:2},{value:"Assert Exists",id:"assert-exists",level:2},{value:"Assert Greater",id:"assert-greater",level:2},{value:"Assert In",id:"assert-in",level:2},{value:"Assert Is",id:"assert-is",level:2},{value:"Assert Less",id:"assert-less",level:2},{value:"Assert Matches",id:"assert-matches",level:2},{value:"Assert Valid JSON Schema",id:"assert-valid-json-schema",level:2},{value:"Assertion Common Fields",id:"assertion-common-fields",level:2},{value:"Comment",id:"comment",level:3},{value:"Modifier",id:"modifier",level:3},{value:"Execute if item exists",id:"execute-if-item-exists",level:3},{value:"Level",id:"level",level:3},{value:"Stop test if fails",id:"stop-test-if-fails",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Assertions are a type of component that you can add to a test using the Composer. To learn how to access the components and create a test using the Composer see ",(0,r.jsx)(s.a,{href:"/api-testing/composer/",children:"Writing API Tests with the Composer"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,t.A)("img/api-testing/assertionComponents.png"),alt:"Assertion Components"}),"\n",(0,r.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A Sauce Labs account (",(0,r.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:["Familiarity with the ",(0,r.jsx)(s.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"assert-compares",children:"Assert Compares"}),"\n",(0,r.jsx)(s.p,{children:"Allows you to compare two payloads in terms of text, structure or values."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression 1"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsx)("p",{children:"The first payload you want to compare."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression 2"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | STRING |"})}),(0,r.jsx)("p",{children:"The second payload you want to compare."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Mode"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Text, values, structure |"})}),(0,r.jsxs)("p",{children:["The comparator you wish to use. ",(0,r.jsx)("code",{children:"text"})," compares the text of the two payloads as plain text, ",(0,r.jsx)("code",{children:"values"})," compares the two payloads regardless the text layout, ",(0,r.jsx)("code",{children:"structure"})," compares only the structure of the two payloads."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Strict"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | Yes, No |"})}),(0,r.jsx)("p",{children:"Comparison includes data types. "})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"}),(0,r.jsx)("img",{src:(0,t.A)("img/api-testing/compares.webp"),alt:"Assertion Compares Pic"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-compares\n  expression1: payload1\n  expression2: payload2\n  mode: text\n  strict: 'false'\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-compares\n  expression1: payload1\n  expression2: payload2\n  mode: values\n  strict: 'false'\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-compares\n  expression1: payload1\n  expression2: payload2\n  mode: structure\n  strict: 'false'\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-contains",children:"Assert Contains"}),"\n",(0,r.jsxs)(s.p,{children:["This assertion is used to check if the element described by the expression contains a specific substring. For example, to test the word ",(0,r.jsx)(s.em,{children:"Uber"})," is in Uber's product names (",(0,r.jsx)(s.em,{children:"UberX, UberBlack, UberPool"}),")."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | String, Number, Boolean |"})}),(0,r.jsx)("p",{children:"The value we want to compare the expression to."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Type"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | Auto, String, Number, Boolean |"})}),(0,r.jsxs)("p",{children:["The type of the value. ",(0,r.jsx)("code",{children:"Auto"})," means the engine will try to identify the type of the value."]})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-contains\n  expression: data.url\n  value: domain.com\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-contains\n  expression: data.id\n  value: ${id}\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-equals",children:"Assert Equals"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to check if the element value described by the expression is equal to a specific value. A direct one-to-one comparison."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | String, Number, Boolean |"})}),(0,r.jsx)("p",{children:"The value we want to compare the expression to."})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Type"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | Auto, String, Number, Boolean |"})}),(0,r.jsxs)("p",{children:["The type of the value. ",(0,r.jsx)("code",{children:"Auto"})," means the engine will try to identify the type of the value."]})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-equals\n  expression: data.code\n  value: '500'\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-equals\n  expression: data.code\n  value: 500\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-exists",children:"Assert Exists"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-exists\n  expression: data.id\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-greater",children:"Assert Greater"}),"\n",(0,r.jsxs)(s.p,{children:["This assertion is used to check if the element value described by the expression is greater than a proposed value. The values can be compared as a ",(0,r.jsx)(s.em,{children:"string"})," or ",(0,r.jsx)(s.em,{children:"number"}),"."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | String, Number |"})}),(0,r.jsx)("p",{children:"The value we want to compare the expression to."})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-greater\n  expression: data.code\n  value: 4503\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-in",children:"Assert In"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to check if the element described by the expression matches at least one item from a given list. For example, the category of a product is one of the approved categories such as men, women, or children."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | String, Number |"})}),(0,r.jsx)("p",{children:"The value we want to compare the expression to."})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"}),"."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-in\n  expression: data.type\n  value:\n  - ebook\n  - paperbook\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-in\n  expression: data.price\n  value:\n  - '5.50'\n  - '7'\n  - '9.79'\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-is",children:"Assert Is"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is\xa0one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Type"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Integer, float, url, boolean, phone, email, map, array |"})}),(0,r.jsxs)("p",{children:["The data type of the value. ",(0,r.jsx)("code",{children:"integer"})," checks if field is an integer value, ",(0,r.jsx)("code",{children:"float"})," checks if field is a decimal value, ",(0,r.jsx)("code",{children:"url"})," checks if the field is a well formatted url, ",(0,r.jsx)("code",{children:"boolean"})," checks if field is a boolean value, ",(0,r.jsx)("code",{children:"phone"})," checks if field contains a valid phone number format, ",(0,r.jsx)("code",{children:"email"})," checks if field is a valid email format, ",(0,r.jsx)("code",{children:"map"})," checks if field is a map type, ",(0,r.jsx)("code",{children:"array"})," checks if the field is an array."]})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-is\n  expression: data.id\n  type: integer\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-less",children:"Assert Less"}),"\n",(0,r.jsxs)(s.p,{children:["This assertion is used to check if the element value described by the expression is less\xa0than a proposed value. The values can be compared as a ",(0,r.jsx)(s.em,{children:"string"})," or ",(0,r.jsx)(s.em,{children:"number"}),"."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | String, Number |"})}),(0,r.jsx)("p",{children:"The value we want to compare the expression to."})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-less\n  expression: data.code\n  value: 4503\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-matches",children:"Assert Matches"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to check if the element value described by the expression matches a knowledge base of some kind (e.g, U.S. state or zip code). This also gives you the ability to write your own regex (regular expression)."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Type"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | 'regex', 'US Zipcode', 'USState', 'credit card', 'country codes', 'currency codes' |"})}),(0,r.jsxs)("p",{children:["The data type of the value. ",(0,r.jsx)("code",{children:"regex"})," if you want to evaluate the field as a regular expression (specified in regex value), ",(0,r.jsx)("code",{children:"US Zipcode"})," checks if the field is a valid US zip code, ",(0,r.jsx)("code",{children:"US State"})," checks if the field is a valid US State (i.e., 'NY'), ",(0,r.jsx)("code",{children:"credit card"})," checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX), ",(0,r.jsx)("code",{children:"country code"})," checks if the field contains a valid country code (i.e., 'US', 'FR', 'DK'), ",(0,r.jsx)("code",{children:" currency code"})," checks if the fields is a valid currency (i.e., 'USD', 'EUR')."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Regex value"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED, if type is 'regex' | String |"})}),(0,r.jsx)("p",{children:"Specify the regular expression you want to use for checking the expression. "})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#assertion-common-fields",children:"Common Fields"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"- id: assert-matches\n  expression: data.zipcode\n  type: us_zipcodes\n"})})]}),"\n",(0,r.jsx)(s.h2,{id:"assert-valid-json-schema",children:"Assert Valid JSON Schema"}),"\n",(0,r.jsx)(s.p,{children:"This assertion is used to validate a JSON schema, based on the provided schema definition."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Parameters"})}),(0,r.jsx)("table",{id:"table-api",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:"2",children:"Fields"})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"Expression"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | Expression |"})}),(0,r.jsxs)("p",{children:["The path to the element we want to operate on (e.g., ",(0,r.jsx)("code",{children:"payload.ProductID"}),"). See ",(0,r.jsx)("a",{href:"/api-testing/composer/expressions/",children:"Using Expressions"})," for more details."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:"JSON Schema"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| REQUIRED | JSON schema definition |"})}),(0,r.jsx)("p",{children:"The JSON schema definition. This will be used to validate the JSON passed in the expression field."})]})]})]})}),"See also ",(0,r.jsx)(s.a,{href:"#comment",children:"Comment"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:"Code View Examples"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'- id: set\n  var: json_success\n  mode: lang\n  lang: template\n  body: \'{ "rectangle" : { "a" : 15, "b" : 5 } }\'\n'})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'- id: assert-valid-jsonschema\n  expression: json_success\n  body: |-\n    {\n      "type": "object",\n      "properties": {\n        "rectangle": {\n          "$ref": "#/definitions/Rectangle"\n        }\n      },\n      "definitions": {\n        "size": {\n          "type": "number",\n          "minimum": 0\n        },\n        "Rectangle": {\n          "type": "object",\n          "properties": {\n            "a": {\n              "$ref": "#/definitions/size"\n            },\n            "b": {\n              "$ref": "#/definitions/size"\n            }\n          }\n        }\n      }\n    }\n'})})]}),"\n",(0,r.jsx)(s.h2,{id:"assertion-common-fields",children:"Assertion Common Fields"}),"\n",(0,r.jsx)(s.h3,{id:"comment",children:"Comment"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | String |"})}),"\nAdd comment messages in the form of a string data type."]}),"\n",(0,r.jsx)(s.h3,{id:"modifier",children:"Modifier"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | 'not' |"})}),"\nThe assertion is considered verified if it does not pass."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Not available in ",(0,r.jsx)(s.strong,{children:"Assert Compares"})," and ",(0,r.jsx)(s.strong,{children:"Assert Valid JSON Schema"})]})}),"\n",(0,r.jsx)(s.h3,{id:"execute-if-item-exists",children:"Execute if item exists"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | yes, no |"})}),"\nThe assertion is evaluated only if the element exists. This is useful when the element does not always exist."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Not available in ",(0,r.jsx)(s.strong,{children:"Assert Compares"}),", ",(0,r.jsx)(s.strong,{children:"Assert Exists"})," and ",(0,r.jsx)(s.strong,{children:"Assert Valid JSON Schema"}),"."]})}),"\n",(0,r.jsx)(s.h3,{id:"level",children:"Level"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | error, warning |"})}),"\nSpecify if the assertion fails whether it should be considered an ",(0,r.jsx)("code",{children:"error"})," or just a ",(0,r.jsx)("code",{children:"warning"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.strong,{children:"warning"})," will not trigger alerts, such as email."]})}),"\n",(0,r.jsx)(s.h3,{id:"stop-test-if-fails",children:"Stop test if fails"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("small",{children:"| OPTIONAL | Yes, No |"})}),"\nThe test will be immediately stopped if the assertion fails."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Not available in ",(0,r.jsx)(s.strong,{children:"Assert Valid JSON Schema"}),"."]})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var t=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>E});var r=n(96540),i=n(18215),t=n(23104),l=n(56347),a=n(205),o=n(57485),d=n(31682),c=n(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:i}}=e;return{value:s,label:n,attributes:r,default:i}}))}(n);return function(e){const s=(0,d.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const i=(0,l.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(i.location.search);s.set(t,e),i.replace({...i.location,search:s.toString()})}),[t,i])]}function j(e){const{defaultValue:s,queryString:n=!1,groupId:i}=e,t=x(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:t}))),[d,h]=m({queryString:n,groupId:i}),[j,u]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,t]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:i}),f=(()=>{const e=d??j;return p({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),u(e)}),[h,u,t]),tabValues:t}}var u=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:s,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const s=e.currentTarget,n=o.indexOf(s),i=a[n].value;i!==r&&(d(s),l(i))},h=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>o.push(e),onKeyDown:h,onClick:c,...t,className:(0,i.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:i}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function v(e){const s=j(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...s}),(0,g.jsx)(b,{...e,...s})]})}function E(e){const s=(0,u.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(s))}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var r=n(96540);const i={},t=r.createContext(i);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);