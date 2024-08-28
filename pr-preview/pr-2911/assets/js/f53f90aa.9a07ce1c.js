"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[22130],{359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(74848),s=n(28453),o=n(86025);const a={id:"planning-your-test",title:"Outline a Plan for your Test",sidebar_label:"Outline a Plan for your Test",keywords:["api-testing","test","planning"]},r=void 0,l={id:"api-testing/on-prem/learn-more/planning-your-test",title:"Outline a Plan for your Test",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/learn-more/planning-your-test.md",sourceDirName:"api-testing/on-prem/learn-more",slug:"/api-testing/on-prem/learn-more/planning-your-test",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/planning-your-test",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/learn-more/planning-your-test.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"planning-your-test",title:"Outline a Plan for your Test",sidebar_label:"Outline a Plan for your Test",keywords:["api-testing","test","planning"]},sidebar:"apif",previous:{title:"Input Sets and Global Variables",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/input-set-and-global-variables"},next:{title:"The Variables System in API Fortress",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/learn-more/the-variables-system-in-api-fortress"}},c={},p=[{value:"Single Action Test (active)",id:"single-action-test-active",level:2},{value:"Single Action Test (passive)",id:"single-action-test-passive",level:2},{value:"Single Action Test (active, just-in-time parameters)",id:"single-action-test-active-just-in-time-parameters",level:2},{value:"Single Action Test (mixed mode)",id:"single-action-test-mixed-mode",level:2},{value:"Integration test",id:"integration-test",level:2}];function u(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.p,{children:"Before you start writing your test, you should plan what you want to do."}),"\n",(0,i.jsxs)(t.p,{children:["Contrary to most testing frameworks, API Fortress is not ",(0,i.jsx)(t.em,{children:"endpoint centric"}),", so there's a number of different paths you can take to make the best of your test."]}),"\n",(0,i.jsx)(t.h2,{id:"single-action-test-active",children:"Single Action Test (active)"}),"\n",(0,i.jsx)(t.p,{children:"You're willing to write a test that is going to verify how an endpoint action works. We're also considering this scenario to be active, which means you expect API Fortress to perform a call and test the outcome."}),"\n",(0,i.jsx)(t.p,{children:"If your action takes multiple parameters, we suggest you to create a number of input sets containing combinations of valid input. The unit will be run against each input set. Having multiple inputs is important because it's the only way you can tell your API is responding uniformly, no matter what you feed it."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2016/02/inputs.png"),alt:"inputs.png"}),"\n",(0,i.jsx)(t.p,{children:"Then you need to make a request and use those variables."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2016/02/get.png"),alt:"get.png"}),"\n",(0,i.jsx)(t.p,{children:"As you can see we're composing the URL using global variables and we reference the variables in the query parameters."}),"\n",(0,i.jsx)(t.p,{children:"Eventually, you will write your test. This is the simplest API Fortress test, covering the need to verify if an endpoint is up and running and working just fine."}),"\n",(0,i.jsx)(t.h2,{id:"single-action-test-passive",children:"Single Action Test (passive)"}),"\n",(0,i.jsxs)(t.p,{children:["A test is passive when API Fortress won't retrieve the payload on its own but will have it forwarded via the ",(0,i.jsx)(t.a,{href:"https://apifortressv3.docs.apiary.io/#",children:"API"}),'. In this case, no input sets or I/O operations are necessary. The forwarded payload can be referenced using the "',(0,i.jsx)(t.strong,{children:"payload"}),'" variable. The ideal scenario for this mode is testing live request and responses.']}),"\n",(0,i.jsx)(t.h2,{id:"single-action-test-active-just-in-time-parameters",children:"Single Action Test (active, just-in-time parameters)"}),"\n",(0,i.jsxs)(t.p,{children:["Also an input set can be overridden using the API. If your process requires an agent to trigger an active test with fresh inputs, create only one input set with valid inputs and have your ",(0,i.jsx)(t.a,{href:"https://apifortressv3.docs.apiary.io/#",children:"API"})," call override them. If you run the test by schedule, it test will run against the input you manually inserted. If you run it using the API and override the inputs, your test can run against fresh data all the time."]}),"\n",(0,i.jsx)(t.p,{children:"The ideal scenario for such mode is an application where the API is public but the inputs vary a lot over time and cannot be easily determined."}),"\n",(0,i.jsx)(t.h2,{id:"single-action-test-mixed-mode",children:"Single Action Test (mixed mode)"}),"\n",(0,i.jsx)(t.p,{children:"There's a way to have a test to work both in an active way (when triggered by a schedule or manually launched, for example) and in an active way (invoked via API). Here's how you do it:"}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2016/02/ifnotpayload.png"),alt:"ifnotpayload.png"}),"\n",(0,i.jsx)(t.p,{children:"The GET will be performed only if payload does not have a value (yet)."}),"\n",(0,i.jsxs)(t.p,{children:["If the test has multiple input sets that you don't want to run when the payload is being forwarded, invoking the ",(0,i.jsx)(t.a,{href:"https://apifortressv3.docs.apiary.io/#",children:"API"})," with the ",(0,i.jsx)(t.strong,{children:'"nosets=true"'})," attribute will prevent it. This is generally a preferred over a plain passive test."]}),"\n",(0,i.jsx)(t.h2,{id:"integration-test",children:"Integration test"}),"\n",(0,i.jsx)(t.p,{children:"In integration tests you chain together multiple calls, from authentication and actions to complete flows."}),"\n",(0,i.jsx)(t.p,{children:"Possible scenarios vary from catalog browsing..."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2016/02/int1.png"),alt:"int1.png"}),"\n",(0,i.jsx)(t.p,{children:"... to full booking process for multiple flights"}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/api-fortress/2016/02/bookings.png"),alt:"bookings.png"})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);