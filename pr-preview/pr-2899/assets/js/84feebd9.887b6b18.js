"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42648],{93574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(74848),i=t(28453),s=t(86025);const o={id:"coverage",title:"Measuring Your Test Coverage",sidebar_label:"Coverage",description:"See a breakdown of the browser and device variations covered by your tests."},a=void 0,d={id:"insights/coverage",title:"Measuring Your Test Coverage",description:"See a breakdown of the browser and device variations covered by your tests.",source:"@site/docs/insights/coverage.md",sourceDirName:"insights",slug:"/insights/coverage",permalink:"/sauce-docs/pr-preview/pr-2899/insights/coverage",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/coverage.md",tags:[],version:"current",lastUpdatedBy:"Max",lastUpdatedAt:1724172881e3,frontMatter:{id:"coverage",title:"Measuring Your Test Coverage",sidebar_label:"Coverage",description:"See a breakdown of the browser and device variations covered by your tests."},sidebar:"docs",previous:{title:"Usage",permalink:"/sauce-docs/pr-preview/pr-2899/insights/usage-report"},next:{title:"Failure Analysis",permalink:"/sauce-docs/pr-preview/pr-2899/insights/failure-analysis"}},c={},l=[{value:"Accessing the Coverage Reports",id:"accessing-the-coverage-reports",level:2},{value:"Sorting the Data",id:"sorting-the-data",level:2},{value:"Downloading Your Report",id:"downloading-your-report",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The Coverage report allows you to view and download the breakdown of browsers and mobile devices the tests across their organization have run against. Having insight into your coverage data helps companies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"See at a glance whether their testing is in sync with the environments in which it is most often accessed"}),"\n",(0,r.jsx)(n.li,{children:"Evaluate how evenly tests are being distributing across browsers and devices"}),"\n",(0,r.jsx)(n.li,{children:"Design their test strategy to keep up with newly released browser and device versions"}),"\n",(0,r.jsx)(n.li,{children:"Utilize their concurrency to spread testing across test environments for greater efficiency and comprehensiveness"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-coverage-reports",children:"Accessing the Coverage Reports"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Insights"})," tab to expand its submenu."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Coverage"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Specify the type of coverage you wish to view by selecting the ",(0,r.jsx)(n.strong,{children:"Devices"}),", ",(0,r.jsx)(n.strong,{children:"Browsers"})," or ",(0,r.jsx)(n.strong,{children:"OS"})," tab."]}),"\n",(0,r.jsxs)(n.li,{children:["If you choose ",(0,r.jsx)(n.strong,{children:"Devices"})," or ",(0,r.jsx)(n.strong,{children:"OS"}),", specify wheter you wish to see coverage data for:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Virtual Cloud"})," tests: desktop web-apps, mobile emulators and simulators."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Real Devices"})," tests: physical devices located in our data centers and connected to our platform."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Apply the ",(0,r.jsx)(n.strong,{children:"Owner"})," and ",(0,r.jsx)(n.strong,{children:"Time Period"})," filters to show data for a particular user's tests and/or a specific time period."]}),"\n",(0,r.jsxs)(n.li,{children:["If you choose ",(0,r.jsx)(n.strong,{children:"Real Devices"}),", apply the ",(0,r.jsx)(n.strong,{children:"Device Group"})," filter to show data only for ",(0,r.jsx)(n.strong,{children:"Public"})," or ",(0,r.jsx)(n.strong,{children:"Private"})," devices."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Once you have completed your selections, the report shows a breakdown of all tests that have been run for the specified user during the specified time period, providing the exact number and total duration of tests run in each environment with a bar graph for easy visualization."}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/insights/coverage-screen.png"),alt:"Coverage Report",width:"900"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Browsers and devices that were not tested during the indicated period are omitted from the report."})}),"\n",(0,r.jsx)(n.h2,{id:"sorting-the-data",children:"Sorting the Data"}),"\n",(0,r.jsx)(n.p,{children:"By default, coverage is shown in descending order based on the number of tests run. You can modify the sort order by clicking on any of the column headings and then toggling the ascending/descending icon."}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/insights/sorting.png"),alt:"Edit Sort Order",width:"600"}),"\n",(0,r.jsxs)(n.p,{children:["As the image shows, sorting by the ",(0,r.jsx)(n.strong,{children:"Name"})," column sorts the data alphabetically by the name of the browser, device or OS, allowing you to quickly discern how much coverage a particular environment has in your testing."]}),"\n",(0,r.jsx)(n.h2,{id:"downloading-your-report",children:"Downloading Your Report"}),"\n",(0,r.jsxs)(n.p,{children:["You can download your report locally as a CSV file by clicking the ",(0,r.jsx)(n.strong,{children:"Export CSV"})," link."]}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/insights/export-coverage.png"),alt:"Export to CSV File",width:"400"}),"\n",(0,r.jsx)(n.p,{children:"The resulting file includes the data as it is filtered (by environment, owner, and time period) in the default order, regardless of any sorting you have specified in the UI."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="Sample CSV Output"',children:",name,sessions,total_duration\n1,iPhone SE (2nd generation) Simulator,6640,149:56:54\n2,iPhone XS Max Simulator,6630,163:13:55\n3,iPhone XS Simulator,6618,155:56:57\n4,Android GoogleAPI Emulator,753,9:49:41\n5,iPad Simulator,112,2:00:02\n6,Android GoogleApi Emulator,16,0:16:10\n7,Samsung Galaxy S8 HD GoogleAPI Emulator,7,0:06:13\n8,iPad mini (5th generation) Simulator,6,0:10:38\n9,Google Pixel C GoogleAPI Emulator,6,0:06:24\n10,iPhone 12 Simulator,2,0:01:48\n11,iPad Pro (12.9-inch) (3rd generation),1,0:02:00\n12,Pixel3GoogleAPI,1,0:03:07\n13,Android Emulator,1,0:22:30\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);