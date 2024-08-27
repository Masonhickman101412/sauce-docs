"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52790],{48989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=n(74848),o=n(28453),s=n(86025);const r={id:"bitbucket",title:"Bitbucket with APIF-Auto",sidebar_label:"Bitbucket",keywords:["cicd","atlassian","bitbucket"]},a=void 0,c={id:"api-testing/on-prem/ci/bitbucket",title:"Bitbucket with APIF-Auto",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/bitbucket.md",sourceDirName:"api-testing/on-prem/ci",slug:"/api-testing/on-prem/ci/bitbucket",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/ci/bitbucket",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/bitbucket.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"bitbucket",title:"Bitbucket with APIF-Auto",sidebar_label:"Bitbucket",keywords:["cicd","atlassian","bitbucket"]},sidebar:"apif",previous:{title:"Bamboo",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/ci/connecting-with-bamboo"},next:{title:"GitLab",permalink:"/sauce-docs/pr-preview/pr-2905/api-testing/on-prem/ci/gitlab"}},l={},u=[{value:"Example Script",id:"example-script",level:2},{value:"Explanation",id:"explanation",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.p,{children:"APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a Bitbucket workflow."}),"\n",(0,i.jsx)(t.h2,{id:"example-script",children:"Example Script"}),"\n",(0,i.jsxs)(t.p,{children:["The pipeline script below serves as a template for creating a stage in your Bitbucket Pipeline for testing your APIs with API Fortress. If you\u2019d like to take a look at the documentation for APIF-Auto, click ",(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/apif-auto",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": It\u2019s important to note that this is an ",(0,i.jsx)(t.strong,{children:"example"})," of a Bitbucket Pipeline. Experienced users are free to configure their workflow as best suits their needs."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"image: python:3.7.3\n\npipelines:\ndefault:\n- step:\n  caches:\n  - pip\n  script: # Modify the commands below to build your repository.\n  - pip install -r apif-auto-master/requirements.txt\n  - python apif-auto-master/apif-run.py run-all security -S -f junit -o test-results/junit.xml\n"})}),"\n",(0,i.jsx)(t.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsx)(t.p,{children:"First it's worth mentioning that in this example we have the APIF-Auto files in our Bitbucket repository. Let\u2019s break down what\u2019s happening in the script above:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First, we are defining the Docker image for python. We will need this to execute the APIF-Auto python scripts."}),"\n",(0,i.jsx)(t.li,{children:'Next, we are setting up the Bitbucket pipeline steps. We are cacheing "pip" so we don\'t need to load it every build.'}),"\n",(0,i.jsxs)(t.li,{children:['In the "script" section we can see a couple of commands being executed:',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'First is the installing the "requirements.txt" using pip, this will install all the packages defined in the file that are needed to run APIF-Auto.'}),"\n",(0,i.jsxs)(t.li,{children:["Next we are executing the APIF-Auto tool for running tests. In this example we are executing ",(0,i.jsx)(t.strong,{children:"all"}),' tests within the project "security" and outputting the results in JUnit to a folder in the repository named "test-results", this is one of the acceptable folder names that Bitbucket will automatically parse for test reports.']}),"\n",(0,i.jsx)(t.li,{children:'It is worth mentioning that Bitbucket will automatically parse the ".xml" to display the results in your pipeline.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example output:"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/06/Screen-Shot-2020-06-10-at-9.22.57-AM.png"),alt:"BitBucket Output"}),"\n",(0,i.jsx)(t.p,{children:"By using the above workflow, we have a modular method of running API Fortress tests in authenticated mode in our Bitbucket pipeline."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);