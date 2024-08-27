"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1874],{93736:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(74848),s=i(28453),a=i(86025);const r={id:"flexible-variables-for-flexible-environments",title:"Using Variables for Environment Flexibility",sidebar_label:"Using Variables",description:"In API Fortress, you do not have to be concerned with organizing variables in a hierarchy from global to local."},o=void 0,l={id:"api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments",title:"Using Variables for Environment Flexibility",description:"In API Fortress, you do not have to be concerned with organizing variables in a hierarchy from global to local.",source:"@site/docs/api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"flexible-variables-for-flexible-environments",title:"Using Variables for Environment Flexibility",sidebar_label:"Using Variables",description:"In API Fortress, you do not have to be concerned with organizing variables in a hierarchy from global to local."},sidebar:"apif",previous:{title:"Adding a User",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/quick-start/adding-a-user"},next:{title:"Environments, Vault, and Variable Overrides",permalink:"/sauce-docs/pr-preview/pr-2906/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic"}},c={},d=[{value:"Using the Vault",id:"using-the-vault",level:2},{value:"Using the Environments",id:"using-the-environments",level:2},{value:"In Request Bodies",id:"in-request-bodies",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(n.p,{children:"In API Fortress, you do not have to be concerned with organizing variables in a hierarchy from global to local\u2026 why?"}),"\n",(0,t.jsx)(n.p,{children:"Almost any string can be hardcoded or referenced as a variable in API Fortress. Hardcoding is fine as long as you\u2019re building simple tests, however, it is advisable to parametrize some items when:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The number of tests is increasing"}),"\n",(0,t.jsx)(n.li,{children:"The complexity of tests is increasing"}),"\n",(0,t.jsx)(n.li,{children:"The number of tested environments is increasing"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Most of the parametrization you will likely do relates to the HTTP request itself."}),"\n",(0,t.jsx)(n.h2,{id:"using-the-vault",children:"Using the Vault"}),"\n",(0,t.jsx)(n.p,{children:"While the following variable is perfectly valid, it may become extremely painful to update tens or hundreds of tests if the domain changes."}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/harcoded.png"),alt:"Hardcoded Variables"}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, you may use the API Fortress Vault to store domain names to solve this problem. Simply add a \u201cdomain\u201d variable in your vault as follows:"}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/domain.png"),alt:"Domain Variables"}),"\n",(0,t.jsxs)(n.p,{children:["And then edit the ",(0,t.jsx)(n.code,{children:"GET"})," like this:"]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/parametrized.png"),alt:"Parametrized Variables"}),"\n",(0,t.jsx)(n.p,{children:"In this way, you can eliminate duplicate tasks by simply editing the vault variable to instantly update all tests."}),"\n",(0,t.jsx)(n.h2,{id:"using-the-environments",children:"Using the Environments"}),"\n",(0,t.jsx)(n.p,{children:"Once a domain is parametrized, you may override a variable, if needed."}),"\n",(0,t.jsx)(n.p,{children:"By activating a preset in the environments section, you will be able to hit a different domain in the current session without actually changing the test as in the following:"}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/env2.png"),alt:"ENV 2"}),"\n",(0,t.jsx)(n.p,{children:"The same selection can be performed while creating a schedule to create specific runs hitting specific environments."}),"\n",(0,t.jsx)(n.h2,{id:"in-request-bodies",children:"In Request Bodies"}),"\n",(0,t.jsx)(n.p,{children:'Variables are not only bound to URLs. Request bodies can also be handled like "templates" when needed, incorporating variables as in:'}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/body.png"),alt:"BODY"}),"\n",(0,t.jsx)(n.p,{children:"And Basically Anywhere"}),"\n",(0,t.jsx)(n.p,{children:"Reference variables almost anywhere that you need. Consider the following example assertion:"}),"\n",(0,t.jsx)("img",{src:(0,a.A)("img/api-fortress/2017/09/exp.png"),alt:"EXP"}),"\n",(0,t.jsx)(n.p,{children:"Yes, we're using variables as expected values."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"API Fortress provides the flexibility and freedom to combine the use of global, local, and hard coded variables as you want. In addition, API Fortress also provides helpful hints as you work with variables."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Fill the vault with data that is project-centric: Domains, protocols, API keys. They are all fine. We discourage you from introducing test-specific variables because it would produce an overhead of information that would go unused most of the time."}),"\n",(0,t.jsx)(n.li,{children:"Fill the globals/input set with test-specific variables, such as paths, IDs, dates, and serial numbers, etc."}),"\n",(0,t.jsx)(n.li,{children:"Make sure that the \u201cvault + globals/input set\u201d add up to a complete variable scope for the test. In other words, the test should be able to run without further information."}),"\n",(0,t.jsx)(n.li,{children:"Use the environments to change the values of the variable scope generated by the vault+global/input sets."}),"\n",(0,t.jsx)(n.li,{children:"Don\u2019t overdo things. Parametrize stuff that can actually change, and leave everything else as static strings. Variables are\u2026 well, variable, so an excessive and unnecessary use of variables leads to uncertainty and hard-to-track behaviors."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);