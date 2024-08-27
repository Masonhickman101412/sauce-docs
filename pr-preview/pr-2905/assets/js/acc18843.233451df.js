"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[40036],{32344:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453),r=t(86025);const o={id:"environments",title:"Creating Environments for Tests",sidebar_label:"Environments",description:"Gain a wide range of options to mix and match your test settings with our latest Environments features."},a=void 0,l={id:"api-testing/environments",title:"Creating Environments for Tests",description:"Gain a wide range of options to mix and match your test settings with our latest Environments features.",source:"@site/docs/api-testing/environments.md",sourceDirName:"api-testing",slug:"/api-testing/environments",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/environments",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/environments.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691161395e3,frontMatter:{id:"environments",title:"Creating Environments for Tests",sidebar_label:"Environments",description:"Gain a wide range of options to mix and match your test settings with our latest Environments features."},sidebar:"docs",previous:{title:"Variables, Snippets, Files",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/vault"},next:{title:"Variables and Environment Overrides",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/variables-environment-overrides"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Creating Environments",id:"creating-environments",level:2},{value:"From the Environments",id:"from-the-environments",level:3},{value:"From a Project",id:"from-a-project",level:3},{value:"Using Environments",id:"using-environments",level:2},{value:"no environment",id:"no-environment",level:3},{value:"More Information",id:"more-information",level:2}];function h(n){const e={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Our Environments feature provides you with a range of options to mix and match your Test settings."}),"\n",(0,i.jsx)(e.p,{children:"If properly set up, any API Testing test can be run against any environment. This can be achieved by turning the URL and any other part into variables that can be overwritten using the environments. This allows you, for example, to set the default location as input and override those amounts with the environments feature without actually changing the Test."}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Environments"})," section lets you change anything, not just environments. You can run the Test against a certain environment, using a different API key and data source."]}),"\n",(0,i.jsx)(e.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["An existing API Testing Project and Test. For details on how to create them, see ",(0,i.jsx)(e.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Recommended: review ",(0,i.jsx)(e.a,{href:"/api-testing/vault/",children:"Creating Reusable Variables and Snippets with the Vault"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"creating-environments",children:"Creating Environments"}),"\n",(0,i.jsx)(e.p,{children:"Once you have a variable, you can override it if needed using the Environment feature."}),"\n",(0,i.jsx)(e.p,{children:"There are multiple ways to create and access Test environments:"}),"\n",(0,i.jsx)(e.h3,{id:"from-the-environments",children:"From the Environments"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["From within a Project, go to the ",(0,i.jsx)(e.strong,{children:"Environments"})," section.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/accessEnvironmentRebrand.png"),alt:"access environment",width:"300"})]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Create Environment"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Enter a name for your environment, then click ",(0,i.jsx)(e.strong,{children:"Save"})," when finished.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/createEnvironment.png"),alt:"create environment",width:"300"})]}),"\n",(0,i.jsxs)(e.li,{children:["From here, you can:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Add variable(s) manually by clicking ",(0,i.jsx)(e.strong,{children:"New Entry"})," > Enter ",(0,i.jsx)(e.strong,{children:"Key"})," and ",(0,i.jsx)(e.strong,{children:"Value"})," pairs > ",(0,i.jsx)(e.strong,{children:"Confirm"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/manualEntry.png"),alt:"create environment",width:"500"})]}),"\n",(0,i.jsxs)(e.li,{children:["Import an existing environment by clicking ",(0,i.jsx)(e.strong,{children:"Import"})," > ",(0,i.jsx)(e.strong,{children:"Choose File"})," (accepted file types are Postman, .json, .csv).",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/importEnv.png"),alt:"create environment",width:"500"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"The resulting environment (along with its defined variables) will now appear in each of your Tests as an option in the environment dropdown."}),"\n",(0,i.jsx)(e.h3,{id:"from-a-project",children:"From a Project"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["From within a Project, go to any of the following sections: ",(0,i.jsx)(e.strong,{children:"Tests"}),", ",(0,i.jsx)(e.strong,{children:"Compose"}),", ",(0,i.jsx)(e.strong,{children:"HTTP Client"}),", or ",(0,i.jsx)(e.strong,{children:"Load Test"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Environments"})," dropdown list (defaults to ",(0,i.jsx)(e.strong,{children:"No environment"}),")."]}),"\n",(0,i.jsxs)(e.li,{children:["Select ",(0,i.jsx)(e.strong,{children:"Add item"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Enter a name for your environment, then click ",(0,i.jsx)(e.strong,{children:"Confirm"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"Create variable"}),", enter ",(0,i.jsx)(e.strong,{children:"Key"})," and ",(0,i.jsx)(e.strong,{children:"Value"})," pairs, then click ",(0,i.jsx)(e.strong,{children:"Confirm"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["When you're finished adding variables, click the ",(0,i.jsx)(e.strong,{children:"Cross"})," icon.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/closeEditor.png"),alt:"create environment",width:"500"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"This new environment will be selected by default in the dropdown."}),"\n",(0,i.jsx)(e.h2,{id:"using-environments",children:"Using Environments"}),"\n",(0,i.jsx)(e.p,{children:"Once you've created an environment and added your variables, you can run your Test against that environment."}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["From within a Project, go to any of the following sections: ",(0,i.jsx)(e.strong,{children:"Tests"}),", ",(0,i.jsx)(e.strong,{children:"Compose"}),", ",(0,i.jsx)(e.strong,{children:"HTTP Client"}),", or ",(0,i.jsx)(e.strong,{children:"Load Test"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Environments"})," drodropdown list down (defaults to ",(0,i.jsx)(e.strong,{children:"No environment"}),"), then select the name of the environment you want to use.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/selectEnv.png"),alt:"result in tests",width:"300"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"By activating an environment here, you will be able to hit a different variable (key/value pair) in your current session without actually changing your Test."}),"\n",(0,i.jsx)(e.h3,{id:"no-environment",children:"no environment"}),"\n",(0,i.jsxs)(e.p,{children:["If ",(0,i.jsx)(e.strong,{children:"None"})," (",(0,i.jsx)(e.strong,{children:"no environment"}),") is selected, the Test will run using the values written as inputs in the test and the variables saved in the ",(0,i.jsx)(e.strong,{children:"Vault"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,r.A)("img/api-testing/noEnv.png"),alt:"result in tests",width:"270"})]}),"\n",(0,i.jsx)(e.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/api-testing/use-cases/using-environments/",children:"Using Environments"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/api-testing/use-cases/vault-variable/",children:"Save a Variable in Vault"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/api-testing/schedule-test/",children:"Schedule a Test"})}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);