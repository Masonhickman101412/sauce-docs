"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11759],{28022:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=o(74848),s=o(28453),i=o(86025);const r={id:"build-from-collections",title:"Build from Postman Collections",sidebar_label:"Build from Collections",keywords:["api-testing","postman","collections"]},c=void 0,a={id:"api-testing/on-prem/postman/build-from-collections",title:"Build from Postman Collections",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/postman/build-from-collections.md",sourceDirName:"api-testing/on-prem/postman",slug:"/api-testing/on-prem/postman/build-from-collections",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/postman/build-from-collections",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/postman/build-from-collections.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"build-from-collections",title:"Build from Postman Collections",sidebar_label:"Build from Collections",keywords:["api-testing","postman","collections"]},sidebar:"apif",previous:{title:"Setup Notifications (Performance Alerts)",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/how-to/setup-notifications-performance-alerts"},next:{title:"API Tests vs. Schema Validation",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/product-information/api-tests-vs-schema-validation"}},l={},p=[];function d(e){const t={a:"a",blockquote:"blockquote",em:"em",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n","\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"API Fortress can now generate a test from a Postman collection!"}),"\n",(0,n.jsx)(t.p,{children:"The first step is exporting your collection from within Postman."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/collection.jpg"),alt:"collection.jpg"}),"\n",(0,n.jsx)(t.p,{children:"Next to your Collection name click the ellipsis (three dots) ... then click Export and choose 'Collection v2.'"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/export.jpg"),alt:"export.jpg"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/exportCollectionV2.jpg"),alt:"exportCollectionV2.jpg"}),"\n",(0,n.jsxs)(t.p,{children:["Once you've exported the collection from Postman, go to API Fortress and create a ",(0,n.jsx)(t.em,{children:"New Test"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/newTest.jpg"),alt:"newTest.jpg"}),"\n",(0,n.jsxs)(t.p,{children:["On the interstitial page, click ",(0,n.jsx)(t.em,{children:"Build from Spec."})]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/buildFromSpec.jpg"),alt:"buildFromSpec.jpg"}),"\n",(0,n.jsxs)(t.p,{children:["On the following page, choose ",(0,n.jsx)(t.em,{children:"Postman Collection"})," from the dropdown menu, and upload the collection file we exported. Click ",(0,n.jsx)(t.em,{children:"Save"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/specFile.jpg"),alt:"specFile.jpg"}),"\n",(0,n.jsxs)(t.p,{children:["For a new test, choose ",(0,n.jsx)(t.em,{children:"From Scratch"})," and then click the check. If you were updating a test, you would use the ",(0,n.jsx)(t.em,{children:"Merge"})," option."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/buildoptions.jpg"),alt:"buildoptions.jpg"}),"\n",(0,n.jsx)(t.p,{children:"This imports the API call to the composer. Now we can use this to call the payload and build a test automatically!"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/testcreated.jpg"),alt:"testcreated.jpg"}),"\n",(0,n.jsxs)(t.p,{children:["The easiest way to create a test is using our ",(0,n.jsx)(t.em,{children:"Magic"})," tool. To do so you need to import the call into the console. First, select the call in the composer, which will highlight it. Open the HTTP Client and click the import button, highlighted below."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.34.09-AM.png"),alt:"screenshot.png"}),"\n",(0,n.jsxs)(t.p,{children:["When the call is in the console, click the ",(0,n.jsx)(t.em,{children:"Send"})," button and you will see the response."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.46.57-AM.png"),alt:"screenshot.png"}),"\n",(0,n.jsxs)(t.p,{children:["At this point, the ",(0,n.jsx)(t.em,{children:"Magic"}),' tool can generate the test for you. Click the "Generate Test" button, highlighted in the image below.']}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.em,{children:"Continue"})," a few times and voila, a complete API test generated without having to write any code."]}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.43.58-AM.png"),alt:"screenshot.png"}),"\n",(0,n.jsx)(t.p,{children:"You can then review the test, seen below, and add some more logic. You've successfully created a test from a Postman collection!"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/api-fortress/2017/04/Screen-Shot-2018-03-30-at-11.34.58-AM-1.png"),alt:"screenshot.png"})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>c});var n=o(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);