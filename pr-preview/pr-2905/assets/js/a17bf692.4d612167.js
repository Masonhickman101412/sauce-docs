"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99531],{86784:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(74848),i=s(28453),o=s(86025);const r={id:"schedule-test",title:"Scheduling API Tests",sidebar_label:"Scheduling Tests",description:"With Sauce Labs API Testing, you can schedule tests to run as often as you\u2019d like, with granular control as to when they run."},l=void 0,c={id:"api-testing/schedule-test",title:"Scheduling API Tests",description:"With Sauce Labs API Testing, you can schedule tests to run as often as you\u2019d like, with granular control as to when they run.",source:"@site/docs/api-testing/schedule-test.md",sourceDirName:"api-testing",slug:"/api-testing/schedule-test",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/schedule-test",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/schedule-test.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:167959239e4,frontMatter:{id:"schedule-test",title:"Scheduling API Tests",sidebar_label:"Scheduling Tests",description:"With Sauce Labs API Testing, you can schedule tests to run as often as you\u2019d like, with granular control as to when they run."},sidebar:"docs",previous:{title:"Test Actions",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/import-export-tests"},next:{title:"Using the Composer",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/composer"}},a={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Scheduling Tests",id:"scheduling-tests",level:2},{value:"Test Schedule Options",id:"test-schedule-options",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You can schedule tests to run as often as you\u2019d like, with granular control as to when tests run. Let\u2019s take a look at how it works."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["An existing, published API Test. For details on how to create one, see the ",(0,n.jsx)(t.a,{href:"/api-testing/quickstart/",children:"Quickstart"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Schedule"})," functionality is available only for published tests. For more information, see ",(0,n.jsx)(t.a,{href:"/api-testing/quickstart/#publish-your-test",children:"Publish Your Test"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"scheduling-tests",children:"Scheduling Tests"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"Tests"})," page, click the checkbox next to one or more tests that you want to schedule, or click the ",(0,n.jsx)(t.strong,{children:"All"})," checkbox, and then click ",(0,n.jsx)(t.strong,{children:"Schedule"}),"."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/api-testing/schedule_test.png"),alt:"Schedule Tests"}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["As a shortcut to schedule a single test, hover over the test, and then click the ",(0,n.jsx)(t.strong,{children:"Calendar"})," icon to open the scheduler directly."]}),(0,n.jsx)("img",{src:(0,o.A)("/img/api-testing/single_test_option.png"),alt:"Schedule a Single Test"})]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.strong,{children:"New Schedule"})," window, enter a ",(0,n.jsx)(t.strong,{children:"Schedule Name"})," (",(0,n.jsx)(t.strong,{children:"Description"})," is optional)."]}),"\n",(0,n.jsx)(t.li,{children:"Optionally, you can click a checkbox next to one or more tests to add or remove tests from the schedule."}),"\n",(0,n.jsxs)(t.li,{children:["Choose a ",(0,n.jsx)(t.strong,{children:"Time Zone"}),", but verify that you're using the right one. For example, if you're in Berlin and want to run at your local time, make sure to select ",(0,n.jsx)(t.code,{children:"Europe/Berlin"})," instead of ",(0,n.jsx)(t.code,{children:"America/Los Angeles"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Use the ",(0,n.jsx)(t.strong,{children:"Minute"}),", ",(0,n.jsx)(t.strong,{children:"Hour"}),", ",(0,n.jsx)(t.strong,{children:"Day"}),", and ",(0,n.jsx)(t.strong,{children:"Month"})," parameters to schedule the frequency at which you'd like your test to run. It will repeat at your configured time and interval."]}),"\n",(0,n.jsxs)(t.li,{children:["Optionally, you can add a Sauce Connect Proxy tunnel by selecting one from the ",(0,n.jsx)(t.strong,{children:"No tunnel"})," dropdown or entering a ",(0,n.jsx)(t.code,{children:"key=value"})," variable override."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When an ",(0,n.jsx)(t.code,{children:"override"})," variable is declared, its value will be injected into the test when it\u2019s executed. If the variable has already been declared in the Vault or the Globals/Input set, it will be rewritten with the new value."]})}),"\n",(0,n.jsxs)(t.ol,{start:"7",children:["\n",(0,n.jsxs)(t.li,{children:["When you're finished, click ",(0,n.jsx)(t.strong,{children:"Save"}),". The test schedule is displayed on the ",(0,n.jsx)(t.strong,{children:"Schedules"})," page."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"test-schedule-options",children:"Test Schedule Options"}),"\n",(0,n.jsxs)(t.p,{children:["Hover your mouse over the schedule name to access the ",(0,n.jsx)(t.strong,{children:"Pause"}),", ",(0,n.jsx)(t.strong,{children:"Edit"}),", and ",(0,n.jsx)(t.strong,{children:"Delete"})," options for a schedule."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/api-testing/schedule_options.png"),alt:"Test Schedule Options"}),"\n",(0,n.jsxs)(t.p,{children:["To pause all test schedules in the same group (Single or Global), click ",(0,n.jsx)(t.strong,{children:"Pause"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/api-testing/pause_test_schedule.png"),alt:"Pause Tests"}),"\n",(0,n.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api-testing/project-access/#email-notifications",children:"Email Notifications"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api-testing/integrations/pagerduty-webhooks/",children:"Webhook Connectors"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api-testing/project-dashboard/",children:"Project Dashboard"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);