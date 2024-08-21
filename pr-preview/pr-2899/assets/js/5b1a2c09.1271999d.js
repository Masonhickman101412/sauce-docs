"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8248],{56933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(74848),i=t(28453);const s={id:"environments-vault-and-overrides-magic",title:"Environments, Vault, and Variable Overrides",sidebar_label:"Environments, Vault, and Variable Overrides",description:"Gain a wide range of options to mix and match your test settings with our latest \u201cEnvironments\u201d features."},o=void 0,r={id:"api-testing/on-prem/quick-start/environments-vault-and-overrides-magic",title:"Environments, Vault, and Variable Overrides",description:"Gain a wide range of options to mix and match your test settings with our latest \u201cEnvironments\u201d features.",source:"@site/docs/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/environments-vault-and-overrides-magic.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"environments-vault-and-overrides-magic",title:"Environments, Vault, and Variable Overrides",sidebar_label:"Environments, Vault, and Variable Overrides",description:"Gain a wide range of options to mix and match your test settings with our latest \u201cEnvironments\u201d features."},sidebar:"apif",previous:{title:"Using Variables",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start/flexible-variables-for-flexible-environments"},next:{title:"Set Up Connectors",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/quick-start/setup-connectors"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Suggested Usage",id:"suggested-usage",level:2},{value:"Double evaluation",id:"double-evaluation",level:2},{value:"Environments loading",id:"environments-loading",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Gain a wide range of options to mix and match your test settings with our latest \u201cEnvironments\u201d features. Explore our variable containers from the lowest to the highest priority:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Vault:"})," Each project has a vault where variables and snippets are contained. Each vault is global to the project and its variables are injected during test execution."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Globals / Input set"}),": They belong to each test and contain the variables that are needed by the test to perform its duties. Since these variables can be overridden to hit different environments, we generally suggest considering these variables as containers of the default scenario. If the variable has been previously declared in the vault, globals/input sets will win over the Vault."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Overrides"}),": When an overridden variable is declared (using the API, the Scheduler or the Jenkins plugin) its value will be injected into the test when it's executed. If the variable has already been declared in the vault or the globals/input set, it will be rewritten with the new value."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Environments and Pre-sets:"})," They are collections of overrides. You can save an environment with a name and reuse it when running a test."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"SET"})," commands"]}),": The last item of the chain, the ",(0,a.jsx)(n.code,{children:"SET"})," commands within a test will introduce a runtime variable. If a variable with that name has already been declared, it will be overwritten."]}),"\n",(0,a.jsx)(n.h2,{id:"suggested-usage",children:"Suggested Usage"}),"\n",(0,a.jsx)(n.p,{children:"Tests should be as self-contained as possible and should host as much information as possible to perform its operations (with the help of the Vault). In other words, Vault + Globals / Input set should always generate a complete variable scope. Therefore, running a test without any environment selection should at least lead to no syntax or runtime errors."}),"\n",(0,a.jsxs)(n.p,{children:["Environments and overrides should be used to ",(0,a.jsx)(n.strong,{children:"change"})," some of the values or introduce contextual values to hit a staging server instead of the production server, or run the test against a special product ID."]}),"\n",(0,a.jsx)(n.h2,{id:"double-evaluation",children:"Double evaluation"}),"\n",(0,a.jsx)(n.p,{children:"All variable containers have a \u201cdouble evaluation\u201d capability, meaning that a variable declaration can actually reference another variable."}),"\n",(0,a.jsx)(n.p,{children:"By doing so, you can decide to store the actual data in the variable container that best suits your approach, and then reference it."}),"\n",(0,a.jsx)(n.p,{children:"In the following example, we are storing the actual domains in the Vault, deciding a default in the Globals, and overriding in the environment:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"VAULT:\nproduction_domain: example.com\nstaging_domain: staging_example.com\n\nGLOBALS:\ndomain: ${production_domain}\n\nENVIRONMENTS Name: staging\ndomain: ${staging_domain}\n"})}),"\n",(0,a.jsx)(n.p,{children:"If run without environment selection or overrides, the test will hit the production domain. If run with the staging environment, the test will hit the staging domain. The Environments will not know the actual domain, therefore the actual data management will happen within the Vault."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Known Issue"}),": The double evaluation will not work on query params. As a workaround, in the test before performing the call, introduce a ",(0,a.jsx)(n.code,{children:"SET"})," component to resolve the variable as in:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"<set var=\u201dapikey\u201d value=\u201d${apikey}\u201d/>\n"})}),"\n",(0,a.jsx)(n.h2,{id:"environments-loading",children:"Environments loading"}),"\n",(0,a.jsx)(n.p,{children:"If you begin using environments heavily, you may soon realize that the integration using the APIF API (and any CI/CD plugin) may become a bit \u201cunfriendly,\u201d as lots of data will need to be copied around."}),"\n",(0,a.jsx)(n.p,{children:"For this reason, we have introduced a special override variable that allows you to ask API Fortress to load a specific environment when invoking a test using the API."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"apif_env"})," variable, passed as an override, will cause the system to load a specific environment."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Example Variable"',children:"apif_env: staging\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will load the ",(0,a.jsx)(n.code,{children:"staging"})," environment and all its override variables."]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"As you become acquainted with the platform, you may be tempted to use all of these features at once before you\u2019ve achieved sufficient expertise. We should warn you that you may not be prepared for the overall complexity that may occur as a consequence, especially if you double-reference variables."})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);