"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[32249],{92955:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(74848),i=t(28453),s=t(86025);const r={id:"3-leg-oauth",title:"Automating 3-Legged OAuth",sidebar_label:"Automating 3-Legged OAuth",keywords:["3-legged-oauth","automation","api-testing","how-to"]},a=void 0,l={id:"api-testing/on-prem/how-to/3-leg-oauth",title:"Automating 3-Legged OAuth",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/3-leg-oauth.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/3-leg-oauth",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/3-leg-oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/3-leg-oauth.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,sidebarPosition:3,frontMatter:{id:"3-leg-oauth",title:"Automating 3-Legged OAuth",sidebar_label:"Automating 3-Legged OAuth",keywords:["3-legged-oauth","automation","api-testing","how-to"]},sidebar:"apif",previous:{title:"Assertions for Metrics / Performance",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/assertions-for-metrics-performance"},next:{title:"Build an Integration Test (Multistep Test)",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/integration-testing"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Example Video",id:"example-video",level:3},{value:"<code>POST</code> Body Output",id:"post-body-output",level:2}];function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(o.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsx)(o.p,{children:"Does your API require 3-leg authentication? With the help of a small helper container you can achieve automation of 3-leg using the API Fortress platform."}),"\n",(0,n.jsx)(o.p,{children:"Thanks to the helper, your local machine can help in the automation of your tests logging in using 3-leg auths such as Facebook, Twitter, and Google."}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2019/07/3LegOAuth_Vertical_v5.png"),alt:"3 Legged OAuth"}),"\n",(0,n.jsx)(o.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["First let's deploy the helper container, which can be found at the below link: ",(0,n.jsx)(o.a,{href:"https://github.com/apifortress/3loa",children:"https://github.com/apifortress/3loa"})]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'Once you have the 3loa folder downloaded, navigate to that folder within a terminal window. Then run the following command to start the 3loa container: "sudo docker-compose up -d"'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["The 3-leg helper is now live and can be access from API Fortress using the following URL: ",(0,n.jsx)(o.code,{children:"http://3loa.apifortress:3000/oauth"})]}),"\n",(0,n.jsx)(o.h3,{id:"example-video",children:"Example Video"}),"\n",(0,n.jsx)(o.p,{children:"Now that we have that up and running, watch the short video below to learn how to use this in API Fortress to automate your 3-leg OAuth:"}),"\n",(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/mcghU8KRSfI",width:"560",height:"315",frameborder:"0",allowfullscreen:"allowfullscreen"}),"\n",(0,n.jsx)(o.p,{children:"In the example used in the video above, we show how to call the 3loa API with details to execute the authentication and return the access token. Below are some callouts from that example:"}),"\n",(0,n.jsxs)(o.h2,{id:"post-body-output",children:[(0,n.jsx)(o.code,{children:"POST"})," Body Output"]}),"\n",(0,n.jsx)(o.p,{children:"The post body of the API call will need the following details:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"username"'}),": ",(0,n.jsx)(o.code,{children:"username"})," for logging in"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"password"'}),": ",(0,n.jsx)(o.code,{children:"password"})," for logging in"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"usernameField"'}),": ",(0,n.jsx)(o.code,{children:"x-path"})," selector for username field"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"passwordField"'}),": ",(0,n.jsx)(o.code,{children:"x-path"})," selector for password field"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"loginButton"'}),": ",(0,n.jsx)(o.code,{children:"x-path"})," selector for the login button"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"authorizeButton"'}),": ",(0,n.jsx)(o.code,{children:"x-path"})," selector for the authorize button"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"authorizationURL"'}),": ",(0,n.jsx)(o.code,{children:"URL"})," to authorize site"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:'"tokenURL"'}),": ",(0,n.jsx)(o.code,{children:"URL"})," used to get access token"]}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"NOTE"}),": The ",(0,n.jsx)(o.code,{children:"x-path"})," selectors will need to match the site used for authorization."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Please note that this is an open source tool if your authorization flow differs from the example provided, you can download the source code of the tool and modify it to achieve the flow needed for your specific flow."})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var n=t(96540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);