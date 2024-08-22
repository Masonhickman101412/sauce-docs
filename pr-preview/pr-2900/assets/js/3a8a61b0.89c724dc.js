"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89803],{94190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453),r=t(86025);const s={id:"twilio",title:"Connectors: Twilio",sidebar_label:"Twilio",keywords:["api-testing","integrations","twilio","connectors"]},c=void 0,a={id:"api-testing/on-prem/integrations/connectors/twilio",title:"Connectors: Twilio",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/twilio.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/twilio",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/integrations/connectors/twilio",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/twilio.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"twilio",title:"Connectors: Twilio",sidebar_label:"Twilio",keywords:["api-testing","integrations","twilio","connectors"]},sidebar:"apif",previous:{title:"StatusPage",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/integrations/connectors/statuspage"},next:{title:"xMatters",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/integrations/connectors/xmatters"}},l={},d=[{value:"Connector Setup",id:"connector-setup",level:2},{value:"Step 1: Create an Alert Group",id:"step-1-create-an-alert-group",level:3},{value:"Step2: Configure the Connector",id:"step2-configure-the-connector",level:3},{value:"Step 3: Set Up Alerts",id:"step-3-set-up-alerts",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:"With the connection to Twilio you can send text and call alerts to your team. Send critical information on the test failure as well as a link to the test report from the failed test."}),"\n",(0,o.jsx)(n.h2,{id:"connector-setup",children:"Connector Setup"}),"\n",(0,o.jsx)(n.p,{children:"Below is a quick guide to setting up and using the Twilio connector."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,o.jsx)(n.h3,{id:"step-1-create-an-alert-group",children:"Step 1: Create an Alert Group"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to settings page by clicking on the gear icon in the upper right-hand corner","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/01/Cogwheel-1.png"),alt:"CogWheel"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Alert Groups"})," on the left-hand nav bar:","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/01/AlertGroup.png"),alt:"AlertGroup.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Create a new group or select an existing alert group","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/twilio_alertgroup.png"),alt:"twilio_alertgroup.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add a new connector by selecting ** + Connector to this group**","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/twilio_newconnector.png"),alt:"twilio_newconnector.png"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step2-configure-the-connector",children:"Step2: Configure the Connector"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Choose the ",(0,o.jsx)(n.strong,{children:"Twilio"})," connector from the dropdown menu"]}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/twilio_connector.png"),alt:"twilio_connector.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The connector configuration page now appears"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/twilio_configconnector.png"),alt:"twilio_configconnector.png"}),"\n",(0,o.jsx)(n.p,{children:"Configure the connector with the following params:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"credential"}),"s: the api credentials for Twilio. Please use the format: ",(0,o.jsx)(n.code,{children:"AccountSID:AuthToken"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"from"}),": this is the number you own in Twilio where the messages and calls will originate from. Please use the format: ",(0,o.jsx)(n.code,{children:'"+(country_code)#######" i.e. +15555555555'}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/twilio_creds.png"),alt:"twilio_creds.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"to"}),": this the number you would like to receive the messages and calls. Please use the format: ",(0,o.jsx)(n.code,{children:'"+(country_code)#######" i.e. +15555555555'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"step-3-set-up-alerts",children:"Step 3: Set Up Alerts"}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["Go into project settings for a project you would like Twilio alerts set up for","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/01/Settings.png"),alt:"Settings"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Add the alert group that contains your Twilio connector to this project","\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-12.14.54-PM.png"),alt:"screenshot"}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);