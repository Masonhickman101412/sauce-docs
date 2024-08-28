"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80049],{50215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(74848),s=n(28453),r=n(86025);const i={id:"connecting-to-testrail",title:"Connecting to Testrail",sidebar_label:"Connecting to Testrail",keywords:["api","api-fortress","testrail"]},a=void 0,c={id:"api-testing/on-prem/reference/connecting-to-testrail",title:"Connecting to Testrail",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/reference/connecting-to-testrail.md",sourceDirName:"api-testing/on-prem/reference",slug:"/api-testing/on-prem/reference/connecting-to-testrail",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/reference/connecting-to-testrail",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/reference/connecting-to-testrail.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"connecting-to-testrail",title:"Connecting to Testrail",sidebar_label:"Connecting to Testrail",keywords:["api","api-fortress","testrail"]},sidebar:"apif",previous:{title:"Composer Snippets",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/reference/composer-snippets"},next:{title:"Execution Context in API Fortress",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/reference/execution-context-in-api-fortress"}},l={},p=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/testrail-apif.png"),alt:"testrail-apif.png"}),"\n",(0,o.jsx)(t.p,{children:"Test case managers are often critical to helping modern teams manage cases, plans, and runs. Communication of the test results is key, and that's why API Fortress makes it easy to integrate with many leading platforms today. TestRail is one of them."}),"\n",(0,o.jsx)(t.p,{children:"API Fortress makes it easy to automate the testing of your APIs, and to trigger those tests to run automatically on a schedule, and during a build process (eg: Jenkins). That test result data can be pushed to your TestRail instance automatically."}),"\n",(0,o.jsx)(t.p,{children:"Here is a quick guide to setup of how to set it up."}),"\n",(0,o.jsx)(t.p,{children:"First, click the gear icon in the upper right corner of any view in API Fortress, highlighted in the below image."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/2-1-1024x640.png"),alt:"2-1-1024x640.png"}),"\n",(0,o.jsx)(t.p,{children:'Next, we\'re going to click "Alerts Groups" on the left navigation bar, followed by "+ Alert Group" to create a new group, name it, and finally click the connector button.\xa0The GIF below demonstrates this procedure.'}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/AlertGroup.gif"),alt:"AlertGroup.gif"}),"\n",(0,o.jsx)(t.p,{children:'Next, we need to add the TestRail connector to the alert group. Click "+ Connector" and select TestRail in the dropdown that appears.'}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/Screen-Shot-2018-06-27-at-11.29.36-AM-1024x640.png"),alt:"screenshot"}),"\n",(0,o.jsx)(t.p,{children:"Next, we need to define the parameters that we're going to pass to the TestRail connector. Click the pencil icon to edit the parameters, and then fill out the fields in the modal."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/1-1-1024x640.png"),alt:"1-1-1024x640.png"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Username:"})," Your TestRail Username."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Password:"})," The password for the TestRail account you're using."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Project_Id:"})," The ID (an integer) of the TestRail project you'd like the API Fortress results to populate."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Domain:"})," The subdomain of your TestRail instance. It's the part of the URL that comes between ",(0,o.jsx)(t.code,{children:"https://"})," and ",(0,o.jsx)(t.code,{children:".testrail.io"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'Next, we need to add the alert group to the project. Go to the projects view and click the "settings" icon on the project that you\'d like to use the connector for.'}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/4a-1024x640.png"),alt:"4a-1024x640.png"}),"\n",(0,o.jsx)(t.p,{children:"In the dropdown that appears, if you begin typing the name of the alert group in the bottom field, it will populate automatically. Select it and click the green check to complete the connection process."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/Screen-Shot-2018-06-27-at-10.57.38-AM-1024x640.png"),alt:"screenshot"}),"\n",(0,o.jsxs)(t.p,{children:["Your project in API Fortress is now connected with TestRail! It's important to note that\xa0",(0,o.jsx)(t.strong,{children:"only test results that are generated automatically, either through the scheduler or\xa0an API call, will trigger the connector."})," Manually executed tests (Run Test button for example) will not trigger the connector."]}),"\n",(0,o.jsx)(t.p,{children:"As soon as a test is triggered automatically, we will see the pass/fail result appear in the project of our choice in TestRail, with a link to the test report in API Fortress. Everything you need to know about your API test\xa0results in your TestRail instance."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("img/api-fortress/2018/06/5a-1024x640.png"),alt:"screenshot"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);