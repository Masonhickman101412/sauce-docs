"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7249],{2144:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var i=n(74848),t=n(28453),r=n(43093);const d={title:"Sauce Visual Testing",sidebar_label:"Overview"},a=void 0,l={id:"visual-testing",title:"Sauce Visual Testing",description:"Get clear and instant visibility into the impact of code changes on your UI across browsers, devices, and operating systems with our automated visual testing solution, which generates side-by-side comparisons of your UI versions with DOM diffs inspection.",source:"@site/docs/visual-testing.md",sourceDirName:".",slug:"/visual-testing",permalink:"/sauce-docs/pr-preview/pr-2911/visual-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{title:"Sauce Visual Testing",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Results Analysis",permalink:"/sauce-docs/pr-preview/pr-2911/performance/analyze"},next:{title:"Test Execution",permalink:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/test-execution"}},c={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Workflows",id:"workflows",level:2},{value:"Test Execution",id:"test-execution",level:3},{value:"Review",id:"review",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Snapshot",id:"snapshot",level:4},{value:"Build",id:"build",level:4},{value:"Build Status",id:"build-status",level:5},{value:"Baseline",id:"baseline",level:4},{value:"Diff",id:"diff",level:4},{value:"Diff Status",id:"diff-status",level:5},{value:"Baseline Matching",id:"baseline-matching",level:3},{value:"Integrations",id:"integrations",level:2},...r.RM];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Get clear and instant visibility into the impact of code changes on your UI across browsers, devices, and operating systems with our automated visual testing solution, which generates side-by-side comparisons of your UI versions with DOM diffs inspection."}),"\n",(0,i.jsx)(s.p,{children:"Know exactly where and what has changed so that you can deliver a consistent and intuitive user experience."}),"\n",(0,i.jsx)(s.p,{children:"Sauce Visual Testing stands for:"}),"\n",(0,i.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,i.jsx)("div",{className:"box box1 card",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Faster Test Execution"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Purpose-built within the world\u2019s best test infrastructure"}),(0,i.jsx)("li",{children:"Fewer back-and-forth commands between client and server"}),(0,i.jsx)("li",{children:"Based on efficient OSS framework"}),(0,i.jsx)("li",{children:"No need to down/upload images"})]})]})}),(0,i.jsx)("div",{className:"box box2 card",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Less Complexity"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Less code"}),(0,i.jsx)("li",{children:"Less maintenance"}),(0,i.jsx)("li",{children:"Less flakiness"})]})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A ",(0,i.jsx)(s.a,{href:"https://saucelabs.com/pricing",children:"Sauce Labs Enterprise account"})," with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support."]}),"\n",(0,i.jsxs)(s.li,{children:["Your Sauce Labs ",(0,i.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"workflows",children:"Workflows"}),"\n",(0,i.jsx)(s.p,{children:"Sauce Visual testing consists of two main workflows: Test execution and review.\nBoth workflows need to implemented, but they may performed by different people or teams.\nRead below to learn more about the workflows."}),"\n",(0,i.jsx)(s.h3,{id:"test-execution",children:"Test Execution"}),"\n",(0,i.jsx)(s.p,{children:'This workflow is responsible for generating snapshots (screenshots) of the website or app under test.\nUsers new to visual testing often have an existing test suite in WebdriverIO, Cypress or a similar framework.\nWith Sauce Visual testing existing test suites can be enhanced with a few extra "take a snapshot" statements and that is all it takes to implement this workflow.'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/test-execution",children:"Follow me to learn more"})}),"\n",(0,i.jsx)(s.h3,{id:"review",children:"Review"}),"\n",(0,i.jsxs)(s.p,{children:["This workflow is responsible for approving or rejecting detected changes between a snapshot and a baseline.\nUsers will be available to review changes and make the ",(0,i.jsx)(s.a,{href:"#baseline",children:"baseline"})," evolve for accepted changes."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/sauce-docs/pr-preview/pr-2911/visual-testing/workflows/review",children:"Follow me to learn more"})}),"\n",(0,i.jsx)(s.h2,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(s.p,{children:"Sauce Visual Testing comes with its set of concepts that will be defined here."}),"\n",(0,i.jsx)(s.h3,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsx)(s.h4,{id:"snapshot",children:"Snapshot"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"snapshot"})," is an image that will be compared by Visual Testing. For example: the screenshot of your website or mobile application."]}),"\n",(0,i.jsx)(s.h4,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"build"})," groups multiple snapshots. E.g. to be able to view all snapshots taken during the execution of your test suite in CI or locally."]}),"\n",(0,i.jsx)(s.h5,{id:"build-status",children:"Build Status"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"build"})," has a status that represents its current state:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Status"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Accepted"})}),(0,i.jsx)(s.td,{children:"Changes have been detected and they have been accepted"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"No changes"})}),(0,i.jsx)(s.td,{children:"No difference has been detected between snapshots and the matching baselines"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Running"})}),(0,i.jsx)(s.td,{children:"Build is still running"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Queued"})}),(0,i.jsx)(s.td,{children:"Snapshots are waiting to be compared against baselines"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"For review"})}),(0,i.jsx)(s.td,{children:"Changes have been detected and and action is needed"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Errored"})}),(0,i.jsx)(s.td,{children:"An error has occurred"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Rejected"})}),(0,i.jsx)(s.td,{children:"Changes have been detected and they have been rejected"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"No Snapshots"})}),(0,i.jsx)(s.td,{children:"There is no snapshot in this build"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"baseline",children:"Baseline"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"baseline"})," is what a ",(0,i.jsx)(s.strong,{children:"snapshot"})," is compared to."]}),"\n",(0,i.jsx)(s.h4,{id:"diff",children:"Diff"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"diff"})," represents the differences that have been detected between a ",(0,i.jsx)(s.strong,{children:"snapshot"})," and its matching ",(0,i.jsx)(s.strong,{children:"baseline"}),"."]}),"\n",(0,i.jsx)(s.h5,{id:"diff-status",children:"Diff Status"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.strong,{children:"diff"})," has a status that represents its current state:"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Status"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"No Changes"})}),(0,i.jsx)(s.td,{children:"No difference has been detected between this snapshot and the matching baseline"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"For Review"})}),(0,i.jsxs)(s.td,{children:["Changes have been detected and an action is needed ",(0,i.jsx)("br",{}),"(meaning snapshots without baselines or with a visual difference)"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Accepted"})}),(0,i.jsx)(s.td,{children:"Changes have been detected and they have been accepted"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Rejected"})}),(0,i.jsx)(s.td,{children:"Changes have been detected and they have been rejected"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"baseline-matching",children:"Baseline Matching"}),"\n",(0,i.jsx)(s.p,{children:"Every integration generates snapshots and compares them against a baseline snapshot to detect differences.\nThe following snapshot metadata keys are used to determine the appropriate baseline:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"name"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{children:["The name of the snapshot which will be set when the ",(0,i.jsx)(s.code,{children:"sauceVisualCheck()"})," is called. See each language binding."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"testName"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The name of the test where the snapshot has been taken (only with Cypress, WebdriverIO, and Storybook BETA). This will automatically determined by the language binding."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"suiteName"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The name of the suite where the snapshot has been taken (only with Cypress, WebdriverIO, and Storybook BETA). This will automatically determined by the language binding."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"browser"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The browser used to take the snapshot. This will automatically be determined by Sauce Visual."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"operatingSystem"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The operating system used to take the snapshot. This will automatically be determined by Sauce Visual."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"operatingSystemVersion"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The operating system version used to take the snapshot. This will automatically be determined by Sauce Visual."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"viewportWidth"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The viewport width used to take the snapshot. This will automatically be determined by Sauce Visual."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"viewportHeight"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The viewport height used to take the snapshot. This will automatically be determined by Sauce Visual."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"project"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The project name. This can be set during service initiation, for more information see the language bindings."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"branch"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The branch name. This can be set during service initiation, for more information see the language bindings."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"device"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:"The device name. This will automatically be determine by Sauce Visual."})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"If multiple baselines match, the most recent one is selected for diff computation."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Note that not all properties are exposed on all testing frameworks.\nIn these cases, a default value (0, null or empty string) is used."})}),"\n",(0,i.jsxs)(s.p,{children:["The matching process happens as part of the snapshot creation (",(0,i.jsx)(s.code,{children:"createSnapshot"})," in the API).\nThis means, that a baseline can only be considered for a diff if it existed before the ",(0,i.jsx)(s.code,{children:"createSnapshot"})," call."]}),"\n",(0,i.jsx)(s.h2,{id:"integrations",children:"Integrations"}),"\n",(0,i.jsx)(s.p,{children:"Sauce Visual provides integrations with different kind of frameworks:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"E2E Testing"})," allows to navigate a website and capture snapshots any time this is needed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Component Testing"})," allows to test extensively all your components."]}),"\n"]}),"\n",(0,i.jsxs)("div",{className:"box-wrapper",markdown:"1",children:[(0,i.jsx)("div",{className:"box box1 card",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"E2E Testing"}),(0,i.jsx)(r.Ay,{})]})}),(0,i.jsx)("div",{className:"box box2 card",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Component Testing"}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/storybook/",children:"Storybook Integration"})})})]})})]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43093:(e,s,n)=>{n.d(s,{Ay:()=>a,RM:()=>r});var i=n(74848),t=n(28453);const r=[];function d(e){return(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/cypress/",children:"Cypress Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/csharp/",children:"C#/.Net Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/java/",children:"Java Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/nightwatch/",children:"Nightwatch Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/webdriverio/",children:"WebdriverIO Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/python/",children:"Python Integration"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/visual-testing/integrations/python-robot-framework/",children:"Python (Robot Framework) Integration"})})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d()}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var i=n(96540);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);