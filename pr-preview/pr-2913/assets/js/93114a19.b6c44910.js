"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89218],{10896:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(74848),s=o(28453),a=o(86025);const i={id:"using-databases",title:"Bloodhound: Using Databases",sidebar_label:"Using Databases"},r=void 0,l={id:"api-testing/on-prem/bloodhound/using-databases",title:"Bloodhound: Using Databases",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/using-databases.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/using-databases",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/bloodhound/using-databases",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/using-databases.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724864962e3,frontMatter:{id:"using-databases",title:"Bloodhound: Using Databases",sidebar_label:"Using Databases"},sidebar:"apif",previous:{title:"Forward Calls to APIF Logger",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger"},next:{title:"APIF-Auto",permalink:"/sauce-docs/pr-preview/pr-2913/api-testing/on-prem/ci/apif-auto"}},d={},c=[];function u(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsxs)(t.p,{children:["In the following walkthrough we\u2019ll show you how to use Bloodhound to turn a database into a data API. In this example, we will use the Bloodhound Template found on ",(0,n.jsx)(t.a,{href:"https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_databases",children:"Github"})," and use Postgres as the database. The template will deploy a Postgres database to experiment with, but you will obviously want to connect it to your database once you understand the mechanics."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"First, we deploy the entire package found in the templates folder. This will deploy Bloodhound as well as the databases."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo docker-compose up -d\n"})}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/api-fortress/2020/07/Screenshot1-Deploy-Bloodhound.png"),alt:"Deploy Bloodhound"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Next, to allow you to experiment with our demo setup, we will point our browser to \u201c",(0,n.jsx)(t.a,{href:"http://localhost:8081",children:"http://localhost:8081"}),"\u201d and use the following settings:",(0,n.jsx)(t.br,{}),"\n","System: PostgreSQL",(0,n.jsx)(t.br,{}),"\n","Server: postgres",(0,n.jsx)(t.br,{}),"\n","Username: apipulse",(0,n.jsx)(t.br,{}),"\n","Password: jk5112",(0,n.jsx)(t.br,{}),"\n","Database: apipulse",(0,n.jsx)(t.br,{}),"\n","And load the test data in the UI."]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/api-fortress/2020/07/Screenshot2-Import-Data.png"),alt:"Import Data"}),"\n",(0,n.jsxs)(t.p,{children:["To do this we will click on \u201cImport\u201d and load the \u201cpostgres.sql\u201d file and click on \u201cExecute\u201d (",(0,n.jsx)(t.strong,{children:"NOTE:"})," This will throw an error but it has no effect)"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Now that we have our database populated with test data, we can query it using the API \u201clocalhost:8080/postgres.\u201d Let\u2019s try a \u201cselect\u201d query. We will execute the following curl command \u201ccurl -H 'content-type",":text","/plain' -d 'select * from orders' localhost:8080/postgres\u201c"]}),"\n",(0,n.jsx)("img",{src:(0,a.Ay)("img/api-fortress/2020/07/Screenshot3-API-Response.png"),alt:"API Response"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"All of the other query operations are also supported via the API call localhost:8080/postgres, which can be the first step in your data-driven multi"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"-step API test. Use this API in your automated API testing suite."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["As mentioned in the beginning, once you understand the mechanics you can configure the module to connect to your jdbc databases by modifying the flow yaml. You can learn more about the module and it\u2019s configurations ",(0,n.jsx)(t.a,{href:"https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_databases",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Visit the ",(0,n.jsx)(t.a,{href:"https://github.com/apifortress/Bloodhound/wiki",children:"Bloodhound Wiki"})," to learn about configuration options."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);