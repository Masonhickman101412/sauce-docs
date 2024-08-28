"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96088],{15745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),s=n(28453),r=n(86025);const i={id:"connecting-with-bamboo",title:"Bamboo \u2013 Integrate API Tests & Results",sidebar_label:"Bamboo",keywords:["cicd","bamboo"]},a=void 0,c={id:"api-testing/on-prem/ci/connecting-with-bamboo",title:"Bamboo \u2013 Integrate API Tests & Results",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/connecting-with-bamboo.md",sourceDirName:"api-testing/on-prem/ci",slug:"/api-testing/on-prem/ci/connecting-with-bamboo",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/ci/connecting-with-bamboo",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/connecting-with-bamboo.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"connecting-with-bamboo",title:"Bamboo \u2013 Integrate API Tests & Results",sidebar_label:"Bamboo",keywords:["cicd","bamboo"]},sidebar:"apif",previous:{title:"Azure DevOps",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/ci/azure-devops"},next:{title:"Bitbucket",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/ci/bitbucket"}},l={},d=[{value:"Step 1: Generating a Webhook",id:"step-1-generating-a-webhook",level:2},{value:"Step 2: Select or Create a Bamboo Project",id:"step-2-select-or-create-a-bamboo-project",level:2},{value:"Step 3: Adding an HTTP Call",id:"step-3-adding-an-http-call",level:2},{value:"Step 4: Parsing Results",id:"step-4-parsing-results",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(t.p,{children:"Passing data from API Fortress to Atlassian Bamboo allows Bamboo users to include API Fortress test results in their CI/CD process."}),"\n",(0,o.jsx)(t.h2,{id:"step-1-generating-a-webhook",children:"Step 1: Generating a Webhook"}),"\n",(0,o.jsxs)(t.p,{children:["The first step to integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the ",(0,o.jsx)(t.em,{children:"Gear"})," icon in the top right corner of the screen."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NOTE"}),": you need Manager access to generate a webhook."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["From ",(0,o.jsx)(t.strong,{children:"Settings"}),", click the ",(0,o.jsx)(t.strong,{children:"API Hooks"})," section and generate the hook for your project. The process can be seen in detail in the gif below:"]}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/07/hook.gif"),alt:"API Hook Gif"}),"\n",(0,o.jsx)(t.h2,{id:"step-2-select-or-create-a-bamboo-project",children:"Step 2: Select or Create a Bamboo Project"}),"\n",(0,o.jsx)(t.p,{children:"After we've created our webhook, calling it from within Bamboo is a fairly simple process."}),"\n",(0,o.jsx)(t.p,{children:"First, create a new project in Bamboo. You can also add to an existing project from this screen."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/07/project.png"),alt:"Project PNG"}),"\n",(0,o.jsx)(t.h2,{id:"step-3-adding-an-http-call",children:"Step 3: Adding an HTTP Call"}),"\n",(0,o.jsxs)(t.p,{children:["Next, we need to add an HTTP Call component and enter the webhook we generated. Depending on what you wish the call to API Fortress to trigger, you may append different routing on to the end of the webhook. The API Fortress API Documentation is located ",(0,o.jsx)(t.a,{href:"https://apifortressv3.docs.apiary.io/",children:"here"}),"."]}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/07/httpcall.png"),alt:"HTTP Call"}),"\n",(0,o.jsx)(t.h2,{id:"step-4-parsing-results",children:"Step 4: Parsing Results"}),"\n",(0,o.jsx)(t.p,{children:"After the request is sent to the API Fortress API, we'll need to save the JUnit data that's returned. We do so by adding a JUnit Parser step."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/07/junit.png"),alt:"JUnit Parser"}),"\n",(0,o.jsx)(t.p,{children:"Once the above steps are completed and saved, the build sequence will make a call to API Fortress upon execution, receive the results of the tests, and parse the results."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/07/summary.png"),alt:"Summary"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);