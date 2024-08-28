"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80285],{68416:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(74848),t=o(28453);const i={id:"disable-ssl-validation",title:"Disable SSL Validation",sidebar_label:"Disable SSL Validation",keywords:["ssl-validation","how-to","disable"]},a=void 0,r={id:"api-testing/on-prem/how-to/disable-ssl-validation",title:"Disable SSL Validation",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/disable-ssl-validation.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/disable-ssl-validation",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/disable-ssl-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/disable-ssl-validation.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"disable-ssl-validation",title:"Disable SSL Validation",sidebar_label:"Disable SSL Validation",keywords:["ssl-validation","how-to","disable"]},sidebar:"apif",previous:{title:"Different Ways to Compose a Request Body",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/different-ways-to-compose-a-request-body"},next:{title:"Dynamic Dates",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/dynamic-dates"}},l={},d=[{value:"SaaS / Cloud Customers",id:"saas--cloud-customers",level:2},{value:"Self Hosted / On-Premises Customers",id:"self-hosted--on-premises-customers",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components},{Head:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"saas--cloud-customers",children:"SaaS / Cloud Customers"}),"\n",(0,n.jsx)(s.p,{children:'If you are using the API Fortress SaaS (cloud) platform you can use the downloader named "US East No SSL Check".'}),"\n",(0,n.jsx)(s.p,{children:"This downloader ignores invalid and not matching certificates."}),"\n",(0,n.jsx)(s.h2,{id:"self-hosted--on-premises-customers",children:"Self Hosted / On-Premises Customers"}),"\n",(0,n.jsx)(s.p,{children:"To disable the SSL validation in the downloader do the following steps:"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE"}),": We will assume you're using a docker-compose based deployment, if you are not please reach out to ",(0,n.jsx)(s.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"}),".)"]}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"First access the machine that runs the downloader service (likely the one that runs the rest of API Fortress as well)"}),"\n",(0,n.jsxs)(s.li,{children:["Then navigate to the ",(0,n.jsx)(s.code,{children:"downloader/"})," directory"]}),"\n",(0,n.jsx)(s.li,{children:"Stop the downloader by issuing:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo docker-compose stop\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Next edit the ",(0,n.jsx)(s.code,{children:"docker-compose.yml"})," file"]}),"\n",(0,n.jsxs)(s.li,{children:["In the ",(0,n.jsx)(s.code,{children:"environment"})," section, add the following entry:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"disable_ssl_validation: 'true'\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsx)(s.li,{children:"Save and exit the file"}),"\n",(0,n.jsx)(s.li,{children:"Now restart the downloader by issuing:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo docker-compose up -d\n"})}),"\n",(0,n.jsx)(s.p,{children:"This downloader will now ignore invalid and not matching certificates."})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>a,x:()=>r});var n=o(96540);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);