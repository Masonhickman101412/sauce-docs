"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99687],{12847:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var e=i(74848),t=i(28453),o=i(86025);const a={id:"configuring-sso-in-pingone",title:"Configuring SSO in PingOne",sidebar_label:"Configuring PingOne"},r=void 0,c={id:"basics/sso/configuring-sso-in-pingone",title:"Configuring SSO in PingOne",description:"Enterprise Plans only",source:"@site/docs/basics/sso/configuring-sso-in-pingone.md",sourceDirName:"basics/sso",slug:"/basics/sso/configuring-sso-in-pingone",permalink:"/sauce-docs/pr-preview/pr-2911/basics/sso/configuring-sso-in-pingone",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/configuring-sso-in-pingone.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"configuring-sso-in-pingone",title:"Configuring SSO in PingOne",sidebar_label:"Configuring PingOne"},sidebar:"docs",previous:{title:"Configuring OneLogin",permalink:"/sauce-docs/pr-preview/pr-2911/basics/sso/configuring-sso-in-onelogin"},next:{title:"Logging In via SSO",permalink:"/sauce-docs/pr-preview/pr-2911/basics/sso/logging-in-via-sso"}},l={},d=[];function g(n){const s={a:"a",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,e.jsx)(s.p,{children:"Complete the following steps to set up SAML SSO integration between PingOne and Sauce Labs:"}),"\n",(0,e.jsxs)(s.ol,{children:["\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Log in to ",(0,e.jsx)(s.strong,{children:"PingOne"})," administrator panel."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["In the ",(0,e.jsx)(s.strong,{children:"Connections"})," menu click ",(0,e.jsx)(s.strong,{children:"Application Catalog"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/apps.png"),alt:"Menu Application Catalog",width:"200"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Enter ",(0,e.jsx)(s.strong,{children:"Sauce Labs"})," in the search box and click ",(0,e.jsx)(s.strong,{children:"+"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/search-and-add-app.png"),alt:"Search and add app",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Change the name of the application or leave the default value and click ",(0,e.jsx)(s.strong,{children:"Next"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/change-app-name.png"),alt:"Change App Name",width:"600"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Make sure that the ",(0,e.jsx)(s.strong,{children:"SAML_SUBJECT"})," is set to ",(0,e.jsx)(s.strong,{children:"Email address"}),". Sauce Labs Service Provider requires ",(0,e.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"valid email addresses"})," during SAML SSO authentication. Click ",(0,e.jsx)(s.strong,{children:"Next"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/nameid.png"),alt:"NameID",width:"600"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Optionally, choose which groups should have access to Sauce Labs via this SAML application and click ",(0,e.jsx)(s.strong,{children:"Save"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/assign-groups-save-app.png"),alt:"NameID",width:"600"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Click the arrow to expand ",(0,e.jsx)(s.strong,{children:"Connection details"}),". And next click ",(0,e.jsx)(s.strong,{children:"Download metadata"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,o.Ay)("img/basics/sso/idp-config/pingone/download-metadata.png"),alt:"Download Metadata",width:"600"}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Use the metadata file from the previous step and set up the SSO integration at Sauce Labs in ",(0,e.jsx)(s.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"Organization Management Panel"}),"."]}),"\n"]}),"\n",(0,e.jsxs)(s.li,{children:["\n",(0,e.jsxs)(s.p,{children:["Test the integration using the ",(0,e.jsx)(s.a,{href:"/basics/sso/logging-in-via-sso",children:"IdP-initiated and the SP-initiated login"}),"."]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,t.R)(),...n.components};return s?(0,e.jsx)(s,{...n,children:(0,e.jsx)(g,{...n})}):g(n)}},28453:(n,s,i)=>{i.d(s,{R:()=>a,x:()=>r});var e=i(96540);const t={},o=e.createContext(t);function a(n){const s=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function r(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),e.createElement(o.Provider,{value:s},n.children)}}}]);