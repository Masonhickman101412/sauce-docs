"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63037],{11754:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=s(74848),i=s(28453),o=s(86025);const r={id:"composer",title:"Test Composer Guide",sidebar_label:"Test Composer Guide",description:"The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests"},a=void 0,l={id:"api-testing/on-prem/quick-start/composer",title:"Test Composer Guide",description:"The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests",source:"@site/docs/api-testing/on-prem/quick-start/composer.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/composer",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start/composer",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/composer.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1680216256e3,frontMatter:{id:"composer",title:"Test Composer Guide",sidebar_label:"Test Composer Guide",description:"The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests"},sidebar:"apif",previous:{title:"Creating a Test",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start"},next:{title:"Build from Spec File",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start/build-from-spec"}},d={},c=[{value:"Visual vs. Code View",id:"visual-vs-code-view",level:2},{value:"Test Composer UI",id:"test-composer-ui",level:2},{value:"1 - Add Request / Assertions",id:"1---add-request--assertions",level:3},{value:"2 - Transform Component",id:"2---transform-component",level:3},{value:"3 - Input Sets",id:"3---input-sets",level:3},{value:"4 - HTTP Client",id:"4---http-client",level:3},{value:"Additional Topics",id:"additional-topics",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsx)(t.p,{children:"The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests and load (stress) tests. In turn, load tests may easily be reused as monitors for performance testing."}),"\n",(0,n.jsx)(t.admonition,{title:"Learn more about End-to-End Tests / Integration Tests",type:"note",children:(0,n.jsxs)(t.p,{children:["Read the following page to learn more about ",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/introduction-to-integration-testing",children:"Integration / Multistep Testing"})]})}),"\n",(0,n.jsx)(t.h2,{id:"visual-vs-code-view",children:"Visual vs. Code View"}),"\n",(0,n.jsx)(t.p,{children:"Begin using the Composer by selecting from two versions in terms of views. With either Visual or Code view, easily make calls and add assertions for testing your APIs, and insert variables wherever needed."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Visual"})," - The Visual Composer does not require coding expertise, and provides real-time suggestions via predictive text to help you create ideal API tests for your needs."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/VisualView.png"),alt:"Test Composer Visual View Pic"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Code"})," - The Code view is for users who are more comfortable working in code rather than a visual UI."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/CodeView.png"),alt:"Test Composer Code View Pic"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"test-composer-ui",children:"Test Composer UI"}),"\n",(0,n.jsx)(t.p,{children:"Use the following image as a reference for the numbered items listed below:"}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/numberpic.png"),alt:"Test Composer Number Pic"}),"\n",(0,n.jsx)(t.h3,{id:"1---add-request--assertions",children:"1 - Add Request / Assertions"}),"\n",(0,n.jsxs)(t.p,{children:["This is the ",(0,n.jsx)(t.strong,{children:"Add Request"})," / ",(0,n.jsx)(t.strong,{children:"Assertions"})," button, it can display all available components."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/components.png"),alt:"Test Components"}),"\n",(0,n.jsx)(t.p,{children:"If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes."}),"\n",(0,n.jsxs)(t.p,{children:["For instance, if you don\u2019t add a ",(0,n.jsx)(t.code,{children:"POST"})," first, you cannot add a ",(0,n.jsx)(t.code,{children:"POST"})," Body or ",(0,n.jsx)(t.code,{children:"POST"})," Param."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE"}),": Free accounts do not give you access to all available components.",(0,n.jsx)(t.br,{}),"\n","Read descriptions of each component in the Reference section of API Fortress Documentation."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"2---transform-component",children:"2 - Transform Component"}),"\n",(0,n.jsx)(t.p,{children:"This button allows you to easily transform an existing component into another component of the same type."}),"\n",(0,n.jsx)(t.h3,{id:"3---input-sets",children:"3 - Input Sets"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Input Sets"})," are a group of input variables representing a scenario. The test will be executed once for each input set, overriding the variable values into your test."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Global Parameters"})," are variables that are available to be used throughout a test. Reference these variables simply by calling it within the test using the convention ",(0,n.jsx)(t.code,{children:"\u201c${VARIABLE}\u201d"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/params.png"),alt:"Test Params"}),"\n",(0,n.jsx)(t.h3,{id:"4---http-client",children:"4 - HTTP Client"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"HTTP Client"})," is very similar to many other ",(0,n.jsx)(t.code,{children:"http"})," clients out there. You can make ",(0,n.jsx)(t.code,{children:"GET"}),"/",(0,n.jsx)(t.code,{children:"POST"}),"/",(0,n.jsx)(t.code,{children:"PUT"}),"/",(0,n.jsx)(t.code,{children:"PATCH"}),"/",(0,n.jsx)(t.code,{children:"DELETE"})," calls and see their responses. A key difference in our HTTP client comes from your ability to generate a test for the API you are calling right from there."]}),"\n",(0,n.jsxs)(t.p,{children:["If you click the ",(0,n.jsx)(t.em,{children:"Generate Test"})," button, the UI creates a test for you based on the API\u2019s behavior and response."]}),"\n",(0,n.jsx)(t.p,{children:"See the screenshot below for details:"}),"\n",(0,n.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/06/Httpclient.png"),alt:"Test Composer HTTP Client Pic"}),"\n",(0,n.jsx)(t.h2,{id:"additional-topics",children:"Additional Topics"}),"\n",(0,n.jsxs)(t.p,{children:["Learn how to create a test quickly ",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/quick-start",children:"here."})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);