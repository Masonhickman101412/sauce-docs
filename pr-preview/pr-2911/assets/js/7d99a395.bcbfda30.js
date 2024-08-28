"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[93658],{72794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=t(74848),s=t(28453),r=t(86025);const o={id:"build-from-spec",title:"Building an API Test from a Spec File",sidebar_label:"Build Test from Spec File",description:"Automatically generate tests from an OpenAPI spec or HAR file."},l=void 0,a={id:"api-testing/build-from-spec",title:"Building an API Test from a Spec File",description:"Automatically generate tests from an OpenAPI spec or HAR file.",source:"@site/docs/api-testing/build-from-spec.md",sourceDirName:"api-testing",slug:"/api-testing/build-from-spec",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/build-from-spec",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/build-from-spec.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"build-from-spec",title:"Building an API Test from a Spec File",sidebar_label:"Build Test from Spec File",description:"Automatically generate tests from an OpenAPI spec or HAR file."},sidebar:"docs",previous:{title:"Using Sauce Connect",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/sauce-connect"},next:{title:"Importing from Postman",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/import-postman-collection"}},c={},p=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Importing Your Spec File",id:"importing-your-spec-file",level:2},{value:"Generate a Test",id:"generate-a-test",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Using the API Testing ",(0,i.jsx)(n.strong,{children:"HTTP Client"}),", you can generate tests from external endpoints or files such as an OpenAPI Specification (spec)."]}),"\n",(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Sauce Labs account (",(0,i.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,i.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"})]}),"\n",(0,i.jsx)(n.li,{children:"An OpenAPI Specification file (v3.0 or higher)"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Looking to import from Postman? See ",(0,i.jsx)(n.a,{href:"/api-testing/import-postman-collection/",children:"Importing Postman Collections"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"importing-your-spec-file",children:"Importing Your Spec File"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Go into any Project."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From within a Project, click the ",(0,i.jsx)(n.strong,{children:"HTTP Client"})," tab.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/http-client-nav-rebrand.png"),alt:"HTTP Client Button",width:"300"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Import OpenAPI/Postman"})," button, then ",(0,i.jsx)(n.strong,{children:"Import OpenAPI/Postman Collection/.har"})," and then, select and upload your file from your local machine.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/importSpec.png"),alt:"Import OpenAPI / Postman button",width:"450"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click on the folder in your ",(0,i.jsx)(n.strong,{children:"Snapshots"})," tree where you'd like to save your file.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/ImportFolder.png"),alt:"Import to Snapshots folder"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/importFolder2.png"),alt:"Import file to Project"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After saving, you'll be able to view all of your endpoints under ",(0,i.jsx)(n.strong,{children:"Snapshots"}),", grouped by subdirectory. Click on the name of the request you'd like to test.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/build-spec/versions.png"),alt:"Import to Snapshots folder",width:"250"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["The URL will populate in the ",(0,i.jsx)(n.strong,{children:"Enter Request URL"})," field. ",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/build-spec/sampleRequest.png"),alt:"Sample request"})]}),"\n",(0,i.jsxs)(n.p,{children:["The response body will populate in the ",(0,i.jsx)(n.strong,{children:"Body"})," area. ",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.Ay)("img/api-testing/build-spec/responseBody.png"),alt:"Response Body"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generate-a-test",children:"Generate a Test"}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/api-testing/quickstart/#generate-test",children:"Quickstart guide"})," for the steps to generate, run, publish, and view test results."]}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-testing/import-postman-collection/",children:"Importing from Postman"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api-testing/import-har-files/",children:"Importing HAR files"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);