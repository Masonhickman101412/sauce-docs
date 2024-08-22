"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[84026],{32607:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var t=s(74848),l=s(28453);const i={id:"set-variable",title:"saucectl apit vault set-variable",sidebar_label:"set-variable"},c=void 0,n={id:"dev/cli/saucectl/apit/vault/set-variable",title:"saucectl apit vault set-variable",description:"Sets/updates a variable in a project's vault.",source:"@site/docs/dev/cli/saucectl/apit/vault/set-variable.md",sourceDirName:"dev/cli/saucectl/apit/vault",slug:"/dev/cli/saucectl/apit/vault/set-variable",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/saucectl/apit/vault/set-variable",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/apit/vault/set-variable.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1708475403e3,frontMatter:{id:"set-variable",title:"saucectl apit vault set-variable",sidebar_label:"set-variable"},sidebar:"dev",previous:{title:"get-variable",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/saucectl/apit/vault/get-variable"},next:{title:"get-snippet",permalink:"/sauce-docs/pr-preview/pr-2900/dev/cli/saucectl/apit/vault/get-snippet"}},r={},d=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--project</span>',id:"--project",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const a={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Sets/updates a variable in a project's vault."}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:["If a ",(0,t.jsx)(a.code,{children:"variable_name"})," is already in the vault, it is updated with the new one; otherwise, it adds a new variable."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'saucectl apit vault set-variable "variable_name" "variable_value" [flags]\n'})}),"\n",(0,t.jsx)(a.h2,{id:"available-options",children:"Available Options"}),"\n",(0,t.jsxs)("table",{id:"table-cli",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{width:"30%",children:"Flag"}),(0,t.jsx)("th",{width:"10%",children:"Shorthand"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"t-cli",children:(0,t.jsx)("a",{href:"#--project",children:"--project"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"t-cli",children:"None"})}),(0,t.jsx)("td",{children:"Select a vault by project name."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"t-cli",children:(0,t.jsx)("a",{href:"#--region",children:"--region"})})}),(0,t.jsx)("td",{children:(0,t.jsx)("span",{className:"t-cli",children:"-r"})}),(0,t.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,t.jsx)("code",{children:"us-west-1"})," (default) and ",(0,t.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"options-details",children:"Options Details"}),"\n",(0,t.jsx)(a.h3,{id:"--project",children:(0,t.jsx)("span",{className:"cli",children:"--project"})}),"\n",(0,t.jsxs)("div",{className:"cli-desc",children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Specifies the project by its name using ",(0,t.jsx)(a.code,{children:"--project"}),", or omits ",(0,t.jsx)(a.code,{children:"--project"})," to select from a list of available projects.",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'saucectl apit vault set-variable "variable_name" "variable_value" --project "project_name"\n'})})]}),"\n",(0,t.jsx)(a.h3,{id:"--region",children:(0,t.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,t.jsxs)("div",{className:"cli-desc",children:[(0,t.jsx)("p",{children:(0,t.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,t.jsx)(a.code,{children:"us-west-1"})," (default) and ",(0,t.jsx)(a.code,{children:"eu-central-1"}),".",(0,t.jsx)(a.strong,{children:"Shorthand:"})," ",(0,t.jsx)(a.code,{children:"-r <region>"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'saucectl apit vault set-variable "variable_name" "variable_value" --region us-west-1\n'})})]})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>n});var t=s(96540);const l={},i=t.createContext(l);function c(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);