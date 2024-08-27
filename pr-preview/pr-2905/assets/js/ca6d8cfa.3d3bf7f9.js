"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[97825],{30749:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(74848),s=n(28453),i=n(86025);const o={id:"migration-global-teams",title:"Migration to Global Teams",sidebar_label:"Migration to Global Teams"},r=void 0,c={id:"basics/migration-global-teams",title:"Migration to Global Teams",description:"Enterprise Plans only",source:"@site/docs/basics/migration-global-teams.md",sourceDirName:"basics",slug:"/basics/migration-global-teams",permalink:"/sauce-docs/pr-preview/pr-2905/basics/migration-global-teams",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/migration-global-teams.md",tags:[],version:"current",lastUpdatedBy:"Adam Dabrowski",lastUpdatedAt:1712661506e3,frontMatter:{id:"migration-global-teams",title:"Migration to Global Teams",sidebar_label:"Migration to Global Teams"}},l={},d=[{value:"Example organization",id:"example-organization",level:2},{value:"Example from user&#39;s perspective:",id:"example-from-users-perspective",level:3}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,t.jsx)(a.p,{children:"In order to enable the feature of navigation between teams for our customers we performed a migration of teams"}),"\n",(0,t.jsx)(a.p,{children:"Before the migration, teams were not replicated across regions. Team assignment for users was set per region as well."}),"\n",(0,t.jsx)(a.p,{children:"After the migration, each team has the same properties across all regions."}),"\n",(0,t.jsx)(a.admonition,{title:"Note:",type:"note",children:(0,t.jsxs)(a.p,{children:["For teams that had the same name across regions, a prefix ",(0,t.jsx)(a.code,{children:"Former {REGION}"})," has been added to the duplicated team during the migration."]})}),"\n",(0,t.jsxs)(a.p,{children:["Team name can be changed by users with ",(0,t.jsx)(a.code,{children:"Organization Admin"})," role in ",(0,t.jsx)(a.code,{children:"TEAMS"})," section of ",(0,t.jsx)(a.code,{children:"Organization Management"})," panel."]}),"\n",(0,t.jsxs)(a.p,{children:["Team assignment for users can be changed in ",(0,t.jsx)(a.code,{children:"Organization Management"})," panel. More info in ",(0,t.jsx)(a.a,{href:"https://docs.saucelabs.com/basics/acct-team-mgmt/switching-active-team/",children:"(Switching Active Team)"})]}),"\n",(0,t.jsx)(a.p,{children:"Users are assigned to the teams they were previously assigned to in each region. Using team navigation, they can switch their active team as they see fit."}),"\n",(0,t.jsx)(a.h2,{id:"example-organization",children:"Example organization"}),"\n",(0,t.jsxs)(a.p,{children:['Organization "ACME Inc." has teams "ACME Developers" and "ACME QA" in ',(0,t.jsx)(a.code,{children:"us-west"})," region. In region ",(0,t.jsx)(a.code,{children:"eu-central"}),' the organization has teams "ACME Developers" and "ACME Mobile Apps". After the migration, there will be teams "ACME Developers", "Former eu-central ACME Developers" and "ACME Mobile Apps" in all regions.']}),"\n",(0,t.jsx)(a.h3,{id:"example-from-users-perspective",children:"Example from user's perspective:"}),"\n",(0,t.jsxs)(a.p,{children:['User "Tiffany" is assigned to "ACME Developers" in ',(0,t.jsx)(a.code,{children:"us-west"}),' and "ACME Mobile Apps" in ',(0,t.jsx)(a.code,{children:"eu-central"}),'. After the migration "Tiffany" is assigned to "ACME Developers" and "ACME Mobile Apps" in all regions. In order to switch between teams, user has access to team navigation dropdown in the SauceLabs UI panel.']}),"\n",(0,t.jsx)("img",{src:(0,i.A)("img/team-mgmt/active-team-dropdown.png"),alt:"Active team dropdown in Navigation bar",width:"400"})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const s={},i=t.createContext(s);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);