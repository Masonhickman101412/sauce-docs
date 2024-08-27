"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[54043],{7778:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=s(74848),n=s(28453),r=s(86025);const a={id:"history",title:"Evaluating a Test Over Time",sidebar_label:"Job History",description:"Gain insights into test success and trends over time. Learn how to analyze a test's historical data across various metrics to identify patterns of failure."},o=void 0,l={id:"insights/history",title:"Evaluating a Test Over Time",description:"Gain insights into test success and trends over time. Learn how to analyze a test's historical data across various metrics to identify patterns of failure.",source:"@site/docs/insights/history.md",sourceDirName:"insights",slug:"/insights/history",permalink:"/sauce-docs/pr-preview/pr-2906/insights/history",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/history.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692874964e3,frontMatter:{id:"history",title:"Evaluating a Test Over Time",sidebar_label:"Job History",description:"Gain insights into test success and trends over time. Learn how to analyze a test's historical data across various metrics to identify patterns of failure."},sidebar:"docs",previous:{title:"Customizing Scope",permalink:"/sauce-docs/pr-preview/pr-2906/insights/scope"},next:{title:"Trends",permalink:"/sauce-docs/pr-preview/pr-2906/insights/trends"}},c={},d=[{value:"Accessing the Job History Page",id:"accessing-the-job-history-page",level:2},{value:"Interpreting the Bar Chart Visualization",id:"interpreting-the-bar-chart-visualization",level:2},{value:"Example Use Case: Job History Analysis",id:"example-use-case-job-history-analysis",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Job History"})," page, accessible from the ",(0,i.jsx)(t.strong,{children:"Insights"})," submenu, provides a visual overview of test results over time. The bar chart representation of test outcomes reveals anomalies and patterns, aiding in the identification of issues related to test performance and flakiness across different platforms, operating systems, and browsers used for testing."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The Extended Debugging feature offers access to HAR files and JavaScript console logs, assisting in the identification of flaky tests. For more details, refer to ",(0,i.jsx)(t.a,{href:"/insights/debug",children:"Debugging Tests with JavaScript Console Logs and HAR Files (Extended Debugging)"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"accessing-the-job-history-page",children:"Accessing the Job History Page"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Insights"})," tab to expand its submenu."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Job History"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Apply ",(0,i.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2906/insights/scope#using-filters-to-adjust-the-scope-of-your-data",children:"filters"})," to narrow down the list of tests within a specific range."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"interpreting-the-bar-chart-visualization",children:"Interpreting the Bar Chart Visualization"}),"\n",(0,i.jsx)(t.p,{children:"At the top of the page, the bar chart displays the number of jobs executed over time within the specified date filter, considering other filter criteria. You can further analyze trends on an hourly, daily, or weekly basis. Each bar represents the count of tests passed, failed, encountered errors, and completed. Hovering over a bar provides details about these counts."}),"\n",(0,i.jsx)("img",{src:(0,r.A)("/img/insights/jobs-details.png"),alt:"detailed job runs over time",width:"400"}),"\n",(0,i.jsx)(t.p,{children:"Below the bar chart, four performance statistics are presented:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Job Unique Names"}),": The total count of aggregated groups of job runs sharing the same name."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Errors"}),": The overall count of test runs that did not complete."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Failures"}),': The total count of test runs recorded as "Failed."']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Average Run time"}),": The mean runtime duration of all displayed test results."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Towards the bottom of the page, a table lists jobs alongside their corresponding details, including total runs, average duration, total duration, count of successful runs, success rate, count of failed runs, failure rate, count of error exits, error rate, count of completed runs, and completion rate."}),"\n",(0,i.jsxs)(t.p,{children:["The default view displays ",(0,i.jsx)(t.strong,{children:"All"})," jobs, but filters are available for analyzing trends of jobs marked as ",(0,i.jsx)(t.strong,{children:"Consistently Failing"}),", ",(0,i.jsx)(t.strong,{children:"Consistently Passing"}),", ",(0,i.jsx)(t.strong,{children:"Consistently Error"}),", ",(0,i.jsx)(t.strong,{children:"Missing Status"}),", or ",(0,i.jsx)(t.strong,{children:"Inconsistent Result"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, you can adjust the number of items displayed per page and export results as a CSV file."}),"\n",(0,i.jsx)(t.h2,{id:"example-use-case-job-history-analysis",children:"Example Use Case: Job History Analysis"}),"\n",(0,i.jsxs)(t.p,{children:["Choosing the ",(0,i.jsx)(t.strong,{children:"Inconsistent Result"})," option can help identify flaky test behavior. In the provided example, the test failed in nearly half of its executions."]}),"\n",(0,i.jsx)("img",{src:(0,r.A)("img/insights/test-details-incosistent-results.png"),alt:"Inconsistent results",width:"550"}),"\n",(0,i.jsx)(t.p,{children:"By clicking on the job name, detailed test information becomes accessible. In this case, the test started failing on August 16."}),"\n",(0,i.jsx)("img",{src:(0,r.A)("/img/insights/test-details-failures.png"),alt:"Test details"}),"\n",(0,i.jsx)(t.p,{children:"To focus on the day the test started failing, click the August 16 bar in the chart. Scrolling through the list of test results, it becomes evident that the test functioned correctly until 5:22 PM, after which it consistently failed."}),"\n",(0,i.jsx)("img",{src:(0,r.A)("/img/insights/failure-details.png"),alt:"Test details showing when the test starts failing",width:"300"}),"\n",(0,i.jsx)(t.p,{children:"This data allows for an investigation into changes made to the test at that specific time, potentially contributing to these failures."})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);