"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91213],{93940:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(74848),n=i(28453),a=i(86025);const r={id:"interactions",title:"Interactions",sidebar_label:"Interactions"},l=void 0,o={id:"mobile-apps/features/mobile-app-diagnostics/interactions",title:"Interactions",description:"Interactions is a functionality that allows you to record every test session\u2019s action and check how it interacted with the app\u2019s UI. By reviewing the taps you can check if certain interface elements failed to load or crashed.",source:"@site/docs/mobile-apps/features/mobile-app-diagnostics/interactions.md",sourceDirName:"mobile-apps/features/mobile-app-diagnostics",slug:"/mobile-apps/features/mobile-app-diagnostics/interactions",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/features/mobile-app-diagnostics/interactions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/mobile-app-diagnostics/interactions.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"interactions",title:"Interactions",sidebar_label:"Interactions"},sidebar:"docs",previous:{title:"Device Vitals",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/features/mobile-app-diagnostics/device-vitals"},next:{title:"Explore View Tree",permalink:"/sauce-docs/pr-preview/pr-2913/mobile-apps/features/mobile-app-diagnostics/view-tree"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Interactions for Real Devices",id:"using-interactions-for-real-devices",level:2},{value:"Interaction Metrics",id:"interaction-metrics",level:2},{value:"Accessing Interactions Metrics",id:"accessing-interactions-metrics",level:2},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Interactions is a functionality that allows you to record every test session\u2019s action and check how it interacted with the app\u2019s UI. By reviewing the taps you can check if certain interface elements failed to load or crashed."}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"A native Android, iOS, or iPadOS mobile app"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"using-interactions-for-real-devices",children:"Using Interactions for Real Devices"}),"\n",(0,s.jsx)(t.p,{children:"By default, the Interactions feature is enabled if the instrumentation feature is enabled.\nTo enable device instrumentation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["On Sauce Labs, click ",(0,s.jsx)(t.strong,{children:"Live"})," > ",(0,s.jsx)(t.strong,{children:"Mobile App"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/mobile-apps/app-storage/",children:"Upload your mobile app to Sauce Labs"})," through the UI or CLI."]}),"\n",(0,s.jsxs)(t.li,{children:["After you\u2019ve uploaded your app, return to the ",(0,s.jsx)(t.strong,{children:"Live"})," > ",(0,s.jsx)(t.strong,{children:"Mobile App"})," page, hover your mouse over your app, then select ",(0,s.jsx)(t.strong,{children:"Settings"}),". ",(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/networkcapturescr.png"),alt:"Mobile app settings navigation",width:"600"})]}),"\n",(0,s.jsxs)(t.li,{children:["Under ",(0,s.jsx)(t.strong,{children:"Default Settings"}),", toggle ",(0,s.jsx)(t.strong,{children:"Instrumentation"})," on.","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/Device-Vitals-screenshot-1.png"),alt:"Mobile app settings navigation",width:"600"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Now you can start your live or automated testing session. Interactions will be captured and be part of your test results."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The Interactions feature works for all the automated test framework types."})}),"\n",(0,s.jsx)(t.h2,{id:"interaction-metrics",children:"Interaction Metrics"}),"\n",(0,s.jsxs)(t.p,{children:["You can use Interactions to understand what happened in your test session and improve your app's performance, stability, and more. At the top of the ",(0,s.jsx)(t.a,{href:"/test-results",children:"Test Results"})," page, you can see the data on activities that occurred during the testing session. To get more detailed information, click on the dropdown icon next to an action you want to investigate."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/interactions-screenshot-3.png"),alt:"Mobile app settings navigation",width:"800"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/interactions-screenshot-1.png"),alt:"Mobile app settings navigation",width:"800"}),"\n",(0,s.jsx)(t.p,{children:"The following table lists the available metrics:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The user-readable label for a particular activity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"viewTag"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A tag that provides additional information associated with a view."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"viewId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Identifier that defines view attributes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"className"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The class name of an element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"contentDescription"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The description of an element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"xPosition"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The horizontal position of the tap."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"yPosition"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The vertical position of the tap."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"xPath"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Used to locate an element in the XML structure of the app."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You can use the xPath value to build your Appium test quickly!"})}),"\n",(0,s.jsx)(t.h2,{id:"accessing-interactions-metrics",children:"Accessing Interactions Metrics"}),"\n",(0,s.jsxs)(t.p,{children:["You can access Interactions metrics from the ",(0,s.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live Test Results"})," or ",(0,s.jsx)(t.a,{href:"/mobile-apps/automated-testing/",children:"Automated Test Results"})," page:"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/DEvice-Vitals-screenshot-2.png"),alt:"Mobile app settings navigation",width:"200"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,a.Ay)("img/mobile-apps/Device-Vitals-screenshot-7.png"),alt:"Mobile app settings navigation",width:"200"}),"\n",(0,s.jsx)(t.p,{children:"You can also download the results using the API call below:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:" curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json\n"})}),"\n",(0,s.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Webviews and hybrid apps are not supported"})}),"\n",(0,s.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/test-results",children:"Sauce Labs Test Results"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var s=i(96540);const n={},a=s.createContext(n);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);