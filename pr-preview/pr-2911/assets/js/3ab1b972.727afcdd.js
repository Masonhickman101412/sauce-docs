"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[5340],{39798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const s={id:"gitlab",title:"GitLab CI with APIF-Auto",sidebar_label:"GitLab",keywords:["cicd","gitlab","apif-auto","yaml"]},r=void 0,a={id:"api-testing/on-prem/ci/gitlab",title:"GitLab CI with APIF-Auto",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/gitlab.md",sourceDirName:"api-testing/on-prem/ci",slug:"/api-testing/on-prem/ci/gitlab",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/gitlab.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1724858356e3,frontMatter:{id:"gitlab",title:"GitLab CI with APIF-Auto",sidebar_label:"GitLab",keywords:["cicd","gitlab","apif-auto","yaml"]},sidebar:"apif",previous:{title:"Bitbucket",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/bitbucket"},next:{title:"Using the API",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/ci/jenkins/using-the-api"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"APIF-Auto, a command line tool that supports automated API Fortress test execution is an ideal tool for executing API Fortress tests in a GitLab CI workflow."}),"\n",(0,i.jsxs)(t.p,{children:["The pipeline script below serves as a template for creating a stage in your GitLab Pipeline for testing your APIs with API Fortress. If you\u2019d like to take a look at the documentation for APIF-Auto, click ",(0,i.jsx)(t.a,{href:"/api-testing/on-prem/ci/apif-auto",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": It\u2019s important to note that this is an ",(0,i.jsx)(t.strong,{children:"example"})," of a ",(0,i.jsx)(t.code,{children:".gitlab-ci.yml"}),". Experienced GitLab CI users are free to configure their workflow as best suits their needs. Please mind the yaml formatting."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"image: 'python 3.7'\nbefore_script:\n- python --version\n- pip install -r requirements.txt\nstages:\n- API Fortress\napif:\nstage: API Fortress\nscript:\n- python directory/apif-run.py run-all ci_project -S -o output/directory\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"call APIs directly",type:"tip",children:(0,i.jsxs)(t.p,{children:["You can configure the ",(0,i.jsx)(t.code,{children:"yaml"})," file to make ",(0,i.jsx)(t.code,{children:"curl"})," calls directly to the API Fortress API to achieve the same behavior."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);