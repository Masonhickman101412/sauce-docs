"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42619],{76404:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=t(74848),n=t(28453),r=t(86025);const l={id:"project-dashboard",title:"Using the Project Dashboard",sidebar_label:"Test Results and Insights"},d=void 0,a={id:"api-testing/project-dashboard",title:"Using the Project Dashboard",description:"After you run an API Test, you can view your results, reporting, and analytics to gain further insight and maximize your testing.",source:"@site/docs/api-testing/project-dashboard.md",sourceDirName:"api-testing",slug:"/api-testing/project-dashboard",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/project-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/project-dashboard.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724771321e3,frontMatter:{id:"project-dashboard",title:"Using the Project Dashboard",sidebar_label:"Test Results and Insights"},sidebar:"docs",previous:{title:"PagerDuty and Webhook Connectors",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/integrations/pagerduty-webhooks"},next:{title:"API Mocking Server",permalink:"/sauce-docs/pr-preview/pr-2907/api-testing/mocking"}},c={},o=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Test Outcome Report",id:"test-outcome-report",level:2},{value:"Viewing Results",id:"viewing-results",level:3},{value:"Dashboard",id:"dashboard",level:2},{value:"Test Logs",id:"test-logs",level:3},{value:"Test Metrics",id:"test-metrics",level:3},{value:"Test Build Reports",id:"test-build-reports",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"After you run an API Test, you can view your results, reporting, and analytics to gain further insight and maximize your testing."}),"\n",(0,i.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["A Sauce Labs account (",(0,i.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:["An existing API Test that's been run. For details on how to create one, see the ",(0,i.jsx)(s.a,{href:"/api-testing/quickstart/",children:"Quickstart"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"test-outcome-report",children:"Test Outcome Report"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Test Outcome Report"})," includes input data details and other useful test information, such as reasons for failure, HTTP requests, and response status codes."]}),"\n",(0,i.jsx)(s.p,{children:"There are three ways to access it:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["From your Project's ",(0,i.jsx)(s.strong,{children:"Tests"})," section, click on any Test line item"]}),"\n",(0,i.jsxs)(s.li,{children:["From your Project's ",(0,i.jsx)(s.strong,{children:"Dashboard"})," section, click on any Test line item"]}),"\n",(0,i.jsxs)(s.li,{children:["From your Test's ",(0,i.jsx)(s.strong,{children:"Compose"})," section, in the ",(0,i.jsx)(s.a,{href:"/api-testing/quickstart/#view-test-results",children:"right-hand nav"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"viewing-results",children:"Viewing Results"}),"\n",(0,i.jsx)(s.p,{children:"Here's a breakdown of what each report contains:"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Test Report Details"}),": metadata about the execution of the test, such as Test Name, Project Name, and Mode (Scheduled or On Request)",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/sessionDetails.png"),alt:"Test Report",width:"400"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Outcome"})," (pass/fail status):",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/outcome.png"),alt:"Test Report",width:"150"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Assertions"}),": your Test assertions, where a gray dot indicates a pass, red dot indicates a fail, and yellow dot indicates a warning",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/assertions.png"),alt:"Test Report Primer Image",width:"450"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Request Components"}),": shows the specific component(s) that you tested.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/requestComponent.png"),alt:"Test Report Primer Image",width:"200"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Stack Details"}),": click this to view granular details about requests and headers.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/stackDetails.png"),alt:"Test Report Primer Image",width:"150"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/stackDetails-expanded.png"),alt:"Stack details",width:"350"})]}),"\n",(0,i.jsx)(s.h2,{id:"dashboard",children:"Dashboard"}),"\n",(0,i.jsx)(s.p,{children:"The API Testing Dashboard \u2014 accessible from a Project \u2014 displays metrics, logs, builds, and load tests, a centralized test management tool that simplifies collaboration and reporting."}),"\n",(0,i.jsx)(s.h3,{id:"test-logs",children:"Test Logs"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(s.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Click on any Project."}),"\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Dashboard"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"Logs"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Select desired filters to find the Test(s) you're looking for, then click ",(0,i.jsx)(s.strong,{children:"Apply"}),".",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/logsFilters.png"),alt:"Dashboard Logs Filters"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Filter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date"}),(0,i.jsxs)(s.td,{children:["Filter tests results by: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Today"}),(0,i.jsx)("li",{children:"Yesterday"}),(0,i.jsx)("li",{children:"Last 3 days"}),(0,i.jsx)("li",{children:"Last 7 days"}),(0,i.jsx)("li",{children:"This Week"}),(0,i.jsx)("li",{children:"Previous week"}),(0,i.jsx)("li",{children:"Last 14 days"}),(0,i.jsx)("li",{children:"Last 30 days"}),(0,i.jsx)("li",{children:"Specific start and end date"})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Test"}),(0,i.jsx)(s.td,{children:"Filter tests results by a specific test"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modes"}),(0,i.jsx)(s.td,{children:"Filter tests results by tests that are scheduled (monitoring) or executed manually (on-Demand)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Events"}),(0,i.jsx)(s.td,{children:"Filter tests results by all tests or only the ones that failed"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tags"}),(0,i.jsx)(s.td,{children:"Filter tests results by tests that contain one or more specific tag(s)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Build id"}),(0,i.jsx)(s.td,{children:"Filter tests results by tests that belong to a specific build"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Agent"}),(0,i.jsxs)(s.td,{children:["Filter tests results by the agent that executed the test: ",(0,i.jsx)(s.code,{children:"wstestjs"})," if the test is executed manually, scheduled, or by API; ",(0,i.jsx)(s.code,{children:"piestry"})," if the test is executed via the ",(0,i.jsx)(s.a,{href:"/api-testing/mocking/",children:"mocking tool"})]})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"test-metrics",children:"Test Metrics"}),"\n",(0,i.jsx)(s.p,{children:"To view Test performance metrics (latency and fetch):"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(s.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Click on any Project."}),"\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Dashboard"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"Metrics"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Select desired filters to find the Test(s) you're looking for, then click ",(0,i.jsx)(s.strong,{children:"Apply"}),".",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/metricsFilters.png"),alt:"Dashboard Metrics Filters"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Filter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date"}),(0,i.jsxs)(s.td,{children:["Filter tests results by: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Today"}),(0,i.jsx)("li",{children:"Yesterday"}),(0,i.jsx)("li",{children:"Last 3 days"}),(0,i.jsx)("li",{children:"Last 7 days"}),(0,i.jsx)("li",{children:"This Week"}),(0,i.jsx)("li",{children:"Previous week"}),(0,i.jsx)("li",{children:"Last 14 days"}),(0,i.jsx)("li",{children:"Last 30 days"}),(0,i.jsx)("li",{children:"Specific start and end date"})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Test"}),(0,i.jsx)(s.td,{children:"Filter tests results by a specific test"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Metrics"}),(0,i.jsx)(s.td,{children:"Filter tests results by all tests or only the ones that failed"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Footprint"}),(0,i.jsx)(s.td,{children:"Filter tests results by a specific request URL"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Build id"}),(0,i.jsx)(s.td,{children:"Filter tests results by tests that belong to a specific build"})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"test-build-reports",children:"Test Build Reports"}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.em,{children:"Build"})," is a collection of test results and metrics associated with a given build ID. To create a Build, you'll need to integrate Sauce Labs API Testing into your CI/CD pipeline, then run multiple tests simultaneously, grouped as a Build, by ",(0,i.jsxs)(s.a,{href:"/api-testing/integrations/yaml/#metadata",children:["setting the ",(0,i.jsx)(s.code,{children:"build"})," value in your config.yml"]}),'. Sauce API Testing will group all events generated by the Test session under a "build" collector, and test results are collected under ',(0,i.jsx)(s.strong,{children:"Dashboard"})," > ",(0,i.jsx)(s.strong,{children:"Builds"}),". To view:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Log in to Sauce Labs, then click ",(0,i.jsx)(s.strong,{children:"API Testing"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"Click on any Project."}),"\n",(0,i.jsxs)(s.li,{children:["Click the ",(0,i.jsx)(s.strong,{children:"Dashboard"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Select the ",(0,i.jsx)(s.strong,{children:"Build"})," tab."]}),"\n",(0,i.jsxs)(s.li,{children:["Set the date and/or build ID filters, if desired, to find the Test(s) you're looking for. Then click ",(0,i.jsx)(s.strong,{children:"Apply"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/buildsFilters.png"),alt:"Dashboard Builds",width:"400"})]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Filter"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Date"}),(0,i.jsxs)(s.td,{children:["Filter tests results by: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Today"}),(0,i.jsx)("li",{children:"Yesterday"}),(0,i.jsx)("li",{children:"Last 3 days"}),(0,i.jsx)("li",{children:"Last 7 days"}),(0,i.jsx)("li",{children:"This Week"}),(0,i.jsx)("li",{children:"Previous week"}),(0,i.jsx)("li",{children:"Last 14 days"}),(0,i.jsx)("li",{children:"Last 30 days"}),(0,i.jsx)("li",{children:"Specific start and end date"})]})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Build id"}),(0,i.jsx)(s.td,{children:"Filter tests results by tests that belong to a specific build"})]})]})]}),"\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsxs)(s.li,{children:["Click on any line item below to view a summary report for that Build.",(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/builds1.webp"),alt:"Dashboard Builds"}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/builds2.webp"),alt:"Dashboard Builds"}),"\nThe report contains details such as the build ID, list of Tests belonging to that build, date/time, Projects involved, successful tests, and failed tests."]}),"\n",(0,i.jsxs)(s.li,{children:["Under the ",(0,i.jsx)(s.strong,{children:"Event Details"})," column, click ",(0,i.jsx)(s.strong,{children:"Open Report Document"})," to see the results and metrics for each specific test that has been executed in the build.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/builds3.png"),alt:"Dashboard Builds"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api-testing/composer/",children:"Composing Tests"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api-testing/load-testing/#load-test-reports",children:"Load Test Reports"})}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var i=t(96540);const n={},r=i.createContext(n);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);