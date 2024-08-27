"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63023],{60619:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=a(74848),t=a(28453),r=a(86025);const i={id:"generate-test-data",title:"Generating Test Data for Your Tests",sidebar_label:"Generating Test Data",description:"Generate test data to add in your tests"},l=void 0,d={id:"api-testing/use-cases/generate-test-data",title:"Generating Test Data for Your Tests",description:"Generate test data to add in your tests",source:"@site/docs/api-testing/use-cases/generate-test-data.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/generate-test-data",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/use-cases/generate-test-data",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/generate-test-data.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"generate-test-data",title:"Generating Test Data for Your Tests",sidebar_label:"Generating Test Data",description:"Generate test data to add in your tests"},sidebar:"docs",previous:{title:"Generating Dynamic Dates",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/use-cases/dynamic-dates"},next:{title:"Improving Email Notifications using Fact",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/use-cases/fact"}},o={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Methods",id:"methods",level:2},{value:"Set (variable)",id:"set-variable",level:2},{value:"Generating a String (single variable)",id:"generating-a-string-single-variable",level:3},{value:"Generating an Array of Data",id:"generating-an-array-of-data",level:3},{value:"Generating an Object",id:"generating-an-object",level:3},{value:"Body",id:"body",level:2},{value:"Params",id:"params",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["If your API or test requires random names, emails, or different types of input data, you can generate those directly in Sauce Labs API Testing. You can directly reference the method in your variable, API call, or anywhere in the test where you can enter the ",(0,s.jsx)(n.code,{children:"${F.<methodName()>}"})," syntax."]}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,s.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"Some of the available methods are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.fullName()"})," - Generates a full name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.firstName()"})," - Generates a first name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.lastName()"})," - Generates a last name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.emailAddress()"})," - Generates an email address"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.password(<minimumLength,maximumLength,includeUppercase,includeSpecial,includeDigit>)"})," - Generates a password. By default the values are F.password(8,16,false,false,false). Minimum length is 3 chars."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.creditCardNumber()"})," - Generates a credit card number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.creditCardExpiry()"})," - Generates a credit card expiration date"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.integer(<min,max>)"})," - Generates an integer"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For the full list of methods, see the ",(0,s.jsx)(n.a,{href:"/api-testing/composer/expressions/#f",children:"F Extension"})," and ",(0,s.jsx)(n.a,{href:"/api-testing/composer/expressions/#expression-language-extensions",children:"Expression Language Extensions"})," to see the whole extension library."]}),"\n",(0,s.jsx)(n.p,{children:"These methods can be used anywhere you can write a variable, such as inside a Set (variable) or in any part of the request (body, header, param, etc.)."}),"\n",(0,s.jsx)(n.p,{children:"Let's see some practical example how to generate fake data in your tests."}),"\n",(0,s.jsx)(n.h2,{id:"set-variable",children:"Set (variable)"}),"\n",(0,s.jsx)(n.p,{children:"Set (variable) allows you to create variables or more structured data."}),"\n",(0,s.jsx)(n.h3,{id:"generating-a-string-single-variable",children:"Generating a String (single variable)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Variable:"})," The name to assign the variable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mode:"})," String"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Value:"})," The method to use to generate data. For example, ",(0,s.jsx)(n.code,{children:"${F.fullName()}"})," will generate a random full name."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("/img/api-testing/test-data-full-name.png"),alt:"Full name generation",width:"600"}),"\n",(0,s.jsxs)(n.p,{children:["As result, you will have something like ",(0,s.jsx)(n.code,{children:"Ida Strosin"})]}),"\n",(0,s.jsx)(n.h3,{id:"generating-an-array-of-data",children:"Generating an Array of Data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Variable:"})," The name to assign the variable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mode:"})," Data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data:"})," The JS function for creating an array. For example, ",(0,s.jsx)(n.code,{children:"new Array(5).fill(0).map(_ => F.streetAddress())"})," generates an array with five random addresses."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("/img/api-testing/test-data-array.png"),alt:"Data array generation",width:"600"}),"\n",(0,s.jsxs)(n.p,{children:["As result, you will have something like ",(0,s.jsx)(n.code,{children:"39263 Smith Ridge,32960 Bashirian Mews,91904 Jast Island,97468 Christopher Turnpike,51511 Berge Grove"})]}),"\n",(0,s.jsx)(n.h3,{id:"generating-an-object",children:"Generating an Object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Variable:"})," The name to assign the variable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mode:"})," Language"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Language:"})," Template"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Body:"})," The object to generate with the required methods. For example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name":"${F.firstName()}",\n    "last name":"${F.lastName()}",\n    "address":"${F.streetName()}",\n    "profession":"${F.profession()}",\n    "mobile phone":"${F.mobile()}",\n    "email":"${F.emailAddress()}"\n}\n'})}),"\n",(0,s.jsx)("img",{src:(0,r.A)("/img/api-testing/test-data-personal-data.webp"),alt:"Personal data generation",width:"600"}),"\n",(0,s.jsx)(n.p,{children:"As result, you will have something like"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Jermaine",\n    "last name": "Monahan",\n    "address": "Crona Squares",\n    "profession": "musician",\n    "mobile phone": "07693 220099",\n    "email": "gus_schuster@weimann.com"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"body",children:"Body"}),"\n",(0,s.jsx)(n.p,{children:"Any of the following methods can be used in a Request Body."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type:"})," The content-type of the body (application/json in this example)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Body:"})," The body of the request. For example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "${F.firstName()}",\n  "last name": "${F.lastName()}",\n  "city": "${F.city()}",\n  "profession": "${F.profession()}"\n}\n'})}),"\n",(0,s.jsx)("img",{src:(0,r.A)("/img/api-testing/test-data-request-body.webp"),alt:"Request body data",width:"600"}),"\n",(0,s.jsx)(n.p,{children:"It produces a body similar to the below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Doug",\n    "last name": "Klein",\n    "city": "South Elizabeth",\n    "profession": "astronomer"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"params",children:"Params"}),"\n",(0,s.jsx)(n.p,{children:"Similarly, these methods can also be used as params."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," The name of the param."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Value:"})," The value of the param. For example, ",(0,s.jsx)(n.code,{children:"${F.creditCardNumber()}"}),"."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("/img/api-testing/test-data-request-body-param.png"),alt:"Request body param data",width:"600"}),"\n",(0,s.jsxs)(n.p,{children:["The result, will be similar to ",(0,s.jsx)(n.code,{children:"1234-2121-1221-1211"})]}),"\n",(0,s.jsx)(n.p,{children:"These examples are of the most common places where you may need to generate data, but these methods can be added anywhere you can use a variable."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var s=a(96540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);